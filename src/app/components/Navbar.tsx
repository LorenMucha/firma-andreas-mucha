"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { company, navbarItems } from "../constants";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const button = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        button.current?.focus();
      }
    };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [open]);
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand">
          <span>Firma</span>Andreas Mucha
        </Link>
        <a className="header-phone" href={company.tel}>
          {company.phone}
        </a>
        <button
          ref={button}
          className="menu-button"
          aria-expanded={open}
          aria-controls="navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? "Schließen" : "Menü"}
          <span aria-hidden="true">{open ? " ×" : " ☰"}</span>
        </button>
        <nav
          id="navigation"
          aria-label="Hauptnavigation"
          className={open ? "navigation is-open" : "navigation"}
        >
          {navbarItems.map((item) => (
            <Link
              key={item.link}
              href={`/${item.link}`}
              onClick={() => setOpen(false)}
            >
              {item.text}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
