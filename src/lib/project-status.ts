import type { ProjectStatus } from "@/data/portfolio-content";

export const statusVariantByProjectStatus: Record<
  ProjectStatus,
  "success" | "warning" | "neutral" | "danger"
> = {
  "Em Produção": "success",
  "Em Desenvolvimento": "warning",
  "Em Construção": "warning",
  Finalizado: "neutral",
  Arquivado: "danger",
};
