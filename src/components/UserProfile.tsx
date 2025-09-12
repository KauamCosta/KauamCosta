import { useEffect, useState } from "react";
import LanguageToggle from "./LanguageToggle";
import ThemeToggle from "./ThemeToggle";
import { translations, type Experience } from "../data/profileData";
import LocationIcon from "../assets/LocationIcon";

const ExperienceItem = ({
  job,
  language,
}: {
  job: Experience;
  language: "pt" | "en";
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const needsTruncation = (job.description || "").length > 200;

  if (!job.description) {
    return (
      <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-6 hover:shadow-md transition-all duration-300">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            {job.role}
          </h3>
          <span className="text-gray-600 dark:text-gray-400">
            {job.period}
          </span>
        </div>
        <div className="text-gray-700 dark:text-gray-300 mb-2">
          <span className="font-medium">{job.company}</span> ·{" "}
          {job.type}
        </div>
        <div className="text-gray-600 dark:text-gray-400 mb-2">
          {job.location}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-6 hover:shadow-md transition-all duration-300">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          {job.role}
        </h3>
        <span className="text-gray-600 dark:text-gray-400">
          {job.period}
        </span>
      </div>
      <div className="text-gray-700 dark:text-gray-300 mb-2">
        <span className="font-medium">{job.company}</span> ·{" "}
        {job.type}
      </div>
      <div className="text-gray-600 dark:text-gray-400 mb-2">
        {job.location}
      </div>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
        {isExpanded
          ? job.description
          : `${job.description.substring(0, 200)}${
              needsTruncation ? "..." : ""
            }`}
      </p>
      {needsTruncation && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-blue-600 dark:text-blue-400 hover:underline mt-4 font-semibold"
        >
          {isExpanded
            ? translations[language].seeLess
            : translations[language].seeMore}
        </button>
      )}
    </div>
  );
};

const UserProfile = () => {
  const [language, setLanguage] = useState<"pt" | "en">(() => {
    if (typeof window === "undefined") return "pt";
    const storedLang = localStorage.getItem("language");
    return (storedLang as "pt" | "en") || "pt";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const profile = translations[language].profile;
  const skills = profile.headline.split(" | ").map((skill: string) => skill.trim());

  return (
    <div className="min-h-screen w-full flex justify-center items-start pt-12 bg-gray-100 dark:bg-gray-900 transition-colors duration-200">
      <ThemeToggle />
      <LanguageToggle language={language} setLanguage={setLanguage} />
      <div className="w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Card Principal */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl mb-8">
          <div className="bg-[url('https://media.licdn.com/dms/image/v2/D4D16AQHgQKoqy76eEw/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1683450209407?e=1760572800&v=beta&t=SBmWN1pqef-qRjSdrR61CG9Si9H_aUXP10xpPfohcis')]">
            <div className="bg-black/70 w-full h-full p-6">
              <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
                {/* Foto do GitHub */}
                <div className="flex-shrink-0">
                  <img
                    src={`https://github.com/${profile.github}.png`}
                    alt={`${profile.firstName} ${profile.lastName}`}
                    className="w-32 h-32 rounded-full border-4 border-white shadow-lg transition-transform duration-300 hover:scale-105"
                  />
                </div>

                {/* Informações Principais */}
                <div className="flex-1 text-center md:text-left">
                  <h1 className="text-4xl font-bold text-white mb-2">{`${profile.firstName} ${profile.lastName}`}</h1>
                  <p className="text-xl text-blue-100">
                    {profile.headline.split("|")[0].trim()}
                  </p>
                  <div className="flex items-center justify-center md:justify-start mt-3 text-blue-100">
                    <LocationIcon />
                    <span>{profile.location}</span>
                  </div>
                  {/* Badges de Redes Sociais e Tecnologias */}
                  <div className="flex justify-center md:justify-start flex-wrap gap-2 mt-4">
                    <a
                      href={`https://github.com/${profile.github}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white"
                        alt="GitHub"
                        className="transition-transform duration-300 hover:scale-110"
                      />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/kauamcosta/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white"
                        alt="LinkedIn"
                        className="transition-transform duration-300 hover:scale-110"
                      />
                    </a>
                    <a
                      href="https://www.instagram.com/kauam_zito/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="https://img.shields.io/badge/Instagram-%23E4405F.svg?style=for-the-badge&logo=Instagram&logoColor=white"
                        alt="Instagram"
                        className="transition-transform duration-300 hover:scale-110"
                      />
                    </a>
                    <a
                      href="https://www.postman.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white"
                        alt="Postman"
                        className="transition-transform duration-300 hover:scale-110"
                      />
                    </a>
                    <a
                      href="https://www.docker.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white"
                        alt="Docker"
                        className="transition-transform duration-300 hover:scale-110"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8">
            {/* Seção Sobre */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2 mb-4">
                {translations[language].about}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {profile.summary}
              </p>
            </div>

            {/* Seção de Habilidades */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2 mb-4">
                {translations[language].skills}
              </h2>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill: string, index: number) => (
                  <span
                    key={index}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full 
                             text-sm font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Seção de Experiência */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2 mb-4">
                {translations[language].experience}
              </h2>
              <div className="space-y-6">
                {profile.experience.map((job, index) => (
                  <ExperienceItem key={index} job={job} language={language} />
                ))}
              </div>
            </div>

            {/* Seção de Formação */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2 mb-4">
                {translations[language].education}
              </h2>
              <div className="space-y-6">
                {profile.education.map((edu, index) => {

                  return (
                    <div
                      key={index}
                      className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-6 hover:shadow-md transition-shadow duration-300"
                    >
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                          {edu.degree}
                        </h3>
                        <span className="text-gray-600 dark:text-gray-400">
                          {edu.period}
                        </span>
                      </div>
                      <div className="text-gray-700 dark:text-gray-300 mb-2">
                        {edu.school}
                      </div>
                      {edu.activities && (
                        <p className="text-gray-600 dark:text-gray-400">
                          {edu.activities}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Seção de Certificações */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2 mb-4">
                {translations[language].certifications}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {profile.certifications.map((cert, index) => (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={index}
                    className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 hover:shadow-md transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-600/50 group"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                      {cert.name}
                      <svg
                        className="w-4 h-4 inline-block ml-2 opacity-0 group-hover:opacity-100 transition-opacity"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </h3>
                    <div className="text-gray-600 dark:text-gray-400">
                      {cert.issuer} ·{" "}
                      <span className="italic font-bold">
                        Certificação emitida em{" "}
                      </span>{" "}
                      {cert.date}
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Seção de Publicações */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2 mb-4">
                {translations[language].publications}
              </h2>
              <div className="space-y-6">
                {profile.publications.map((pub, index) => (
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={index}
                    className="block bg-gray-50 dark:bg-gray-700/50 rounded-lg p-6 hover:shadow-md transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-600/50 group"
                  >
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 flex items-center">
                      {pub.title}
                      <svg
                        className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </h3>
                    <div className="text-gray-600 dark:text-gray-400 mb-2">
                      {pub.publisher} · {pub.date}
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">
                      {pub.description}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
