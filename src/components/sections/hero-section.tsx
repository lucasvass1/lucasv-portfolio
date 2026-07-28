"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { BriefcaseBusiness, Code2, Mail, FileDown } from "lucide-react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

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

function useTypewriter(
  words: readonly string[],
  { typingSpeed = 55, deletingSpeed = 30, pauseTime = 1800 } = {},
) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) return;

    const currentWord = words[index % words.length];

    if (!deleting && subIndex === currentWord.length) {
      const timeout = setTimeout(() => setDeleting(true), pauseTime);
      return () => clearTimeout(timeout);
    }

    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((previous) => (previous + 1) % words.length);
      return;
    }

    const timeout = setTimeout(
      () => setSubIndex((previous) => previous + (deleting ? -1 : 1)),
      deleting ? deletingSpeed : typingSpeed,
    );
    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, words, shouldReduceMotion, typingSpeed, deletingSpeed, pauseTime]);

  if (shouldReduceMotion) return words[0];
  return words[index % words.length].slice(0, subIndex);
}

export function HeroSection() {
  const { resolvedTheme } = useTheme();
  const mounted = useMounted();
  const shouldReduceMotion = useReducedMotion();
  const typedRole = useTypewriter(profile.roles);

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
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
          </span>
          {profile.availability}
        </motion.div>
        <motion.p
          variants={itemVariants}
          className="flex items-center gap-1 text-sm font-semibold tracking-[0.16em] text-muted-foreground uppercase"
        >
          <span aria-hidden>{typedRole}</span>
          <span
            aria-hidden
            className="inline-block h-4 w-[2px] animate-pulse bg-accent"
          />
          <span className="sr-only">{profile.role}</span>
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
