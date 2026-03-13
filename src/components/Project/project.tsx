import React, { useState } from "react";
import "./project.css";
// If you have a custom modal component to import, you can replace the inline modal below with it.
// import Modal from "../Modal/modal";

type Props = {
  title?: string;
  subtitle?: string;
  body?: string;
  img?: string;
  tags?: string;
  language?: string;
  color?: string;
  updateState?: any;
  url?: string;
};

const Card: React.FC<Props> = ({
  title = "Default Title",
  subtitle = "Default Subtitle",
  body = "Default Body",
  img = "https://bulma.io/images/placeholders/1280x960.png",
  tags = "Default Tags",
  language = "https://static-00.iconduck.com/assets.00/js-icon-2048x2048-kbwt89q3.png",
  color = "#fff",
  url = "https://google.com",
  updateState,
}) => {
  // State to manage modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <>
      {/* Main Card */}
      <div style={{ maxHeight: "100%", display: "flex", flexDirection: "column", overflow: "hidden" }}>
        <div className="card" style={{ backgroundColor: color, flex: 1 }}>
          <div className="card-image">
            <figure className="image is-4by3">
              <img alt={title} src={img} />
            </figure>
          </div>
          <div className="card-content" style={{ padding: "0px", paddingTop: "1rem", flex: 1 }}>
            <div className="media">
              <div className="media-left">
                <figure className="image is-48x48">
                  <img alt="language icon" src={language} />
                </figure>
              </div>
              <div className="media-content">
                <p className="title is-4" style={{ overflow: "hidden", textOverflow: "ellipsis" }}>
                  {title}
                </p>
                <p className="subtitle is-6">{subtitle}</p>
              </div>
            </div>

            <div className="content" style={{ overflow: "hidden", textAlign: "left", flex: 1, padding: "0 1rem" }}>
              {body.length > 100 ? (
                <>
                  {body.slice(0, 100)}...
                  <br />
                  <br />
                </>
              ) : (
                body
              )}
            </div>
          </div>
        </div>

        {/* Button triggers the modal instead of navigating immediately */}
        <button
          onClick={toggleModal}
          className="button is-danger projectButton"
          style={{ flex: "none", width: "100%", alignSelf: "center", backgroundColor: "#35B2FC" }}
        >
          Open for Info!
        </button>
      </div>

      {/* Modal Overlay */}
      <div className={`modal ${isModalOpen ? "is-active" : ""}`}>
        <div className="modal-background" onClick={toggleModal}></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">{title}</p>
            <button className="delete" aria-label="close" onClick={toggleModal}></button>
          </header>
          <section className="modal-card-body" style={{ textAlign: "left" }}>
            <figure className="image is-4by3" style={{ marginBottom: "1rem" }}>
              <img alt={title} src={img} />
            </figure>
            <p className="subtitle is-5">
              <strong>{subtitle}</strong>
            </p>
            <p style={{ marginBottom: "1rem" }}>{body}</p>
            <div className="tags">
              <span className="tag is-info is-light">
                <strong>Tags:</strong>&nbsp;{tags}
              </span>
            </div>
          </section>
          <footer className="modal-card-foot" style={{ justifyContent: "flex-end" }}>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="button is-link"
              style={{ backgroundColor: "#35B2FC" }}
            >
              Visit Link
            </a>
            <button className="button" onClick={toggleModal}>
              Close
            </button>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Card;
