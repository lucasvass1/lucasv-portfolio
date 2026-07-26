"use client";

import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { EASE_OUT } from "@/components/ui/reveal";
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

const sectionIds = navItems.map((item) => item.href.slice(1));

export function SiteHeader() {
  const [activeHref, setActiveHref] = useState("#inicio");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll();
  const scrollProgress = useSpring(scrollYProgress, {
    stiffness: 260,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const updateHeight = () => setHeaderHeight(header.offsetHeight);
    updateHeight();

    const observer = new ResizeObserver(updateHeight);
    observer.observe(header);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = overflow;
    };
  }, [isMobileMenuOpen]);

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
  }, []);

  const renderNavLink = (
    href: string,
    label: string,
    pillId: string,
    isMobile = false,
  ) => {
    const isActive = activeHref === href;

    return (
      <a
        key={href}
        href={href}
        className={cn(
          "relative rounded-full px-3 py-2 text-sm transition-colors",
          isMobile && "w-full rounded-lg px-4 py-3 text-center text-base",
          isActive
            ? "text-accent-foreground"
            : "text-muted-foreground hover:bg-muted hover:text-foreground",
        )}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-current={isActive ? "location" : undefined}
      >
        {isActive ? (
          <motion.span
            layoutId={pillId}
            className={cn(
              "absolute inset-0 -z-10 bg-accent",
              isMobile ? "rounded-lg" : "rounded-full",
            )}
            transition={{ type: "spring", stiffness: 380, damping: 32 }}
          />
        ) : null}
        <span className="relative">{label}</span>
      </a>
    );
  };

  return (
    <>
      <motion.header
        ref={headerRef}
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: EASE_OUT }}
        className="sticky top-0 z-20 mb-8 w-full border-b border-border/60 bg-background/70 py-4 backdrop-blur-md"
      >
        <motion.div
          aria-hidden
          className="fixed inset-x-0 top-0 z-30 h-[3px] origin-left bg-accent"
          style={{ scaleX: scrollProgress }}
        />
        <div className="mx-auto w-full max-w-6xl px-6 md:px-8">
          <div className="flex items-center justify-between gap-3">
            <a
              href="#inicio"
              className="shrink-0 text-sm font-semibold tracking-wide uppercase whitespace-nowrap"
            >
              Lucas Vasconcelos
            </a>
            <nav aria-label="Navegação principal" className="hidden gap-1 lg:flex">
              {navItems.map((item) => renderNavLink(item.href, item.label, "nav-pill-desktop"))}
            </nav>
            <div className="flex items-center gap-2">
              <div className="lg:hidden">
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
        </div>
      </motion.header>
      <AnimatePresence>
        {isMobileMenuOpen ? (
          <>
            <motion.div
              key="mobile-menu-backdrop"
              aria-hidden
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: EASE_OUT }}
              style={{ top: headerHeight }}
              className="fixed inset-x-0 bottom-0 z-10 bg-black/50 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.nav
              key="mobile-menu-drawer"
              aria-label="Navegação mobile"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.28, ease: EASE_OUT }}
              style={{ top: headerHeight }}
              className="fixed right-0 bottom-0 z-10 w-4/5 max-w-sm overflow-y-auto border-l bg-background lg:hidden"
            >
              <div className="flex min-h-full w-full flex-col justify-center gap-2 px-6 py-10">
                {navItems.map((item) =>
                  renderNavLink(item.href, item.label, "nav-pill-mobile", true),
                )}
              </div>
            </motion.nav>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
}
