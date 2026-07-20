type SiteShellProps = {
  children: React.ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  return (
    <div className="surface relative min-h-screen">
      <div className="grid-overlay pointer-events-none absolute inset-0" />
      <div className="relative mx-auto w-full max-w-6xl px-6 pb-16 md:px-8">
        {children}
      </div>
    </div>
  );
}
