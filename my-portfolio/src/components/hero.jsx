export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-text">
        <p className="hero-greeting fade d1">Hi, I'm Full-Stack Developer</p>
        <h1 className="hero-name fade d2">
          Aditi Nair —<br />
          <em>I build for the web,<br />and I care how it looks.</em>
        </h1>
        <p className="hero-bio fade d3">
          Third-year B.Tech student at <strong>Amrita Vishwa Vidyapeetham, Kerala</strong>, focused on{" "}
          <strong>full-stack & software engineering</strong>. I build with{" "}
          <strong>React, Next.js, Node.js</strong> and care deeply about how things feel to use,
          not just whether they work.
        </p>
        <div className="hero-links fade d4">
          <a href="https://github.com/addynair" target="_blank" rel="noreferrer" className="link-pill solid">
            GitHub ↗
          </a>
          <a href="/CV.pdf" target="_blank" rel="noreferrer" className="link-pill ghost">
            Resume ↗
          </a>
          <a href="https://linkedin.com/in/justaddy" target="_blank" rel="noreferrer" className="link-pill ghost">
            LinkedIn ↗
          </a>
          <a href="#work" className="link-pill ghost">See my work</a>
        </div>
      </div>

      
      <div className="featured-peek">
        <a href="https://ceevee-lac.vercel.app/" target="_blank" rel="noreferrer" className="featured-peek-card">
          <div>
            <p className="featured-peek-label">Featured project</p>
            <p className="featured-peek-name">CeeVee — AI Resume Analyzer</p>
            <div className="featured-peek-stack">
              {["Next.js", "LLaMA 3.3", "PostgreSQL", "Groq API"].map((tag) => (
                <span key={tag} className="featured-peek-chip">{tag}</span>
              ))}
            </div>
          </div>
          <span className="featured-peek-arrow">↗</span>
        </a>
      </div>
    </div>
  );
}