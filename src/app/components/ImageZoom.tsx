"use client";
import { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";

interface ImageZoomProps {
  src: StaticImageData;
  alt: string;
  className?: string;
  quality?: number;
  sizes?: string;
}

const ImageZoom = ({ src, alt, className, quality = 90, sizes }: ImageZoomProps): React.JSX.Element => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group relative w-full overflow-hidden rounded-3xl"
        aria-label="Bild vergroessern"
      >
        <Image
          alt={alt}
          src={src}
          quality={quality}
          sizes={sizes}
          className={`h-full w-full object-cover transition duration-300 group-hover:scale-[1.02] ${className ?? ""}`}
        />
        <span className="pointer-events-none absolute inset-0 bg-black/0 transition group-hover:bg-black/10" />
      </button>
      {open ? (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-6 backdrop-blur"
          onClick={() => setOpen(false)}
        >
          <div className="relative" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute -right-4 -top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white text-ink-900 shadow"
              aria-label="Schliessen"
            >
              ×
            </button>
            <Image
              alt={alt}
              src={src}
              quality={quality}
              sizes="90vw"
              className="max-h-[80vh] w-auto max-w-[90vw] rounded-2xl object-contain"
            />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ImageZoom;
