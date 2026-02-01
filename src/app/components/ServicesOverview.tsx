"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { HiOutlineBolt, HiOutlineHomeModern, HiOutlineWrenchScrewdriver, HiOutlineCloud } from "react-icons/hi2";
import badIntro from "../../../public/images/bad/bad_intro.svg";
import dachIntro from "../../../public/images/dach/dach_intro.svg";
import haustechnikIntro from "../../../public/images/haustechnik/haustechnik_intro.svg";
import heizungIntro from "../../../public/images/heizung/heizung_intro.svg";
import Bad from "./Bad";
import Dach from "./Dach";
import Haustechnik from "./Haustechnik";
import Heizung from "./Heizung";
import de from "@/locales/de.json";

const ServicesOverview = (): React.JSX.Element => {
  const [activeService, setActiveService] = useState<string | null>(null);
  const services = [
    {
      key: "heizung",
      title: de.sections.heizung.title,
      description: de.sections.heizung.intro,
      image: heizungIntro,
      detail: <Heizung />,
      icon: HiOutlineBolt,
    },
    {
      key: "bad",
      title: de.sections.bad.title,
      description: de.sections.bad.intro,
      image: badIntro,
      detail: <Bad />,
      icon: HiOutlineHomeModern,
    },
    {
      key: "haustechnik",
      title: de.sections.haustechnik.title,
      description: de.sections.haustechnik.intro,
      image: haustechnikIntro,
      detail: <Haustechnik />,
      icon: HiOutlineWrenchScrewdriver,
    },
    {
      key: "dach",
      title: de.sections.dach.title,
      description: de.sections.dach.intro,
      image: dachIntro,
      detail: <Dach />,
      icon: HiOutlineCloud,
    },
  ];
  const active = services.find((service) => service.key === activeService) ?? null;

  useEffect(() => {
    if (!activeService) {
      document.body.style.overflow = "";
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveService(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeService]);

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
          const isActive = activeService === service.key;
          return (
            <div key={service.title} className="space-y-4">
              <button
                type="button"
                onClick={() => setActiveService(isActive ? null : service.key)}
                className={`group card flex w-full flex-col gap-6 p-6 text-left transition hover:-translate-y-1 hover:shadow-lift ${
                  isActive ? "ring-2 ring-copper-400" : ""
                }`}
                aria-expanded={isActive}
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
              </button>
            </div>
          );
        })}
      </div>
      {active ? (
        <div className="fixed inset-0 z-50">
          <button
            type="button"
            className="absolute inset-0 cursor-zoom-out bg-ink-900/60 backdrop-blur-sm"
            aria-label="Schließen"
            onClick={() => setActiveService(null)}
          />
          <div
            className="relative mx-auto flex h-full w-full max-w-6xl flex-col px-6 py-10 sm:px-10 lg:px-16"
            role="dialog"
            aria-modal="true"
            aria-labelledby={`service-dialog-${active.key}`}
          >
            <div className="card flex min-h-0 flex-1 flex-col overflow-hidden">
              <div className="flex items-start justify-between gap-4 border-b border-ink-100 px-6 py-5 sm:px-10">
                <div>
                  <div className="tag">{active.title}</div>
                  <h3 id={`service-dialog-${active.key}`} className="mt-3 text-2xl text-ink-900">
                    {active.title}
                  </h3>
                  <p className="mt-2 text-base text-ink-700">{active.description}</p>
                </div>
                <button type="button" className="btn-secondary shrink-0" onClick={() => setActiveService(null)}>
                  Schließen
                </button>
              </div>
              <div className="flex-1 overflow-y-auto">{active.detail}</div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
};

export default ServicesOverview;
