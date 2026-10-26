import { useState } from "react";
import { ArrowIcon, ContactIcon } from "./icons/Icons";

const navItems = [
  ["Experience", "experience"],
  ["Projects", "projects"],
  ["Skills", "skills"],
  ["About", "about"],
];

function Header({ onNavigate, name, email }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = (event, sectionId) => {
    onNavigate(event, sectionId);
    setMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="header-inner page-shell">
        <a className="brand" href="#top" onClick={(event) => navigate(event, "top")} aria-label={`${name}, back to top`}>
          <span className="brand-mark"><img src="/Logo.png" alt="" /></span>
          <span>{name}</span>
        </a>
        <button
          className={`menu-toggle ${menuOpen ? "is-open" : ""}`}
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span /><span />
        </button>
        <nav className={`primary-nav ${menuOpen ? "is-open" : ""}`} id="primary-navigation" aria-label="Main navigation">
          {navItems.map(([label, id]) => (
            <a href={`#${id}`} key={id} onClick={(event) => navigate(event, id)}>{label}</a>
          ))}
          <a className="nav-contact" href={`mailto:${email}`} onClick={() => setMenuOpen(false)}><ContactIcon /> Contact <ArrowIcon diagonal /></a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
