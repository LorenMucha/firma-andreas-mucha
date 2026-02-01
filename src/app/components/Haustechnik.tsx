import ServiceImageGrid from "./ServiceImageGrid";
import anschlussBild from "../../../public/images/haustechnik/anschluss.jpg";
import gestellBild from "../../../public/images/haustechnik/gestell.jpg";
import rohrBild from "../../../public/images/haustechnik/rohr.jpg";
import { LeistungProps } from "../constants";
import de from "@/locales/de.json";

const Haustechnik = (props: LeistungProps): React.JSX.Element => (
  <section id={props.id} className="section-pad py-16 sm:py-20">
    <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
      <div>
        <div className="tag">Haustechnik</div>
        <h2 className="mt-4">{de.sections.haustechnik.title}</h2>
        <p className="mt-4 text-ink-700">{de.sections.haustechnik.intro}</p>
        <ul className="mt-6 space-y-3 text-base text-ink-700">
          {de.sections.haustechnik.bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-copper-500" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-base text-ink-700">{de.sections.haustechnik.detail}</p>
        <a href={`/#${de.anchors.kontakt}`} className="btn-primary mt-8 inline-flex">
          {de.sections.haustechnik.cta}
        </a>
      </div>
      <div className="lg:-translate-y-4">
        <ServiceImageGrid images={[anschlussBild, rohrBild, gestellBild]} />
      </div>
    </div>
  </section>
);

export default Haustechnik;
