import { ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { certifications, education, skills } from "@/data/portfolio-content";

export function CredentialsSection() {
  return (
    <section id="credenciais" className="space-y-12 py-16">
      <div className="space-y-8">
        <SectionHeading
          eyebrow="Certificações"
          title="Formação contínua e validação técnica"
          description="Certificações voltadas a engenharia moderna, arquitetura de software e práticas de entrega de alto desempenho."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((certification) => (
            <Card key={certification.name}>
              <CardHeader className="space-y-3">
                <Badge variant="neutral" className="w-fit">
                  {certification.date}
                </Badge>
                <CardTitle className="text-base">{certification.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{certification.institution}</p>
              </CardHeader>
              <CardContent>
                <Button asChild size="sm" variant="secondary">
                  <a href={certification.certificateUrl}>
                    Ver certificado
                    <ArrowUpRight size={15} />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card id="formacao">
          <CardHeader>
            <p className="text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase">
              Formação Acadêmica
            </p>
            <h3 className="text-xl font-semibold tracking-tight">Base acadêmica</h3>
            <p className="text-sm leading-6 text-muted-foreground">
              Percurso estruturado para fortalecer fundamentos e visão estratégica
              em tecnologia.
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            {education.map((item) => (
              <div key={item.course} className="rounded-xl border bg-muted/30 p-4">
                <p className="text-sm font-semibold">{item.course}</p>
                <p className="text-sm text-muted-foreground">{item.institution}</p>
                <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
                  <span>{item.period}</span>
                  <span>{item.status}</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card id="habilidades">
          <CardHeader>
            <p className="text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase">
              Habilidades
            </p>
            <h3 className="text-xl font-semibold tracking-tight">
              Hard Skills e Soft Skills
            </h3>
            <p className="text-sm leading-6 text-muted-foreground">
              Conjunto de competências técnicas e comportamentais para entrega de
              soluções completas.
            </p>
          </CardHeader>
          <CardContent className="grid gap-5 md:grid-cols-2">
            <div className="space-y-3">
              <p className="text-sm font-semibold">Hard Skills</p>
              <div className="flex flex-wrap gap-2">
                {skills.hard.map((skill) => (
                  <Badge key={skill} variant="neutral">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-sm font-semibold">Soft Skills</p>
              <div className="flex flex-wrap gap-2">
                {skills.soft.map((skill) => (
                  <Badge key={skill} variant="neutral">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
