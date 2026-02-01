import Image from "next/image"
import badewanne from "../../../public/images/bad/badewanne.png"
import kleinesBad from "../../../public/images/bad/kleinesBad.jpg"
import waschtisch from "../../../public/images/bad/waschtisch.jpg"
import kloset from "../../../public/images/bad/kloset.jpg"
import { LeistungProps } from "../constants"
import de from "@/locales/de.json"


const Bad = (props: LeistungProps): React.JSX.Element =>
    <section id={props.id}>
        <div className="leistung">
            <div className="header">{de.sections.bad.title}</div>
            <div className="md:flex flex-row mt-4">
                <div className="flex-1 md:w-4/6">
                    {de.sections.bad.p1}
                    <b>{de.sections.bad.p1Bold}</b>
                    {de.sections.bad.p2}
                    <br /><b>{de.sections.bad.p3}</b>
                    {de.sections.bad.p4}
                    {de.sections.bad.p5}
                    <b>{de.sections.bad.p5Bold}</b>
                    {de.sections.bad.p6}
                    <b>{de.sections.bad.p6Bold}</b>
                    {de.sections.bad.p7}
                    <b>{de.sections.bad.p7Bold}</b>
                    {de.sections.bad.p8}
                </div>
                <div className="md:w-1/6 w-3/4 md:mr-5 md:ml-5 mt-2 mx-auto flex flex-col">
                    <Image alt={de.media.imageAlt} src={badewanne} quality="100" className="pb-2" />
                    <Image alt={de.media.imageAlt} src={kleinesBad} quality="100" />
                </div>
                <div className="md:w-1/6 w-3/4 mt-2 mx-auto flex flex-col">
                    <Image alt={de.media.imageAlt} src={waschtisch} quality="100" className="pb-2" />
                    <Image alt={de.media.imageAlt} src={kloset} quality="100" />
                </div>

            </div>
        </div>
    </section>

export default Bad
