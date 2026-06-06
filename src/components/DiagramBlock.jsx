export default function DiagramBlock({ diagram, label }) {
  return (
    <figure className="diagram-block">
      <figcaption>{label}</figcaption>
      <pre>{diagram}</pre>
    </figure>
  );
}
