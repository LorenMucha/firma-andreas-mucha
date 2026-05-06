import type { ComponentType } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import {
  HiArrowLongRight,
  HiMiniMapPin,
  HiMiniPhone,
  HiOutlineBolt,
  HiOutlineBuildingOffice2,
  HiOutlineCheckBadge,
  HiOutlineCloud,
  HiOutlineEnvelope,
  HiOutlineHomeModern,
  HiOutlineMap,
  HiOutlineSparkles,
  HiOutlineWrenchScrewdriver,
} from "react-icons/hi2";
import Footer from "./components/Footer";
import Kontakt from "./components/Kontakt";
import Navbar from "./components/Navbar";
import { navbarItems } from "./constants";
import kupferImage from "../../public/images/dach/kupfer.png";
import roofImage from "../../public/images/dach/dachrinne.png";
import bathImage from "../../public/images/bad/badewanne.png";
import sinkImage from "../../public/images/bad/waschtisch.jpg";
import heatingImage from "../../public/images/heizung/therme.png";
import plumbingImage from "../../public/images/haustechnik/anschluss.jpg";
import de from "@/locales/de.json";
import { siteConfig } from "./site";

type ServiceCard = {
  id: string;
  title: string;
  intro: string;
  bullets: string[];
  cta: string;
  image: StaticImageData;
  alt: string;
  icon: ComponentType<{ size?: number; className?: string }>;
};

const services: ServiceCard[] = [
  {
    id: de.anchors.bad,
    title: de.sections.bad.title,
    intro: de.sections.bad.intro,
    bullets: de.sections.bad.bullets,
    cta: de.sections.bad.cta,
    image: sinkImage,
    alt: "Waschtisch mit großem Spiegel und hellen Fronten",
    icon: HiOutlineHomeModern,
  },
  {
    id: de.anchors.heizung,
    title: de.sections.heizung.title,
    intro: de.sections.heizung.intro,
    bullets: de.sections.heizung.bullets,
    cta: de.sections.heizung.cta,
    image: heatingImage,
    alt: "Heizungs- und Speichersystem in einem Technikraum",
    icon: HiOutlineBolt,
  },
  {
    id: de.anchors.haustechnik,
    title: de.sections.haustechnik.title,
    intro: de.sections.haustechnik.intro,
    bullets: de.sections.haustechnik.bullets,
    cta: de.sections.haustechnik.cta,
    image: plumbingImage,
    alt: "Anschluss- und Filtertechnik einer Wasserinstallation",
    icon: HiOutlineWrenchScrewdriver,
  },
  {
    id: de.anchors.dach,
    title: de.sections.dach.title,
    intro: de.sections.dach.intro,
    bullets: de.sections.dach.bullets,
    cta: de.sections.dach.cta,
    image: kupferImage,
    alt: "Kupferfarbener Dachanschluss im Außenbereich",
    icon: HiOutlineCloud,
  },
];

const projectCards = [
  {
    title: "Badumbau",
    body: "Sanitärobjekte, Heizkörper und Oberflächen greifen in bestehenden Räumen sauber ineinander.",
    image: bathImage,
    alt: "Badezimmer mit Eckbadewanne und Handtuchheizkörper",
    accent: "Bad & Sanitär",
  },
  {
    title: "Heizungstechnik",
    body: "Technikräume, Leitungsführung und Speichertechnik werden auf der Seite direkt sichtbar gemacht.",
    image: heatingImage,
    alt: "Heiztechnik mit Speicher, Leitungen und Regelung",
    accent: "Heizung",
  },
  {
    title: "Dacharbeiten",
    body: "Dachflächen, Metallanschlüsse und Entwässerung zeigen die Bandbreite der vorhandenen Referenzen.",
    image: roofImage,
    alt: "Große Dachfläche mit metallischer Abdeckung und Himmel im Hintergrund",
    accent: "Dach & Entwässerung",
  },
];

const galleryImages = [
  {
    image: sinkImage,
    alt: "Waschtischanlage mit hellem Möbel und großem Spiegel",
  },
  {
    image: kupferImage,
    alt: "Kupferfarbene Dachabdeckung vor grünem Garten",
  },
  {
    image: plumbingImage,
    alt: "Filter- und Leitungstechnik in einem Hausanschlussbereich",
  },
  {
    image: bathImage,
    alt: "Badezimmer mit dunklen Wandfliesen und Eckbadewanne",
  },
];

const advantageIcons = [HiOutlineCheckBadge, HiOutlineSparkles, HiOutlineBuildingOffice2];
const shortcutIcons = [HiMiniMapPin, HiMiniPhone, HiOutlineEnvelope, HiOutlineMap];

export default function Home() {
  return (
    <>
      <Navbar items={navbarItems} />
      <main id="hauptinhalt" className="pb-24 md:pb-0">
        <section id={de.anchors.start} className="section-pad relative overflow-hidden pt-10 sm:pt-14 lg:pt-16">
          <div className="absolute inset-0 bg-grid-soft opacity-50" aria-hidden="true" />
          <div className="section-frame relative">
            <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
              <div className="animate-fade-up">
                <div className="eyebrow">{de.site.tagline}</div>
                <h1 className="mt-6 max-w-4xl text-balance">{de.sections.hero.title}</h1>
                <p className="mt-6 max-w-2xl">{de.sections.hero.subtitle}</p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href={`/#${de.anchors.kontakt}`} className="btn-primary">
                    {de.sections.hero.primaryCta}
                  </Link>
                  <Link href={`/#${de.anchors.leistungen}`} className="btn-secondary">
                    {de.sections.hero.secondaryCta}
                  </Link>
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  {de.sections.hero.badges.map((badge) => (
                    <div key={badge} className="stat-chip">
                      <div className="text-sm font-semibold text-ink-900">{badge}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative animate-float">
                <div className="surface-card relative overflow-hidden p-3 sm:p-4">
                  <div className="grid gap-3 sm:grid-cols-[1.15fr_0.85fr]">
                    <div className="overflow-hidden rounded-[1.6rem]">
                      <Image
                        src={roofImage}
                        alt="Dachfläche mit Metallanschluss"
                        priority
                        sizes="(max-width: 1024px) 100vw, 40vw"
                        className="h-full min-h-[18rem] w-full object-cover"
                      />
                    </div>
                    <div className="grid gap-3">
                      <div className="overflow-hidden rounded-[1.6rem]">
                        <Image
                          src={sinkImage}
                          alt="Waschtisch mit großem Spiegel"
                          priority
                          sizes="(max-width: 1024px) 100vw, 20vw"
                          className="h-40 w-full object-cover sm:h-[11.2rem]"
                        />
                      </div>
                      <div className="overflow-hidden rounded-[1.6rem]">
                        <Image
                          src={heatingImage}
                          alt="Technikraum mit Speicher und Leitungen"
                          priority
                          sizes="(max-width: 1024px) 100vw, 20vw"
                          className="h-40 w-full object-cover sm:h-[11.2rem]"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="surface-card absolute -bottom-5 right-4 max-w-xs p-4 sm:-right-4">
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">Direkter Einstieg</div>
                  <div className="mt-2 text-lg font-semibold text-ink-900">Leistungen, Bilder und Kontakt ohne Umwege.</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-pad py-14 sm:py-16 lg:py-20">
          <div className="section-frame surface-card p-6 sm:p-8 lg:p-10">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <div className="eyebrow">Orientierung</div>
                <h2 className="mt-5 text-balance">{de.sections.vorteile.title}</h2>
              </div>
              <p className="max-w-2xl">{de.sections.vorteile.subtitle}</p>
            </div>

            <div className="mt-8 grid gap-4 lg:grid-cols-3">
              {de.sections.vorteile.items.map((item, index) => {
                const Icon = advantageIcons[index];

                return (
                  <article key={item.title} className="rounded-[1.75rem] border border-ink-100 bg-sand-50/85 p-6">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-copper-200 text-copper-600">
                      <Icon size={22} />
                    </span>
                    <h3 className="mt-4 text-xl text-ink-900">{item.title}</h3>
                    <p className="mt-3 text-base">{item.body}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id={de.anchors.leistungen} className="section-pad py-6 sm:py-8 lg:py-10">
          <div className="section-frame">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <div className="eyebrow">Leistungen</div>
                <h2 className="mt-5 text-balance">{de.sections.leistungen.title}</h2>
              </div>
              <p className="max-w-2xl">{de.sections.leistungen.subtitle}</p>
            </div>

            <div className="mt-8 grid gap-5 lg:grid-cols-2">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <article key={service.id} id={service.id} className="surface-card overflow-hidden">
                    <div className="grid gap-6 p-5 sm:p-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
                      <div className="overflow-hidden rounded-[1.6rem] bg-sand-100">
                        <Image
                          src={service.image}
                          alt={service.alt}
                          sizes="(max-width: 1024px) 100vw, 24vw"
                          className="h-64 w-full object-cover"
                        />
                      </div>

                      <div>
                        <div className="flex items-center gap-3">
                          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-copper-200 text-copper-600">
                            <Icon size={20} />
                          </span>
                          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">Leistungsbereich</div>
                        </div>
                        <h3 className="mt-4 text-2xl text-ink-900">{service.title}</h3>
                        <p className="mt-3 text-base">{service.intro}</p>

                        <ul className="mt-5 grid gap-3">
                          {service.bullets.map((bullet) => (
                            <li key={bullet} className="flex items-start gap-3 text-sm text-ink-700">
                              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-copper-500" aria-hidden="true" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>

                        <Link href={`/#${de.anchors.kontakt}`} className="mt-6 inline-flex items-center gap-2 font-semibold text-copper-500 no-underline transition hover:text-ink-900">
                          <span>{service.cta}</span>
                          <HiArrowLongRight size={18} />
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id={de.anchors.projekte} className="section-pad py-14 sm:py-16 lg:py-20">
          <div className="section-frame">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <div className="eyebrow">Projektbilder</div>
                <h2 className="mt-5 text-balance">{de.sections.projekte.title}</h2>
              </div>
              <p className="max-w-2xl">{de.sections.projekte.subtitle}</p>
            </div>

            <div className="mt-8 grid gap-5 lg:grid-cols-3">
              {projectCards.map((project) => (
                <article key={project.title} className="surface-card overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    sizes="(max-width: 1024px) 100vw, 28vw"
                    className="h-72 w-full object-cover"
                  />
                  <div className="p-6">
                    <div className="text-xs font-semibold uppercase tracking-[0.2em] text-copper-500">{project.accent}</div>
                    <h3 className="mt-3 text-2xl text-ink-900">{project.title}</h3>
                    <p className="mt-3 text-base">{project.body}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {galleryImages.map((item) => (
                <div key={item.alt} className="overflow-hidden rounded-[1.75rem] border border-white/60 bg-white/80 shadow-soft">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    sizes="(max-width: 1024px) 50vw, 20vw"
                    className="h-56 w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id={de.anchors.ablauf} className="section-pad py-6 sm:py-8 lg:py-10">
          <div className="section-frame surface-card p-6 sm:p-8 lg:p-10">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <div className="eyebrow">Ablauf</div>
                <h2 className="mt-5 text-balance">{de.sections.ablauf.title}</h2>
              </div>
            </div>

            <div className="mt-8 grid gap-4 lg:grid-cols-4">
              {de.sections.ablauf.steps.map((step) => (
                <article key={step.title} className="rounded-[1.75rem] border border-ink-100 bg-sand-50/85 p-6">
                  <h3 className="text-xl text-ink-900">{step.title}</h3>
                  <p className="mt-3 text-base">{step.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad py-14 sm:py-16 lg:py-20">
          <div className="section-frame grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="surface-card p-6 sm:p-8">
              <div className="eyebrow">Region</div>
              <h2 className="mt-5 text-balance">{de.sections.region.title}</h2>
              <p className="mt-4">{de.sections.region.body}</p>

              <address className="mt-6 not-italic rounded-[1.5rem] border border-ink-100 bg-sand-50/80 p-5 text-ink-700">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">{de.sections.kontakt.addressLabel}</div>
                <div className="mt-2 text-lg font-semibold text-ink-900">{de.impressum.address.line1}</div>
                <div>{de.impressum.address.line2}</div>
              </address>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: de.sections.region.addressCta,
                  text: `${de.impressum.address.line1}, ${de.impressum.address.line2}`,
                  href: siteConfig.mapLink,
                },
                {
                  title: de.sections.region.phoneCta,
                  text: de.impressum.phone,
                  href: `tel:${siteConfig.phoneHref}`,
                },
                {
                  title: de.sections.region.emailCta,
                  text: de.impressum.email,
                  href: `mailto:${siteConfig.email}`,
                },
                {
                  title: de.sections.region.routeCta,
                  text: "OpenStreetMap",
                  href: siteConfig.mapLink,
                },
              ].map((item, index) => {
                const Icon = shortcutIcons[index];
                const external = item.href.startsWith("http");

                return (
                  <a
                    key={item.title}
                    href={item.href}
                    className="surface-card flex min-h-[13rem] flex-col justify-between p-6 no-underline transition hover:-translate-y-1"
                    {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-copper-200 text-copper-600">
                      <Icon size={22} />
                    </span>
                    <div>
                      <div className="text-sm font-semibold uppercase tracking-[0.18em] text-ink-500">{item.title}</div>
                      <div className="mt-3 text-xl font-semibold text-ink-900">{item.text}</div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        <Kontakt id={de.anchors.kontakt} />
        <Footer links={navbarItems} />
      </main>

      <div className="fixed inset-x-4 bottom-4 z-40 md:hidden">
        <div className="surface-card grid grid-cols-2 gap-3 p-3">
          <a href={`tel:${siteConfig.phoneHref}`} className="btn-primary">
            <HiMiniPhone size={18} />
            <span className="ml-2">Anrufen</span>
          </a>
          <Link href={`/#${de.anchors.kontakt}`} className="btn-secondary">
            <span>Anfrage</span>
          </Link>
        </div>
      </div>
    </>
  );
}
