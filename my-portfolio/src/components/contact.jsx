const contacts = [
  { label: "Email", val: "addynair6@gmail.com", href: "mailto:addynair6@gmail.com" },
  { label: "LinkedIn", val: "linkedin.com/in/justaddy", href: "https://linkedin.com/in/justaddy" },
  { label: "GitHub", val: "github.com/addynair", href: "https://github.com/addynair" },
  { label: "Portfolio", val: "aditinair.vercel.app", href: "https://aditinair.vercel.app" },
];

export default function Contact() {
  return (
    <div className="contact-section" id="contact">
      <p className="section-eyebrow">Get in touch</p>
      <p className="contact-note">
        If you have something interesting to build, or just want to say hello, I'm always happy
        to hear from you.
      </p>
      <div className="contact-grid">
        {contacts.map((c) => (
          <a
            key={c.label}
            href={c.href}
            target={c.href.startsWith("mailto") ? undefined : "_blank"}
            rel="noreferrer"
            className="contact-row"
          >
            <span className="contact-label">{c.label}</span>
            <span className="contact-val">{c.val}</span>
          </a>
        ))}
      </div>
    </div>
  );
}