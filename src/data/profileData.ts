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

export interface TechnicalProject {
  name: string;
  scope: string;
  description: string;
  contribution: string;
  stack: string[];
}

export interface Translation {
  about: string;
  skills: string;
  experience: string;
  projects: string;
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
    projects: TechnicalProject[];
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
  projects: TechnicalProject[];
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
    projects: "Projetos Técnicos",
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
      headline: "Software Engineer | QA Automation Specialist | TypeScript & Node.js | DevOps & Quality Assurance",
      location: "Curitiba, Paraná, Brasil",
      industry: "IT Services and IT Consulting",
      github: "KauamCosta",
      summary:
        "Engenheiro de Computação com sólida trajetória em Qualidade de Software e Automação. Uno a visão analítica de QA ao desenvolvimento de aplicações em TypeScript e Node.js, sempre focando em testabilidade, escalabilidade e redução de falhas.\n\nPrincipais Conquistas e Competências:\n- Ecossistemas regulados: Experiência em testes de integração de APIs no Open Finance e em jornadas E2E do Open Insurance, com análise de logs, evidências e rastreabilidade dos resultados.\n- Automação de Qualidade: Estruturei processos e arquiteturas de automação com Robot Framework, atualmente aplicados à migração dos portais médicos da Novamed.\n- Engenharia orientada à qualidade: Desenvolvimento em TypeScript com testes de integração sobre bancos reais, APIs e fluxos resilientes a concorrência e falhas.\n- Qualidade Técnica: Experiência avançada em testes de API REST (Postman/SoapUI) e manipulação de múltiplos bancos de dados, incluindo Oracle, MySQL, Postgres e SQL Server.\n- Cobertura Multiplataforma: Atuação em testes Web, Mobile, Desktop, serviços, integração, regressão, acessibilidade e compatibilidade entre navegadores.",
      experience: [
        {
          company: "MJV Technology & Innovation",
          role: "Analista de garantia da qualidade de software",
          period: "jul de 2024 — atualmente",
          location: "Remota",
          type: "Tempo integral",
          description:
            "Atuação em projetos de qualidade para ecossistemas financeiros, de seguros e saúde, cobrindo integrações, jornadas digitais, evidências e automação.\n\nOpen Finance: Execução de testes de integração de APIs e validação da transição de dados entre instituições, com análise de logs, identificação de falhas e geração de evidências para apoiar as correções.\n\nOpen Insurance: Testes E2E dos portais das seguradoras participantes em diferentes jornadas e modalidades de seguro. Planejamento e condução de sessões conjuntas e bilaterais para validar navegabilidade, integrações e transferência de dados, com captura de logs e evidências anonimizadas. Análise de indicadores e dados voluntários, criação de gráficos, mapeamento de combinações e rastreabilidade dos resultados em Jira, Cicle e Service Desk. Preparação de reports para o cliente, acompanhamento de chamados, organização de materiais no SharePoint e revisão dos guias de experiência da SUSEP.\n\nNovamed: Atuação atual na migração dos portais médicos para uma nova plataforma. Elaboração da estratégia de testes e de cenários em Gherkin; planejamento e execução de testes funcionais, E2E, de serviço, integração, regressão, aceite, cross-browser e acessibilidade; gestão de defeitos, retestes e evidências. Implementação da automação do novo portal em Robot Framework, reutilizando e evoluindo a arquitetura criada em 2024.",
        },
        {
          company: "epharma PBM phygital",
          role: "Analista de teste de automação pleno",
          period: "set de 2022 - mai de 2024",
          location: "Curitiba, Paraná, Brasil",
          type: "Tempo integral",
          description:
            "Atuação estratégica na estruturação e implementação de processos de qualidade de software, com foco em automação multiplataforma (Web, Mobile e Desktop) e integridade de dados.\n\nCobertura Total de Testes: Elaborei e ajudei a liderança com uma estratégia que resultou em 100% de cobertura de testes automatizados (Frontend e API) para os portais da companhia, eliminando falhas críticas em produção.\nAutomação Mobile: Implementação e execução de testes automatizados para aplicativos móveis utilizando Appium, garantindo a qualidade e a performance da experiência do usuário em diferentes dispositivos.\nEstruturação com Robot Framework: Responsável pela criação de frameworks de automação utilizando Robot Framework, garantindo a estabilidade e escalabilidade das suítes de teste.\nIntegração CI/CD: Elaboração e execução de testes integrados à ferramenta Azure DevOps, otimizando o fluxo de deploys e a identificação precoce de bugs.\nValidação Técnica de APIs: Execução de testes de serviços com Postman e SoapUI (API REST), assegurando a correta integração entre sistemas.\nManipulação de Dados: Elaboração de queries para pesquisa e inserção em bancos de dados Oracle, MySQL e Postgres, validando regras de negócio complexas diretamente na persistência.\nCultura Ágil e BDD: Atuação em times multidisciplinares sob metodologias Scrum e Kanban, utilizando BDD para alinhar a visão técnica com os requisitos de negócio.",
        },
        {
          company: "Prime Control",
          role: "Analista de testes",
          period: "set de 2019 - ago de 2022",
          location: "Curitiba, Paraná, Brasil",
          type: "Tempo integral",
          description:
            "Atuação como consultor técnico em projetos estratégicos de garantia de qualidade, sendo responsável pela modernização e implementação de processos de teste em clientes de grande porte.\n\nImplementação de Automação: Liderei o auxílio na implantação do processo de teste automatizado para 3 clientes distintos, reduzindo o esforço manual e aumentando a confiabilidade das entregas.\nAtuação em Grandes Contas: Responsável pela criação e execução de cenários de testes para empresas líderes de mercado como Telefônica (Vivo) e O Boticário, além de WERT Solutions e ePharma.\nTestes Multiplataforma: Execução de testes em sistemas Web e Desktop, garantindo a qualidade de interfaces e fluxos de usuário complexos.\nEspecialista em APIs e Dados: Realização de testes de serviços via Postman e SoapUI, com suporte técnico avançado em bancos de dados (Oracle, MS SQL Server, MySQL e Postgres) para inserção e validação de dados.\nGestão de Ciclo de Vida (ALM): Domínio de ferramentas de gestão e automação como HP ALM, MS TM, JIRA e Jenkins para integração contínua.\nColaboração Estratégica: Interação direta com arquitetos, desenvolvedores, Scrum Masters e gerentes para definição de soluções técnicas e melhoria de processos internos.\nCultura Ágil: Atuação ativa com metodologias Scrum, Kanban e BDD, contribuindo desde o levantamento de requisitos até a documentação de regras de negócio e planos de testes.\nAnálise de Causa Raiz: Gestão completa do ciclo de bugs, desde a abertura até a identificação da causa raiz em ambientes de Homologação, UAT, Pré-Produção e Produção.",
        },
        {
          company: "Toni Toys",
          role: "Auxiliar de TI",
          period: "mar de 2019 - set de 2019",
          location: "Curitiba e Região, Brasil",
          type: "Tempo integral",
          description:
            "Responsável pelo suporte tecnológico centralizado de uma rede de varejo, garantindo a continuidade operacional e a integridade dos dados em múltiplos estados.\n\nEscala de Atendimento: Prestação de suporte técnico (remoto e presencial) para 27 filiais distribuídas em 4 estados (PR, SC, SP e MS).\nGestão de Infraestrutura: Responsável direto pela infraestrutura de TI e pelo suporte ao sistema ERP das unidades de negócio.\nInteligência de Dados: Resolução de inconsistências em banco de dados FireBird e extração de dados para geração de relatórios estratégicos para a central, suprindo limitações do sistema principal.\nOperação Fiscal: Gerenciamento e manutenção de periféricos críticos, incluindo pinpads (TEF/POS) e impressoras fiscais em toda a rede.\nAdaptabilidade Operacional: Atuação multidisciplinar no setor de logística, auxiliando no controle de estoque, correção de cadastros e gestão de produtos avariados por fornecedor.",
        },
        {
          company: "Prefeitura Municipal de Pinhais",
          role: "Estagiário",
          period: "jun de 2018 - mar de 2019",
          location: "Pinhais, Paraná, Brasil",
          type: "Estágio",
          description:
            "Atuação no suporte técnico e na manutenção da infraestrutura computacional, com foco na otimização de processos internos e na disponibilidade de sistemas para os servidores públicos.\n\nDesenvolvimento de software: Criei uma aplicação para automatizar a instalação de softwares padrão, identificando o sistema operacional e instalando os pacotes necessários para reduzir o tempo de preparação das máquinas.\nManutenção técnica: Realizei manutenção preventiva e corretiva (software e hardware) em computadores de uso público, garantindo o funcionamento contínuo dos serviços.\nGestão de ativos: Fui responsável pela tramitação e organização física e lógica dos equipamentos de informática da prefeitura.",
        },
        {
          company: "Secretaria de Estado de Segurança Pública e Administração Penitenciária do Paraná",
          role: "Estagiário",
          period: "jul de 2016 - dez de 2016",
          location: "Curitiba, Paraná, Brasil",
          type: "Estágio",
          description:
            "Atuação no suporte administrativo e gestão de fluxos de trabalho internos da secretaria, com foco na organização e precisão documental.\n\nOrganização de Processos: Gestão e tramitação de processos administrativos, garantindo a celeridade e a conformidade dos fluxos entre departamentos.\nControle de Informações: Responsável pelo preenchimento e manutenção de planilhas de controle, assegurando a integridade e a atualização dos dados registrados.\nGestão de Arquivos: Organização e tramitação de arquivos e documentos oficiais, facilitando o acesso e a consulta interna.",
        },
      ],
      projects: [
        {
          name: "CSRC",
          scope: "SaaS multi-organização",
          description:
            "Plataforma de eventos e automobilismo com aplicação web, API tipada e persistência geoespacial. Minha atuação conectou desenvolvimento de produto e engenharia de qualidade.",
          contribution:
            "Testes de integração com PostgreSQL/PostGIS real, fluxos de comércio concorrentes, recuperação idempotente de reembolsos e fundação de marketplace de fotos.",
          stack: ["TypeScript", "React", "API REST", "PostgreSQL/PostGIS", "Docker"],
        },
        {
          name: "Synechat",
          scope: "Comunicação em tempo real",
          description:
            "Aplicação web e desktop para comunidades, mensagens, voz e compartilhamento de mídia, construída em uma arquitetura TypeScript distribuída.",
          contribution:
            "Funcionalidades de perfis e mensagens, recorte de imagens e testes automatizados para sessões, autenticação, mídia e contratos compartilhados.",
          stack: ["TypeScript", "React", "Electron", "PostgreSQL", "Redis"],
        },
        {
          name: "BeamRP",
          scope: "Plataforma multiplayer",
          description:
            "Ecossistema de role-play que integra regras de jogo, dados de missões e uma interface web executada dentro do simulador.",
          contribution:
            "Evolução de sistemas e interfaces em Lua, TypeScript e React, com integrações entre gameplay, dados e experiência do usuário.",
          stack: ["Lua", "TypeScript", "React", "Vite", "Integrações"],
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
          activities: "Programação e manutenção de computadores — geral",
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
          name: "Jogo da memória para auxílio a pessoas com dificuldade de memória ou Alzheimer",
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
            "Jogo da memória para auxílio a pessoas com dificuldade de memória ou Alzheimer",
          publisher: "CONTECC 2019",
          date: "2 de jul de 2019",
          description:
            "Este artigo apresenta um trabalho desenvolvido como projeto de aprendizagem baseada em problemas (PBL – Problem Based Learning) no quarto período do curso presencial de Engenharia da Computação da UNINTER. Consiste na prototipagem de um dispositivo baseado no jogo Genius, que testa as capacidades cognitivas do jogador e pode auxiliar no tratamento de disfunções de memória ou Alzheimer. O sistema foi desenvolvido com a plataforma Arduino e reproduz a operação do jogo Genius, com modificações que incluem um novo projeto mecânico e um display para exibição de mensagens. Os resultados dos testes indicam a possibilidade de uso do protótipo em exercícios de memorização.",
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
    projects: "Technical Projects",
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
      headline: "Software Engineer | QA Automation Specialist | TypeScript & Node.js | DevOps & Quality Assurance",
      location: "Curitiba, Parana, Brazil",
      industry: "IT Services and IT Consulting",
      github: "KauamCosta",
      summary:
        "Computer Engineer with a solid background in Software Quality and Automation. I combine an analytical QA mindset with TypeScript and Node.js product development, focusing on testability, scalability, and defect reduction.\n\nKey Achievements and Skills:\n- Regulated ecosystems: Experience with API integration testing for Open Finance and E2E journeys for Open Insurance, including log analysis, evidence collection, and result traceability.\n- Quality Automation: Designed testing processes and automation architectures with Robot Framework, currently applied to the migration of Novamed's medical portals.\n- Quality-driven engineering: TypeScript development with integration tests against real databases, APIs, and flows resilient to concurrency and failures.\n- Technical Quality: Advanced experience in REST API testing (Postman/SoapUI) and multiple databases, including Oracle, MySQL, Postgres, and SQL Server.\n- Cross-platform Coverage: Experience testing Web, Mobile, Desktop, services, integrations, regression, accessibility, and cross-browser compatibility.",
      experience: [
        {
          company: "MJV Technology & Innovation",
          role: "Software Quality Assurance Analyst",
          period: "Jul 2024 - Present",
          location: "Remote",
          type: "Full-time",
          description:
            "Quality assurance work across financial, insurance, and healthcare ecosystems, covering integrations, digital journeys, evidence, and automation.\n\nOpen Finance: API integration testing and validation of data transitions between institutions, including log analysis, failure identification, and evidence collection to support fixes.\n\nOpen Insurance: E2E testing of participating insurers' portals across different journeys and insurance lines. Planned and facilitated joint and bilateral sessions to validate navigation, integrations, and data transfers, capturing logs and anonymized evidence. Analyzed indicators and voluntary data, created charts, mapped test combinations, and maintained result traceability in Jira, Cicle, and Service Desk. Prepared client reports, followed up on support tickets, organized SharePoint materials, and reviewed SUSEP experience guidelines.\n\nNovamed: Currently supporting the migration of medical portals to a new platform. Creates test strategies and Gherkin scenarios; plans and executes functional, E2E, service, integration, regression, acceptance, cross-browser, and accessibility tests; and manages defects, retests, and evidence. Implementing automation for the new portal with Robot Framework by reusing and evolving the architecture created in 2024.",
        },
        {
          company: "epharma PBM phygital",
          role: "Senior Test Automation Analyst",
          period: "Sep 2022 - May 2024",
          location: "Curitiba, Parana, Brazil",
          type: "Full-time",
          description:
            "Strategic actions in the structuring and implementation of software quality processes, focusing on multi-platform automation (Web, Mobile, and Desktop) and data integrity.\n\nTotal Test Coverage: Developed and assisted leadership with a strategy that resulted in 100% automated test coverage (Frontend and API) for the company's portals, eliminating critical production failures.\nMobile Automation: Implementation and execution of automated tests for mobile applications using Appium, ensuring quality and user experience performance across different devices.\nStructuring with Robot Framework: Responsible for creating automation frameworks using Robot Framework, ensuring stability and scalability of test suites.\nCI/CD Integration: Development and execution of integrated tests in Azure DevOps, optimizing deploy flow and early bug identification.\nTechnical API Validation: Execution of service tests with Postman and SoapUI (API REST), ensuring correct integration between systems.\nData Manipulation: Development of queries for searching and inserting in Oracle, MySQL, and Postgres databases, validating complex business rules directly in persistence.\nAgile Culture and BDD: Acting in multidisciplinary teams under Scrum and Kanban methodologies, using BDD to align technical vision with business requirements.",
        },
        {
          company: "Prime Control",
          role: "Test Analyst",
          period: "Sep 2019 - Aug 2022",
          location: "Curitiba, Parana, Brazil",
          type: "Full-time",
          description:
            "Worked as a technical consultant on strategic quality assurance projects, responsible for modernizing and implementing testing processes for large-scale clients.\n\nAutomation Implementation: Led assistance in the implementation of automated testing processes for 3 distinct clients, reducing manual effort and increasing delivery reliability.\nExperience with Major Accounts: Responsible for the creation and execution of test scenarios for market-leading companies such as Telefônica (Vivo) and O Boticário, as well as WERT Solutions and ePharma.\nMulti-platform Testing: Execution of tests on Web and Desktop systems, ensuring quality interfaces and complex user flows.\nAPI and Data Specialist: Execution of service tests via Postman and SoapUI, with advanced technical support in databases (Oracle, MS SQL Server, MySQL, and Postgres) for data insertion and validation.\nLife Cycle Management (ALM): Mastery of management and automation tools such as HP ALM, MS TM, JIRA, and Jenkins for continuous integration.\nStrategic Collaboration: Direct interaction with architects, developers, Scrum Masters, and managers to define technical solutions and internal process improvements.\nAgile Culture: Active participation in Scrum, Kanban, and BDD methodologies, contributing from requirements gathering to business rules documentation and test plans.\nRoot Cause Analysis: Complete management of the bug cycle, from opening to root cause identification in Staging, UAT, Pre-Production, and Production environments.",
        },
        {
          company: "Toni Toys",
          role: "IT Assistant",
          period: "Mar 2019 - Sep 2019",
          location: "Curitiba and Region, Brazil",
          type: "Full-time",
          description:
            "Responsible for centralized technological support for a retail network, ensuring operational continuity and data integrity across multiple states.\n\nService Scale: Provision of technical support (remote and in-person) for 27 branches distributed across 4 states (PR, SC, SP, and MS).\nInfrastructure Management: Directly responsible for IT infrastructure and support for the business units' ERP system.\nData Intelligence: Resolution of inconsistencies in FireBird database and data extraction to generate strategic reports for the central, covering limitations of the main system.\nFiscal Operation: Management and maintenance of critical peripherals, including pinpads (TEF/POS) and thermal printers across the network.\nOperational Adaptability: Multidisciplinary performance in the logistics sector, assisting in inventory control, registration correction, and management of damaged products by supplier.",
        },
        {
          company: "Municipality of Pinhais",
          role: "Intern",
          period: "Jun 2018 - Mar 2019",
          location: "Pinhais, Parana, Brazil",
          type: "Internship",
          description:
            "Acting in technical support and maintenance of computational infrastructure, focusing on optimizing internal processes and system availability for public servants.\n\nSoftware Development: Created an application for automating standard software installation, which identified the operating system and installed necessary packages, optimizing machine preparation time.\nTechnical Maintenance: Performance of preventive and corrective maintenance (software and hardware) on public-use computers, ensuring continuous service operation.\nAsset Management: Responsible for the physical and logical organization and processing of the municipality's IT equipment.",
        },
        {
          company: "SESP-PR (State Secretariat for Public Safety and Penitentiary Administration)",
          role: "Intern",
          period: "Jul 2016 - Dec 2016",
          location: "Curitiba, Parana, Brazil",
          type: "Internship",
          description:
            "Acting in administrative support and management of internal secretary workflows, focusing on organization and document accuracy.\n\nProcess Organization: Management and processing of administrative procedures, ensuring speed and compliance of flows between departments.\nInformation Control: Responsible for filling and maintaining control spreadsheets, ensuring integrity and updating of recorded data.\nFile Management: Physical and digital organization and processing of official files and documents, facilitating access and internal consultation.",
        },
      ],
      projects: [
        {
          name: "CSRC",
          scope: "Multi-organization SaaS",
          description:
            "Motorsport events platform with a web application, typed API, and geospatial persistence. My contribution connected product development with quality engineering.",
          contribution:
            "Integration tests against real PostgreSQL/PostGIS, concurrent commerce flows, idempotent refund recovery, and the foundation of a photo marketplace.",
          stack: ["TypeScript", "React", "REST API", "PostgreSQL/PostGIS", "Docker"],
        },
        {
          name: "Synechat",
          scope: "Real-time communication",
          description:
            "Web and desktop community platform for messaging, voice, and media sharing, built on a distributed TypeScript architecture.",
          contribution:
            "Profile and messaging features, image cropping, and automated tests covering sessions, authentication, media, and shared contracts.",
          stack: ["TypeScript", "React", "Electron", "PostgreSQL", "Redis"],
        },
        {
          name: "BeamRP",
          scope: "Multiplayer platform",
          description:
            "Role-play ecosystem integrating game rules, mission data, and a web interface running inside the simulator.",
          contribution:
            "Evolved systems and interfaces in Lua, TypeScript, and React, integrating gameplay, data, and the user experience.",
          stack: ["Lua", "TypeScript", "React", "Vite", "Integrations"],
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
