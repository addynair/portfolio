const skillGroups = [
  {
    name: "Languages",
    items: ["TypeScript & JavaScript", "Python, C++", "SQL"],
  },
  {
    name: "Frontend",
    items: ["React.js / React Native", "Next.js", "Tailwind CSS, HTML5, CSS3"],
  },
  {
    name: "Backend & Data",
    items: ["Node.js / Express.js, REST APIs", "JWT / OAuth 2.0", "PostgreSQL, MongoDB, Prisma"],
  },
  {
    name: "AI / ML",
    items: ["LangChain, Hugging Face", "Groq API (LLaMA 3.3)", "scikit-learn, MediaPipe"],
  },
  {
    name: "Cloud & Tools",
    items: ["AWS (Cognito, S3), Kubernetes", "Vercel, Render, Neon", "Git / GitHub, Jira, Figma"],
  },
  {
    name: "Problem solving",
    items: ["80+ LeetCode (Easy–Medium)", "Arrays, hashing, two pointers", "Binary search"],
  },
];

export default function Skills() {
  return (
    <section id="skills">
      <p className="section-eyebrow">What I work with</p>
      <div className="skills-cols">
        {skillGroups.map((group) => (
          <div key={group.name} className="skill-group">
            <p className="skill-group-name">{group.name}</p>
            <div className="skill-group-items">
              {group.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}