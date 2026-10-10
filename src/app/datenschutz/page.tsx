import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { navbarItems } from "../constants";
import { siteConfig } from "../site";
import de from "@/locales/de.json";
export const metadata: Metadata = {
  title: "Datenschutz",
  alternates: { canonical: siteConfig.siteUrl + "/datenschutz/" },
};
export default function Datenschutz() {
  return (
    <>
      <Navbar items={navbarItems} />
      <main id="hauptinhalt" className="section-frame surface-card my-10 space-y-6 p-6 sm:p-10">
        <h1>Datenschutz</h1>
        <p className="legal-note">
          Eine vollständige, fachlich geprüfte Datenschutzerklärung liegt für
          diese Website noch nicht vor. Die Angaben zu Hosting und
          Kontaktformular müssen vor Veröffentlichung rechtlich ergänzt und
          geprüft werden.
        </p>
        <h2>Kontakt und Formularversand</h2>
        <p>
          Das Kontaktformular übermittelt Ihren Namen, Ihre E-Mail-Adresse und
          Ihr Anliegen an den externen Dienst Formspree. Bitte senden Sie nur
          Angaben, die für Ihre Anfrage erforderlich sind.
        </p>
        <p>
          Informationen des Dienstanbieters finden Sie in der{" "}
          <a href="https://formspree.io/legal/privacy-policy/">
            Datenschutzerklärung von Formspree
          </a>
          .
        </p>
        <h2>Hosting</h2>
        <p>
          Diese Website wird über GitHub Pages bereitgestellt. Weitere
          Informationen stellt GitHub in seiner{" "}
          <a href="https://docs.github.com/de/site-policy/privacy-policies/github-general-privacy-statement">
            Datenschutzerklärung
          </a>{" "}
          bereit.
        </p>
        <h2>Direkter Kontakt</h2>
        <p>
          {de.impressum.company}, {de.impressum.address.line1}, {de.impressum.address.line2}
          <br />
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          <br />
          <a href={`tel:${siteConfig.phoneHref}`}>{siteConfig.phoneDisplay}</a>
        </p>
      </main>
      <Footer links={navbarItems} />
    </>
  );
}
