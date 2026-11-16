function ProjectCard({ title = "Untitled", description = "", tech = [], github, demo, label }) {
  return (
    <div className="card">
      {label && <span className="badge">{label}</span>}
      <h3>{title}</h3>
      <p className="desc">{description}</p>
      <div className="chips">
        {tech.map((t) => (
          <span className="chip" key={t}>{t}</span>
        ))}
      </div>
      <div className="links">
        {demo && (
          <a className="btn primary" href={demo} target="_blank" rel="noreferrer">Live Demo</a>
        )}
        {github && (
          <a className="btn" href={github} target="_blank" rel="noreferrer">GitHub</a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;