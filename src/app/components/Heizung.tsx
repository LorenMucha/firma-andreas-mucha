import Image from "next/image"
import therme from "../../../public/images/heizung/therme.png"
import fußbodenHeizung from "../../../public/images/heizung/fußbodenheizung.jpg"
import { LeistungProps } from "../constants"
import de from "@/locales/de.json"

const Heizung = (props: LeistungProps): React.JSX.Element =>
    <section id={props.id}>
        <div className="leistung">
            <div className="header">{de.sections.heizung.title}</div>
            <div className="md:flex flex-row mt-4">
                <div className="flex-1 md:w-4/6">
                    {de.sections.heizung.p1}{" "}
                    {de.sections.heizung.p2}
                    <b>{de.sections.heizung.p2Bold}</b>.{" "}
                    {de.sections.heizung.p3}
                    <b>{de.sections.heizung.p3Bold}</b>
                    {de.sections.heizung.p3Suffix}
                </div>
                <div className="md:w-1/6 w-3/4 md:mr-5 md:ml-5 mt-2">
                    <Image alt={de.media.imageAlt} src={therme} quality="100"/>
                </div>
                <div className="md:w-1/6 w-3/4 mt-2">
                    <Image alt={de.media.imageAlt} src={fußbodenHeizung} quality="100" />

                </div>
            </div>
        </div>
    </section>

export default Heizung
