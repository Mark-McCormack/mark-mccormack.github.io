import React, { CSSProperties, ReactNode, useEffect, useId, useState } from "react";
import Navbar from "./Navbar";
import { profiles, LINKEDIN } from "../content";

// Heading + body that collapses to the heading and a chevron on phones; always open on larger screens.
export const Collapsible: React.FC<{ heading: ReactNode; label: string; className: string; children: ReactNode }> = ({
  heading,
  label,
  className,
  children,
}) => {
  const [open, setOpen] = useState(false);
  const id = useId();
  return (
    <div className={`${className} collapsible ${open ? "open" : ""}`}>
      <div className="toggle-row">
        {heading}
        <button
          className="toggle"
          aria-expanded={open}
          aria-controls={id}
          aria-label={label}
          onClick={() => setOpen(!open)}
        >
          <i className="fas fa-circle-chevron-down" aria-hidden="true" />
        </button>
      </div>
      <div id={id} className="toggle-body">
        {children}
      </div>
    </div>
  );
};

// Small coloured label naming the section ("Research", "Teaching"…).
export const Chip: React.FC<{ children: ReactNode }> = ({ children }) => <span className="chip">{children}</span>;

// Section colour as CSS variables, read by the chip, menu dots and accents.
export const sectionStyle = (color: string, onColor = "#1b1f24") =>
  ({ "--sc": color, "--sc-on": onColor }) as CSSProperties;

const Footer = () => (
  <footer className="site-footer">
    <div className="wrap">
      <p className="footer-name">Mark P. McCormack</p>
      <ul className="footer-links" aria-label="Profiles">
        <li>
          <a href={LINKEDIN}>LinkedIn</a>
        </li>
        {profiles.slice(0, 3).map(([label, href]) => (
          <li key={label}>
            <a href={href}>{label}</a>
          </li>
        ))}
      </ul>
      <p className="footer-credit">
        <a href="https://www.flaticon.com/free-icons/university">University icons created by Freepik - Flaticon</a>
      </p>
    </div>
  </footer>
);

// Shared page shell: skip link, sticky navigation, <main> and footer.
const Layout: React.FC<{ className: string; title: string; style?: CSSProperties; children: ReactNode }> = ({
  className,
  title,
  style,
  children,
}) => {
  useEffect(() => {
    document.title = `${title} - Mark P. McCormack`;
  }, [title]);

  return (
    <>
      <a
        className="skip-link"
        href="#main"
        onClick={(e) => {
          e.preventDefault(); // a plain #main link would be treated as a route by HashRouter
          document.getElementById("main")?.focus();
        }}
      >
        Skip to main content
      </a>
      <div className={`page ${className}`} style={style}>
        <header className="site-header">
          <Navbar />
        </header>
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
