import Link from "next/link";
import { NavbarItem } from "../constants";
import de from "@/locales/de.json";

const Footer = ({ links }: { links: NavbarItem[] }): React.JSX.Element => (
  <footer className="section-pad border-t border-ink-100 bg-white/80 py-12">
    <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr_0.8fr]">
      <div>
        <div className="text-lg font-semibold text-ink-900">{de.site.name}</div>
        <p className="mt-3 text-sm text-ink-700">{de.site.taglineFooter}</p>
      </div>
      <div>
        <div className="text-sm font-semibold uppercase tracking-wide text-ink-500">Navigation</div>
        <div className="mt-4 grid gap-2">
          {links.map((item) => (
            <Link key={item.text} href={`/${item.link}`} className="text-sm text-ink-700 hover:text-ink-900">
              {item.text}
            </Link>
          ))}
          <Link href={`/#${de.anchors.kontakt}`} className="text-sm text-ink-700 hover:text-ink-900">
            {de.nav.kontakt}
          </Link>
          <Link href="/impressum" className="text-sm text-ink-700 hover:text-ink-900">
            {de.nav.impressum}
          </Link>
        </div>
      </div>
      <div>
        <div className="text-sm font-semibold uppercase tracking-wide text-ink-500">Adresse</div>
        <div className="mt-4 text-sm text-ink-700">
          <div>{de.footer.address.line1}</div>
          <div>{de.footer.address.line2}</div>
        </div>
        <div className="mt-4 text-sm text-ink-700">{de.impressum.phone}</div>
        <div className="text-sm text-ink-700">{de.impressum.email}</div>
      </div>
    </div>
  </footer>
);

export default Footer;
