import { z } from "zod";

import { PROJECT_CATEGORY_OPTIONS, PROJECT_STATUS_OPTIONS } from "@/types/project";

const optionalUrl = z
  .string()
  .trim()
  .optional()
  .refine((value) => !value || /^https?:\/\/.+/.test(value), {
    message: "Informe uma URL válida (começando com http:// ou https://).",
  });

export const projectFormSchema = z.object({
  title: z
    .string()
    .trim()
    .min(3, "O título precisa ter pelo menos 3 caracteres.")
    .max(120, "O título é muito longo."),
  description: z
    .string()
    .trim()
    .min(10, "Descreva o projeto com pelo menos 10 caracteres.")
    .max(600, "Descrição muito longa."),
  status: z.enum(PROJECT_STATUS_OPTIONS as [string, ...string[]]),
  category: z.enum(PROJECT_CATEGORY_OPTIONS as [string, ...string[]]),
  technologies: z
    .string()
    .trim()
    .min(1, "Liste ao menos uma tecnologia, separada por vírgula."),
  year: z.coerce
    .number()
    .int()
    .min(2000, "Ano inválido.")
    .max(new Date().getFullYear() + 1, "Ano inválido."),
  project_url: optionalUrl,
  github_url: optionalUrl,
  featured: z.boolean().default(false),
  display_order: z.coerce.number().int().min(0).default(0),
});

export type ProjectFormInput = z.input<typeof projectFormSchema>;

export type ProjectFormValues = z.output<typeof projectFormSchema>;