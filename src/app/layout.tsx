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

export const metadata: Metadata = {
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
  },
  twitter: {
    card: "summary",
    title: "Lucas Vasconcelos | Full Stack Developer",
    description:
      "Projetos, experiência e competências em desenvolvimento Full Stack.",
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
