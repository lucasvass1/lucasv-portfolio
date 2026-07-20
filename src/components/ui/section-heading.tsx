type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left";

  return (
    <header className={`flex flex-col gap-3 ${alignClass}`}>
      {eyebrow ? (
        <p className="text-xs font-semibold tracking-[0.16em] text-muted-foreground uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
          {description}
        </p>
      ) : null}
    </header>
  );
}
