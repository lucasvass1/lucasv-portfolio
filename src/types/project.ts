export type ProjectStatus =
  | "Em Produção"
  | "Em Desenvolvimento"
  | "Finalizado"
  | "Arquivado";

export type ProjectCategory =
  | "Frontend"
  | "Backend"
  | "Full Stack"
  | "DevOps"
  | "Mobile"
  | "Outros";

export type Project = {
  id: string;
  title: string;
  description: string;
  status: ProjectStatus;
  category: ProjectCategory;
  technologies: string[];
  year: number;
  project_url: string | null;
  github_url: string | null;
  image_url: string | null;
  featured: boolean;
  display_order: number;
  created_at: string;
  updated_at: string;
};

export const PROJECT_STATUS_OPTIONS: ProjectStatus[] = [
  "Em Produção",
  "Em Desenvolvimento",
  "Finalizado",
  "Arquivado",
];

export const PROJECT_CATEGORY_OPTIONS: ProjectCategory[] = [
  "Frontend",
  "Backend",
  "Full Stack",
  "DevOps",
  "Mobile",
  "Outros",
];