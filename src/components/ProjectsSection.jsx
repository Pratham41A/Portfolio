import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";

function ProjectsSection({ projects }) {
  const projectRows = Array.from(
    { length: Math.ceil(projects.length / 2) },
    (_, rowIndex) => projects.slice(rowIndex * 2, rowIndex * 2 + 2),
  );

  return (
    <section className="projects-band" id="projects" aria-labelledby="projects-heading">
      <div className="section-shell projects-section">
        <SectionHeading
          title="Projects"
          id="projects-heading"
        />
        <div className="projects-grid">
          {projectRows.map((row, rowIndex) => (
            <div className="project-row" key={rowIndex}>
              {row.map((project, columnIndex) => (
                <ProjectCard
                  key={project.name}
                  project={project}
                  index={rowIndex * 2 + columnIndex}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
