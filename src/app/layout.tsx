import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AppProviders } from "@/components/providers/app-providers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// URL base usada para resolver a imagem de compartilhamento (Open Graph) para
// um endereço absoluto. Em produção, a Vercel expõe o domínio automaticamente;
// localmente ou com domínio próprio, defina NEXT_PUBLIC_SITE_URL.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000");

const ogImage = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
  alt: "Lucas Vasconcelos — Desenvolvedor Full Stack",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Lucas Vasconcelos | Full Stack Developer",
  description:
    "Portfólio profissional de Lucas Vasconcelos, desenvolvedor Full Stack com experiência em React, Node.js, TypeScript e cloud.",
  keywords: ["Lucas Vasconcelos", "desenvolvedor full stack", "React", "Node.js", "TypeScript"],
  authors: [{ name: "Lucas Vasconcelos" }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Lucas Vasconcelos | Full Stack Developer",
    description:
      "Projetos, experiência e competências em desenvolvimento Full Stack.",
    locale: "pt_BR",
    type: "website",
    url: "/",
    siteName: "Lucas Vasconcelos",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lucas Vasconcelos | Full Stack Developer",
    description:
      "Projetos, experiência e competências em desenvolvimento Full Stack.",
    images: [ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full bg-background text-foreground font-sans">
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
