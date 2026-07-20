"use client";

import { ArrowUpRight, Code2, Search } from "lucide-react";
import Image from "next/image";
import { useMemo, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { allProjects, type ProjectCategory } from "@/data/portfolio-content";
import { statusVariantByProjectStatus } from "@/lib/project-status";

const categoryOptions: Array<"Todos" | ProjectCategory> = [
  "Todos",
  "Frontend",
  "Backend",
  "Full Stack",
  "DevOps",
  "Mobile",
  "Outros",
];

export function AllProjectsSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<"Todos" | ProjectCategory>("Todos");
  const [selectedTechnology, setSelectedTechnology] = useState("Todas");

  const technologies = useMemo(
    () =>
      ["Todas", ...new Set(allProjects.flatMap((project) => project.technologies).sort())],
    [],
  );

  const filteredProjects = useMemo(() => {
    const normalizedTerm = searchTerm.trim().toLowerCase();

    return allProjects.filter((project) => {
      const matchesName = project.name.toLowerCase().includes(normalizedTerm);
      const matchesCategory =
        selectedCategory === "Todos" || project.category === selectedCategory;
      const matchesTechnology =
        selectedTechnology === "Todas" ||
        project.technologies.some((technology) => technology === selectedTechnology);

      return matchesName && matchesCategory && matchesTechnology;
    });
  }, [searchTerm, selectedCategory, selectedTechnology]);

  return (
    <section id="todos-projetos" className="space-y-8 py-16">
      <SectionHeading
        eyebrow="Todos os Projetos"
        title="Exploração completa do portfólio"
        description="Filtre por categoria e tecnologia, ou pesquise por nome para encontrar rapidamente os projetos mais relevantes para cada contexto."
      />

      <div className="space-y-4 rounded-[var(--radius-lg)] border bg-card p-4 md:p-6">
        <label className="relative block">
          <Search
            size={16}
            className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-muted-foreground"
          />
          <input
            type="search"
            placeholder="Pesquisar projeto por nome..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            className="h-11 w-full rounded-full border bg-background pl-10 pr-4 text-sm outline-none transition focus-visible:ring-2 focus-visible:ring-ring"
          />
        </label>

        <div className="space-y-3">
          <p className="text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase">
            Categoria
          </p>
          <div className="flex flex-wrap gap-2">
            {categoryOptions.map((category) => (
              <Button
                key={category}
                type="button"
                size="sm"
                variant={selectedCategory === category ? "default" : "secondary"}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase">
            Tecnologia
          </p>
          <div className="flex flex-wrap gap-2">
            {technologies.map((technology) => (
              <Button
                key={technology}
                type="button"
                size="sm"
                variant={selectedTechnology === technology ? "default" : "secondary"}
                onClick={() => setSelectedTechnology(technology)}
              >
                {technology}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {filteredProjects.length ? (
        <div className="grid gap-6 lg:grid-cols-2">
          {filteredProjects.map((project) => (
            <Card key={project.name} className="overflow-hidden">
              <div className="relative h-52 border-b">
                <Image
                  src={project.imageUrl}
                  alt={`Imagem do projeto ${project.name}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
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
              <CardContent className="space-y-4">
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
                <div className="flex gap-2">
                  <Button asChild className="flex-1">
                    <a href={project.demoUrl}>
                      Ver Projeto
                      <ArrowUpRight size={15} />
                    </a>
                  </Button>
                  <Button asChild variant="secondary" className="flex-1">
                    <a href={project.githubUrl}>
                      GitHub
                      <Code2 size={15} />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card>
          <CardContent className="pt-6 text-center text-sm text-muted-foreground">
            Nenhum projeto encontrado para os filtros selecionados.
          </CardContent>
        </Card>
      )}
    </section>
  );
}
