import { Code2, ExternalLink } from "lucide-react";
import Image from "next/image";

type ProjectThumbnailProps = {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  demoUrl?: string;
  githubUrl?: string;
};

function isExternalUrl(url: string) {
  return url.startsWith("http://") || url.startsWith("https://");
}

export function ProjectThumbnail({
  src,
  alt,
  sizes,
  priority,
  demoUrl,
  githubUrl,
}: ProjectThumbnailProps) {
  const hasDemo = Boolean(demoUrl) && demoUrl !== "#";
  const hasRepository = Boolean(githubUrl) && githubUrl !== "#";

  return (
    <div className="relative aspect-[2/1] w-full overflow-hidden border-b bg-muted">
      <Image
        src={src}
        alt=""
        aria-hidden="true"
        fill
        sizes={sizes}
        className="scale-110 object-fill blur-lg"
      />
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-contain transition-transform duration-500 group-hover:scale-105"
      />
      {hasDemo || hasRepository ? (
        <div className="absolute top-3 right-3 flex gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {hasDemo ? (
            <a
              href={demoUrl}
              target={isExternalUrl(demoUrl!) ? "_blank" : undefined}
              rel={isExternalUrl(demoUrl!) ? "noreferrer" : undefined}
              aria-label="Abrir projeto"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-background/90 text-foreground shadow-[var(--shadow-soft)] backdrop-blur transition hover:bg-background"
            >
              <ExternalLink size={15} />
            </a>
          ) : null}
          {hasRepository ? (
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Ver repositório no GitHub"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-background/90 text-foreground shadow-[var(--shadow-soft)] backdrop-blur transition hover:bg-background"
            >
              <Code2 size={15} />
            </a>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
