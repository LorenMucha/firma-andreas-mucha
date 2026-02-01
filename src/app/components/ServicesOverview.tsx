import Image from "next/image";
import Link from "next/link";
import { HiOutlineBolt, HiOutlineHomeModern, HiOutlineWrenchScrewdriver, HiOutlineCloud } from "react-icons/hi2";
import badIntro from "../../../public/images/bad/bad_intro.svg";
import dachIntro from "../../../public/images/dach/dach_intro.svg";
import haustechnikIntro from "../../../public/images/haustechnik/haustechnik_intro.svg";
import heizungIntro from "../../../public/images/heizung/heizung_intro.svg";
import de from "@/locales/de.json";

const ServicesOverview = (): React.JSX.Element => {
  const services = [
    {
      title: de.sections.heizung.title,
      description: de.sections.heizung.intro,
      image: heizungIntro,
      link: de.anchors.heizung,
      icon: HiOutlineBolt,
    },
    {
      title: de.sections.bad.title,
      description: de.sections.bad.intro,
      image: badIntro,
      link: de.anchors.bad,
      icon: HiOutlineHomeModern,
    },
    {
      title: de.sections.haustechnik.title,
      description: de.sections.haustechnik.intro,
      image: haustechnikIntro,
      link: de.anchors.haustechnik,
      icon: HiOutlineWrenchScrewdriver,
    },
    {
      title: de.sections.dach.title,
      description: de.sections.dach.intro,
      image: dachIntro,
      link: de.anchors.dach,
      icon: HiOutlineCloud,
    },
  ];

  return (
    <section id={de.anchors.leistungen} className="section-pad py-16 sm:py-20">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <div className="tag">Leistungen</div>
          <h2 className="mt-4">{de.sections.leistungen.title}</h2>
        </div>
        <p className="max-w-2xl text-ink-700">{de.sections.leistungen.subtitle}</p>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <Link
              key={service.title}
              href={`/#${service.link}`}
              className="group card flex flex-col gap-6 p-6 transition hover:-translate-y-1 hover:shadow-lift"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-sand-100 text-copper-500">
                    <Icon size={20} />
                  </span>
                  <h3 className="text-2xl text-ink-900">{service.title}</h3>
                </div>
                <span className="text-sm font-semibold uppercase tracking-wide text-copper-500 transition group-hover:text-ink-900">
                  Details
                </span>
              </div>
              <p className="text-base text-ink-700">{service.description}</p>
              <div className="rounded-2xl bg-sand-100 p-4">
                <Image alt={de.media.imageAlt} src={service.image} className="h-40 w-full object-contain" />
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default ServicesOverview;
