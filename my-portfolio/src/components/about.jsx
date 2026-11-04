const tags = [
  "Kerala, India",
  "Batch of 2027",
  "SDE Intern @ Bolt.Earth",
  "Open source",
  "Reader + writer",
];

export default function About() {
  return (
    <section id="about">
      <p className="section-eyebrow">A bit about me</p>
      <div className="about-body">
        <p>
          I’m a third-year student at <strong>Amrita Vishwa Vidyapeetham</strong> in Kerala. 
          I’m curious by nature and always trying to figure out how things work,
          I just think good software should feel as good as it looks.
        </p>
        <p>
          For a year and a half I was part of <strong>amFOSS</strong> (Nov 2023 – Feb 2025), one
          of India's better open-source clubs. Working alongside some incredible mentors and 30+ developers,
          I handled the Figma design for Hacktoberfest and helped redesign the ICPC website. 
          It’s where I really learned that building great software is a team sport.
        </p>
        <p>
          Outside of dev: I read a lot, write occasionally, and will never say no to a
          good sports match. 
        </p>
      </div>
      <div className="about-tags">
        {tags.map((tag) => (
          <span key={tag} className="about-tag">{tag}</span>
        ))}
      </div>
    </section>
  );
}
