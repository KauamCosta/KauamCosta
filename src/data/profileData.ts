export type Language = "pt" | "en";

export interface Education {
  degree: string;
  school: string;
  period: string;
  activities: string;
}

export interface Experience {
  role: string;
  company: string;
  type: string;
  period: string;
  location: string;
  description: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  link: string;
}

export interface Publication {
  title: string;
  publisher: string;
  date: string;
  description: string;
  link: string;
}

export interface Translation {
  about: string;
  skills: string;
  experience: string;
  education: string;
  certifications: string;
  issuedOn: string;
  publications: string;
  seeMore: string;
  seeLess: string;
  fullTime: string;
  remote: string;
  profile: {
    firstName: string;
    lastName: string;
    headline: string;
    location: string;
    industry: string;
    github: string;
    summary: string;
    experience: Experience[];
    education: Education[];
    certifications: Certification[];
    publications: Publication[];
  };
}

export interface UserProfile {
  firstName: string;
  lastName: string;
  headline: string;
  summary: string;
  location: string;
  industry: string;
  github: string;
  experience: Experience[];
  education: Education[];
  certifications: Certification[];
  publications: Publication[];
}

export const translations = {
  pt: {
    // UI texts
    about: "Sobre",
    skills: "Habilidades",
    experience: "Experiência Profissional",
    education: "Formação Acadêmica",
    certifications: "Certificações",
    publications: "Publicações",
    seeMore: "Ver mais",
    seeLess: "Ver menos",
    issuedOn: "Certificação emitida em",
    fullTime: "Tempo integral",
    remote: "Remota",

    // Profile data
    profile: {
      firstName: "Kauam",
      lastName: "da Silva Costa",
      headline: "QA Engineer | Automation | DevOps | Postman | Robot | Appium",
      location: "Curitiba, Paraná, Brasil",
      industry: "IT Services and IT Consulting",
      github: "KauamCosta",
      summary:
        "Facilidade de comunicação e relacionamento interpessoal e em trabalhar em equipe. Disponibilidade de manhã e tarde. Gosto muito de tecnologia, sempre procurando aprender coisas novas, gosto da área desde mais novo, obtendo assim bastante afinidade com a TI.",
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
          name: "Estudo piloto da medição da frequência cardíaca por meio de aplicativos em smartphones",
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
    },
  },
  en: {
    // UI texts
    about: "About",
    skills: "Skills",
    experience: "Professional Experience",
    education: "Education",
    certifications: "Certifications",
    publications: "Publications",
    seeMore: "See more",
    seeLess: "See less",
    issuedOn: "Issued on",
    fullTime: "Full-time",
    remote: "Remote",

    // Profile data
    profile: {
      firstName: "Kauam",
      lastName: "da Silva Costa",
      headline: "QA Engineer | Automation | DevOps | Postman | Robot | Appium",
      location: "Curitiba, Paraná, Brazil",
      industry: "IT Services and IT Consulting",
      github: "KauamCosta",
      summary:
        "Strong communication skills and interpersonal relationships, with excellent teamwork abilities. Available morning and afternoon. Passionate about technology, always seeking to learn new things. I've been interested in the IT field since I was young, thus developing a strong affinity with technology.",
      experience: [
        {
          company: "MJV Technology & Innovation",
          role: "Software Quality Assurance Analyst",
          period: "Jul 2024 - Present",
          location: "Remote",
          type: "Full-time",
          description: "",
        },
        {
          company: "epharma PBM phygital",
          role: "Senior Test Automation Analyst",
          period: "Sep 2022 - May 2024",
          location: "Curitiba, Paraná, Brazil",
          type: "Full-time",
          description:
            "Implementation and structuring of back-end and front-end automated tests, conducting analysis, development, and execution of manual and automated tests using Azure DevOps. Execution of tests on Web and desktop systems, working with developers and product owners for solutions, using agile methodology (Scrum, Kanban, BDD). Creation and execution of queries for database insertion and searches (Oracle, MySQL, Postgres). Service testing using Postman and SoapUI tools (REST API). Always developing skills in leadership, communication, interpersonal relationships, systemic vision, resilience, innovation, planning and organization, focus and attention, cooperation and team vision, proactivity, training, and development. Participation in defining software development and quality processes, structuring automation implementation, and monitoring the gathering and definition of requirements for other tests, contributing to documentation of routines, business rules, and client usage procedures based on requirements, also estimating time for new implementations. Creating and maintaining Test Plan/Strategy, assisting and supporting project activity development. Creation and execution of test scenarios via test plan always aiming at applying testing best practices using tools that help and optimize test specification and execution. Bug reporting with evidence generation, and monitoring to identify and fix root causes with developers regardless of environment (Staging, UAT/Quality, Pre-Production, and Production). Using methodological tools most appropriate to client strategy maintaining an active exchange between Manual and Automated Tests (Robot Framework).",
        },
        {
          company: "Prime Control",
          role: "Test Analyst",
          period: "Sep 2019 - Aug 2022",
          location: "Curitiba, Paraná, Brazil",
          type: "Full-time",
          description:
            "Assisted in implementing automated testing processes for 3 clients. Analysis, development, and execution of tests using HP ALM (Application Lifecycle Management), MS TM, HipTest, AssertThat, JIRA, Jenkins. Execution of tests on Web and desktop systems, interacting with architects, functional analysts, coordinators, scrum masters, developers, and managers for solutions, using agile methodology (Scrum, Kanban, BDD). Creation and execution of queries for database insertion and searches (Oracle, MS SQL Server, MySQL, Postgres). Service testing using Postman and SoapUI tools. Use of communication tools (Slack, Skype, and Microsoft Teams). Always developing skills in leadership, communication, interpersonal relationships, systemic vision, resilience, innovation, planning and organization, focus and attention, cooperation and team vision, proactivity, training, and development. Participation in defining software development and quality processes, monitoring requirements gathering and definition, contributing to documentation of routines, business rules, and client usage procedures based on requirements. Creating and maintaining Test Plan/Strategy, assisting and supporting project activity development. Creation and execution of test scenarios through tools implemented at clients (Telefônica, Boticário, WERT Solutions, and ePharma) always aiming at applying testing best practices using tools that help and optimize test specification and execution. Bug reporting with evidence generation, and monitoring to identify and fix root causes with developers regardless of environment (Staging, UAT/Quality, Pre-Production, and Production). Using methodological tools most appropriate to client strategy maintaining an active exchange between Manual and Automated Tests (Robot Framework).",
        },
      ],
      education: [
        {
          school: "UNINTER Centro Universitário Internacional",
          degree: "Bachelor's Degree in Computer Engineering",
          period: "2017 - 2021",
          activities:
            "PBL - Analysis of heart rate applications, Parking sensor",
        },
        {
          school: "SENAI",
          degree: "IT Technician",
          period: "2015 - 2016",
          activities: "Programming and Computer Maintenance - General",
        },
      ],
      certifications: [
        {
          name: "ISO 14001:2015",
          issuer: "Universidade ePharma",
          date: "Sep 2022",
          link: "https://drive.google.com/file/d/1xnu9ZxF4FMfdzzto8wOl4EY98dH3cuuQ/view",
        },
        {
          name: "ATDD, BDD, TDD Guide",
          issuer: "Prime Control",
          date: "Dec 2021",
          link: "https://drive.google.com/file/d/1WbAJIEKY0jgt4ouUoO7Nd06pVWYogYI8/view",
        },
        {
          name: "Advanced Test Automation with Robot Framework",
          issuer: "Udemy",
          date: "Nov 2021",
          link: "https://udemy-certificate.s3.amazonaws.com/image/UC-f04e8296-5719-49c3-a8b2-1ccd604e2b06.jpg",
        },
        {
          name: "Python Programming from Basic to Advanced",
          issuer: "Geek University",
          date: "Jul 2021",
          link: "https://udemy-certificate.s3.amazonaws.com/image/UC-30483cdb-f347-49e9-8d1c-d5634cfc56f0.jpg?v=1625581534000",
        },
        {
          name: "Basic Test Automation with Robot Framework",
          issuer: "Udemy",
          date: "Oct 2020",
          link: "https://udemy-certificate.s3.amazonaws.com/image/UC-fe2e76d3-e664-4bbb-8ec7-8a351d0eefbd.jpg?v=1602263659000",
        },
        {
          name: "Memory Game to Aid People with Memory Difficulties or Alzheimer's",
          issuer: "CONTECC 2019",
          date: "Jul 2019",
          link: "https://www.confea.org.br/sites/default/files/uploads-imce/Contecc2019/El%C3%A9trica/JOGO%20DA%20MEMORIA%20PARA%20AUXILIO%20DAS%20PESSOAS%20COM%20DIFICULDADE%20DE%20MEMORIA%20OU%20MAL%20DE%20ALZHEIMER.pdf",
        },
        {
          name: "Pilot Study of Heart Rate Measurement Through Smartphone Applications",
          issuer: "SEB - Biomedical Engineering Symposium",
          date: "Aug 2018",
          link: "https://drive.google.com/file/d/1zKoDsSA9Cz609lFLcmY2U1iOApY7GVEy/view",
        },
      ],
      publications: [
        {
          title: "Multidisciplinary Engineering Vol. 2",
          publisher: "Editora Pascal",
          date: "Sep 10, 2020",
          description:
            "Participation in Chapter 12 of the book, presenting a compilation of projects from different engineering fields.",
          link: "https://editorapascal.com.br/2020/09/10/livro-engenharia-multidisciplinar-vol-02/",
        },
        {
          title:
            "Memory Game to Aid People with Memory Difficulties or Alzheimer's",
          publisher: "CONTECC 2019",
          date: "Jul 2, 2019",
          description:
            "This article presents a project developed as a Problem-Based Learning (PBL) project in the fourth semester of the Computer Engineering course at UNINTER. It consists of prototyping a device based on the Genius game, which tests the player's cognitive abilities, to be used as an aid in treating memory dysfunctions or Alzheimer's. The system developed is based on the Arduino platform and reproduces the operation of the Genius game, with modifications that include a new mechanical design and a display for showing messages. The results present tests of the built prototype indicating the possibility of its use for memorization exercises.",
          link: "https://drive.google.com/file/d/0B4urygqFd5wKZzFObzYzbjVsMlpBby1ERWlGTFNDaW1sZ0lZ/view?resourcekey=0-lqXpDjMlvgX8_2Bx7lEGLA",
        },
      ],
    },
  },
} as const;
