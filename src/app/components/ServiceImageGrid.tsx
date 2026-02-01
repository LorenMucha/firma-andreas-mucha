import ImageZoom from "./ImageZoom";
import { StaticImageData } from "next/image";
import de from "@/locales/de.json";

interface ServiceImageGridProps {
  images: StaticImageData[];
}

const ServiceImageGrid = ({ images }: ServiceImageGridProps): React.JSX.Element => {
  const isThree = images.length === 3;

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:self-center">
      {images.map((image, index) => {
        const spanClass = isThree && index === 0 ? "sm:col-span-2" : "";
        return (
          <div key={`${image.src}-${index}`} className={`overflow-hidden rounded-3xl ${spanClass}`}>
            <ImageZoom
              alt={de.media.imageAlt}
              src={image}
              className="h-40 sm:h-44"
              sizes="(max-width: 1024px) 100vw, 35vw"
            />
          </div>
        );
      })}
    </div>
  );
};

export default ServiceImageGrid;
