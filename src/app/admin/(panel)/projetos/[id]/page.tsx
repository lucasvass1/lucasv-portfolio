import { notFound } from "next/navigation";

import { ProjectForm } from "@/components/admin/project-form";
import { createClient } from "@/lib/supabase/server";
import type { Project } from "@/types/project";

export default async function EditProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = await createClient();

  const { data: project, error } = await supabase
    .from("projects")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !project) {
    notFound();
  }

  return <ProjectForm project={project as Project} />;
}