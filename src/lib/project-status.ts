import type { ProjectStatus } from "@/types/project";

export const statusVariantByProjectStatus: Record<
  ProjectStatus,
  "success" | "warning" | "neutral" | "danger"
> = {
  "Em Produção": "success",
  "Em Desenvolvimento": "warning",
  Finalizado: "neutral",
  Arquivado: "danger",
};
