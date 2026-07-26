"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { BriefcaseBusiness, Code2, Mail, FileDown } from "lucide-react";
import Image from "next/image";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { EASE_OUT } from "@/components/ui/reveal";
import { profile } from "@/data/portfolio-content";
import { useMounted } from "@/lib/use-mounted";

const heroActions = [
  { href: profile.githubUrl, label: "GitHub", icon: Code2, external: true },
  { href: profile.linkedinUrl, label: "LinkedIn", icon: BriefcaseBusiness, external: true },
  { href: profile.resumeUrl, label: "Currículo", icon: FileDown, external: false },
  { href: "#contato", label: "Contato", icon: Mail },
];

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT } },
};

export function HeroSection() {
  const { resolvedTheme } = useTheme();
  const mounted = useMounted();
  const shouldReduceMotion = useReducedMotion();

  // Antes de montar, mantém o mesmo resultado do servidor (tema padrão)
  // para não divergir do HTML renderizado no SSR e quebrar a hidratação.
  const avatarSrc = mounted && resolvedTheme === "light" ? "/Avatar 2.png" : "/Avatar.png";

  return (
    <section
      id="inicio"
      className="grid min-h-[76vh] items-center gap-10 border-b py-20 md:grid-cols-[1.5fr_1fr]"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="space-y-8"
      >
        <motion.p
          variants={itemVariants}
          className="text-sm font-semibold tracking-[0.16em] text-muted-foreground uppercase"
        >
          Full Stack Developer
        </motion.p>
        <div className="space-y-4">
          <motion.h1
            variants={itemVariants}
            className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl"
          >
            Lucas Vasconcelos
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg"
          >
            Desenvolvedor Full Stack construindo aplicações web com React, Node.js e APIs REST, com experiência prática em Cloud (AWS/GCP), integração de sistemas e boas práticas de Clean Code.
          </motion.p>
        </div>
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 gap-3 lg:flex lg:flex-wrap"
        >
          {heroActions.map(({ href, icon: Icon, label, external }, index) => (
            <Button
              key={label}
              asChild
              variant={index === 0 ? "default" : "secondary"}
              className="w-full hover:-translate-y-0.5 lg:w-auto"
            >
              <a
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
                download={label === "Currículo" ? true : undefined}
              >
                <Icon size={16} />
                {label}
              </a>
            </Button>
          ))}
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: EASE_OUT, delay: 0.2 }}
        className="relative mx-auto aspect-square w-full max-w-72"
      >
        <div
          aria-hidden
          className="absolute inset-0 -z-10 rounded-full bg-accent/25 blur-3xl"
        />
        <motion.div
          animate={shouldReduceMotion ? undefined : { y: [0, -10, 0] }}
          transition={
            shouldReduceMotion
              ? undefined
              : { duration: 6, repeat: Infinity, ease: "easeInOut" }
          }
          className="h-full w-full rounded-3xl border bg-gradient-to-b from-card to-muted p-2"
        >
          <Image
            src={avatarSrc}
            alt="Avatar de Lucas Vasconcelos"
            width={288}
            height={288}
            className="h-full w-full rounded-[1.15rem] object-cover"
            priority
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
