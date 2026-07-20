import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, "Informe seu nome completo com pelo menos 3 caracteres."),
  email: z.string().trim().email("Informe um e-mail válido."),
  subject: z
    .string()
    .trim()
    .min(5, "O assunto precisa ter pelo menos 5 caracteres."),
  message: z
    .string()
    .trim()
    .min(20, "A mensagem precisa ter pelo menos 20 caracteres."),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
