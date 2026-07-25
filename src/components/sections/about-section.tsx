import { aboutContent } from "@/data/portfolio-content";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Reveal, StaggerGrid } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function AboutSection() {
  return (
    <section id="sobre" className="space-y-8 py-16">
      <Reveal>
        <SectionHeading
          eyebrow="Sobre Mim"
          title="Em formação técnica, com experiência prática desde o primeiro estágio"
          description="Combino estudo contínuo em Engenharia de Software com experiência real em projetos de desenvolvimento web, unindo teoria e prática desde cedo na carreira."
        />
      </Reveal>

      <StaggerGrid className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <Badge className="w-fit" variant="neutral">
              Trajetória
            </Badge>
            <CardTitle>Quem sou e como trabalho</CardTitle>
            <CardDescription>{aboutContent.intro}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-sm leading-6 text-muted-foreground">
            <p>{aboutContent.trajectory}</p>
            <p>{aboutContent.objectives}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Badge className="w-fit" variant="success">
              Diferenciais
            </Badge>
            <CardTitle>Filosofia de desenvolvimento</CardTitle>
            <CardDescription>{aboutContent.philosophy}</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {aboutContent.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-2">
                  <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-accent" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </StaggerGrid>
    </section>
  );
}