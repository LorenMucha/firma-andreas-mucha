import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { navbarItems } from "../page"
import bad from "../../../public/images/bad/bad_intro.svg"
import dach from "../../../public/images/dach/dach_intro.svg"
import haustechnik from "../../../public/images/haustechnik/haustechnik_intro.svg"
import heizung from "../../../public/images/heizung/heizung_intro.svg"
import Image from "next/image"

const images = [dach, haustechnik, heizung, bad]

const ImpressumPage = (): React.JSX.Element =>
    <main>
        <Navbar items={navbarItems} />
        <section>
            <div className="leistung !mt-24">
                <div className="header">Impressum</div>
            </div>
        </section>
        <hr className="my-5 w-screen" />
        <section>
            <div className="leistung">
                <div className="w-1/2 mx-auto">
                    <div className="mx-auto text-center text-[32px] font-[400] ">Ihr Fachbetrieb für</div>
                </div>
                <div className="flex flex-row">
                    {images.map((item, index) => (
                        <Image alt={index.toString()} key={index} src={item}  width={300} className="pl-2"/>
                    ))}
                </div>
            </div>
        </section>
        <Footer links={navbarItems} />
    </main>

export default ImpressumPage

