import ProjectCard from "./ProjectCard";

function ProjectList({ projects }) {
  if (projects.length === 0) return <p className="empty">No projects found.</p>;

  return (
    <div className="list">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          label={project.label}
          title={project.title}
          description={project.description}
          tech={project.tech}
          github={project.github}
          demo={project.demo}
        />
      ))}
    </div>
  );
}

export default ProjectList;