export type TechnologyCategory =
  | "Frontend"
  | "Backend"
  | "Banco de Dados"
  | "Cloud"
  | "DevOps"
  | "Ferramentas";

export type TechnologyIcon =
  | "layout"
  | "rocket"
  | "braces"
  | "palette"
  | "server"
  | "blocks"
  | "waypoints"
  | "database"
  | "git-branch"
  | "zap"
  | "cloud"
  | "cpu"
  | "container"
  | "workflow"
  | "pen-tool"
  | "send"
  | "notebook"
  | "layers"
  | "route"
  | "file-code";

type Technology = {
  name: string;
  description: string;
  icon: TechnologyIcon;
};

type Certification = {
  name: string;
  institution: string;
  date: string;
  certificateUrl?: string;
  credencial?: string;
};

export const aboutContent = {
  intro:
    "Sou Desenvolvedor Full Stack e estudante de Engenharia de Software, com experiência no desenvolvimento de aplicações web utilizando React, Node.js, TypeScript e APIs REST.",

  trajectory:
    "Desde 2023, venho construindo experiência prática por meio de estágios e projetos freelance, atuando no desenvolvimento de aplicações, integração de sistemas, criação de APIs, dashboards e implantação de soluções em ambientes cloud.",

  objectives:
    "Busco evoluir continuamente como desenvolvedor, aprofundando meus conhecimentos em arquitetura de software, computação em nuvem e boas práticas de engenharia para construir soluções escaláveis, eficientes e de fácil manutenção.",

  highlights: [
    "Aprendizado contínuo e adaptação rápida — facilidade para absorver novas tecnologias e me adaptar a diferentes stacks e contextos de projeto.",
    "Base sólida em fundamentos — formação em Engenharia de Software, com foco em arquitetura de software, estrutura de dados e boas práticas de desenvolvimento.",
    "Visão prática de suporte e produção — experiência com análise de incidentes, troubleshooting e suporte técnico, proporcionando uma visão mais completa do ciclo de vida de um sistema.",
    "Colaboração e organização — atuação em ambientes ágeis (Scrum), aplicando Clean Code, versionamento com Git/GitHub e boas práticas de desenvolvimento.",
  ],

  philosophy:
    "Acredito que um bom desenvolvimento nasce da combinação entre aprendizado contínuo, atenção aos detalhes técnicos e comunicação clara com o time. Busco criar soluções bem estruturadas, fáceis de manter e que gerem valor para usuários e negócios.",
};

export const technologyCategories: Array<{
  category: TechnologyCategory;
  items: Technology[];
}> = [
  {
  category: "Frontend",
items: [
  {
    name: "React",
    description: "Desenvolvimento de interfaces modernas, componentizadas e responsivas.",
    icon: "layout",
  },
  {
    name: "Redux",
    description: "Gerenciamento de estado para aplicações React.",
    icon: "layers",
  },
  {
    name: "React Router",
    description: "Gerenciamento de rotas em aplicações SPA.",
    icon: "route",
  },
  {
    name: "TypeScript",
    description: "Tipagem estática para maior segurança e manutenibilidade do código.",
    icon: "braces",
  },
  {
    name: "JavaScript",
    description: "Linguagem base para o desenvolvimento de aplicações web.",
    icon: "file-code",
  },
  {
    name: "Tailwind CSS",
    description: "Estilização rápida e consistente para interfaces modernas.",
    icon: "palette",
  },
],
  },
   {
  category: "Backend",
  items: [
    {
      name: "Node.js",
      description: "Runtime JavaScript para desenvolvimento de aplicações backend.",
      icon: "server",
    },
    {
      name: "Express",
      description: "Framework minimalista para criação de APIs e servidores web.",
      icon: "blocks",
    },
    {
      name: "APIs REST",
      description: "Desenvolvimento de APIs RESTful com boas práticas e arquitetura escalável.",
      icon: "waypoints",
    },
  ],
  },
  {
   category: "Banco de Dados",
  items: [
    {
      name: "PostgreSQL",
      description: "Banco de dados relacional utilizado para aplicações robustas e escaláveis.",
      icon: "database",
    },
    {
      name: "SQL",
      description: "Criação de consultas, manipulação de dados e modelagem de bancos relacionais.",
      icon: "database",
    },
    {
      name: "Prisma",
      description: "ORM tipado utilizado para integração com PostgreSQL e gerenciamento de migrações.",
      icon: "git-branch",
    },
  ],

  },
  {
      category: "Cloud",
  items: [
    {
      name: "AWS",
      description: "Conhecimento em serviços de nuvem para hospedagem e infraestrutura.",
      icon: "cloud",
    },
    {
      name: "Google Cloud",
      description: "Experiência com serviços de computação em nuvem.",
      icon: "cpu",
    },
    
    {
      name: "Vercel",
      description: "Deploy contínuo e hospedagem de aplicações Next.js e React.",
      icon: "cloud",
    },
  ],
  },
  {
    category: "DevOps",
    items: [
      { name: "Docker", description: "Ambientes consistentes e portáveis", icon: "container" },
      { name: "GitHub Actions", description: "CI/CD com automação de qualidade", icon: "workflow" },
    ],
  },
  {
    category: "Ferramentas",
  items: [
    {
      name: "Git",
      description: "Controle de versão, gerenciamento de branches e fluxo de desenvolvimento.",
      icon: "git-branch",
    },
    {
      name: "GitHub",
      description: "Hospedagem de repositórios, colaboração e versionamento de código.",
      icon: "git-branch",
    },
    {
      name: "Postman",
      description: "Testes, validação e documentação de APIs.",
      icon: "send",
    },
    {
      name: "Figma",
      description: "Prototipação de interfaces e colaboração com designers.",
      icon: "pen-tool",
    },
    {
      name: "Trello",
      description: "Organização de tarefas e gerenciamento ágil de projetos.",
      icon: "workflow",
    },
    {
      name: "Notion",
      description: "Documentação técnica e organização de projetos.",
      icon: "notebook",
    },
    {
      name: "Power BI",
      description: "Criação de dashboards e análise de dados.",
      icon: "blocks",
    },
  ],
  },
];

export const experiences = [
  {
    company: "Compass UOL",
    role: "Desenvolvedor Full Stack",
    period: "MAR 2025 - Atual",
    technologies: ["React", "Redux", "TypeScript", "Node.js", "Express", "Docker" , "AWS"],
    responsibilities: [
      "Desenvolvimento de aplicações web com React, Redux e TypeScript, criando interfaces responsivas e componentizadas.",
      "Criação e manutenção de APIs RESTful com Node.js e Express, integrando front-end e back-end.",
      "Deploy de aplicações na AWS (EC2) utilizando Docker para padronização de ambiente.",
      "Análise de incidentes e suporte na identificação e resolução de falhas em sistemas.",
      "Validação de funcionalidades e apoio em testes manuais antes de releases.",
      'Atuação em metodologias ágeis (Scrum), aplicando boas práticas de Clean Code.',
    ],
  },
  {
    company: "SECITEC",
    role: "Estágio em Desenvolvimento",
    period: "AGO 2023 - AGO 2024",
    technologies: ["React", "Node.js", "TypeScript", "Power BI", "Git"],
    responsibilities: [
      "Desenvolvimento e manutenção de sistemas internos com React, Node.js e TypeScript.",
      "Criação de dashboards integrados ao Power BI para apoio na análise de dados e indicadores.",
      "Suporte técnico a sistemas e usuários internos, com atendimento a demandas e resolução de problemas.",
      "Controle de versão e organização de entregas com Git/GitHub.",
      "Implementação de novas funcionalidades e melhorias em aplicações existentes.",
    ],
  },
  {
    company: "Freelancer",
    role: "Projetos Autônomos",
    period: "2023 - Atual",
    technologies: ["React", "Redux", "TypeScript", "Node.js", "Express", "Docker" , "AWS"],
    responsibilities: [
      "Desenvolvimento de sistema para a Secretaria de Turismo de João Pessoa (SETUR).",
      "Construção do site institucional do projeto Academia da Cidade, da Prefeitura de João Pessoa.",
      "Apoio no desenvolvimento da plataforma Qualifica cursos, voltada para cursos gratuitos oferecidos pela prefeitura de João Pessoa.",
      "Apoio na análise de requisitos, automação e otimização de processos digitais.",
    ],
  },
];

export const certifications: Certification[] = [
  {
    name: "AWS Certified Cloud Practitioner",
    institution: "Amazon Web Services",
    date: "2025",
    certificateUrl: "https://cp.certmetrics.com/amazon/en/public/verify/credential",
    credencial: "08bd304f9b214360b7756649784564e5",
  },
  {
    name: "Google Cloud Computing Foundations",
    institution: "Google Cloud",
    date: "2026",
    certificateUrl: "https://www.credly.com/earner/earned/badge/e3333cf3-eeb3-405d-bec8-836a51afb295",
  },
  {
    name: "Github Actions - Em andamento",
    institution: "GitHub - Microsoft",
    date: "2026",
  },
  {
    name: "Suporte Técnico",
    institution: "Google / Coursera",
    date: "2022",
    certificateUrl: "https://www.coursera.org/account/accomplishments/certificate/H6TRWTGCSMUV",
  },
];

export const education = [
  {
    course: "Engenharia de Software",
    institution: "Unicesumar",
    period: "2022 - 2026",
    status: "Em andamento",
  },
];

export const skills = {
  hard: [
    "React / Redux",
    "Node.js / Express",
    "APIs REST",
    "TypeScript",
    "Banco de Dados SQL / PostgreSQL",
    "AWS / Google Cloud",
    "Docker / CI/CD",
    "Git / GitHub",
    "Power BI",
    "Postman",
    "Figma",
  ],
  soft: [
    "Comunicação clara",
    "Pensamento analítico e crítico",
    "Colaboração em equipe",
    "Senso de organização",
    "Ownership",
    "Resolução de problemas",
    "Adaptabilidade",
  ],
};

export const profile = {
  name: "Lucas Vasconcelos",
  role: "Full Stack Developer",
  email: "lucasvasconcelos1202@gmail.com",
  whatsappUrl: "https://wa.me/5583981052397",
  linkedinUrl: "https://www.linkedin.com/in/lucasvasconcelos1202/",
  githubUrl: "https://github.com/lucasvass1",
  resumeUrl: "/Lucas_Vasconcelos_Curriculo.pdf",
  availability: "Disponível para novos projetos",
  roles: [
    "Full Stack Developer",
    "Desenvolvedor React & Node.js",
    "Integração de APIs REST",
    "Deploy em Cloud (AWS/GCP)",
  ],
};
