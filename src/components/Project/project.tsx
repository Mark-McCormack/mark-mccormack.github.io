import React from "react";
import "./project.css";
import "../Modal/modal";

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
  return (
    <div style={{ maxHeight: "100%", display: "flex", flexDirection: "column", overflow: "hidden" }}>
      <div className="card" style={{ backgroundColor: color, flex: 1 }}>
        <div className="card-image">
          <figure className="image is-4by3">
            <img alt="" src={img} />
          </figure>
        </div>
        <div className="card-content" style={{ padding: "0px", paddingTop: "1rem", flex: 1 }}>
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <img alt="" src={language} />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4" style={{ overflow: "hidden", textOverflow: "ellipsis" }}>
                {title}
              </p>
              <p className="subtitle is-6">{subtitle}</p>
            </div>
          </div>

          <div className="content" style={{ overflow: "hidden", textAlign: "left", flex: 1 }}>
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
      <a href={url} target="_blank" rel="noopener noreferrer">
        <button
          className="button is-danger projectButton"
          style={{ flex: "none", width: "100%", alignSelf: "center", backgroundColor: "#35B2FC" }}
        >
          Open for Info!
        </button>
      </a>
    </div>
  );
};

export default Card;
