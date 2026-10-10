import Link from "next/link";
import { NavbarItem } from "../constants";
import de from "@/locales/de.json";
import { siteConfig } from "../site";

const Footer = ({ links }: { links: NavbarItem[] }): React.JSX.Element => (
  <footer className="section-pad border-t border-white/70 bg-white/65 py-12 sm:py-16">
    <div className="section-frame grid gap-10 lg:grid-cols-[1.1fr_0.8fr_0.9fr]">
      <div className="space-y-4">
        <div className="eyebrow">Firma Andreas Mucha</div>
        <div>
          <div className="font-display text-3xl text-ink-900">{de.site.name}</div>
          <p className="mt-3 max-w-xl text-base text-ink-700">{de.site.taglineFooter}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a href={`tel:${siteConfig.phoneHref}`} className="btn-primary">
            {siteConfig.phoneDisplay}
          </a>
          <a href={`mailto:${siteConfig.email}`} className="btn-secondary">
            {siteConfig.email}
          </a>
        </div>
      </div>

      <div>
        <div className="text-sm font-semibold uppercase tracking-[0.2em] text-ink-500">Navigation</div>
        <div className="mt-4 grid gap-3">
          {links.map((item) => (
            <Link key={item.text} href={`/${item.link}`} className="text-sm font-semibold text-ink-700 no-underline transition hover:text-copper-500">
              {item.text}
            </Link>
          ))}
          <Link href="/impressum" className="text-sm font-semibold text-ink-700 no-underline transition hover:text-copper-500">
            {de.nav.impressum}
          </Link>
        </div>
          <Link href="/datenschutz" className="text-sm font-semibold text-ink-700 no-underline">Datenschutz</Link>
      </div>

      <div>
        <div className="text-sm font-semibold uppercase tracking-[0.2em] text-ink-500">Kontakt</div>
        <address className="mt-4 not-italic text-sm text-ink-700">
          <div>{de.footer.address.line1}</div>
          <div>{de.footer.address.line2}</div>
          <div className="mt-4">
            <a href={`tel:${siteConfig.phoneHref}`} className="font-semibold text-ink-900 no-underline">
              {de.impressum.phone}
            </a>
          </div>
          <div>
            <a href={`mailto:${siteConfig.email}`} className="font-semibold text-ink-900 no-underline">
              {de.impressum.email}
            </a>
          </div>
          <div className="mt-4">
            <a href={siteConfig.mapLink} target="_blank" rel="noreferrer" className="font-semibold text-copper-500 no-underline">
              OpenStreetMap öffnen
            </a>
          </div>
        </address>
      </div>
    </div>
  </footer>
);

export default Footer;
