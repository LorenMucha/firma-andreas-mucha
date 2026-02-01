"use client";
import { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import badewanne from "../../../public/images/bad/badewanne.png";
import kleinesBad from "../../../public/images/bad/kleinesBad.jpg";
import waschtisch from "../../../public/images/bad/waschtisch.jpg";
import kloset from "../../../public/images/bad/kloset.jpg";
import anschlussBild from "../../../public/images/haustechnik/anschluss.jpg";
import gestellBild from "../../../public/images/haustechnik/gestell.jpg";
import rohrBild from "../../../public/images/haustechnik/rohr.jpg";
import thermenBild from "../../../public/images/heizung/therme.png";
import fussboden from "../../../public/images/heizung/fußbodenheizung.jpg";
import dachrinneBild from "../../../public/images/dach/dachrinne.png";
import kupferBild from "../../../public/images/dach/kupfer.png";
import schornsteinBild from "../../../public/images/dach/schornstein.jpg";
import de from "@/locales/de.json";

const Gallery = (): React.JSX.Element => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const images = [
    badewanne,
    kleinesBad,
    waschtisch,
    kloset,
    anschlussBild,
    rohrBild,
    gestellBild,
    thermenBild,
    fussboden,
    dachrinneBild,
    kupferBild,
    schornsteinBild,
  ];

  const totalImages = images.length;
  const activeImage: StaticImageData | null = activeIndex === null ? null : images[activeIndex];

  const close = () => setActiveIndex(null);
  const showNext = () => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex + 1) % totalImages);
  };
  const showPrev = () => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex - 1 + totalImages) % totalImages);
  };

  useEffect(() => {
    if (activeIndex === null) {
      document.body.style.overflow = "";
      return;
    }

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") showNext();
      if (event.key === "ArrowLeft") showPrev();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [activeIndex]);

  return (
    <section id={de.anchors.projekte} className="section-pad py-16 sm:py-20">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <div className="tag">Projekte</div>
          <h2 className="mt-4">{de.sections.projekte.title}</h2>
        </div>
        <p className="max-w-2xl text-ink-700">{de.sections.projekte.subtitle}</p>
      </div>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {images.map((image, index) => (
          <div key={`${image.src}-${index}`} className="overflow-hidden rounded-3xl">
            <button
              type="button"
              onClick={() => setActiveIndex(index)}
              className="group relative w-full overflow-hidden rounded-3xl"
              aria-label="Bild vergroessern"
            >
              <Image
                alt={de.media.imageAlt}
                src={image}
                sizes="(max-width: 1024px) 100vw, 25vw"
                className="h-44 w-full object-cover transition duration-300 group-hover:scale-[1.02] sm:h-48 lg:h-52"
              />
              <span className="pointer-events-none absolute inset-0 bg-black/0 transition group-hover:bg-black/10" />
            </button>
          </div>
        ))}
      </div>
      {activeImage ? (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-6 backdrop-blur-xl">
          <button type="button" className="absolute inset-0 cursor-zoom-out" onClick={close} aria-label="Schliessen" />
          <div
            className="relative flex h-[80vh] w-[90vw] items-center justify-center"
            role="dialog"
            aria-modal="true"
          >
            <button
              type="button"
              onClick={showPrev}
              className="absolute left-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-2xl text-ink-900 shadow"
              aria-label="Vorheriges Bild"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={showNext}
              className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-2xl text-ink-900 shadow"
              aria-label="Naechstes Bild"
            >
              ›
            </button>
            <button
              type="button"
              onClick={close}
              className="absolute -right-3 -top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-ink-900 shadow"
              aria-label="Schliessen"
            >
              ×
            </button>
            <Image
              alt={de.media.imageAlt}
              src={activeImage}
              sizes="90vw"
              className="max-h-full max-w-full rounded-2xl object-contain"
            />
          </div>
        </div>
      ) : null}
    </section>
  );
};

export default Gallery;
