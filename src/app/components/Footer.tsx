import Link from "next/link"
import { NavbarItem } from "../constants"

const Footer = ({ links }: { links: NavbarItem[] }): React.JSX.Element =>
    <footer className="relative bottom-0 left-0 right-0 md:block hidden">
        <div className="grid grid-cols-7 grid-flow-col py-5">
            <div className="sm:col-span-2 col-span-3">
                <div>Ihr Fachbetrieb für:</div>
                {links.map((item, index) => (
                    <div key={index} className="underline">
                        <a href={item.link}>{item.text}</a>
                    </div>
                ))}
            </div>
            <div className="underline sm:col-span-4 col-span-4">
                <Link href="/#kontakt">Kontakt</Link>
                <div><Link href="/impressum">Impressum</Link></div>
            </div>
            <div className="float-right">
                <div>Andreas Mucha</div>
                <div>Seitenstraße 8</div>
                <div>01896 Lichtenberg</div>
            </div>

        </div>
    </footer>

export default Footer