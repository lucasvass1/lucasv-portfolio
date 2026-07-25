import {
  Blocks,
  Braces,
  Cloud,
  Container,
  Cpu,
  Database,
  GitBranch,
  LayoutPanelTop,
  Notebook,
  Palette,
  PenTool,
  Rocket,
  Send,
  Server,
  Waypoints,
  Workflow,
  Zap,
} from "lucide-react";
import type { ComponentType } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Reveal, StaggerGrid } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  technologyCategories,
  type TechnologyIcon,
} from "@/data/portfolio-content";

const iconMap: Record<TechnologyIcon, ComponentType<{ size?: number; className?: string }>> = {
  layout: LayoutPanelTop,
  rocket: Rocket,
  braces: Braces,
  palette: Palette,
  server: Server,
  blocks: Blocks,
  waypoints: Waypoints,
  database: Database,
  "git-branch": GitBranch,
  zap: Zap,
  cloud: Cloud,
  cpu: Cpu,
  container: Container,
  workflow: Workflow,
  "pen-tool": PenTool,
  send: Send,
  notebook: Notebook,
  layers: LayoutPanelTop,
  route: Waypoints,
  "file-code": Braces,
};

export function TechnologiesSection() {
  return (
    <section id="tecnologias" className="space-y-8 py-16">
      <Reveal>
        <SectionHeading
          eyebrow="Tecnologias"
          title="Stack organizada por especialidade"
          description="Ferramentas selecionadas para manter alta qualidade técnica, performance e evolução sustentável do produto."
        />
      </Reveal>

      <StaggerGrid className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {technologyCategories.map((group) => (
          <Card key={group.category} className="h-full">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-base">
                <span className="inline-block h-2 w-2 rounded-full bg-accent" />
                {group.category}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {group.items.map((item) => {
                const Icon = iconMap[item.icon];

                return (
                  <div
                    key={item.name}
                    className="group rounded-xl border bg-muted/25 p-3 transition duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:bg-muted/45 hover:shadow-[var(--shadow-soft)]"
                  >
                    <div className="mb-1 flex items-center gap-2">
                      <Icon
                        className="text-accent transition-transform duration-300 group-hover:scale-110"
                        size={15}
                      />
                      <p className="text-sm font-semibold">{item.name}</p>
                    </div>
                    <p className="text-xs leading-5 text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </CardContent>
          </Card>
        ))}
      </StaggerGrid>
    </section>
  );
}
