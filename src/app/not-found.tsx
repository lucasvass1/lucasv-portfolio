"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="surface flex min-h-screen items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.21, 1, 0.32, 1] }}
        className="w-full max-w-xl rounded-[var(--radius-lg)] border bg-card p-8 text-center shadow-[var(--shadow-soft)]"
      >
        <p className="text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase">
          Erro 404
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          Página não encontrada
        </h1>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          O conteúdo que você buscou não está disponível neste endereço.
        </p>
        <div className="mt-6 flex justify-center">
          <Button asChild className="hover:-translate-y-0.5">
            <Link href="/">Voltar para o início</Link>
          </Button>
        </div>
      </motion.div>
    </main>
  );
}
