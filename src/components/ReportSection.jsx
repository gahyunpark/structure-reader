export default function ReportSection({ eyebrow, title, children }) {
  return (
    <section className="report-section">
      <p className="section-eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <div className="section-content">{children}</div>
    </section>
  );
}
