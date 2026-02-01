import ServiceImageGrid from "./ServiceImageGrid";
import badewanne from "../../../public/images/bad/badewanne.png";
import kleinesBad from "../../../public/images/bad/kleinesBad.jpg";
import waschtisch from "../../../public/images/bad/waschtisch.jpg";
import kloset from "../../../public/images/bad/kloset.jpg";
import { LeistungProps } from "../constants";
import de from "@/locales/de.json";

const Bad = (props: LeistungProps): React.JSX.Element => (
  <section id={props.id} className="section-pad py-16 sm:py-20">
    <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
      <div className="lg:order-2">
        <div className="tag">Bad</div>
        <h2 className="mt-4">{de.sections.bad.title}</h2>
        <p className="mt-4 text-ink-700">{de.sections.bad.intro}</p>
        <ul className="mt-6 space-y-3 text-base text-ink-700">
          {de.sections.bad.bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-copper-500" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-base text-ink-700">{de.sections.bad.detail}</p>
        <a href={`/#${de.anchors.kontakt}`} className="btn-primary mt-8 inline-flex">
          {de.sections.bad.cta}
        </a>
      </div>
      <div className="lg:order-1 lg:translate-y-4">
        <ServiceImageGrid images={[badewanne, kleinesBad, waschtisch, kloset]} />
      </div>
    </div>
  </section>
);

export default Bad;
