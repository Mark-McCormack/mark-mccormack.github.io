import React from "react";
import "./contact.css";
import Navbar from "../../components/Navbar/navbar";
import photo from "../../assets/images/projects.jpg";

const Conferences: React.FC = () => {
  return (
    <div>
      <div className="contactContainer">
        <div className="contactMenu">
          <Navbar />
        </div>
        <div className="contactImage" style={{ backgroundColor: "#fff", paddingTop: "3rem" }}>
          <div id="portfolioHeaderText">
            {" "}
            <div id="portfolioHeaderCard">
              <p className="title is-1">Academia</p>
              <div className="subtitle is-3">Lorem Ipsum</div>
            </div>
          </div>
          <div id="portfolioHeaderImage" style={{ overflow: "hidden", height: "100%" }}>
            <img id="image" src={photo} style={{ maxWidth: "100%", height: "auto" }} />
          </div>
        </div>

        <div className="contactForm" style={{ padding: "3rem" }}>
          <p className="title is-1">Academia</p>
          <div className="subtitle is-3">Lorem Ipsum</div>
          <form className="form">
            <div className="flex">
              <label>
                <input placeholder="First Name" type="text" className="input" />
              </label>

              <label>
                <input placeholder="Last Name" type="text" className="input" />
              </label>
            </div>

            <label>
              <input placeholder="Email" type="email" className="input" />
            </label>

            <label>
              <input type="tel" placeholder="Telephone Number" className="input" />
            </label>
            <label>
              <textarea rows={3} placeholder="Email Content" className="input01"></textarea>
            </label>

            <button className="fancy">
              <span className="top-key"></span>
              <span className="text">submit</span>
              <span className="bottom-key-1"></span>
              <span className="bottom-key-2"></span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Conferences;
