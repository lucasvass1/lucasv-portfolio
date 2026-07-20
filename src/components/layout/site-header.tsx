"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#tecnologias", label: "Tecnologias" },
  { href: "#projetos", label: "Projetos" },
  { href: "#todos-projetos", label: "Todos Projetos" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#credenciais", label: "Credenciais" },
  { href: "#contato", label: "Contato" },
];

export function SiteHeader() {
  const [activeHref, setActiveHref] = useState("#inicio");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const sectionIds = useMemo(
    () => navItems.map((item) => item.href.replace("#", "")),
    [],
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (!visibleEntries.length) {
          return;
        }

        const id = visibleEntries[0].target.getAttribute("id");
        if (!id) {
          return;
        }

        setActiveHref(`#${id}`);
      },
      {
        root: null,
        rootMargin: "-30% 0px -55% 0px",
        threshold: [0.2, 0.35, 0.5, 0.65],
      },
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  const renderNavLink = (href: string, label: string) => (
    <a
      key={href}
      href={href}
      className={cn(
        "rounded-full px-3 py-2 text-sm transition",
        activeHref === href
          ? "bg-accent text-accent-foreground"
          : "text-muted-foreground hover:bg-muted hover:text-foreground",
      )}
      onClick={() => setIsMobileMenuOpen(false)}
      aria-current={activeHref === href ? "page" : undefined}
    >
      {label}
    </a>
  );

  return (
    <header className="sticky top-0 z-20 mb-8 border-b border-border/60 bg-background/70 py-4 backdrop-blur-md">
      <div className="flex items-center justify-between gap-3">
        <a href="#inicio" className="text-sm font-semibold tracking-wide uppercase">
          Lucas Vasconcelos
        </a>
        <nav aria-label="Navegação principal" className="hidden gap-1 md:flex">
          {navItems.map((item) => renderNavLink(item.href, item.label))}
        </nav>
        <div className="flex items-center gap-2">
          <div className="md:hidden">
            <Button
              type="button"
              variant="secondary"
              size="icon"
              aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
              onClick={() => setIsMobileMenuOpen((previous) => !previous)}
            >
              {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </Button>
          </div>
          <ThemeToggle />
        </div>
      </div>
      <nav
        aria-label="Navegação mobile"
        className={cn(
          "grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 md:hidden",
          isMobileMenuOpen ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="min-h-0">
          <div className="flex flex-wrap gap-2 border-t pt-4">
            {navItems.map((item) => renderNavLink(item.href, item.label))}
          </div>
        </div>
      </nav>
    </header>
  );
}
