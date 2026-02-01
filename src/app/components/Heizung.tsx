import ServiceImageGrid from "./ServiceImageGrid";
import therme from "../../../public/images/heizung/therme.png";
import fussbodenHeizung from "../../../public/images/heizung/fußbodenheizung.jpg";
import { LeistungProps } from "../constants";
import de from "@/locales/de.json";

const Heizung = (props: LeistungProps): React.JSX.Element => (
  <section id={props.id} className="section-pad py-16 sm:py-20">
    <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
      <div>
        <div className="tag">Heizung</div>
        <h2 className="mt-4">{de.sections.heizung.title}</h2>
        <p className="mt-4 text-ink-700">{de.sections.heizung.intro}</p>
        <ul className="mt-6 space-y-3 text-base text-ink-700">
          {de.sections.heizung.bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-copper-500" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-base text-ink-700">{de.sections.heizung.detail}</p>
        <a href={`/#${de.anchors.kontakt}`} className="btn-primary mt-8 inline-flex">
          {de.sections.heizung.cta}
        </a>
      </div>
      <ServiceImageGrid images={[therme, fussbodenHeizung]} />
    </div>
  </section>
);

export default Heizung;
