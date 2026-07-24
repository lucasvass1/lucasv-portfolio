import type { ProjectCategory, ProjectStatus } from "@/types/project";

export type { ProjectCategory, ProjectStatus };

export type PortfolioProjectView = {
  name: string;
  description: string;
  status: ProjectStatus;
  category: ProjectCategory;
  technologies: string[];
  year: number;
  imageUrl: string;
  demoUrl: string;
  githubUrl: string;
};
