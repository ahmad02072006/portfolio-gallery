function ProjectCard({ title, description, tech, github, demo }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p className="desc">{description}</p>
      <div className="chips">
        {tech.map((t) => (
          <span className="chip" key={t}>{t}</span>
        ))}
      </div>
      <div className="links">
        <a className="btn primary" href={demo} target="_blank" rel="noreferrer">
          Live Demos
        </a>
        <a className="btn" href={github} target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;