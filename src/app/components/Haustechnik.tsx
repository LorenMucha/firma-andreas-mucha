import anschlussBild from "../../../public/images/haustechnik/anschluss.jpg"
import gestellBild from "../../../public/images/haustechnik/gestell.jpg"
import rohrBild from "../../../public/images/haustechnik/rohr.jpg"
import Image from "next/image";
import { LeistungProps } from "../constants";
import de from "@/locales/de.json";

const Haustechnik = (props: LeistungProps): React.JSX.Element =>
    <section id={props.id}>
        <div className="leistung">
            <div className="header">{de.sections.haustechnik.title}</div>
            <div className="md:flex flex-row mt-4">
                <div className="flex-1 md:w-4/6">
                    {de.sections.haustechnik.p1}
                    <b>{de.sections.haustechnik.p1Bold}</b>
                    {de.sections.haustechnik.p2}
                    <b>{de.sections.haustechnik.p2Bold}</b>
                    {de.sections.haustechnik.p3}
                    <b>{de.sections.haustechnik.p3Bold}</b>
                    {de.sections.haustechnik.p4}
                    <b>{de.sections.haustechnik.p4Bold}</b>
                    {de.sections.haustechnik.p5}
                    <b>{de.sections.haustechnik.p5Bold}</b>
                    {de.sections.haustechnik.p6}
                </div>
                <div className="md:w-1/6 w-3/4 md:mr-5 md:ml-5 mt-2 mx-auto flex flex-col">
                    <Image alt={de.media.imageAlt} src={anschlussBild} quality="100" className="pb-2 md:mx-auto" />
                    <Image alt={de.media.imageAlt} src={rohrBild} quality="100" className="md:mx-auto" />
                </div>
                <div className="md:w-1/6 w-3/4 mt-2 mx-auto flex flex-col">
                    <Image alt={de.media.imageAlt} src={gestellBild} quality="100" className="object-bottom object-fill" />
                </div>
            </div>
        </div>
    </section>

export default Haustechnik
