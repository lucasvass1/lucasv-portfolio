"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { useMounted } from "@/lib/use-mounted";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useMounted();

  // Antes de montar, mantém o mesmo resultado do servidor (tema padrão)
  // para não divergir do HTML renderizado no SSR e quebrar a hidratação.
  const isDark = !mounted || resolvedTheme !== "light";

  return (
    <Button
      aria-label="Alternar tema"
      className="hover:scale-[1.03]"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      type="button"
      variant="secondary"
      size="icon"
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
    </Button>
  );
}
