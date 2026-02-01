import Link from "next/link"
import { NavbarItem } from "../constants"
import de from "@/locales/de.json"

const Footer = ({ links }: { links: NavbarItem[] }): React.JSX.Element =>
    <footer className="relative bottom-0 left-0 right-0 md:block hidden">
        <div className="grid grid-cols-7 grid-flow-col py-5">
            <div className="sm:col-span-2 col-span-3">
                <div>{de.site.taglineFooter}</div>
                {links.map((item, index) => (
                    <div key={index} className="underline">
                        <a href={item.link}>{item.text}</a>
                    </div>
                ))}
            </div>
            <div className="underline sm:col-span-4 col-span-4">
                <Link href={`/#${de.anchors.kontakt}`}>{de.nav.kontakt}</Link>
                <div><Link href="/impressum">{de.nav.impressum}</Link></div>
            </div>
            <div className="float-right">
                <div>{de.site.name}</div>
                <div>{de.footer.address.line1}</div>
                <div>{de.footer.address.line2}</div>
            </div>

        </div>
    </footer>

export default Footer
