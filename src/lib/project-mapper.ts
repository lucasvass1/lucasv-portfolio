import type { Project } from "@/types/project";
import type { PortfolioProjectView } from "@/types/portfolio-project";

export function mapProjectToView(project: Project): PortfolioProjectView {
  return {
    name: project.title,
    description: project.description,
    status: project.status,
    category: project.category,
    technologies: project.technologies,
    year: project.year,
    imageUrl: project.image_url ?? "/images/project-placeholder.svg",
    demoUrl: project.project_url ?? "#",
    githubUrl: project.github_url ?? "#",
  };
}
