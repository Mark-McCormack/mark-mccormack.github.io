// Rebuilds public/assets/json/research.json from the public ORCID record (no API key needed).
// Run with `npm run sync-papers` (Node 18+); a weekly GitHub Action runs it too (.github/workflows/sync-papers.yml).
//
// - Versions of the same paper (e.g. conference then journal) are merged into one card, newest first.
// - A card's authors line, image and tags are kept from the existing file (matched by title), so hand edits survive.
import fs from "fs";

const ORCID = "0009-0000-0281-3011";
const FILE = new URL("../public/assets/json/research.json", import.meta.url);
const API = `https://pub.orcid.org/v3.0/${ORCID}`;
const TYPES = { "journal-article": "Journal Article", "conference-paper": "Conference Paper", "book-chapter": "Book Chapter" };

const get = async (path) => {
  const res = await fetch(`${API}${path}`, { headers: { Accept: "application/json" } });
  if (!res.ok) throw new Error(`ORCID ${path}: HTTP ${res.status}`);
  return res.json();
};
const key = (title) => title.toLowerCase().replace(/[^a-z0-9]/g, "");
// ORCID credit names come as "Surname, Given" or "Given Surname"; render Scholar-style "MP McCormack".
const initials = (name) => {
  const [family, given] = name.includes(",") ? name.split(",").map((s) => s.trim()) : [name.split(" ").pop(), name.split(" ").slice(0, -1).join(" ")];
  return `${given.split(/[\s.]+/).filter(Boolean).map((g) => g[0].toUpperCase()).join("")} ${family}`.trim();
};

// Full records (contributors, venue, DOI) come from the bulk endpoint, max 100 put-codes per call.
const codes = (await get("/works")).group.flatMap((g) => g["work-summary"].map((w) => w["put-code"]));
const works = [];
for (let i = 0; i < codes.length; i += 100) {
  const { bulk } = await get(`/works/${codes.slice(i, i + 100).join(",")}`);
  works.push(...bulk.map((b) => b.work).filter(Boolean));
}

const papers = works.map((w) => {
  const doi = w["external-ids"]?.["external-id"]?.find((id) => id["external-id-type"] === "doi");
  return {
    title: w.title.title.value.trim(),
    year: Number(w["publication-date"]?.year?.value) || 0,
    venue: w["journal-title"]?.value?.trim() || "",
    type: TYPES[w.type] || "Publication",
    authors: (w.contributors?.contributor || []).map((c) => c["credit-name"]?.value).filter(Boolean).map(initials),
    url: doi ? `https://doi.org/${doi["external-id-value"]}` : w.url?.value || "",
    description: w["short-description"]?.trim() || "",
  };
});

// Group versions by title; the newest (journal ahead of conference on ties) leads the card.
const groups = new Map();
for (const p of papers.sort((a, b) => b.year - a.year || (a.type === "Journal Article" ? -1 : 1))) {
  groups.set(key(p.title), [...(groups.get(key(p.title)) || []), p]);
}

const previous = new Map();
try {
  for (const old of JSON.parse(fs.readFileSync(FILE, "utf8"))) previous.set(key(old.title), old);
} catch {}

const cards = [...groups.values()].map(([lead, ...others]) => {
  const old = previous.get(key(lead.title)) || {};
  const where = (p) => [p.type, p.venue, p.year || ""].filter(Boolean).join(", ");
  const also = others.map((p) => `Also: ${where(p)}.`);
  return {
    title: lead.title,
    subtitle: old.subtitle || lead.authors.join(", ") || "MP McCormack",
    body: [`${where(lead)}.`, lead.description, ...also].filter(Boolean).join(" "),
    // picsum.photos/1160/720 (the old default) returns a random photo on every load; seed it by title instead.
    img: old.img && !/picsum\.photos\/\d/.test(old.img) ? old.img : `https://picsum.photos/seed/${key(lead.title)}/1160/720`,
    tags: old.tags || old.keywords || lead.type,
    url: lead.url || others.find((p) => p.url)?.url || old.url || "",
  };
});

fs.writeFileSync(FILE, JSON.stringify(cards, null, 2) + "\n");
console.log(`Wrote ${cards.length} papers (${papers.length} ORCID works) to research.json`);
