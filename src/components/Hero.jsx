import { ArrowIcon, SocialIcon } from "./icons/Icons";

function Hero({ name, role, socials }) {
  return (
    <section className="hero page-shell" id="top" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="hero-greeting">Hello, I’m</p>
        <h1 id="hero-title">{name}</h1>
        <p className="hero-role">{role}</p>
      </div>
      <aside className="hero-aside" aria-label={`${name} logo`}>
        <img className="hero-logo" src="/Logo.png" alt={`${name} logo`} />
        <div className="hero-socials" aria-label="Social profiles">
          {socials.map((social) => (
            <a className="social-link" key={social.label} href={social.url} target="_blank" rel="noreferrer">
              <SocialIcon label={social.label} className="icon-small" />
              <span>{social.label}</span>
              <ArrowIcon diagonal className="social-arrow" />
            </a>
          ))}
        </div>
      </aside>
    </section>
  );
}

export default Hero;
