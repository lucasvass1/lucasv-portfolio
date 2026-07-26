import { ArrowUp, BriefcaseBusiness, Code2, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { profile } from "@/data/portfolio-content";

const quickLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#tecnologias", label: "Tecnologias" },
  { href: "#projetos", label: "Projetos" },
  { href: "#contato", label: "Contato" },
];

export function SiteFooter() {
  return (
    <footer className="mt-6 border-t border-border/70 py-10">
      <Reveal amount={0.2} className="grid gap-6 md:grid-cols-[1.2fr_1fr_1fr] md:items-start">
        <div className="space-y-2">
          <p className="text-sm font-semibold tracking-wide uppercase">{profile.name}</p>
          <p className="text-sm text-muted-foreground">
            Desenvolvedor Full Stack em formação, construindo experiência com cada projeto.
          </p>
        </div>

        <div>
          <p className="mb-3 text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase">
            Links rápidos
          </p>
          <div className="flex flex-col gap-2">
            {quickLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-3 text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase">
            Redes
          </p>
          <div className="flex flex-col gap-2">
            <Button asChild size="sm" variant="secondary" className="w-full justify-start">
              <a href={profile.githubUrl} target="_blank" rel="noreferrer">
                <Code2 size={14} />
                GitHub
              </a>
            </Button>
            <Button asChild size="sm" variant="secondary" className="w-full justify-start">
              <a href={profile.linkedinUrl} target="_blank" rel="noreferrer">
                <BriefcaseBusiness size={14} />
                LinkedIn
              </a>
            </Button>
            <Button asChild size="sm" variant="secondary" className="w-full justify-start">
              <a href={`mailto:${profile.email}`}>
                <Mail size={14} />
                E-mail
              </a>
            </Button>
          </div>
        </div>
      </Reveal>

      <div className="mt-8 flex flex-col gap-3 border-t border-border/70 pt-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {profile.name}. Todos os direitos reservados.</p>
        <Button asChild size="sm" variant="outline" className="hover:-translate-y-0.5">
          <a href="#inicio">
            <ArrowUp size={14} />
            Voltar ao topo
          </a>
        </Button>
      </div>
    </footer>
  );
}
