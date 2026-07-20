import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";

const nextSteps = [
  "Design System premium com tokens e componentes reutilizáveis",
  "Seções públicas completas com animações refinadas",
  "Painel administrativo autenticado e CRUDs",
  "SEO técnico, acessibilidade WCAG e otimizações de performance",
];

export function IntroSection() {
  return (
    <section id="sobre" className="space-y-8 py-14">
      <SectionHeading
        eyebrow="Design System"
        title="Fundação visual consistente e escalável"
        description="Componente por componente, estamos evoluindo o portfólio com padrões reutilizáveis para manter qualidade visual, velocidade de desenvolvimento e manutenção simples."
      />
      <div className="grid gap-6 md:grid-cols-[1.2fr_1fr]">
        <Card>
          <CardHeader>
            <Badge variant="success" className="w-fit">
              Etapa 2 em execução
            </Badge>
            <CardTitle>Base pronta para evolução premium</CardTitle>
            <CardDescription>
              Escala de cores semânticas, tipografia refinada, superfícies com
              profundidade e componentes reutilizáveis para acelerar as próximas
              entregas.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {nextSteps.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle>Preferência visual</CardTitle>
            <CardDescription>
              O modo escuro é padrão e a escolha do usuário fica persistida no
              navegador.
            </CardDescription>
          </CardHeader>
          <CardContent className="mt-auto">
            <div className="flex items-center justify-between rounded-xl border bg-muted/40 p-3">
              <span className="text-sm font-medium">Alternar tema</span>
              <ThemeToggle />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
