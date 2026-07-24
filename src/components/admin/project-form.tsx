"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { createClient } from "@/lib/supabase/client";
import {
  projectFormSchema,
  type ProjectFormInput,
  type ProjectFormValues,
} from "@/schemas/project-form-schema";
import {
  PROJECT_CATEGORY_OPTIONS,
  PROJECT_STATUS_OPTIONS,
  type Project,
} from "@/types/project";

type SubmitStatus = "idle" | "success" | "error";

export function ProjectForm({ project }: { project?: Project }) {
  const router = useRouter();
  const isEditing = Boolean(project);

  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [submitError, setSubmitError] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(
    project?.image_url ?? null,
  );
  const [uploadingImage, setUploadingImage] = useState(false);

  const form = useForm<ProjectFormInput, unknown, ProjectFormValues>({
    resolver: zodResolver(projectFormSchema),
    defaultValues: {
      title: project?.title ?? "",
      description: project?.description ?? "",
      status: project?.status ?? "Em Desenvolvimento",
      category: project?.category ?? "Full Stack",
      technologies: project?.technologies?.join(", ") ?? "",
      year: project?.year ?? new Date().getFullYear(),
      project_url: project?.project_url ?? "",
      github_url: project?.github_url ?? "",
      featured: project?.featured ?? false,
      display_order: project?.display_order ?? 0,
    },
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const uploadImageIfNeeded = async (): Promise<string | null> => {
    if (!imageFile) return project?.image_url ?? null;

    setUploadingImage(true);
    const supabase = createClient();
    const fileExt = imageFile.name.split(".").pop();
    const filePath = `${crypto.randomUUID()}.${fileExt}`;

    const { error: uploadError } = await supabase.storage
      .from("project-images")
      .upload(filePath, imageFile, { upsert: false });

    setUploadingImage(false);

    if (uploadError) {
      throw new Error("Erro ao enviar a imagem. Tente novamente.");
    }

    const { data } = supabase.storage
      .from("project-images")
      .getPublicUrl(filePath);

    return data.publicUrl;
  };

  const onSubmit = async (values: ProjectFormValues) => {
    setSubmitStatus("idle");
    setSubmitError("");

    try {
      const imageUrl = await uploadImageIfNeeded();
      const supabase = createClient();

      const payload = {
        title: values.title,
        description: values.description,
        status: values.status,
        category: values.category,
        technologies: values.technologies
          .split(",")
          .map((tech) => tech.trim())
          .filter(Boolean),
        year: values.year,
        project_url: values.project_url || null,
        github_url: values.github_url || null,
        image_url: imageUrl,
        featured: values.featured,
        display_order: values.display_order,
      };

      const { error } = isEditing
        ? await supabase.from("projects").update(payload).eq("id", project!.id)
        : await supabase.from("projects").insert(payload);

      if (error) {
        throw new Error(error.message);
      }

      setSubmitStatus("success");
      router.push("/admin");
      router.refresh();
    } catch (error) {
      setSubmitStatus("error");
      setSubmitError(
        error instanceof Error ? error.message : "Erro ao salvar o projeto.",
      );
    }
  };

  const isSubmitting = form.formState.isSubmitting || uploadingImage;

  return (
    <Card>
      <CardHeader>
        <CardTitle>{isEditing ? "Editar Projeto" : "Novo Projeto"}</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)} noValidate>
          <div className="space-y-1.5">
            <label htmlFor="title" className="text-sm font-medium">
              Título
            </label>
            <input
              id="title"
              type="text"
              className="h-11 w-full rounded-xl border bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
              {...form.register("title")}
            />
            {form.formState.errors.title ? (
              <p role="alert" className="text-xs text-danger">
                {form.formState.errors.title.message}
              </p>
            ) : null}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="description" className="text-sm font-medium">
              Descrição
            </label>
            <textarea
              id="description"
              rows={4}
              className="w-full resize-y rounded-xl border bg-background px-3 py-2.5 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
              {...form.register("description")}
            />
            {form.formState.errors.description ? (
              <p role="alert" className="text-xs text-danger">
                {form.formState.errors.description.message}
              </p>
            ) : null}
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-1.5">
              <label htmlFor="status" className="text-sm font-medium">
                Status
              </label>
              <select
                id="status"
                className="h-11 w-full rounded-xl border bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                {...form.register("status")}
              >
                {PROJECT_STATUS_OPTIONS.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="category" className="text-sm font-medium">
                Categoria
              </label>
              <select
                id="category"
                className="h-11 w-full rounded-xl border bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                {...form.register("category")}
              >
                {PROJECT_CATEGORY_OPTIONS.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="space-y-1.5">
            <label htmlFor="technologies" className="text-sm font-medium">
              Tecnologias (separadas por vírgula)
            </label>
            <input
              id="technologies"
              type="text"
              placeholder="React, Node.js, PostgreSQL"
              className="h-11 w-full rounded-xl border bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
              {...form.register("technologies")}
            />
            {form.formState.errors.technologies ? (
              <p role="alert" className="text-xs text-danger">
                {form.formState.errors.technologies.message}
              </p>
            ) : null}
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-1.5">
              <label htmlFor="project_url" className="text-sm font-medium">
                Link do projeto (opcional)
              </label>
              <input
                id="project_url"
                type="text"
                placeholder="https://..."
                className="h-11 w-full rounded-xl border bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                {...form.register("project_url")}
              />
              {form.formState.errors.project_url ? (
                <p role="alert" className="text-xs text-danger">
                  {form.formState.errors.project_url.message}
                </p>
              ) : null}
            </div>

            <div className="space-y-1.5">
              <label htmlFor="github_url" className="text-sm font-medium">
                Link do GitHub (opcional)
              </label>
              <input
                id="github_url"
                type="text"
                placeholder="https://github.com/..."
                className="h-11 w-full rounded-xl border bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                {...form.register("github_url")}
              />
              {form.formState.errors.github_url ? (
                <p role="alert" className="text-xs text-danger">
                  {form.formState.errors.github_url.message}
                </p>
              ) : null}
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-1.5">
              <label htmlFor="year" className="text-sm font-medium">
                Ano
              </label>
              <input
                id="year"
                type="number"
                className="h-11 w-full rounded-xl border bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                {...form.register("year")}
              />
              {form.formState.errors.year ? (
                <p role="alert" className="text-xs text-danger">
                  {form.formState.errors.year.message}
                </p>
              ) : null}
            </div>

            <div className="space-y-1.5">
              <label htmlFor="display_order" className="text-sm font-medium">
                Ordem de exibição
              </label>
              <input
                id="display_order"
                type="number"
                className="h-11 w-full rounded-xl border bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                {...form.register("display_order")}
              />
              <p className="text-xs text-muted-foreground">
                Números menores aparecem primeiro.
              </p>
            </div>
          </div>

          <div className="space-y-1.5">
            <label htmlFor="image" className="text-sm font-medium">
              Imagem do projeto
            </label>
            <input
              id="image"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full rounded-xl border bg-background px-3 py-2 text-sm outline-none file:mr-3 file:rounded-lg file:border-0 file:bg-muted file:px-3 file:py-1.5 file:text-sm"
            />
            {imagePreview ? (
              <div className="relative mt-2 h-32 w-52 overflow-hidden rounded-lg border">
                <Image
                  src={imagePreview}
                  alt="Pré-visualização"
                  fill
                  className="object-cover"
                />
              </div>
            ) : null}
          </div>

          <label className="flex items-center gap-2 text-sm font-medium">
            <input type="checkbox" {...form.register("featured")} />
            Exibir em &quot;Projetos em Destaque&quot;
          </label>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Button type="submit" disabled={isSubmitting}>
              {uploadingImage
                ? "Enviando imagem..."
                : form.formState.isSubmitting
                  ? "Salvando..."
                  : isEditing
                    ? "Salvar alterações"
                    : "Criar projeto"}
            </Button>
            {submitStatus === "error" ? (
              <Badge variant="danger" role="alert">
                {submitError}
              </Badge>
            ) : null}
          </div>
        </form>
      </CardContent>
    </Card>
  );
}