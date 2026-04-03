export default function Navbar() {
  return (
    <nav>
      <a className="nav-name" href="#">Aditi Nair</a>
      <div className="nav-right">
        <a href="#work">Work</a>
        <a href="#skills">Skills</a>
        <a href="/resume.pdf" target="_blank" rel="noreferrer">Resume</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <span className="nav-avail">
          <span className="nav-dot"></span> open to work
        </span>
      </div>
    </nav>
  );
}