import React, { useEffect, useId, useRef, useState } from "react";
import { Item } from "../content";

// TypeScript 4.9's DOM lib predates these methods.
type Dialog = HTMLDialogElement & { showModal(): void; close(): void };

const PLACEHOLDER = "/assets/images/placeholder.svg";
// Unsplash resizes on request; many JSON entries point at 3800px originals (~2.5MB each).
const sized = (src: string, w: number) =>
  src.includes("images.unsplash.com") ? src.replace(/([?&])w=\d+/, `$1w=${w}`) : src;

const ProjectCard: React.FC<Item & { icon: string }> = ({
  title,
  subtitle,
  body,
  img = PLACEHOLDER,
  tags,
  url,
  icon,
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
    <>
      <div className="card">
        <figure className="image is-4by3">
          <img src={sized(img, 600)} alt="" loading="lazy" />
        </figure>
        <div className="media">
          <figure className="media-left image is-48x48">
            <img src={icon} alt="" loading="lazy" />
          </figure>
          <div className="media-content">
            <h2 className="title is-4 clamp-2">{title}</h2>
            <p className="subtitle is-6 clamp-1">{subtitle}</p>
          </div>
        </div>
      </div>
      <button className="button card-button" onClick={() => setOpen(true)} aria-haspopup="dialog">
        Open for Info!<span className="is-sr-only">: {title}</span>
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
              <figure className="image is-4by3 mb-4">
                <img src={sized(img, 1200)} alt="" />
              </figure>
              <p className="subtitle is-5">
                <strong>{subtitle}</strong>
              </p>
              {body && <p className="mb-4">{body}</p>}
              <span className="tag is-info is-light">
                <strong>Tags:</strong>&nbsp;{tags}
              </span>
            </section>
            <footer className="modal-card-foot">
              {url && (
                <a href={url} target="_blank" rel="noopener noreferrer" className="button card-button">
                  Visit Link<span className="is-sr-only"> (opens in a new tab)</span>
                </a>
              )}
              <button className="button" onClick={close}>
                Close
              </button>
            </footer>
          </div>
        </dialog>
      )}
    </>
  );
};

export default ProjectCard;
