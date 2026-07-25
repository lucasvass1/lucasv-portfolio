"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import { BriefcaseBusiness, Code2, Copy, Loader2, Mail, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { profile } from "@/data/portfolio-content";
import {
  contactFormSchema,
  type ContactFormValues,
} from "@/schemas/contact-form-schema";

type CopyStatus = "idle" | "success" | "error";
type SubmitStatus = "idle" | "success" | "error";

export function ContactSection() {
  const [copyStatus, setCopyStatus] = useState<CopyStatus>("idle");
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [submitError, setSubmitError] = useState<string>("");

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopyStatus("success");
    } catch {
      setCopyStatus("error");
    }
  };

  const onSubmit = async (values: ContactFormValues) => {
    setSubmitStatus("idle");
    setSubmitError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Erro ao enviar mensagem.");
      }

      setSubmitStatus("success");
      form.reset();
    } catch (error) {
      setSubmitStatus("error");
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Erro ao enviar mensagem. Tente novamente.",
      );
    }
  };

  return (
    <section id="contato" className="space-y-8 py-16">
      <Reveal>
        <SectionHeading
          eyebrow="Contato"
          title="Vamos construir algo relevante juntos"
          description="Fale comigo para discutir oportunidades, projetos e desafios técnicos. Responderei com contexto e próximos passos claros."
        />
      </Reveal>

      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <Reveal x={-24} y={0}>
          <Card>
            <CardHeader>
              <CardTitle>Formulário de contato</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)} noValidate>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-sm font-medium">
                      Nome
                    </label>
                    <input
                      id="name"
                      type="text"
                      autoComplete="name"
                      maxLength={120}
                      aria-invalid={Boolean(form.formState.errors.name)}
                      aria-describedby={form.formState.errors.name ? "name-error" : undefined}
                      className="h-11 w-full rounded-xl border bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      {...form.register("name")}
                    />
                    {form.formState.errors.name ? (
                      <p id="name-error" role="alert" className="text-xs text-danger">
                        {form.formState.errors.name.message}
                      </p>
                    ) : null}
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-sm font-medium">
                      E-mail
                    </label>
                    <input
                      id="email"
                      type="email"
                      autoComplete="email"
                      aria-invalid={Boolean(form.formState.errors.email)}
                      aria-describedby={form.formState.errors.email ? "email-error" : undefined}
                      className="h-11 w-full rounded-xl border bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      {...form.register("email")}
                    />
                    {form.formState.errors.email ? (
                      <p id="email-error" role="alert" className="text-xs text-danger">
                        {form.formState.errors.email.message}
                      </p>
                    ) : null}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Assunto
                  </label>
                  <input
                    id="subject"
                    type="text"
                    maxLength={160}
                    aria-invalid={Boolean(form.formState.errors.subject)}
                    aria-describedby={form.formState.errors.subject ? "subject-error" : undefined}
                    className="h-11 w-full rounded-xl border bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    {...form.register("subject")}
                  />
                  {form.formState.errors.subject ? (
                    <p id="subject-error" role="alert" className="text-xs text-danger">
                      {form.formState.errors.subject.message}
                    </p>
                  ) : null}
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-sm font-medium">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    maxLength={2_000}
                    aria-invalid={Boolean(form.formState.errors.message)}
                    aria-describedby={form.formState.errors.message ? "message-error" : undefined}
                    className="w-full resize-y rounded-xl border bg-background px-3 py-2.5 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    {...form.register("message")}
                  />
                  {form.formState.errors.message ? (
                    <p id="message-error" role="alert" className="text-xs text-danger">
                      {form.formState.errors.message.message}
                    </p>
                  ) : null}
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <Button type="submit" disabled={form.formState.isSubmitting}>
                    <AnimatePresence mode="wait" initial={false}>
                      {form.formState.isSubmitting ? (
                        <motion.span
                          key="submitting"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.15 }}
                          className="flex items-center gap-2"
                        >
                          <Loader2 size={16} className="animate-spin" />
                          Enviando...
                        </motion.span>
                      ) : (
                        <motion.span
                          key="idle"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.15 }}
                        >
                          Enviar mensagem
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </Button>
                  <AnimatePresence mode="wait">
                    {submitStatus === "success" ? (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Badge variant="success" role="status">
                          Mensagem enviada! Retornarei em breve.
                        </Badge>
                      </motion.div>
                    ) : null}
                    {submitStatus === "error" ? (
                      <motion.div
                        key="error"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Badge variant="danger" role="alert">
                          {submitError || "Erro ao enviar. Tente novamente."}
                        </Badge>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              </form>
            </CardContent>
          </Card>
        </Reveal>

        <Reveal x={24} y={0} delay={0.1}>
          <Card className="h-fit">
            <CardHeader className="space-y-3">
              <CardTitle>Canais diretos</CardTitle>
              <p className="text-sm text-muted-foreground pb-4">
                Também podemos conversar por canais rápidos para agilizar o primeiro contato.
              </p>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button asChild variant="secondary" className="w-full justify-start">
                <a href={profile.whatsappUrl} target="_blank" rel="noreferrer">
                  <MessageCircle size={15} />
                  WhatsApp
                </a>
              </Button>
              <Button asChild variant="secondary" className="w-full justify-start">
                <a href={profile.linkedinUrl} target="_blank" rel="noreferrer">
                  <BriefcaseBusiness size={15} />
                  LinkedIn
                </a>
              </Button>
              <Button asChild variant="secondary" className="w-full justify-start">
                <a href={profile.githubUrl} target="_blank" rel="noreferrer">
                  <Code2 size={15} />
                  GitHub
                </a>
              </Button>
              <Button asChild variant="secondary" className="w-full justify-start">
                <a href={`mailto:${profile.email}`} className="min-w-0">
                  <Mail size={15} className="shrink-0" />
                  <span className="truncate">{profile.email}</span>
                </a>
              </Button>
              <Button type="button" variant="outline" className="w-full" onClick={handleCopyEmail}>
                <Copy size={15} />
                Copiar e-mail
              </Button>
              <AnimatePresence mode="wait">
                {copyStatus === "success" ? (
                  <motion.p
                    key="copy-success"
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.2 }}
                    className="text-xs text-success"
                    role="status"
                  >
                    E-mail copiado.
                  </motion.p>
                ) : null}
                {copyStatus === "error" ? (
                  <motion.p
                    key="copy-error"
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.2 }}
                    className="text-xs text-danger"
                    role="alert"
                  >
                    Não foi possível copiar agora. Use: {profile.email}
                  </motion.p>
                ) : null}
              </AnimatePresence>
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
