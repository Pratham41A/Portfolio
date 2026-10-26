import SectionHeading from "./SectionHeading";

function ExperienceSection({ experience }) {
  return (
    <section className="section-shell experience-section" id="experience" aria-labelledby="experience-heading">
      <SectionHeading
        title="Experience"
        id="experience-heading"
      />
      <div className="experience-list">
        {experience.map((item) => (
          <article className="experience-card" key={`${item.company}-${item.period}`}>
            <div className="experience-marker"><span /></div>
            <div className="experience-main">
              <div className="experience-header">
                <p className="experience-period">{item.period}</p>
                <h3>{item.role}</h3>
                <p className="experience-company">{item.company} <span>·</span> {item.location}</p>
              </div>
              <ul className="responsibility-list">
                {item.responsibilities.map((responsibility, index) => (
                  <li key={responsibility}><span className="list-index">{String(index + 1).padStart(2, "0")}</span>{responsibility}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ExperienceSection;
