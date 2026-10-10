import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { company, siteUrl } from "../constants";
export const metadata: Metadata = {
  title: "Datenschutz",
  alternates: { canonical: siteUrl + "/datenschutz/" },
};
export default function Datenschutz() {
  return (
    <>
      <Navbar />
      <main id="hauptinhalt" className="container section legal">
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
          {company.name}, {company.street}, {company.city}
          <br />
          <a href={`mailto:${company.email}`}>{company.email}</a>
          <br />
          <a href={company.tel}>{company.phone}</a>
        </p>
      </main>
      <Footer />
    </>
  );
}
