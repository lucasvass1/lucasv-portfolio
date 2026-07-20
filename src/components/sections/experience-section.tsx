import { experiences } from "@/data/portfolio-content";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";

export function ExperienceSection() {
  return (
    <section id="experiencia" className="space-y-8 py-16">
      <SectionHeading
        eyebrow="Experiência Profissional"
        title="Timeline orientada a resultados"
        description="Experiências com foco em impacto mensurável, colaboração entre áreas e evolução contínua de produtos digitais."
      />

      <div className="relative space-y-6 before:absolute before:top-0 before:bottom-0 before:left-2 before:w-px before:bg-border md:before:left-4">
        {experiences.map((experience) => (
          <Card key={`${experience.company}-${experience.period}`} className="relative ml-6 md:ml-10">
            <span className="absolute top-7 -left-8 h-4 w-4 rounded-full border bg-accent md:-left-10" />
            <CardContent className="space-y-5 pt-6">
              <div className="space-y-1">
                <p className="text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase">
                  {experience.period}
                </p>
                <h3 className="text-lg font-semibold">{experience.role}</h3>
                <p className="text-sm text-muted-foreground">{experience.company}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((technology) => (
                  <Badge key={technology} variant="neutral">
                    {technology}
                  </Badge>
                ))}
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <p className="mb-2 text-sm font-semibold">Responsabilidades</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {experience.responsibilities.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="mb-2 text-sm font-semibold">Resultados</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {experience.results.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-success" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
