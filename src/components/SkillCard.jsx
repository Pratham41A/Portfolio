import { CategoryIcon, TechnologyIcon } from "./icons/Icons";

function SkillCard({ category, skills }) {
  return (
    <article className="skill-card">
      <div className="skill-card-top">
        <CategoryIcon category={category} className="skill-category-icon" />
        <span className="skill-count">{String(skills.length).padStart(2, "0")} Skills</span>
      </div>
      <h3>{category}</h3>
      <div className="skill-list">
        {skills.map((skill) => (
          <span className="skill-item" key={skill}>
            <TechnologyIcon label={skill} />
            {skill}
          </span>
        ))}
      </div>
    </article>
  );
}

export default SkillCard;
