import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <nav className={open ? "nav-open" : ""}>
      <a className="nav-name" href="#" onClick={close}>Aditi Nair</a>
      <div className="nav-right">
        <div className="nav-links">
          <a href="#experience" onClick={close}>Experience</a>
          <a href="#work" onClick={close}>Work</a>
          <a href="#skills" onClick={close}>Skills</a>
          <a href="/CV.pdf" target="_blank" rel="noreferrer" onClick={close}>Resume</a>
          <a href="#about" onClick={close}>About</a>
          <a href="#contact" onClick={close}>Contact</a>
        </div>
        <span className="nav-avail">
          <span className="nav-dot"></span> open to work
        </span>
        <button
          type="button"
          className="nav-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}
