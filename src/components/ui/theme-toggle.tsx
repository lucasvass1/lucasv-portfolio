"use client";

import { AnimatePresence, motion } from "framer-motion";
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
      className="overflow-hidden hover:scale-[1.03]"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      type="button"
      variant="secondary"
      size="icon"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isDark ? "sun" : "moon"}
          initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
          transition={{ duration: 0.25, ease: [0.21, 1, 0.32, 1] }}
          className="flex"
        >
          {isDark ? <Sun size={16} /> : <Moon size={16} />}
        </motion.span>
      </AnimatePresence>
    </Button>
  );
}
