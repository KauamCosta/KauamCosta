import { useEffect, useState } from "react";
import LanguageToggle from "./LanguageToggle";
import ThemeToggle from "./ThemeToggle";
import { translations, type Experience, type Language } from "../data/profileData";

const sectionIds = { about: "sobre", experience: "experiencia", education: "formacao", certifications: "certificacoes", publications: "publicacoes" };
const ExternalArrow = () => <span aria-hidden="true">↗</span>;

const ExperienceItem = ({ job, language, isCurrent }: { job: Experience; language: Language; isCurrent: boolean }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const needsTruncation = job.description.length > 420;
  const description = needsTruncation && !isExpanded ? `${job.description.substring(0, 420).trim()}…` : job.description;

  return (
    <article className="timeline-item">
      <div className="timeline-marker" aria-hidden="true" />
      <div className="experience-card">
        <div className="experience-heading">
          <div>
            <div className="experience-company-row">
              <p className="eyebrow">{job.company}</p>
              {isCurrent && <span className="current-badge"><span aria-hidden="true" />{language === "pt" ? "Atual" : "Current"}</span>}
            </div>
            <h3>{job.role}</h3>
          </div>
          <time>{job.period}</time>
        </div>
        <div className="job-meta"><span>{job.type}</span><span>{job.location}</span></div>
        {description && <p className="job-description">{description}</p>}
        {needsTruncation && (
          <button type="button" className="text-button" aria-expanded={isExpanded} onClick={() => setIsExpanded((expanded) => !expanded)}>
            {isExpanded ? translations[language].seeLess : translations[language].seeMore}
            <span aria-hidden="true">{isExpanded ? " ↑" : " ↓"}</span>
          </button>
        )}
      </div>
    </article>
  );
};

const UserProfile = () => {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window === "undefined") return "pt";
    return localStorage.getItem("language") === "en" ? "en" : "pt";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
    document.documentElement.lang = language === "pt" ? "pt-BR" : "en";
  }, [language]);

  const copy = translations[language];
  const profile = copy.profile;
  const skills = profile.headline.split(" | ").map((skill) => skill.trim());
  const summaryBlocks = profile.summary.split("\n\n");
  const achievementLines = summaryBlocks.slice(1).flatMap((block) => block.split("\n")).filter((line) => line.trim().startsWith("-")).map((line) => line.replace(/^[-•]\s*/, ""));
  const navigation = [[copy.about, sectionIds.about], [copy.experience, sectionIds.experience], [copy.education, sectionIds.education], [copy.certifications, sectionIds.certifications], [copy.publications, sectionIds.publications]];

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label={language === "pt" ? "Ir para o início" : "Go to the top"}><span>KC</span><strong>Kauam Costa</strong></a>
        <nav aria-label={language === "pt" ? "Navegação principal" : "Main navigation"}>
          {navigation.slice(0, 3).map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}
        </nav>
        <div className="toolbar"><LanguageToggle language={language} setLanguage={setLanguage} /><ThemeToggle language={language} /></div>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="profile-name">
          <div className="hero-blueprint" aria-hidden="true">QUALITY<br />BUILT IN</div>
          <div className="hero-content">
            <div className="availability"><span aria-hidden="true" />{language === "pt" ? "Perfil técnico verificado" : "Verified technical profile"}</div>
            <h1 id="profile-name">{profile.firstName} <em>{profile.lastName}</em></h1>
            <p className="hero-role">{skills[0]}</p>
            <p className="hero-intro">{summaryBlocks[0]}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="https://www.linkedin.com/in/kauamcosta/" target="_blank" rel="noreferrer">LinkedIn <ExternalArrow /></a>
              <a className="button button-secondary" href={`https://github.com/${profile.github}`} target="_blank" rel="noreferrer">GitHub <ExternalArrow /></a>
            </div>
          </div>
          <aside className="profile-visual" aria-label={language === "pt" ? "Resumo do perfil" : "Profile overview"}>
            <div className="portrait-frame"><img src={`https://github.com/${profile.github}.png`} alt={`${profile.firstName} ${profile.lastName}`} /></div>
            <div className="profile-stamp"><span className="stamp-label">{language === "pt" ? "Base" : "Based in"}</span><strong>{profile.location}</strong></div>
            <div className="quality-trace" aria-label={language === "pt" ? "Áreas de especialidade" : "Areas of expertise"}>
              <div><span>API</span><strong>PASS</strong></div>
              <div><span>MOBILE</span><strong>PASS</strong></div>
              <div><span>CI/CD</span><strong>ACTIVE</strong></div>
            </div>
          </aside>
        </section>

        <div className="content-grid">
          <aside className="side-column"><div className="sticky-panel">
            <p className="section-kicker">{language === "pt" ? "Perfil profissional" : "Professional profile"}</p>
            <h2>{language === "pt" ? "Visão técnica com foco no resultado." : "Technical vision focused on outcomes."}</h2>
            <div className="quick-facts">
              <div><span>{language === "pt" ? "Atuação" : "Focus"}</span><strong>Software & QA</strong></div>
              <div><span>{language === "pt" ? "Localização" : "Location"}</span><strong>Curitiba, PR</strong></div>
              <div><span>{language === "pt" ? "Idiomas" : "Languages"}</span><strong>PT · EN</strong></div>
            </div>
          </div></aside>

          <div className="main-column">
            <section id={sectionIds.about} className="content-section about-section">
              <div className="section-heading"><p>{language === "pt" ? "Visão geral" : "Overview"}</p><h2>{copy.about}</h2></div>
              <p className="lead-copy">{summaryBlocks[0]}</p>
              <div className="achievement-grid">
                {achievementLines.map((achievement, index) => {
                  const [title, ...body] = achievement.split(":");
                  return <article key={achievement}><span>{language === "pt" ? "Evidência" : "Evidence"} {index + 1}</span><h3>{title}</h3><p>{body.join(":").trim()}</p></article>;
                })}
              </div>
              <div className="skill-cloud" aria-label={copy.skills}>{skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
            </section>

            <section id={sectionIds.experience} className="content-section">
              <div className="section-heading"><p>{language === "pt" ? "Trajetória" : "Career trace"}</p><h2>{copy.experience}</h2></div>
              <div className="timeline">{profile.experience.map((job, index) => <ExperienceItem key={`${job.company}-${job.period}`} job={job} language={language} isCurrent={index === 0} />)}</div>
            </section>

            <section id={sectionIds.education} className="content-section">
              <div className="section-heading"><p>{language === "pt" ? "Base técnica" : "Technical foundation"}</p><h2>{copy.education}</h2></div>
              <div className="education-grid">{profile.education.map((education) => <article key={education.degree}><time>{education.period}</time><h3>{education.degree}</h3><p className="education-school">{education.school}</p><p>{education.activities}</p></article>)}</div>
            </section>

            <section id={sectionIds.certifications} className="content-section">
              <div className="section-heading"><p>{language === "pt" ? "Credenciais" : "Credentials"}</p><h2>{copy.certifications}</h2></div>
              <div className="link-list">{profile.certifications.map((certification, index) => (
                <a key={certification.name} href={certification.link} target="_blank" rel="noreferrer">
                  <span className="link-index">{String(index + 1).padStart(2, "0")}</span>
                  <span className="link-copy"><strong>{certification.name}</strong><small>{certification.issuer} · {copy.issuedOn} {certification.date}</small></span>
                  <ExternalArrow />
                </a>
              ))}</div>
            </section>

            <section id={sectionIds.publications} className="content-section">
              <div className="section-heading"><p>{language === "pt" ? "Pesquisa aplicada" : "Applied research"}</p><h2>{copy.publications}</h2></div>
              <div className="publication-grid">{profile.publications.map((publication) => (
                <a key={publication.title} href={publication.link} target="_blank" rel="noreferrer">
                  <div className="publication-topline"><span>{publication.publisher}</span><ExternalArrow /></div>
                  <h3>{publication.title}</h3><time>{publication.date}</time><p>{publication.description}</p>
                </a>
              ))}</div>
            </section>
          </div>
        </div>
      </main>

      <footer><div><strong>Kauam Costa</strong><span>{language === "pt" ? "Engenharia de Software & Qualidade" : "Software Engineering & Quality"}</span></div><a href="#top">{language === "pt" ? "Voltar ao topo ↑" : "Back to top ↑"}</a></footer>
    </div>
  );
};

export default UserProfile;
