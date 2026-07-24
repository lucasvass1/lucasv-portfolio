import Image from "next/image";
import Link from "next/link";
import { Plus } from "lucide-react";

import { createClient } from "@/lib/supabase/server";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { DeleteProjectButton } from "@/components/admin/delete-project-button";
import type { Project } from "@/types/project";

export default async function AdminProjectsPage() {
  const supabase = await createClient();
  const { data: projects, error } = await supabase
    .from("projects")
    .select("*")
    .order("display_order", { ascending: true })
    .order("year", { ascending: false });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          {projects?.length ?? 0} projeto(s) cadastrado(s)
        </p>
        <Button asChild>
          <Link href="/admin/projetos/novo">
            <Plus size={15} />
            Novo Projeto
          </Link>
        </Button>
      </div>

      {error ? (
        <Card>
          <CardContent className="py-8 text-center text-sm text-danger">
            Erro ao carregar os projetos. Tente recarregar a página.
          </CardContent>
        </Card>
      ) : null}

      {!error && (!projects || projects.length === 0) ? (
        <Card>
          <CardContent className="space-y-3 py-12 text-center">
            <p className="text-sm text-muted-foreground">
              Nenhum projeto cadastrado ainda.
            </p>
            <Button asChild>
              <Link href="/admin/projetos/novo">
                <Plus size={15} />
                Criar o primeiro projeto
              </Link>
            </Button>
          </CardContent>
        </Card>
      ) : null}

      <div className="grid gap-4">
        {(projects as Project[] | null)?.map((project) => (
          <Card key={project.id}>
            <CardContent className="flex flex-col gap-4 py-4 md:flex-row md:items-center">
              <div className="relative h-20 w-32 shrink-0 overflow-hidden rounded-lg bg-muted">
                {project.image_url ? (
                  <Image
                    src={project.image_url}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-xs text-muted-foreground">
                    Sem imagem
                  </div>
                )}
              </div>

              <div className="flex-1 space-y-1.5">
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="font-medium">{project.title}</h2>
                  <Badge variant="neutral">{project.status}</Badge>
                <Badge variant="neutral">{project.category}</Badge>
                  {project.featured ? (
                    <Badge variant="success">Destaque</Badge>
                  ) : null}
                </div>
                <p className="line-clamp-2 text-sm text-muted-foreground">
                  {project.description}
                </p>
                <p className="text-xs text-muted-foreground">{project.year}</p>
              </div>

              <div className="flex shrink-0 gap-2">
                <Button asChild variant="secondary" size="sm">
                  <Link href={`/admin/projetos/${project.id}`}>Editar</Link>
                </Button>
                <DeleteProjectButton
                  projectId={project.id}
                  projectTitle={project.title}
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}