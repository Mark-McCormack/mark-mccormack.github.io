import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { pages, hidden } from "../content";
import hat from "../assets/images/graduation-hat.png";

const LINKEDIN = "https://www.linkedin.com/in/mark-patrick-mccormack/";
const links = [
  ["", "Home"],
  ...pages.filter((p) => !hidden.includes(p.path)).map((p) => [p.path, p.path.replace("-", " ")]),
];
const swatches = [
  ["black", "Black"],
  ["#ff82aa", "Pink"],
  ["#ed1b24", "Red"],
  ["#effe01", "Yellow"],
  ["#00158a", "Navy"],
];
const cvs = ["Teaching C.V.", "Software Engineer C.V."];
const setBackground = (color: string) => document.documentElement.style.setProperty("--site-background", color);

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cvOpen, setCvOpen] = useState(false);
  const cvRef = useRef<HTMLDivElement>(null);

  // Close the C.V. dropdown on Escape or a click/focus outside it.
  useEffect(() => {
    if (!cvOpen) return;
    const close = (e: Event) =>
      ((e as KeyboardEvent).key === "Escape" || !cvRef.current?.contains(e.target as Node)) && setCvOpen(false);
    ["keydown", "click", "focusin"].forEach((t) => document.addEventListener(t, close));
    return () => ["keydown", "click", "focusin"].forEach((t) => document.removeEventListener(t, close));
  }, [cvOpen]);

  return (
    <nav className="navbar" aria-label="Main">
      <div className="navbar-brand">
        <NavLink className="navbar-item" to="/">
          <img src={hat} alt="" width={50} height={50} />
          <span className="brand-name">Mark P. McCormack</span>
        </NavLink>
        <button
          className={`navbar-burger ${menuOpen ? "is-active" : ""}`}
          aria-label="Menu"
          aria-expanded={menuOpen}
          aria-controls="main-menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </div>

      <div id="main-menu" className={`navbar-menu ${menuOpen ? "is-active" : ""}`}>
        <div className="navbar-start">
          {links.map(([to, label]) => (
            <NavLink key={to} className="navbar-item" to={`/${to}`} end>
              {label}
            </NavLink>
          ))}
        </div>

        <div className="navbar-end">
          {swatches.map(([color, name]) => (
            <button
              key={color}
              className="navbar-item swatch"
              aria-label={`${name} background`}
              onClick={() => setBackground(color)}
            >
              <svg width="25" height="37.5" aria-hidden="true">
                <rect width="100%" height="100%" stroke={color} strokeWidth="5" fill="none" />
              </svg>
            </button>
          ))}

          <div className="navbar-item">
            <div ref={cvRef} className={`dropdown ${cvOpen ? "is-active" : ""}`}>
              <div className="dropdown-trigger">
                <button
                  className="button is-info"
                  aria-expanded={cvOpen}
                  aria-controls="cv-menu"
                  onClick={() => setCvOpen(!cvOpen)}
                >
                  <b>Get my C.V.!</b>
                  <span className="icon is-small">
                    <i className="fas fa-angle-down" aria-hidden="true" />
                  </span>
                </button>
              </div>
              <div className="dropdown-menu" id="cv-menu">
                <div className="dropdown-content">
                  {cvs.map((cv) => (
                    <a key={cv} href={LINKEDIN} className="dropdown-item">
                      <b>{cv}</b>&nbsp;
                      <span className="icon is-small">
                        <i className="fa fa-download" aria-hidden="true" />
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="navbar-item">
            <a className="button is-primary" href={LINKEDIN}>
              <strong>Contact Me!</strong>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
