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
  | "notebook";

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
    "Sou desenvolvedor Full Stack focado em construir produtos digitais com alto padrão técnico, design orientado a resultado e arquitetura preparada para evolução contínua.",
  trajectory:
    "Minha trajetória combina desenvolvimento frontend moderno, construção de APIs robustas e boas práticas de engenharia para entregar software confiável e escalável.",
  objectives:
    "Busco contribuir em times de alta performance, transformando desafios de negócio em soluções claras, mensuráveis e centradas no usuário.",
  highlights: [
    "Arquitetura orientada a manutenção e crescimento",
    "Decisões guiadas por performance e experiência",
    "Código limpo, tipado e testável",
    "Colaboração próxima com produto e design",
  ],
  philosophy:
    "Desenvolvimento de qualidade é equilíbrio entre visão de produto, excelência técnica e atenção rigorosa aos detalhes de UX.",
};

export const technologyCategories: Array<{
  category: TechnologyCategory;
  items: Technology[];
}> = [
  {
    category: "Frontend",
    items: [
      { name: "React", description: "Interfaces componíveis e escaláveis", icon: "layout" },
      { name: "Next.js", description: "SSR/SEO e performance de produção", icon: "rocket" },
      { name: "TypeScript", description: "Tipagem estática para confiabilidade", icon: "braces" },
      { name: "Tailwind CSS", description: "Design system ágil e consistente", icon: "palette" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", description: "Serviços orientados a I/O e APIs", icon: "server" },
      { name: "NestJS", description: "Arquitetura modular para sistemas complexos", icon: "blocks" },
      { name: "REST APIs", description: "Contratos claros e documentação objetiva", icon: "waypoints" },
    ],
  },
  {
    category: "Banco de Dados",
    items: [
      { name: "PostgreSQL", description: "Modelagem relacional robusta", icon: "database" },
      { name: "Prisma", description: "ORM tipado com migrações seguras", icon: "git-branch" },
      { name: "Redis", description: "Cache e filas para alta performance", icon: "zap" },
    ],
  },
  {
    category: "Cloud",
    items: [
      { name: "Vercel", description: "Deploy contínuo para aplicações web", icon: "cloud" },
      { name: "AWS", description: "Serviços escaláveis em produção", icon: "cpu" },
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
      { name: "Figma", description: "Prototipação e handoff de UI", icon: "pen-tool" },
      { name: "Postman", description: "Validação e testes de APIs", icon: "send" },
      { name: "Notion", description: "Documentação e gestão de fluxo", icon: "notebook" },
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
