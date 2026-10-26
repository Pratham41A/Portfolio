import { useLayoutEffect } from "react";
import portfolio from "./data";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";

function scrollToSection(event, sectionId) {
  event.preventDefault();
  if (window.location.hash) {
    window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
  }
  document.getElementById(sectionId)?.scrollIntoView({
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    block: "start",
  });
}

function App() {
  const { profile, projects, experience, education, skills } = portfolio;

  useLayoutEffect(() => {
    if (window.location.hash) {
      window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, []);

  return (
    <div className="portfolio-site">
      <Header
        onNavigate={scrollToSection}
        name={profile.name}
        email={profile.email}
      />
      <main>
        <Hero
          name={profile.name}
          role={profile.role}
          socials={profile.socials}
        />
        <ExperienceSection experience={experience} />
        <ProjectsSection projects={projects} />
        <SkillsSection skills={skills} />
        <AboutSection name={profile.name} education={education} />
      </main>
      <Footer name={profile.name} onNavigate={scrollToSection} />
    </div>
  );
}

export default App;
