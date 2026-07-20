import { Mail, MessageCircle, BriefcaseBusiness, Code2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";

export function ContactPreviewSection() {
  return (
    <section id="contato" className="space-y-6 py-16">
      <SectionHeading
        eyebrow="Contato"
        title="Vamos construir algo relevante juntos"
        description="Estou disponível para oportunidades em produtos digitais, consultoria técnica e projetos estratégicos."
      />

      <Card>
        <CardContent className="flex flex-col gap-5 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="max-w-2xl text-sm leading-6 text-muted-foreground">
            Se quiser, já podemos conversar sobre escopo, desafios técnicos e
            impacto esperado no negócio.
          </p>
          <div className="flex flex-wrap gap-2">
            <Button asChild variant="secondary">
              <a href="#">
                <MessageCircle size={15} />
                WhatsApp
              </a>
            </Button>
            <Button asChild variant="secondary">
              <a href="#">
                <BriefcaseBusiness size={15} />
                LinkedIn
              </a>
            </Button>
            <Button asChild variant="secondary">
              <a href="#">
                <Code2 size={15} />
                GitHub
              </a>
            </Button>
            <Button asChild>
              <a href="#">
                <Mail size={15} />
                E-mail
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
