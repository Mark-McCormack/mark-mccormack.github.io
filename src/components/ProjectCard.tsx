import React, { useEffect, useId, useRef, useState } from "react";
import { Item } from "../content";

// TypeScript 4.9's DOM lib predates these methods.
type Dialog = HTMLDialogElement & { showModal(): void; close(): void };

const PLACEHOLDER = "/assets/images/placeholder.svg";
// Unsplash resizes on request; many JSON entries point at 3800px originals (~2.5MB each).
const sized = (src: string, w: number) =>
  src.includes("images.unsplash.com") ? src.replace(/([?&])w=\d+/, `$1w=${w}`) : src;

// One entry: an image card ("card") or a text row ("row"). The "Details" button's hit area covers the whole entry.
const ProjectCard: React.FC<Item & { variant?: "card" | "row"; level?: "h2" | "h3"; thumb?: boolean }> = ({
  title,
  subtitle,
  body,
  img = PLACEHOLDER,
  tags,
  url,
  year,
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
      </div>
      <button className="details" onClick={() => setOpen(true)} aria-haspopup="dialog">
        Details<span className="is-sr-only">: {title}</span>
        <i className="fas fa-arrow-right" aria-hidden="true" />
      </button>

      {open && (
        <dialog ref={dialog} className="modal is-active" aria-labelledby={id} onClose={() => setOpen(false)}>
          <div className="modal-background" onClick={close} />
          <div className="modal-card">
            <header className="modal-card-head">
              <h2 id={id} className="modal-card-title">
                {title}
              </h2>
              <button className="delete" aria-label="Close" onClick={close} />
            </header>
            <section className="modal-card-body">
              {thumb && (
                <figure className="image is-16by9 mb-4">
                  <img src={sized(img, 1200)} alt="" />
                </figure>
              )}
              {subtitle && <p className="modal-sub">{subtitle}</p>}
              {body && <p className="mb-4">{body}</p>}
              {tags && (
                <ul className="tag-list" aria-label="Tags">
                  {tags.split(",").map((t) => (
                    <li key={t}>{t.trim()}</li>
                  ))}
                </ul>
              )}
            </section>
            <footer className="modal-card-foot">
              {url && (
                <a href={url} target="_blank" rel="noopener noreferrer" className="btn-ed">
                  Visit link<span className="is-sr-only"> (opens in a new tab)</span>
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
