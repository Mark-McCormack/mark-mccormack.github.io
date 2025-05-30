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
        <section className="modal-card-body">
          {" "}
          <div style={{ padding: "1rem" }}>
            <div id="modalData">
              <p className="title">{title}</p>
              <div className="subtitle">Conferences, Journals, Funding and More!</div>
              <p className="content" style={{ textAlign: "justify" }}>
                {body}
              </p>
            </div>
          </div>
          <div id="modalImage" style={{ overflow: "hidden", padding: "1rem", height: "100%", borderRadius: "1rem" }}>
            <img
              alt=""
              id="imageAcademia"
              src={
                "https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=4140&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              style={{ maxWidth: "100%", height: "auto", borderRadius: "1rem" }}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Modal;
