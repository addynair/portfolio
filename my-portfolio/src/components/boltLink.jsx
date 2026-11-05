const BOLT_URL = "https://bolt.earth/";

export default function BoltLink() {
  return (
    <a href={BOLT_URL} target="_blank" rel="noreferrer" className="bolt-link">
      Bolt.Earth
    </a>
  );
}
