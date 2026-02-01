import ImageZoom from "./ImageZoom";
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
            <ImageZoom
              alt={de.media.imageAlt}
              src={image}
              className="h-44 sm:h-48 lg:h-52"
              sizes="(max-width: 1024px) 100vw, 25vw"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
