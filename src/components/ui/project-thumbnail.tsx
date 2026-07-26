import Image from "next/image";

type ProjectThumbnailProps = {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
};

export function ProjectThumbnail({ src, alt, sizes, priority }: ProjectThumbnailProps) {
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
    </div>
  );
}
