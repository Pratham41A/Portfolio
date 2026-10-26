import SectionHeading from "./SectionHeading";
import SkillCard from "./SkillCard";

function SkillsSection({ skills }) {
  return (
    <section className="section-shell skills-section" id="skills" aria-labelledby="skills-heading">
      <SectionHeading
        title="Skills"
        id="skills-heading"
      />
      <div className="skills-grid">
        {Object.entries(skills).map(([category, categorySkills]) => (
          <SkillCard key={category} category={category} skills={categorySkills} />
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;
