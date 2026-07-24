import Link from "next/link";

import { LogoutButton } from "@/components/admin/logout-button";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-muted/30">
      <header className="border-b bg-background">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
          <div>
            <p className="text-sm text-muted-foreground">Painel Administrativo</p>
            <h1 className="text-lg font-semibold">Gerenciar Projetos</h1>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="text-sm text-muted-foreground underline-offset-4 hover:underline"
            >
              Ver site
            </Link>
            <LogoutButton />
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-8">{children}</main>
    </div>
  );
}