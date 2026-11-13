import React, { CSSProperties, useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { pages, hidden, LINKEDIN } from "../content";

// Each section's menu link carries a dot in that section's colour.
const links = pages.filter((p) => !hidden.includes(p.path)).map((p) => [p.path, p.path.replace("-", " "), p.color]);
const cvs = ["Teaching C.V.", "Software Engineer C.V."];

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
    <nav className="navbar wrap" aria-label="Main">
      <div className="navbar-brand">
        <NavLink className="navbar-item brand" to="/">
          Mark P. McCormack
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
          <NavLink className="navbar-item" to="/" end>
            Home
          </NavLink>
          {links.map(([to, label, color]) => (
            <NavLink key={to} className="navbar-item dot" to={`/${to}`} style={{ "--dot": color } as CSSProperties}>
              {label}
            </NavLink>
          ))}
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div ref={cvRef} className={`dropdown is-right ${cvOpen ? "is-active" : ""}`}>
              <div className="dropdown-trigger">
                <button
                  className="btn-ed ghost"
                  aria-expanded={cvOpen}
                  aria-controls="cv-menu"
                  onClick={() => setCvOpen(!cvOpen)}
                >
                  Get my C.V.
                  <i className="fas fa-angle-down" aria-hidden="true" />
                </button>
              </div>
              <div className="dropdown-menu" id="cv-menu">
                <div className="dropdown-content">
                  {cvs.map((cv) => (
                    <a key={cv} href={LINKEDIN} className="dropdown-item">
                      {cv} <i className="fa fa-download" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="navbar-item">
            <a className="btn-ed" href={LINKEDIN}>
              Contact me
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
