"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Trash2 } from "lucide-react";

import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";

export function DeleteProjectButton({
  projectId,
  projectTitle,
}: {
  projectId: string;
  projectTitle: string;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    const confirmed = window.confirm(
      `Tem certeza que deseja excluir "${projectTitle}"? Essa ação não pode ser desfeita.`,
    );
    if (!confirmed) return;

    setLoading(true);
    const supabase = createClient();
    const { error } = await supabase.from("projects").delete().eq("id", projectId);
    setLoading(false);

    if (error) {
      window.alert("Erro ao excluir o projeto. Tente novamente.");
      return;
    }

    router.refresh();
  };

  return (
    <Button
      type="button"
      variant="outline"
      size="sm"
      onClick={handleDelete}
      disabled={loading}
    >
      <Trash2 size={14} />
      {loading ? "Excluindo..." : "Excluir"}
    </Button>
  );
}