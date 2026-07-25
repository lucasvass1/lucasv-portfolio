import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProjectLinks } from "@/components/ui/project-links";
import { Reveal, StaggerGrid } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { getFeaturedProjects } from "@/lib/projects";
import { statusVariantByProjectStatus } from "@/lib/project-status";

export async function FeaturedProjectsSection() {
  const projects = await getFeaturedProjects();

  if (!projects.length) return null;

  return (
    <section id="projetos" className="space-y-8 py-16">
      <Reveal>
        <SectionHeading
          eyebrow="Projetos em Destaque"
          title="Projetos selecionados para demonstrar profundidade técnica"
          description="Cada projeto prioriza arquitetura escalável, decisões orientadas a produto e execução com foco em performance e experiência do usuário."
        />
      </Reveal>

      <StaggerGrid className="grid gap-6 lg:grid-cols-3">
        {projects.map((project) => (
          <Card
            key={project.name}
            className="group overflow-hidden border-border/80 transition hover:-translate-y-0.5 hover:border-accent/40"
          >
            <div className="relative h-40 overflow-hidden border-b">
              <Image
                src={project.imageUrl}
                alt={`Imagem do projeto ${project.name}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>
            <CardHeader className="space-y-3">
              <div className="flex items-start justify-between gap-3">
                <CardTitle className="text-base">{project.name}</CardTitle>
                <Badge variant={statusVariantByProjectStatus[project.status]}>
                  {project.status}
                </Badge>
              </div>
              <p className="text-sm leading-6 text-muted-foreground">
                {project.description}
              </p>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="neutral">
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>{project.category}</span>
                <span>{project.year}</span>
              </div>
              <ProjectLinks project={project} />
            </CardContent>
          </Card>
        ))}
      </StaggerGrid>
    </section>
  );
}
