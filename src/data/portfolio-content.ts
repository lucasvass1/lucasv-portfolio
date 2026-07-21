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

export type ProjectStatus =
  | "Em Produção"
  | "Em Desenvolvimento"
  | "Em Construção"
  | "Finalizado"
  | "Arquivado";

export type ProjectCategory =
  | "Frontend"
  | "Backend"
  | "Full Stack"
  | "DevOps"
  | "Mobile"
  | "Outros";

type Technology = {
  name: string;
  description: string;
  icon: TechnologyIcon;
};

export type PortfolioProject = {
  name: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  status: ProjectStatus;
  year: string;
  category: ProjectCategory;
  demoUrl: string;
  githubUrl: string;
  featured: boolean;
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

export const allProjects: PortfolioProject[] = [
  {
    name: "SaaS Analytics Platform",
    description:
      "Plataforma full stack para acompanhamento de métricas de produto com dashboards em tempo real, autenticação e permissões por equipe.",
    imageUrl: "/projects/saas-analytics.svg",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Tailwind"],
    status: "Em Produção",
    year: "2026",
    category: "Full Stack",
    demoUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    name: "DevOps Insight Hub",
    description:
      "Painel para monitoramento de pipelines e qualidade de deploy, com alertas e visualização histórica para times de engenharia.",
    imageUrl: "/projects/devops-insight.svg",
    technologies: ["React", "Node.js", "Docker", "GitHub Actions"],
    status: "Em Desenvolvimento",
    year: "2026",
    category: "DevOps",
    demoUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    name: "Finance Flow Manager",
    description:
      "Aplicação de gestão financeira com foco em UX, categorização inteligente de transações e metas com indicadores interativos.",
    imageUrl: "/projects/finance-flow.svg",
    technologies: ["Next.js", "React Hook Form", "Zod", "Framer Motion"],
    status: "Finalizado",
    year: "2025",
    category: "Frontend",
    demoUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    name: "API Gateway Commerce",
    description:
      "Gateway para integração de pagamentos, pedidos e estoque com observabilidade e segurança para operações de e-commerce.",
    imageUrl: "/projects/api-gateway.svg",
    technologies: ["NestJS", "TypeScript", "PostgreSQL", "Redis"],
    status: "Em Produção",
    year: "2025",
    category: "Backend",
    demoUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    name: "Mobile Habit Tracker",
    description:
      "Aplicativo de hábitos com gamificação, lembretes inteligentes e sincronização com backend para acompanhamento de evolução.",
    imageUrl: "/projects/mobile-habit.svg",
    technologies: ["React Native", "Expo", "TypeScript", "Firebase"],
    status: "Em Construção",
    year: "2026",
    category: "Mobile",
    demoUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    name: "Observability Starter Kit",
    description:
      "Template de observabilidade para microsserviços com logs estruturados, tracing e dashboards base para time de engenharia.",
    imageUrl: "/projects/observability-kit.svg",
    technologies: ["OpenTelemetry", "Grafana", "Docker", "Prometheus"],
    status: "Finalizado",
    year: "2024",
    category: "Outros",
    demoUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    name: "Career Match Portal",
    description:
      "Portal de vagas com matching por skills, onboarding de candidatos e trilha de comunicação com recrutadores.",
    imageUrl: "/projects/career-match.svg",
    technologies: ["Next.js", "TanStack Query", "Prisma", "PostgreSQL"],
    status: "Em Desenvolvimento",
    year: "2026",
    category: "Full Stack",
    demoUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    name: "Legacy Dashboard Revamp",
    description:
      "Modernização de dashboard legado com redesign de informação, migração gradual e melhoria de performance percebida.",
    imageUrl: "/projects/legacy-revamp.svg",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Zod"],
    status: "Arquivado",
    year: "2023",
    category: "Frontend",
    demoUrl: "#",
    githubUrl: "#",
    featured: false,
  },
];

export const featuredProjects = allProjects.filter((project) => project.featured);

export const experiences = [
  {
    company: "NovaStack Labs",
    role: "Senior Full Stack Developer",
    period: "2024 - Atual",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "AWS"],
    responsibilities: [
      "Liderança técnica de features críticas em produtos SaaS.",
      "Definição de arquitetura frontend/backend para escalabilidade.",
      "Mentoria de desenvolvedores em práticas de qualidade e performance.",
    ],
    results: [
      "Redução de 38% no tempo de carregamento de páginas estratégicas.",
      "Aumento de 27% na conversão após melhoria de UX e fluxo de onboarding.",
    ],
  },
  {
    company: "PixelForge Studio",
    role: "Full Stack Developer",
    period: "2022 - 2024",
    technologies: ["React", "TypeScript", "NestJS", "Docker"],
    responsibilities: [
      "Entrega de aplicações web de ponta a ponta para clientes B2B.",
      "Implementação de integrações com serviços externos e gateways.",
      "Criação de pipelines CI/CD para reduzir risco de deploy.",
    ],
    results: [
      "Diminuição de 45% no volume de bugs críticos pós-release.",
      "Padronização técnica que reduziu o tempo de desenvolvimento em 22%.",
    ],
  },
  {
    company: "Freelance / Consultoria",
    role: "Product-Oriented Developer",
    period: "2020 - 2022",
    technologies: ["Next.js", "React", "Firebase", "Figma"],
    responsibilities: [
      "Construção de MVPs e plataformas web para validação de negócio.",
      "Alinhamento direto com stakeholders para priorização de roadmap.",
    ],
    results: [
      "Lançamento de múltiplos produtos com menor time-to-market.",
      "Taxa de retenção superior à média em projetos focados em UX.",
    ],
  },
];

export const certifications = [
  {
    name: "AWS Certified Developer - Associate",
    institution: "Amazon Web Services",
    date: "2025",
    certificateUrl: "#",
  },
  {
    name: "Professional Scrum Master I (PSM I)",
    institution: "Scrum.org",
    date: "2024",
    certificateUrl: "#",
  },
  {
    name: "Meta Front-End Developer",
    institution: "Meta / Coursera",
    date: "2023",
    certificateUrl: "#",
  },
];

export const education = [
  {
    course: "Análise e Desenvolvimento de Sistemas",
    institution: "Universidade X",
    period: "2021 - 2024",
    status: "Concluído",
  },
  {
    course: "MBA em Engenharia de Software",
    institution: "Instituição Y",
    period: "2025 - 2026",
    status: "Em andamento",
  },
];

export const skills = {
  hard: [
    "Arquitetura de Software",
    "React / Next.js",
    "Node.js / APIs REST",
    "TypeScript",
    "Banco de Dados SQL",
    "CI/CD e DevOps",
    "Acessibilidade Web",
    "Performance Frontend",
  ],
  soft: [
    "Comunicação clara",
    "Pensamento sistêmico",
    "Colaboração multidisciplinar",
    "Liderança técnica",
    "Senso de produto",
    "Ownership",
    "Resolução de problemas",
    "Mentoria",
  ],
};

export const profile = {
  name: "Lucas Vasconcelos",
  role: "Full Stack Developer",
  email: "contato@lucasvasconcelos.dev",
  whatsappUrl: "https://wa.me/5500000000000",
  linkedinUrl: "https://www.linkedin.com/in/lucasvasconcelos",
  githubUrl: "https://github.com/lucasvasconcelos",
  resumeUrl: "/curriculo-lucas-vasconcelos.pdf",
};
