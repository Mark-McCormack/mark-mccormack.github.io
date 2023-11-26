import React from "react";
import "./footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer" style={{ padding: "0.5rem" }}>
      <div className="columns">
        <div className="column" style={{ backgroundColor: "#f14668", outline: "5px solid white" }}>
          <h2 className="title is-6" style={{ textAlign: "left", color: "#fff" }}>
            About
          </h2>
          <ul style={{ textAlign: "left", color: "#fff" }}>
            <li>
              <a href="#" style={{ color: "#fff" }}>
                Mission
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "#fff" }}>
                Vision
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "#fff" }}>
                Values
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "#fff" }}>
                Team
              </a>
            </li>
          </ul>
        </div>
        <div className="column" style={{ backgroundColor: "#ffe08a", outline: "5px solid white" }}>
          <h1 className="title is-6" style={{ textAlign: "left", color: "#000" }}>
            Contact
          </h1>
          <ul style={{ textAlign: "left", color: "#000" }}>
            <li>
              <a href="#" style={{ color: "#000" }}>
                Email
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "#000" }}>
                Phone
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "#000" }}>
                Address
              </a>
            </li>
          </ul>
        </div>
        <div className="column" style={{ backgroundColor: "#48c78e", outline: "5px solid white" }}>
          <h2 className="title is-6" style={{ textAlign: "left", color: "#fff" }}>
            Projects
          </h2>
          <ul style={{ textAlign: "left", color: "#fff" }}>
            <li>
              <a href="#" style={{ color: "#fff" }}>
                Ongoing
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "#fff" }}>
                Completed
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "#fff" }}>
                Archived
              </a>
            </li>
          </ul>
        </div>
        <div className="column" style={{ backgroundColor: "#3e8ed0", outline: "5px solid white" }}>
          <h2 className="title is-6" style={{ textAlign: "left", color: "#fff" }}>
            Student Projects
          </h2>
          <ul style={{ textAlign: "left", color: "#fff" }}>
            <li>
              <a href="#" style={{ color: "#fff" }}>
                Current
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "#fff" }}>
                Past
              </a>
            </li>
          </ul>
        </div>
        <div className="column" style={{ backgroundColor: "#6a4c93", outline: "5px solid white" }}>
          <h2 className="title is-6" style={{ textAlign: "left", color: "#fff" }}>
            Teaching Portfolio
          </h2>
          <ul style={{ textAlign: "left", color: "#fff" }}>
            <li>
              <a href="#" style={{ color: "#fff" }}>
                Philosophy
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "#fff" }}>
                Experience
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "#fff" }}>
                Lesson Plans
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "#fff" }}>
                Assessment
              </a>
            </li>
          </ul>
        </div>
        <div className="column" style={{ backgroundColor: "#48c78e", outline: "5px solid white" }}>
          <h2 className="title is-6" style={{ textAlign: "left", color: "#fff" }}>
            Research
          </h2>
          <ul style={{ textAlign: "left", color: "#fff" }}>
            <li>
              <a href="#" style={{ color: "#fff" }}>
                Publications
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "#fff" }}>
                Conferences
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "#fff" }}>
                Projects
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
