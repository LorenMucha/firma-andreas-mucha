import Link from "next/link"
import { NavbarItem } from "../constants"

const Footer = ({ links }: { links: NavbarItem[] }): React.JSX.Element =>
    <footer className="relative bottom-0">
        <div className="grid grid-cols-7 grid-flow-col py-5">
            <div className="col-span-2">
                <div>Ihr Fachbetrieb für:</div>
                {links.map((item, index) => (
                    <div key={index} className="underline">
                        <a href={item.link}>{item.text}</a>
                    </div>
                ))}
            </div>
            <div className="underline col-span-4">
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