import Image from "next/image";
import Link from "next/link";
import badIntro from "../../../public/images/bad/bad_intro.svg";
import dachIntro from "../../../public/images/dach/dach_intro.svg";
import haustechnikIntro from "../../../public/images/haustechnik/haustechnik_intro.svg";
import heizungIntro from "../../../public/images/heizung/heizung_intro.svg";
import de from "@/locales/de.json";

const Intro = (): React.JSX.Element => {
  const badges = de.sections.hero.badges;

  return (
    <section id={de.anchors.start} className="section-pad relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-glow" aria-hidden="true" />
      <div className="absolute inset-0 opacity-40 grid-lines" aria-hidden="true" />
      <div className="relative py-24 sm:py-28 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="animate-fade-up">
            <div className="tag">{de.site.tagline}</div>
            <h1 className="mt-6 text-balance text-ink-900">
              {de.sections.hero.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-ink-700">
              {de.sections.hero.subtitle}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={`/#${de.anchors.kontakt}`} className="btn-primary">
                {de.sections.hero.primaryCta}
              </Link>
              <Link href={`/#${de.anchors.leistungen}`} className="btn-secondary">
                {de.sections.hero.secondaryCta}
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              {badges.map((badge) => (
                <span key={badge} className="tag">
                  {badge}
                </span>
              ))}
            </div>
          </div>
          <div className="relative grid gap-4 sm:grid-cols-2">
            <div className="card p-5 sm:p-6">
              <div className="rounded-2xl bg-sand-100 p-4">
                <Image alt={de.media.imageAlt} src={heizungIntro} className="h-36 w-full object-contain" />
              </div>
              <div className="mt-4 text-lg font-semibold text-ink-900">{de.sections.heizung.title}</div>
              <p className="mt-2 text-sm text-ink-700">{de.sections.heizung.intro}</p>
            </div>
            <div className="card p-5 sm:p-6">
              <div className="rounded-2xl bg-sand-100 p-4">
                <Image alt={de.media.imageAlt} src={badIntro} className="h-36 w-full object-contain" />
              </div>
              <div className="mt-4 text-lg font-semibold text-ink-900">{de.sections.bad.title}</div>
              <p className="mt-2 text-sm text-ink-700">{de.sections.bad.intro}</p>
            </div>
            <div className="card p-5 sm:p-6">
              <div className="rounded-2xl bg-sand-100 p-4">
                <Image alt={de.media.imageAlt} src={haustechnikIntro} className="h-36 w-full object-contain" />
              </div>
              <div className="mt-4 text-lg font-semibold text-ink-900">{de.sections.haustechnik.title}</div>
              <p className="mt-2 text-sm text-ink-700">{de.sections.haustechnik.intro}</p>
            </div>
            <div className="card p-5 sm:p-6">
              <div className="rounded-2xl bg-sand-100 p-4">
                <Image alt={de.media.imageAlt} src={dachIntro} className="h-36 w-full object-contain" />
              </div>
              <div className="mt-4 text-lg font-semibold text-ink-900">{de.sections.dach.title}</div>
              <p className="mt-2 text-sm text-ink-700">{de.sections.dach.intro}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
