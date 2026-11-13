# Personal Portfolio

React + Bulma site, served by GitHub Pages from `docs/`.

## Editing content

- **Cards** (projects, talks, blogs…): edit the JSON files in `public/assets/json/`. Each entry is
  `{ "title", "subtitle", "body", "img", "tags", "url"?, "group"?, "year"?, "hidden"? }`.
  On Academia, Skills and Projects, `group` picks the heading an entry appears under (the headings and their order
  are set in `src/content.tsx`); `year` is shown above the title; `"hidden": true` keeps an entry in the file but off the site.
- **Page headers** (title, tagline, intro text, header image, section colour, list or card layout): `src/content.tsx`.
  Adding an entry there creates the route and the navbar link (the menu follows the order of `pages`);
  list a path in `hidden` to keep a page offline (Blogs and Business currently are).
- **Research papers** are generated from your public ORCID record by `npm run sync-papers` (Node 18+), and a
  GitHub Action (`.github/workflows/sync-papers.yml`) does it every Monday, committing straight to `main`.
  Add new papers on ORCID; to change a paper's image, tags or author line, edit `research.json` (the sync keeps those).
- **Home page**: `src/pages/Home.tsx` (the highlight cards are plain arrays at the top).
- **Styles**: everything lives in `src/styles.css` (desktop first, then tablet ≤1024px and phone ≤768px overrides).
  Design: academic editorial with colour-coded sections (fonts: Fraunces, Inter, JetBrains Mono).
  The previous bordered-tile design is kept on the `design-v1-backup` branch / `design-v1` tag.

## Scripts

- `npm start` – dev server (Node 16+)
- `npm run build` – production build into `docs/` (commit it to publish)
- `npm run sync-papers` – refresh `public/assets/json/research.json` from ORCID
