import { ArrowIcon, ProjectLinkIcon, TechnologyIcon } from "./icons/Icons";

function ProjectCard({ project, index }) {
  const repositories = [
    ["Frontend", project.socials.frontend],
    ["Backend", project.socials.backend],
  ].filter(([, repository]) => repository);

  return (
    <article className="project-card">
      <div className="project-content">
        <header className="project-heading">
          <span className="project-number">{String(index + 1).padStart(2, "0")}</span>
          <h3>{project.name}</h3>
        </header>
        <section className="project-detail-section" aria-label="Responsibilities">
          <h4 className="project-section-label">Responsibilities</h4>
          <ul className="project-responsibilities">
            {project.responsibilities.map((responsibility) => (
              <li key={responsibility}>{responsibility}</li>
            ))}
          </ul>
        </section>
        <section className="project-detail-section" aria-label="Skills">
          <h4 className="project-section-label">Skills</h4>
          <div className="project-stack">
            {project.skills.map((technology) => (
              <span key={technology}><TechnologyIcon label={technology} />{technology}</span>
            ))}
          </div>
        </section>
        <section className="project-detail-section" aria-label="Project links">
          <h4 className="project-section-label">Links</h4>
          <div className="project-links">
            <a className="button button-dark" href={project.socials.live} target="_blank" rel="noreferrer">Live<ArrowIcon diagonal /></a>
            {repositories.map(([label, repository]) => (
              <a className="repository-link" key={label} href={repository} target="_blank" rel="noreferrer" aria-label={`${project.name}: ${label} repository`}>
                <ProjectLinkIcon source />{label}
              </a>
            ))}
          </div>
        </section>
      </div>
    </article>
  );
}

export default ProjectCard;
