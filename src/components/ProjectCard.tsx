import React, { useEffect, useId, useRef, useState } from "react";
import { Item } from "../content";

// TypeScript 4.9's DOM lib predates these methods.
type Dialog = HTMLDialogElement & { showModal(): void; close(): void };

const PLACEHOLDER = "/assets/images/placeholder.svg";
// Unsplash resizes on request; many JSON entries point at 3800px originals (~2.5MB each).
const sized = (src: string, w: number) =>
  src.includes("images.unsplash.com") ? src.replace(/([?&])w=\d+/, `$1w=${w}`) : src;

// Entry text: each line is a paragraph; consecutive lines starting "- " become a bullet list.
const Body = ({ text }: { text: string }) => {
  const blocks: (string | string[])[] = [];
  for (const line of text.split("\n").filter(Boolean)) {
    const last = blocks[blocks.length - 1];
    if (line.startsWith("- ")) Array.isArray(last) ? last.push(line.slice(2)) : blocks.push([line.slice(2)]);
    else blocks.push(line);
  }
  return (
    <div className="sheet-text">
      {blocks.map((b, i) =>
        Array.isArray(b) ? (
          <ul key={i}>
            {b.map((li) => (
              <li key={li}>{li}</li>
            ))}
          </ul>
        ) : (
          <p key={i}>{b}</p>
        )
      )}
    </div>
  );
};

// One entry: an image card ("card") or a text row ("row"). The "Details" button's hit area covers the whole entry.
const ProjectCard: React.FC<Item & { variant?: "card" | "row"; level?: "h2" | "h3"; thumb?: boolean }> = ({
  title,
  subtitle,
  body,
  img = PLACEHOLDER,
  tags,
  url,
  year,
  done,
  variant = "card",
  level: Heading = "h2",
  thumb = true,
}) => {
  const [open, setOpen] = useState(false);
  const dialog = useRef<Dialog>(null);
  const id = useId();

  // Native <dialog> gives focus trapping, Escape-to-close and focus return for free.
  useEffect(() => {
    if (open) dialog.current?.showModal();
  }, [open]);
  const close = () => dialog.current?.close();

  return (
    <article className={`entry ${variant} ${thumb ? "" : "no-thumb"}`}>
      {thumb && (
        <figure className="thumb">
          <img src={sized(img, variant === "card" ? 600 : 200)} alt="" loading="lazy" />
        </figure>
      )}
      <div className="entry-text">
        {year && <span className="entry-year">{year}</span>}
        <Heading className="entry-title">{title}</Heading>
        {subtitle && <p className="entry-sub">{subtitle}</p>}
        {done && (
          <span className="done-badge">
            <i className="fas fa-circle-check" aria-hidden="true" /> Completed
          </span>
        )}
      </div>
      <button className="details" onClick={() => setOpen(true)} aria-haspopup="dialog">
        Details<span className="is-sr-only">: {title}</span>
        <i className="fas fa-arrow-right" aria-hidden="true" />
      </button>

      {open && (
        // Clicking the backdrop (the dialog element itself, outside .sheet-inner) closes it.
        <dialog
          ref={dialog}
          className="sheet"
          aria-labelledby={id}
          onClose={() => setOpen(false)}
          onClick={(e) => e.target === e.currentTarget && close()}
        >
          <div className="sheet-inner">
            <button className="sheet-close" aria-label="Close" onClick={close}>
              <i className="fas fa-xmark" aria-hidden="true" />
            </button>
            <div className="sheet-scroll">
              {thumb && (
                <figure className="sheet-image">
                  <img src={sized(img, 1200)} alt="" />
                </figure>
              )}
              <div className="sheet-content">
                {year && <span className="entry-year">{year}</span>}
                <h2 id={id} className="sheet-title">
                  {title}
                </h2>
                {subtitle && <p className="sheet-sub">{subtitle}</p>}
                {done && (
                  <span className="done-badge">
                    <i className="fas fa-circle-check" aria-hidden="true" /> Completed
                  </span>
                )}
                {body && <Body text={body} />}
                {tags && (
                  <ul className="tag-list" aria-label="Tags">
                    {tags.split(",").map((t) => (
                      <li key={t}>{t.trim()}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
            <footer className="sheet-foot">
              {url && (
                <a href={url} target="_blank" rel="noopener noreferrer" className="btn-ed">
                  Visit link<span className="is-sr-only"> (opens in a new tab)</span>
                  <i className="fas fa-arrow-up-right-from-square" aria-hidden="true" />
                </a>
              )}
              <button className="btn-ed ghost" onClick={close}>
                Close
              </button>
            </footer>
          </div>
        </dialog>
      )}
    </article>
  );
};

export default ProjectCard;
