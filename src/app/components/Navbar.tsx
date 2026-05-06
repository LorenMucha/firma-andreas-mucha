"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { HiBars3BottomRight, HiMiniPhone, HiOutlineEnvelope, HiXMark } from "react-icons/hi2";
import { NavbarItem } from "../constants";
import de from "@/locales/de.json";
import { siteConfig } from "../site";

const Navbar = ({ items }: { items: NavbarItem[] }): React.JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "";
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-white/70 bg-sand-50/85 backdrop-blur-xl">
      <div className="section-pad">
        <div className="section-frame flex items-center justify-between gap-4 py-4">
          <Link href={`/#${de.anchors.start}`} className="min-w-0 no-underline" onClick={closeMenu}>
            <span className="block truncate font-display text-2xl text-ink-900">{de.site.name}</span>
            <span className="mt-1 block text-xs uppercase tracking-[0.22em] text-ink-500">{de.site.tagline}</span>
          </Link>

          <div className="hidden items-center gap-7 xl:flex">
            {items.map((item) => (
              <Link
                key={item.text}
                href={`/${item.link}`}
                className="text-sm font-semibold uppercase tracking-[0.18em] text-ink-700 no-underline transition hover:text-copper-500"
              >
                {item.text}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex min-h-12 items-center gap-2 rounded-full border border-ink-100 bg-white/70 px-4 text-sm font-semibold text-ink-700 no-underline transition hover:border-copper-400 hover:text-copper-500"
            >
              <HiOutlineEnvelope size={18} />
              <span>E-Mail</span>
            </a>
            <a
              href={`tel:${siteConfig.phoneHref}`}
              className="inline-flex min-h-12 items-center gap-2 rounded-full border border-ink-100 bg-white/70 px-4 text-sm font-semibold text-ink-700 no-underline transition hover:border-copper-400 hover:text-copper-500"
            >
              <HiMiniPhone size={18} />
              <span>{siteConfig.phoneDisplay}</span>
            </a>
            <Link href={`/#${de.anchors.kontakt}`} className="btn-primary">
              {de.nav.kontakt}
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-ink-100 bg-white/80 text-ink-900 xl:hidden"
            aria-label={isOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsOpen((open) => !open)}
          >
            {isOpen ? <HiXMark size={22} /> : <HiBars3BottomRight size={22} />}
          </button>
        </div>

        <div
          id="mobile-navigation"
          className={`overflow-hidden transition-[max-height,opacity] duration-300 xl:hidden ${
            isOpen ? "max-h-[32rem] pb-4 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="surface-card space-y-5 p-5">
            <div className="grid gap-3">
              {items.map((item) => (
                <Link
                  key={item.text}
                  href={`/${item.link}`}
                  className="rounded-2xl border border-ink-100 px-4 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-ink-700 no-underline"
                  onClick={closeMenu}
                >
                  {item.text}
                </Link>
              ))}
            </div>
            <div className="grid gap-3">
              <a href={`tel:${siteConfig.phoneHref}`} className="btn-primary" onClick={closeMenu}>
                {siteConfig.phoneDisplay}
              </a>
              <a href={`mailto:${siteConfig.email}`} className="btn-secondary" onClick={closeMenu}>
                {siteConfig.email}
              </a>
              <Link href="/impressum" className="text-sm font-semibold uppercase tracking-[0.18em] text-ink-500 no-underline" onClick={closeMenu}>
                {de.nav.impressum}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
