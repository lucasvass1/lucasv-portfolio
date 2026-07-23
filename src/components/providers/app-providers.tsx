import { ThemeProvider } from "next-themes";

type AppProvidersProps = {
  children: React.ReactNode;
};

export function AppProviders({ children }: AppProvidersProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      storageKey="lv-portfolio-theme"
    >
      {children}
    </ThemeProvider>
  );
}
