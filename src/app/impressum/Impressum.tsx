import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import bad from "../../../public/images/bad/bad_intro.svg"
import dach from "../../../public/images/dach/dach_intro.svg"
import haustechnik from "../../../public/images/haustechnik/haustechnik_intro.svg"
import heizung from "../../../public/images/heizung/heizung_intro.svg"
import Image from "next/image"
import { navbarItems } from "../constants"
import de from "@/locales/de.json"

const images = [dach, haustechnik, heizung, bad]

const ImpressumPage = (): React.JSX.Element =>
    <main className="w-full">
        <Navbar items={navbarItems} />
        <section className="leading-none mt-24">
            <div className="leistung">
                <div>
                    <div className="font-bold">{de.impressum.responsibleTitle}</div>
                    <p>{de.impressum.company}</p>
                    <p>{de.impressum.address.line1}<br />
                        {de.impressum.address.line2}</p>
                    <p>{de.impressum.phoneLabel}: {de.impressum.phone}</p>
                    <p>{de.impressum.emailLabel}: <a className="underline hover:text-green-200" href={`mailto:${de.impressum.email}`}>{de.impressum.email}</a></p>
                    <div className="mt-3 font-bold">{de.impressum.ownerTitle}</div>
                    <p>{de.impressum.ownerName}</p>
                    <p>{de.impressum.court}</p><br />
                    <p>{de.impressum.vatId}</p>
                    <div className="header text-center py-2">{de.impressum.sections.contentsTitle}</div>
                    <div>{de.impressum.sections.contentsBody}</div>
                    <div className="header text-center py-2">{de.impressum.sections.availabilityTitle}</div>
                    <div>{de.impressum.sections.availabilityBody}</div>
                    <div className="header text-center py-2">{de.impressum.sections.externalLinksTitle}</div>
                    <div>{de.impressum.sections.externalLinksBody}</div>
                    <div className="header text-center py-2">{de.impressum.sections.adsTitle}</div>
                    <div>{de.impressum.sections.adsBody}</div>
                    <div className="header text-center py-2">{de.impressum.sections.noContractTitle}</div>
                    <div>{de.impressum.sections.noContractBody}</div>
                    <div className="header text-center py-2">{de.impressum.sections.copyrightTitle}</div>
                    <div>{de.impressum.sections.copyrightBody}</div>
                    <div className="header text-center py-2">{de.impressum.sections.lawTitle}</div>
                    <div>{de.impressum.sections.lawBodyLine1}<br />
                        {de.impressum.sections.lawBodyLine2}<br />
                        {de.impressum.sections.lawBodyLine3}<br />
                        {de.impressum.sections.lawBodyLine4}
                    </div>
                </div>
            </div>
        </section>
        <hr className="my-5 w-screen md:block hidden" />
        <section className="md:block hidden">
            <div className="leistung">
                <div className="mx-auto">
                    <div className="mx-auto text-center text-4xl ">{de.site.tagline}</div>
                </div>
                <div className="flex flex-row">
                    {images.map((item, index) => (
                        <div key={index} >
                            <Image alt={index.toString()} src={item} className="object-cover pl-2" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
        <Footer links={navbarItems} />
    </main >

export default ImpressumPage
