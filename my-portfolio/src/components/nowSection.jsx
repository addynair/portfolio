import BoltLink from "./boltLink";

export default function NowSection() {
  return (
    <section>
      <p className="section-eyebrow">Right now</p>
      <div className="now-text">
        <p>
          Currently in my final year and interning as an SDE at <BoltLink />, building
          internal B2B tools with Next.js, Node.js and PostgreSQL, with AWS Cognito auth and Kubernetes
          deployments.
        </p>
        <p>
          On the side, my latest project is <strong>CeeVee</strong>. It uses LLaMA 3.3 to parse your
          resume against a job description and tell you exactly what's missing.
        </p>
        <p>
          I care about things being genuinely useful, not just technically interesting. If it
          doesn't help a real person, what's the point.
        </p>
      </div>
    </section>
  );
}

