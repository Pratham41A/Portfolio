import SectionHeading from "./SectionHeading";
import { EducationIcon } from "./icons/Icons";

function AboutSection({ name, education }) {
  return (
    <section className="about-band" id="about" aria-labelledby="about-heading">
      <div className="section-shell about-section">
        <SectionHeading
          title="About"
          id="about-heading"
        />
        <div className="about-grid">
          <article className="about-note">
            <span className="quote-mark">“</span>
            <p>I’m {name}, a Software Engineer focused on Backend Distributed Systems, Agentic AI, and Automation.</p>
            <span className="about-signature">{name}</span>
          </article>
          <div className="education-panel">
            <h3><EducationIcon /> Education</h3>
            <article className="education-item">
              <span className="education-period">{education.period}</span>
              <h4>{education.degree}</h4>
              <p>{education.abbreviation} <span>·</span> {education.institution}</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
