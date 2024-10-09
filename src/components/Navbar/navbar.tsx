import React, { useState } from "react";
import "./navbar.css";
import photo from "../../assets/images/graduation-hat.png";

const Navbar: React.FC = () => {
  const aspectRatio = 25 / 37.5; // Specify the desired aspect ratio
  const defaultWidth = 25;
  const defaultHeight = 37.5;
  const [isHovered, setHovered] = useState(false);

  const [isActive, setIsActive] = useState(false);

  const toggleDropdown = () => {
    setIsActive(!isActive);
  };

  const width = isHovered ? defaultWidth * 1.2 : defaultWidth; // Adjust multiplier as needed
  const height = isHovered ? width / aspectRatio : defaultHeight;

  return (
    <nav
      className="navbar"
      role="navigation"
      aria-label="main navigation"
      style={{ height: "100%", overflow: "visible" }}
    >
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img alt="" src={photo} style={{ height: "50px", width: "50px", maxHeight: "50px" }} />
        </a>

        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item" href="/">
            Home
          </a>
          <a className="navbar-item" href="/aboutme">
            About Me
          </a>

          <a className="navbar-item" href="/#/teaching-statement">
            Teaching Statement
          </a>

          <a className="navbar-item" href="/#/blogs">
            Blogs
          </a>
          <a className="navbar-item" href="/#/business">
            Business
          </a>

          <a className="navbar-item" href="/#/projects">
            Projects
          </a>

          <a className="navbar-item" href="/#/research">
            Research
          </a>

          <a className="navbar-item" href="/#/students">
            Students
          </a>

          <a className="navbar-item" href="/#/teaching">
            Teaching
          </a>

          <a className="navbar-item" href="/#/academia">
            Academia
          </a>

          <a className="navbar-item" href="/#/skills">
            Skills
          </a>
        </div>

        <div className="navbar-end">
          <div className="navbar-item boxOne">
            <svg width="25" height="37.5" xmlns="http://www.w3.org/2000/svg">
              <rect width={25} height={37.5} stroke="black" strokeWidth="5px" fill="transparent" />
            </svg>
          </div>
          <div className="navbar-item boxTwo">
            <svg width="25" height="37.5" xmlns="http://www.w3.org/2000/svg">
              <rect width="100%" height="100%" stroke="#ff82aa" strokeWidth="5px" fill="transparent" />
            </svg>
          </div>
          <div className="navbar-item boxThree">
            <svg width="25" height="37.5" xmlns="http://www.w3.org/2000/svg">
              <rect width="100%" height="100%" stroke="#ed1b24" strokeWidth="5px" fill="transparent" />
            </svg>
          </div>
          <div className="navbar-item boxFour">
            <svg width="25" height="37.5" xmlns="http://www.w3.org/2000/svg">
              <rect width="100%" height="100%" stroke="#effe01" strokeWidth="5px" fill="transparent" />
            </svg>
          </div>
          <div className="navbar-item boxFive">
            <svg width="25" height="37.5" xmlns="http://www.w3.org/2000/svg">
              <rect width="100%" height="100%" stroke="#00158a" strokeWidth="5px" fill="transparent" />
            </svg>
          </div>
          <div className="navbar-item">
            <div className={`dropdown has-background-info-light ${isActive ? "is-active" : ""}`}>
              <div className="dropdown-trigger">
                <button
                  className="button is-info"
                  aria-haspopup="true"
                  aria-controls="dropdown-menu"
                  onClick={toggleDropdown}
                >
                  <span>
                    <b>Get my C.V.!</b>
                  </span>
                  <span className="icon is-small">
                    <i className="fas fa-angle-down" aria-hidden="true"></i>
                  </span>
                </button>
              </div>
              <div className="dropdown-menu" id="dropdown-menu" role="menu">
                <div className="dropdown-content">
                  <a
                    href="https://www.linkedin.com/in/mark-patrick-mccormack/"
                    className="dropdown-item"
                    style={{ textAlign: "left" }}
                  >
                    <span>
                      <b>Teaching C.V.</b>
                    </span>
                    &nbsp;
                    <span className="icon is-small">
                      <i className="fa fa-download" aria-hidden="true"></i>
                    </span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/mark-patrick-mccormack/"
                    className="dropdown-item"
                    style={{ textAlign: "left" }}
                  >
                    <span>
                      <b>Software Engineer C.V.</b>
                    </span>
                    &nbsp;
                    <span className="icon is-small">
                      <i className="fa fa-download" aria-hidden="true"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-primary" href="https://www.linkedin.com/in/mark-patrick-mccormack/">
                <strong>Contact Me!</strong>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
