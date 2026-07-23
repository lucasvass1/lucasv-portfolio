import { ArrowUpRight, Code2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { PortfolioProject } from "@/data/portfolio-content";

type ProjectLinksProps = {
  project: Pick<PortfolioProject, "demoUrl" | "githubUrl">;
};

function isExternalUrl(url: string) {
  return url.startsWith("http://") || url.startsWith("https://");
}

export function ProjectLinks({ project }: ProjectLinksProps) {
  const hasDemo = project.demoUrl !== "#";
  const hasRepository = project.githubUrl !== "#";

  if (!hasDemo && !hasRepository) {
    return null;
  }

  return (
    <div className="flex gap-2">
      {hasDemo ? (
        <Button asChild className="flex-1">
          <a
            href={project.demoUrl}
            target={isExternalUrl(project.demoUrl) ? "_blank" : undefined}
            rel={isExternalUrl(project.demoUrl) ? "noreferrer" : undefined}
          >
            Ver projeto
            <ArrowUpRight size={15} />
          </a>
        </Button>
      ) : null}
      {hasRepository ? (
        <Button asChild variant="secondary" className="flex-1">
          <a href={project.githubUrl} target="_blank" rel="noreferrer">
            GitHub
            <Code2 size={15} />
          </a>
        </Button>
      ) : null}
    </div>
  );
}
