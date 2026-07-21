"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { BriefcaseBusiness, Code2, Copy, Mail, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { profile } from "@/data/portfolio-content";
import {
  contactFormSchema,
  type ContactFormValues,
} from "@/schemas/contact-form-schema";

type CopyStatus = "idle" | "success" | "error";

export function ContactSection() {
  const [copyStatus, setCopyStatus] = useState<CopyStatus>("idle");

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
    await new Promise((resolve) => setTimeout(resolve, 650));
    console.info("Contato enviado:", values);
    form.reset();
  };

  return (
    <section id="contato" className="space-y-8 py-16">
      <SectionHeading
        eyebrow="Contato"
        title="Vamos construir algo relevante juntos"
        description="Fale comigo para discutir oportunidades, projetos e desafios técnicos. Responderei com contexto e próximos passos claros."
      />

      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
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
                    className="h-11 w-full rounded-xl border bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    {...form.register("name")}
                  />
                  {form.formState.errors.name ? (
                    <p className="text-xs text-danger-foreground">
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
                    className="h-11 w-full rounded-xl border bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    {...form.register("email")}
                  />
                  {form.formState.errors.email ? (
                    <p className="text-xs text-danger-foreground">
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
                  className="h-11 w-full rounded-xl border bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  {...form.register("subject")}
                />
                {form.formState.errors.subject ? (
                  <p className="text-xs text-danger-foreground">
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
                  className="w-full resize-y rounded-xl border bg-background px-3 py-2.5 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  {...form.register("message")}
                />
                {form.formState.errors.message ? (
                  <p className="text-xs text-danger-foreground">
                    {form.formState.errors.message.message}
                  </p>
                ) : null}
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Button type="submit" disabled={form.formState.isSubmitting}>
                  {form.formState.isSubmitting ? "Enviando..." : "Enviar mensagem"}
                </Button>
                {form.formState.isSubmitSuccessful ? (
                  <Badge variant="success">Mensagem validada e enviada com sucesso.</Badge>
                ) : null}
              </div>
            </form>
          </CardContent>
        </Card>

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
              <a href={`mailto:${profile.email}`}>
                <Mail size={15} />
                {profile.email}
              </a>
            </Button>
            <Button type="button" variant="outline" className="w-full" onClick={handleCopyEmail}>
              <Copy size={15} />
              Copiar e-mail
            </Button>
            {copyStatus === "success" ? (
              <p className="text-xs text-success-foreground">E-mail copiado.</p>
            ) : null}
            {copyStatus === "error" ? (
              <p className="text-xs text-danger-foreground">
                Não foi possível copiar agora. Use: {profile.email}
              </p>
            ) : null}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
