/* Statische Varianten: next/image erzeugt bei unoptimized keinen srcset. */
/* eslint-disable @next/next/no-img-element */
import { basePath } from "../constants";
export default function Photo({ name, alt }: { name: string; alt: string }) {
  return (
    <img
      src={`${basePath}/images/optimized/${name}-960.webp`}
      srcSet={`${basePath}/images/optimized/${name}-480.webp 480w, ${basePath}/images/optimized/${name}-960.webp 960w`}
      sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1200px) 42vw, 480px"
      width={960}
      height={720}
      loading="lazy"
      decoding="async"
      alt={alt}
      className="project-photo"
    />
  );
}
