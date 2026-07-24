import { SectionHeading } from "@/components/ui/section-heading";
import { getAllProjects } from "@/lib/projects";
import { AllProjectsFilters } from "@/components/sections/all-projects-filters";

export async function AllProjectsSection() {
  const projects = await getAllProjects();

  return (
    <section id="todos-projetos" className="space-y-8 py-16">
      <SectionHeading
        eyebrow="Todos os Projetos"
        title="Exploração completa do portfólio"
        description="Filtre por categoria e tecnologia, ou pesquise por nome para encontrar rapidamente os projetos mais relevantes para cada contexto."
      />
      <AllProjectsFilters projects={projects} />
    </section>
  );
}
