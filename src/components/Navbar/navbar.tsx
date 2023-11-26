import React from "react";
import "./navbar.css";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation" style={{ height: "100%" }}>
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
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
          <a className="navbar-item" href="/blogs">
            Blogs
          </a>
          <a className="navbar-item" href="/business">
            Business
          </a>

          <a className="navbar-item" href="/projects">
            Projects
          </a>

          <a className="navbar-item" href="/research">
            Research
          </a>

          <a className="navbar-item" href="/students">
            Students
          </a>

          <a className="navbar-item" href="/teaching">
            Teaching
          </a>

          <a className="navbar-item" href="/academia">
            Academia
          </a>
        </div>

        <div className="navbar-end">
          {/* <div className="navbar-item">
            <div className="buttons">
              <a className="button is-primary" href="/contact">
                <strong>Contact Me!</strong>
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
