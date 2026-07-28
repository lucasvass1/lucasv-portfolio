type TechColorEntry = {
  match: string[];
  className: string;
};

const TECH_COLORS: TechColorEntry[] = [
  { match: ["react native"], className: "border-cyan-500/25 bg-cyan-500/10 text-cyan-700 dark:text-cyan-300" },
  { match: ["react"], className: "border-sky-500/25 bg-sky-500/10 text-sky-700 dark:text-sky-300" },
  { match: ["redux"], className: "border-purple-500/25 bg-purple-500/10 text-purple-700 dark:text-purple-300" },
  { match: ["next"], className: "border-slate-500/25 bg-slate-500/10 text-slate-700 dark:text-slate-300" },
  { match: ["vue"], className: "border-emerald-500/25 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300" },
  { match: ["angular"], className: "border-red-500/25 bg-red-500/10 text-red-700 dark:text-red-300" },
  { match: ["node"], className: "border-green-500/25 bg-green-500/10 text-green-700 dark:text-green-300" },
  { match: ["express"], className: "border-neutral-500/25 bg-neutral-500/10 text-neutral-700 dark:text-neutral-300" },
  { match: ["typescript"], className: "border-blue-500/25 bg-blue-500/10 text-blue-700 dark:text-blue-300" },
  { match: ["javascript"], className: "border-yellow-500/25 bg-yellow-500/10 text-yellow-700 dark:text-yellow-300" },
  { match: ["tailwind"], className: "border-teal-500/25 bg-teal-500/10 text-teal-700 dark:text-teal-300" },
  { match: ["postgres", "sql", "prisma"], className: "border-indigo-500/25 bg-indigo-500/10 text-indigo-700 dark:text-indigo-300" },
  { match: ["mongo"], className: "border-emerald-500/25 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300" },
  { match: ["aws"], className: "border-orange-500/25 bg-orange-500/10 text-orange-700 dark:text-orange-300" },
  { match: ["google cloud", "gcp"], className: "border-red-500/25 bg-red-500/10 text-red-700 dark:text-red-300" },
  { match: ["vercel"], className: "border-neutral-500/25 bg-neutral-500/10 text-neutral-700 dark:text-neutral-300" },
  { match: ["docker"], className: "border-sky-500/25 bg-sky-500/10 text-sky-700 dark:text-sky-300" },
  { match: ["github actions", "ci/cd"], className: "border-violet-500/25 bg-violet-500/10 text-violet-700 dark:text-violet-300" },
  { match: ["git", "github"], className: "border-zinc-500/25 bg-zinc-500/10 text-zinc-700 dark:text-zinc-300" },
  { match: ["postman"], className: "border-orange-500/25 bg-orange-500/10 text-orange-700 dark:text-orange-300" },
  { match: ["figma"], className: "border-pink-500/25 bg-pink-500/10 text-pink-700 dark:text-pink-300" },
  { match: ["trello"], className: "border-blue-500/25 bg-blue-500/10 text-blue-700 dark:text-blue-300" },
  { match: ["notion"], className: "border-neutral-500/25 bg-neutral-500/10 text-neutral-700 dark:text-neutral-300" },
  { match: ["power bi"], className: "border-yellow-500/25 bg-yellow-500/10 text-yellow-700 dark:text-yellow-300" },
  { match: ["laravel"], className: "border-red-500/25 bg-red-500/10 text-red-700 dark:text-red-300" },
  { match: ["php"], className: "border-indigo-500/25 bg-indigo-500/10 text-indigo-700 dark:text-indigo-300" },
  { match: ["blade"], className: "border-red-500/25 bg-red-500/10 text-red-700 dark:text-red-300" },
  { match: ["livewire"], className: "border-pink-500/25 bg-pink-500/10 text-pink-700 dark:text-pink-300" },
  { match: ["vite"], className: "border-purple-500/25 bg-purple-500/10 text-purple-700 dark:text-purple-300" },
  { match: ["shadcn"], className: "border-neutral-500/25 bg-neutral-500/10 text-neutral-700 dark:text-neutral-300" },
];

export function getTechBadgeClass(tech: string): string {
  const normalized = tech.toLowerCase();
  const entry = TECH_COLORS.find(({ match }) =>
    match.some((keyword) => normalized.includes(keyword)),
  );

  return entry?.className ?? "";
}
