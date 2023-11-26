import React from "react";
import "./modal.css";

type Props = {
  title?: string;
  subtitle?: string;
  body?: string;
  img?: string;
  tags?: string;
  language?: string;
  onClose: () => void;
};

const Modal: React.FC<Props> = ({
  title = "Default Title",
  subtitle = "Default Subtitle",
  body = "Default Body",
  img = "https://bulma.io/images/placeholders/1280x960.png",
  tags = "Default Tags",
  language = "https://static-00.iconduck.com/assets.00/js-icon-2048x2048-kbwt89q3.png",
  onClose,
}) => {
  return (
    <div className="modal">
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">{title}</p>
          <button className="delete" aria-label="close" onClick={onClose}></button>
        </header>
        <section className="modal-card-body">{body}</section>
        <footer className="modal-card-foot">
          <button className="button is-success">Save changes</button>
          <button className="button" onClick={onClose}>
            Cancel
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Modal;
