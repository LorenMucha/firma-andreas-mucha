import Link from "next/link";
import { company } from "../constants";
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <strong>{company.name}</strong>
          <p>
            {company.street} · {company.city}
          </p>
        </div>
        <a href={company.tel}>{company.phone}</a>
        <nav aria-label="Rechtliche Informationen">
          <Link href="/impressum/">Impressum</Link>
          <Link href="/datenschutz/">Datenschutz</Link>
        </nav>
      </div>
    </footer>
  );
}
