const experience = [
  {
    period: "Aug 2026 – Present",
    title: "Software Development Engineer Intern",
    org: "Bolt.Earth",
    stack: "Node.js, Express.js, PostgreSQL, Next.js, AWS Cognito, AWS S3, Kubernetes",
    points: [
      "Built an internal B2B dealer ordering platform end-to-end (Next.js frontend, Node.js/Express REST APIs, PostgreSQL), replacing manual dealer ordering with a single self-serve workflow.",
      "Developed a companion admin tool to manage dealer sites and onboarding, giving internal teams one place to handle day-to-day dealer operations.",
      "Implemented secure authentication and access control using AWS Cognito, MFA and Microsoft Entra ID; integrated AWS S3 for document and file storage.",
      "Shipped services to Kubernetes and worked in a Jira-based sprint workflow with code reviews through GitHub pull requests.",
    ],
  },
  {
    period: "Nov 2023 – Feb 2025",
    title: "Member",
    org: "amFOSS (Free and Open Source Software Community)",
    points: [
      "Collaborated with 30+ developers on open-source projects using Git branching, pull requests and code reviews.",
      "Led Figma UI/UX design for amFOSS's Hacktoberfest events, coordinating with the design, development and event teams; contributed to the ICPC website redesign.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience">
      <p className="section-eyebrow">Experience</p>
      <div className="exp-list">
        {experience.map((e) => (
          <div key={e.org} className="exp-item">
            <p className="exp-period">{e.period}</p>
            <div>
              <p className="exp-title">{e.title}</p>
              <p className="exp-org">{e.org}</p>
              {e.stack && <p className="exp-stack">{e.stack}</p>}
              <ul className="exp-points">
                {e.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
