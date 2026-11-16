function Section({ title, subtitle, children }) {
  return (
    <section className="section">
      <h2>{title}</h2>
      {subtitle && <p className="subtitle">{subtitle}</p>}
      {children}
    </section>
  );
}

export default Section;