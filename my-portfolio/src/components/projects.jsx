const projects = [
  {
    meta: "March 2026 · Full-Stack + AI",
    name: "CeeVee",
    desc: "An AI-powered resume analyzer that tells you exactly what skills you're missing for a role, rewrites your bullet points using the STAR method, scores your ATS readiness, and draws up a learning roadmap. Built with LLaMA 3.3 70B, fuzzy job-description matching, and a full auth system with JWT.",
    chips: ["Next.js", "TypeScript", "PostgreSQL", "Groq API", "Prisma", "JWT", "Vercel"],
    links: [
      { label: "GitHub ↗", href: "https://github.com/addynair/ceevee" },
      { label: "Live ↗", href: "https://ceevee-lac.vercel.app/" },
    ],
  },
  {
    meta: "September 2025 · Mobile + AI",
    name: "LexiAid",
    desc: "An AI audio assistant built for accessibility, handles PDF parsing, image-to-text conversion, text simplification, and text-to-speech narration, all in one app. I built the mobile frontend and UI/UX in React Native, designing specifically for dyslexia-friendly interaction with smooth file upload, playback, and real-time feedback. Also contributed to the AI integration pipeline.",
    chips: ["React Native", "Node.js", "Hugging Face", "REST APIs"],
    links: [
      { label: "GitHub ↗", href: "https://github.com/snehaalanka/Lexiaid" },
    ],
  },
  {
    meta: "November 2025 · ML + Computer Vision",
    name: "Strumly",
    desc: "A real-time air-guitar system that watches your hands and figures out which chord you're playing. MediaPipe tracks the hand landmarks, a custom-trained Random Forest classifies them, 94% accuracy across Free Mode, Practice Mode, and Song Mode.",
    chips: ["Python", "OpenCV", "scikit-learn", "MediaPipe"],
    links: [
      { label: "GitHub ↗", href: "https://github.com/addynair/strumly" },
    ],
  },
];

export default function Projects() {
  return (
    <section id="work">
      <p className="section-eyebrow">Selected projects</p>
      <div className="projects-list">
        {projects.map((p) => (
          <div key={p.name} className="project-item">
            <div className="project-top">
              <p className="project-meta">{p.meta}</p>
            </div>
            <h3 className="project-name">{p.name}</h3>
            <p className="project-desc">{p.desc}</p>
            <div className="project-footer">
              <div className="project-chips">
                {p.chips.map((c) => (
                  <span key={c} className="chip">{c}</span>
                ))}
              </div>
              <div className="project-links">
                {p.links.map((l) => (
                  <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className="project-link">
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}