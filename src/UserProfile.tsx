import { useEffect, useState } from "react";

// Componente do botão de tema
const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") return false;
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      return storedTheme === "dark";
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed z-50 top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-all duration-200 hover:shadow-lg"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <svg
          className="w-6 h-6 text-yellow-500 transform transition-transform duration-200"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
            clipRule="evenodd"
          />
        </svg>
      ) : (
        <svg
          className="w-6 h-6 text-gray-800 transform transition-transform duration-200"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      )}
    </button>
  );
};

// Dados extraídos do seu arquivo Profile.csv
const userProfileData = {
  firstName: "Kauam",
  lastName: "da Silva Costa",
  headline: "QA Engineer | Automation | DevOps | Postman | Robot | Appium",
  summary:
    "Facilidade de comunicação e relacionamento interpessoal e em trabalhar em equipe. Disponibilidade de manhã e tarde. Gosto muito de tecnologia, sempre procurando aprender coisas novas, gosto da área desde mais novo, obtendo assim bastante afinidade com a TI.",
  location: "Curitiba, Paraná, Brasil",
  industry: "IT Services and IT Consulting",
  github: "KauamCosta",
  experience: [
    {
      company: "MJV Technology & Innovation",
      role: "Analista de garantia de qualidade de software",
      period: "jul de 2024 - Até o momento",
      location: "Remota",
      type: "Tempo integral",
      description: "",
    },
    {
      company: "epharma PBM phygital",
      role: "Analista de teste de automação pleno",
      period: "set de 2022 - mai de 2024",
      location: "Curitiba, Paraná, Brasil",
      type: "Tempo integral",
      description:
        "Implantação e estruturação dos testes automatizados back e frontend, realização de Análise, elaboração e execução de teste manuais e automatizados na ferramenta Azure Devops. Execução de teste em sistemas Web e desktop, com auxílio de desenvolvedores e product owners para soluções, utilizando a metodologia ágil (Scrum, Kanban, BDD). Criação e execução de querys para inserção e pesquisas nos bancos de dados (Oracle, MySQL, Postgres). Realização de testes de serviços com as ferramentas Postman e SoapUI (API REST). Sempre desenvolvendo a habilidade de protagonismo, comunicação, relacionamentos interpessoais, visão sistêmica, resiliência, inovação, planejamento e organização, foco e atenção, cooperação e visão de time, proatividade, treinamento e desenvolvimento. Participação em definição de processos de desenvolvimento e qualidade de software, além da estruturação para a implementação da automação e de acompanhar o levantamento e definição de requisitos dos demais testes, contribuir na documentação de rotinas, regras de negócio e procedimentos de uso do cliente a partir dos requisitos, também estimando o tempo para realização das novas implementações. Realizando a elaboração e manter de Plano/Estratégia de testes, auxiliando e apoiando o desenvolvimento das atividades do projeto. Criação e execução de cenários de testes via test plan sempre visando a aplicação de boas práticas de testes fazendo o uso de ferramentas que auxiliem e otimizem a especificação e execução dos testes. Realização de abertura de bugs gerando evidências, além do acompanhamento para identificar e corrigir a causa raiz do problema junto aos desenvolvedores independente do ambiente (Homologação, UAT/Qualidade, Pré-Produção e Produção). Utilização das ferramentas metodológicas mais adequadas à estratégia do cliente mantendo uma troca ativa entre Testes Manuais e automatizados (Robot Framework).",
    },
    {
      company: "Prime Control",
      role: "Analista de testes",
      period: "set de 2019 - ago de 2022",
      location: "Curitiba, Paraná, Brasil",
      type: "Tempo integral",
      description:
        "Auxilio na implantação do processo de teste automatizado em 3 clientes. Análise, elaboração e execução de teste na ferramenta HP ALM (Application Lifecycle Management), MS TM, HipTest, AssertThat, JIRA, Jenkins. Execução de teste em sistemas Web e desktop, tendo contato com arquitetos, funcionais, coordenadores, scrum mastes, desenvolvedores e gerentes para soluções, utilizando a metodologia ágil (Scrum, Kanban, BDD). Criação e execução de querys para inserção e pesquisas nos bancos de dados (Oracle, MS SQL Server, MySQL, Postgres). Realização de testes de serviços com as ferramentas Postman e SoapUI. Utilização de comunicadores (Slack, Skype e Microsoft Teams). Sempre desenvolvendo a habilidade de protagonismo, comunicação, relacionamentos interpessoais, visão sistêmica, resiliência, inovação, planejamento e organização, foco e atenção, cooperação e visão de time, proatividade, treinamento e desenvolvimento. Participação em definição de processos de desenvolvimento e qualidade de software, além de acompanhar o levantamento e definição de requisitos, contribuir na documentação de rotinas, regras de negócio e procedimentos de uso do cliente a partir dos requisitos. Realizando a elaboração e manter de Plano/Estratégia de testes, auxiliando e apoiando o desenvolvimento das atividades do projeto. Criação e execução de cenários de testes através das ferramentas implantadas nos clientes (Telefônica, Boticário, WERT Solutions e ePharma) sempre visando a aplicação de boas praticas de testes fazendo o uso de ferramentas que auxiliem e otimizem a especificação e execução dos testes. Realização de abertura de bugs gerando evidencias, além do acompanhamento para identificar e corrigir a causa raiz do problema junto aos desenvolvedores independente do ambiente (Homologação, UAT/Qualidade, Pré-Produção e Produção). Utilização das ferramentas metodologiacas mais adequadas à estratégia do cliente mantendo uma troca ativa entre Testes Manuais e automatizados (Robot Framework).",
    },
  ],
  education: [
    {
      school: "UNINTER Centro Universitário Internacional",
      degree: "Bacharelado em Engenharia de Computação",
      period: "2017 - 2021",
      activities:
        "PBL - Análise de aplicativos de batimentos cardíacos, Sensor de estacionamento",
    },
    {
      school: "SENAI",
      degree: "Técnico em informática",
      period: "2015 - 2016",
      activities: "Programação e manutençao de Computadores - Geral",
    },
  ],
  certifications: [
    {
      name: "ISO 14001:2015",
      issuer: "Universidade ePharma",
      date: "set de 2022",
      link: "https://drive.google.com/file/d/1xnu9ZxF4FMfdzzto8wOl4EY98dH3cuuQ/view",
    },
    {
      name: "Guia ATDD, BDD, TDD",
      issuer: "Prime Control",
      date: "dez de 2021",
      link: "https://drive.google.com/file/d/1WbAJIEKY0jgt4ouUoO7Nd06pVWYogYI8/view",
    },
    {
      name: "Automação de Testes com Robot Framework Avançada",
      issuer: "Udemy",
      date: "nov de 2021",
      link: "https://udemy-certificate.s3.amazonaws.com/image/UC-f04e8296-5719-49c3-a8b2-1ccd604e2b06.jpg",
    },
    {
      name: "Programação em Python do básico ao avançado",
      issuer: "Geek University",
      date: "jul de 2021",
      link: "https://udemy-certificate.s3.amazonaws.com/image/UC-30483cdb-f347-49e9-8d1c-d5634cfc56f0.jpg?v=1625581534000",
    },
    {
      name: "Automação de Testes com Robot Framework Básica",
      issuer: "Udemy",
      date: "out de 2020",
      link: "https://udemy-certificate.s3.amazonaws.com/image/UC-fe2e76d3-e664-4bbb-8ec7-8a351d0eefbd.jpg?v=1602263659000",
    },
    {
      name: "Jogo da memória para auxílio à pessoas com dificuldade de memória ou alzheimer",
      issuer: "CONTECC 2019",
      date: "jul de 2019",
      link: "https://www.confea.org.br/sites/default/files/uploads-imce/Contecc2019/El%C3%A9trica/JOGO%20DA%20MEMORIA%20PARA%20AUXILIO%20DAS%20PESSOAS%20COM%20DIFICULDADE%20DE%20MEMORIA%20OU%20MAL%20DE%20ALZHEIMER.pdf",
    },
    {
      name: "Estudo pilo da medição da frequência cardíaca por meio de aplicativos em smartphones",
      issuer: "SEB - Simpósio de Engenharia Biomédica",
      date: "ago de 2018",
      link: "https://drive.google.com/file/d/1zKoDsSA9Cz609lFLcmY2U1iOApY7GVEy/view",
    },
  ],
  publications: [
    {
      title: "Engenharia Multidisciplinar Vol. 2",
      publisher: "Editora Pascal",
      date: "10 de set de 2020",
      description:
        "Participação no Capítulo 12 do livro, apresentando um compilado de projetos de diferentes engenharias.",
      link: "https://editorapascal.com.br/2020/09/10/livro-engenharia-multidisciplinar-vol-02/",
    },
    {
      title:
        "Jogo da memória para auxílio à pessoas com dificuldade de memória ou alzheimer",
      publisher: "CONTECC 2019",
      date: "2 de jul de 2019",
      description:
        "Este artigo apresenta um trabalho desenvolvido como projeto de aprendizagem baseada em problemas (PBL – Problem Based Learning) no quarto período do curso de Engenharia da Computação presencial da UNINTER. Consiste na prototipagem de um dispositivo baseado no jogo Genius, que testa as capacidades cognitivas do jogador, de forma a ser utilizado como opção para auxílio no tratamento de disfunções de memória ou Alzheimer. O sistema desenvolvido é baseado na plataforma Arduíno e reproduz a operação do jogo Genius, com modificações que incluem um novo projeto mecânico e um display para exibição de mensagens. Os resultados apresentam testes do protótipo construído indicando a possibilidade de uso do mesmo para o exercício de memorização.",
      link: "https://drive.google.com/file/d/0B4urygqFd5wKZzFObzYzbjVsMlpBby1ERWlGTFNDaW1sZ0lZ/view?resourcekey=0-lqXpDjMlvgX8_2Bx7lEGLA",
    },
  ],
};

// Componente de ícone para localização (SVG embutido)
const LocationIcon = () => (
  <svg
    className="w-4 h-4 text-gray-500 mr-1.5"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 16 20"
  >
    <path d="M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.342.419.445.522.89.99 1.336 1.417l.455.428.41.366c.219.193.434.382.645.564.21.183.415.358.614.526l.138.115.143.119.1.84a1 1 0 0 0 .127.115l.182.135.1.071c.215.15.43.293.642.428a1 1 0 0 0 .97.022c.21-.133.42-.273.63-.41l.137-.087.18-.133a1 1 0 0 0 .13-.118l.1-.84.143-.12.138-.115c.2-.168.404-.343.614-.526.21-.182.426-.371.645-.564l.41-.366.455-.428c.446-.427.891-.895 1.336-1.417.115-.134.23-.274.342-.42l.12-.146.12-.183A7.992 7.992 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
  </svg>
);

const ExperienceItem = ({
  job,
}: {
  job: (typeof userProfileData.experience)[0];
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const descriptionSnippet = job.description.substring(0, 200);
  const needsTruncation = job.description.length > 200;

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
          <span className="font-medium">{job.company}</span> · {job.type}
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
        <span className="text-gray-600 dark:text-gray-400">{job.period}</span>
      </div>
      <div className="text-gray-700 dark:text-gray-300 mb-2">
        <span className="font-medium">{job.company}</span> · {job.type}
      </div>
      <div className="text-gray-600 dark:text-gray-400 mb-2">
        {job.location}
      </div>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
        {isExpanded
          ? job.description
          : `${descriptionSnippet}${needsTruncation ? "..." : ""}`}
      </p>
      {needsTruncation && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-blue-600 dark:text-blue-400 hover:underline mt-4 font-semibold"
        >
          {isExpanded ? "Ver menos" : "Ver mais"}
        </button>
      )}
    </div>
  );
};

const UserProfile = () => {
  const {
    firstName,
    lastName,
    headline,
    summary,
    location,
    github,
    experience,
    education,
    certifications,
    publications,
  } = userProfileData;
  const skills = headline.split(" | ").map((skill) => skill.trim());

  return (
    <div className="min-h-screen w-full flex justify-center items-start pt-12 bg-gray-100 dark:bg-gray-900 transition-colors duration-200">
      <ThemeToggle />
      <div className="w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Card Principal */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl mb-8">
          <div className="bg-[url('https://media.licdn.com/dms/image/v2/D4D16AQHgQKoqy76eEw/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1683450209407?e=1760572800&v=beta&t=SBmWN1pqef-qRjSdrR61CG9Si9H_aUXP10xpPfohcis')]">
            <div className="bg-black/70 w-full h-full p-6">
              <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
                {/* Foto do GitHub */}
                <div className="flex-shrink-0">
                  <img
                    src={`https://github.com/${github}.png`}
                    alt={`${firstName} ${lastName}`}
                    className="w-32 h-32 rounded-full border-4 border-white shadow-lg transition-transform duration-300 hover:scale-105"
                  />
                </div>

                {/* Informações Principais */}
                <div className="flex-1 text-center md:text-left">
                  <h1 className="text-4xl font-bold text-white mb-2">{`${firstName} ${lastName}`}</h1>
                  <p className="text-xl text-blue-100">
                    {headline.split("|")[0].trim()}
                  </p>
                  <div className="flex items-center justify-center md:justify-start mt-3 text-blue-100">
                    <LocationIcon />
                    <span>{location}</span>
                  </div>
                  {/* Badges de Redes Sociais e Tecnologias */}
                  <div className="flex justify-center md:justify-start flex-wrap gap-2 mt-4">
                    <a href={`https://github.com/${github}`} target="_blank" rel="noopener noreferrer">
                      <img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" className="transition-transform duration-300 hover:scale-110"/>
                    </a>
                    <a href="https://www.linkedin.com/in/kauamcosta/" target="_blank" rel="noopener noreferrer">
                      <img src="https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" className="transition-transform duration-300 hover:scale-110"/>
                    </a>
                    <a href="https://www.instagram.com/kauam_zito/" target="_blank" rel="noopener noreferrer">
                      <img src="https://img.shields.io/badge/Instagram-%23E4405F.svg?style=for-the-badge&logo=Instagram&logoColor=white" alt="Instagram" className="transition-transform duration-300 hover:scale-110"/>
                    </a>
                    <a href="https://www.postman.com/" target="_blank" rel="noopener noreferrer">
                      <img src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white" alt="Postman" className="transition-transform duration-300 hover:scale-110"/>
                    </a>
                     <a href="https://www.docker.com/" target="_blank" rel="noopener noreferrer">
                      <img src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white" alt="Docker" className="transition-transform duration-300 hover:scale-110"/>
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
                Sobre
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {summary}
              </p>
            </div>

            {/* Seção de Habilidades */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2 mb-4">
                Habilidades
              </h2>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
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
                Experiência Profissional
              </h2>
              <div className="space-y-6">
                {experience.map((job, index) => (
                  <ExperienceItem key={index} job={job} />
                ))}
              </div>
            </div>

            {/* Seção de Formação */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2 mb-4">
                Formação Acadêmica
              </h2>
              <div className="space-y-6">
                {education.map((edu, index) => (
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
                ))}
              </div>
            </div>

            {/* Seção de Certificações */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2 mb-4">
                Certificações
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
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
                      {cert.issuer} · <span className="italic font-bold">Certificação emitida em </span> {cert.date}
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Seção de Publicações */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2 mb-4">
                Publicações
              </h2>
              <div className="space-y-6">
                {publications.map((pub, index) => (
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
