import Image from "next/image";
import dachrinneBild from "../../../public/images/dach/dachrinne.png"
import holzBild from "../../../public/images/dach/holz.png"
import kupferBild from "../../../public/images/dach/kupfer.png"
import schornsteinBild from "../../../public/images/dach/schornstein.jpg"
import { LeistungProps } from "../constants";
import de from "@/locales/de.json";

const Dach = (props: LeistungProps): React.JSX.Element => {
    return (<section id={props.id}>
        <div className="leistung">
            <div className="header">{de.sections.dach.title}</div>
            <div className="md:flex flex-row mt-4">
                <div className="flex-1 md:w-4/6">
                    {de.sections.dach.p1}
                    <b>{de.sections.dach.p1Bold}</b>
                    {de.sections.dach.p2}
                    <b>{de.sections.dach.p2Bold}</b>
                    {de.sections.dach.p3}
                    <b>{de.sections.dach.p3Bold}</b>
                    {de.sections.dach.p4}
                    <b>{de.sections.dach.p4Bold}</b>
                    {de.sections.dach.p5}
                </div>
                <div className="md:w-1/6 w-3/4 md:mr-5 md:ml-5 mt-2 mx-auto flex flex-col">
                    <Image alt={de.media.imageAlt} src={holzBild} quality="100" className="pb-2" />
                    <Image alt={de.media.imageAlt} src={kupferBild} quality="100" />
                </div>
                <div className="md:w-1/6 w-3/4 mt-2 mx-auto flex flex-col">
                    <Image alt={de.media.imageAlt} src={dachrinneBild} quality="100" className="pb-2" />
                    <Image alt={de.media.imageAlt} src={schornsteinBild} quality="100" />
                </div>
            </div>
        </div>
    </section>
    )
}

export default Dach
