import React, { CSSProperties, ReactNode, useEffect, useId, useState } from "react";
import Navbar from "./Navbar";

export const Footer = () => (
  <footer className="frame footer-bar">
    <a href="https://www.flaticon.com/free-icons/university">University icons created by Freepik - Flaticon</a>
  </footer>
);

// Heading + body that collapses to the heading and a chevron on phones; always open on larger screens.
export const Collapsible: React.FC<{
  heading: ReactNode;
  label: string;
  className: string;
  scroll?: boolean;
  children: ReactNode;
}> = ({ heading, label, className, scroll, children }) => {
  const [open, setOpen] = useState(false);
  const id = useId();
  return (
    <div className={`${className} collapsible ${open ? "open" : ""}`} tabIndex={scroll ? 0 : undefined}>
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

export const HeadCard: React.FC<{ title: ReactNode; scroll?: boolean; children: ReactNode }> = ({ title, ...rest }) => (
  <Collapsible
    className="head-card"
    label="Page introduction"
    heading={
      <h1 id="page-title" className="title is-1">
        {title}
      </h1>
    }
    {...rest}
  />
);

// Shared page shell: skip link, nav, <main> grid of bordered tiles and footer.
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
        <header className="frame top">
          <Navbar />
        </header>
        <main id="main" tabIndex={-1} className="grid">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
