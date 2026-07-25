"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Search } from "lucide-react";
import Image from "next/image";
import { useMemo, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProjectLinks } from "@/components/ui/project-links";
import { EASE_OUT, Reveal } from "@/components/ui/reveal";
import { statusVariantByProjectStatus } from "@/lib/project-status";
import type { PortfolioProjectView, ProjectCategory } from "@/types/portfolio-project";

const categoryOptions: Array<"Todos" | ProjectCategory> = [
  "Todos",
  "Frontend",
  "Backend",
  "Full Stack",
  "DevOps",
  "Mobile",
  "Outros",
];

type Props = {
  projects: PortfolioProjectView[];
};

export function AllProjectsFilters({ projects }: Props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<"Todos" | ProjectCategory>("Todos");
  const [selectedTechnology, setSelectedTechnology] = useState("Todas");

  const technologyOptions = useMemo(() => {
    return [
      "Todas",
      ...new Set(projects.flatMap((project) => project.technologies).sort()),
    ];
  }, [projects]);

  const filteredProjects = useMemo(() => {
    const normalizedTerm = searchTerm.trim().toLowerCase();

    return projects.filter((project) => {
      const matchesName = project.name.toLowerCase().includes(normalizedTerm);
      const matchesCategory =
        selectedCategory === "Todos" || project.category === selectedCategory;
      const matchesTechnology =
        selectedTechnology === "Todas" ||
        project.technologies.some((technology) => technology === selectedTechnology);

      return matchesName && matchesCategory && matchesTechnology;
    });
  }, [projects, searchTerm, selectedCategory, selectedTechnology]);

  return (
    <>
      <Reveal className="space-y-4 rounded-[var(--radius-lg)] border bg-card p-4 md:p-6">
        <label className="relative block">
          <span className="sr-only">Pesquisar projeto por nome</span>
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

        <fieldset className="space-y-3">
          <legend className="text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase">
            Categoria
          </legend>
          <div className="flex flex-wrap gap-2">
            {categoryOptions.map((category) => (
              <Button
                key={category}
                type="button"
                size="sm"
                variant={selectedCategory === category ? "default" : "secondary"}
                onClick={() => setSelectedCategory(category)}
                aria-pressed={selectedCategory === category}
              >
                {category}
              </Button>
            ))}
          </div>
        </fieldset>

        <fieldset className="space-y-3">
          <legend className="text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase">
            Tecnologia
          </legend>
          <div className="flex flex-wrap gap-2">
            {technologyOptions.map((technology) => (
              <Button
                key={technology}
                type="button"
                size="sm"
                variant={selectedTechnology === technology ? "default" : "secondary"}
                onClick={() => setSelectedTechnology(technology)}
                aria-pressed={selectedTechnology === technology}
              >
                {technology}
              </Button>
            ))}
          </div>
        </fieldset>
      </Reveal>

      <p className="sr-only" aria-live="polite">
        {filteredProjects.length}{" "}
        {filteredProjects.length === 1 ? "projeto encontrado" : "projetos encontrados"}.
      </p>

      {filteredProjects.length ? (
        <motion.div layout className="grid gap-6 lg:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.name}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3, ease: EASE_OUT }}
              >
                <Card className="group h-full overflow-hidden">
                  <div className="relative h-52 overflow-hidden border-b">
                    <Image
                      src={project.imageUrl}
                      alt={`Imagem do projeto ${project.name}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
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
                    <ProjectLinks project={project} />
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      ) : (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
          <Card>
            <CardContent className="pt-6 text-center text-sm text-muted-foreground">
              Nenhum projeto encontrado para os filtros selecionados.
            </CardContent>
          </Card>
        </motion.div>
      )}
    </>
  );
}
