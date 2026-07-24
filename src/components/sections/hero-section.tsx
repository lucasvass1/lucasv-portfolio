"use client";

import { motion } from "framer-motion";
import { BriefcaseBusiness, Code2, Mail, FileDown } from "lucide-react";
import Image from "next/image";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { profile } from "@/data/portfolio-content";
import { useMounted } from "@/lib/use-mounted";

const heroActions = [
  { href: profile.githubUrl, label: "GitHub", icon: Code2, external: true },
  { href: profile.linkedinUrl, label: "LinkedIn", icon: BriefcaseBusiness, external: true },
  { href: profile.resumeUrl, label: "Currículo", icon: FileDown, external: false },
  { href: "#contato", label: "Contato", icon: Mail },
];

export function HeroSection() {
  const { resolvedTheme } = useTheme();
  const mounted = useMounted();

  // Antes de montar, mantém o mesmo resultado do servidor (tema padrão)
  // para não divergir do HTML renderizado no SSR e quebrar a hidratação.
  const avatarSrc = mounted && resolvedTheme === "light" ? "/Avatar 2.png" : "/Avatar.png";

  return (
    <section
      id="inicio"
      className="grid min-h-[76vh] items-center gap-10 border-b py-20 md:grid-cols-[1.5fr_1fr]"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: [0.21, 1, 0.32, 1] }}
        className="space-y-8"
      >
        <p className="text-sm font-semibold tracking-[0.16em] text-muted-foreground uppercase">
          Full Stack Developer
        </p>
        <div className="space-y-4">
          <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl">
            Lucas Vasconcelos
          </h1>
          <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            Desenvolvedor Full Stack construindo aplicações web com React, Node.js e APIs REST, com experiência prática em Cloud (AWS/GCP), integração de sistemas e boas práticas de Clean Code.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          {heroActions.map(({ href, icon: Icon, label, external }, index) => (
            <Button
              key={label}
              asChild
              variant={index === 0 ? "default" : "secondary"}
              className="hover:-translate-y-0.5"
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
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: [0.21, 1, 0.32, 1] }}
        className="mx-auto aspect-square w-full max-w-72 rounded-3xl border bg-gradient-to-b from-card to-muted p-2"
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
    </section>
  );
}
