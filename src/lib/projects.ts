import { createClient } from "@/lib/supabase/server";
import { mapProjectToView } from "@/lib/project-mapper";
import type { PortfolioProjectView } from "@/types/portfolio-project";

export async function getFeaturedProjects(): Promise<PortfolioProjectView[]> {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .eq("featured", true)
      .order("display_order", { ascending: true });

    if (error || !data) return [];
    return data.map(mapProjectToView);
  } catch {
    return [];
  }
}

export async function getAllProjects(): Promise<PortfolioProjectView[]> {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .order("display_order", { ascending: true })
      .order("year", { ascending: false });

    if (error || !data) return [];
    return data.map(mapProjectToView);
  } catch {
    return [];
  }
}
