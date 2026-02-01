"use client";
import { useState } from "react";
import Link from "next/link";
import { NavbarItem } from "../constants";
import de from "@/locales/de.json";

const Navbar = ({ items }: { items: NavbarItem[] }): React.JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/40 bg-white/80 backdrop-blur-xl">
      <div className="section-pad flex items-center justify-between py-4">
        <Link href={`/#${de.anchors.start}`} className="text-lg font-semibold text-ink-900">
          {de.site.name}
        </Link>
        <div className="hidden items-center gap-8 lg:flex">
          {items.map((item) => (
            <Link
              key={item.text}
              href={`/${item.link}`}
              className="text-sm font-semibold uppercase tracking-wide text-ink-700 hover:text-ink-900"
            >
              {item.text}
            </Link>
          ))}
          <Link href={`/#${de.anchors.kontakt}`} className="btn-primary">
            {de.nav.kontakt}
          </Link>
        </div>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink-100 text-ink-900 lg:hidden"
          aria-label="Menü öffnen"
          aria-expanded={isOpen}
        >
          <span className="text-lg">{isOpen ? "×" : "≡"}</span>
        </button>
      </div>
      <div className={`section-pad pb-6 ${isOpen ? "block" : "hidden"} lg:hidden`}>
        <div className="card flex flex-col gap-4 p-5">
          {items.map((item) => (
            <Link key={item.text} href={`/${item.link}`} className="text-sm font-semibold uppercase tracking-wide text-ink-700">
              {item.text}
            </Link>
          ))}
          <Link href={`/#${de.anchors.kontakt}`} className="btn-primary w-full text-center">
            {de.nav.kontakt}
          </Link>
          <Link href="/impressum" className="text-sm uppercase tracking-wide text-ink-500">
            {de.nav.impressum}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
