"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme !== "light";

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
