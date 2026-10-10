import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Kontakt from "./components/Kontakt";
import Photo from "./components/Photo";
import { company, siteUrl } from "./constants";
const services = [
  {
    id: "heizung",
    title: "Heizung",
    text: "Wir unterstützen Sie bei der Planung und dem Bau Ihrer Heizungsanlage – vom Austausch bis zum neuen Heizsystem.",
    items: [
      "Gas- und Öl-Brennwertanlagen, Pelletheizungen",
      "Wärmepumpen, Photovoltaik und Solar",
    ],
    photo: "heizung",
    alt: "Heizungsanlage mit Speicher und angeschlossenen Rohrleitungen",
  },
  {
    id: "bad",
    title: "Bad und Sanitär",
    text: "Wir besprechen Ihre Wünsche vor Ort und planen Ihr Bad passend zu Ihrem Alltag. Komplettlösungen setzen wir mit Partnerfirmen um.",
    items: [
      "Badgestaltung und seniorengerechter Umbau",
      "Unterstützung bei der Beantragung von Kassenleistungen",
      "Wandverkleidungen aus Verbundwerkstoffen mit individuellem Fotomotiv",
    ],
    photo: "bad",
    alt: "Eingebaute Badewanne neben einem Handtuchheizkörper",
  },
  {
    id: "haustechnik",
    title: "Haustechnik",
    text: "Wir installieren, reparieren und warten Trinkwasser-, Abwasser-, Gas- und Heizungsinstallationen.",
    items: [
      "Hauswasserstationen, Entkalkung und Leckageschutz",
      "Austausch und Reinigung von Trinkwasserspeichern",
      "Wartung und Instandsetzung von Gas- und Trinkwasseranlagen",
      "Rückstauverschlüsse, Hebeanlagen und Fettabscheider",
    ],
  },
  {
    id: "dach",
    title: "Dacharbeiten",
    text: "Wir planen und fertigen Metalldeckungen aus Zink, Kupfer, Aluminium und Edelstahl und kümmern uns um die Dachentwässerung.",
    items: [
      "Dachrinnen, Fallrohre und Dachrinnen-Begleitheizungen",
      "Reparaturen an Abdeckungen und Dachentwässerung",
      "Dachreparaturen und Gerüstbau in kleinem Umfang",
    ],
    photo: "dach",
    alt: "Kupferarbeiten an einem Dach",
  },
];
export default function Home() {
  return (
    <>
      <Navbar />
      <main id="hauptinhalt">
        <section className="hero">
          <div className="container">
            <p className="eyebrow">Handwerk aus Lichtenberg</p>
            <h1>
              Heizung, Bad,
              <br />
              Haustechnik und Dach.
            </h1>
            <p className="hero-copy">
              Firma Andreas Mucha – Ihr Handwerksbetrieb aus Lichtenberg. Wir
              unterstützen Sie bei Ihrem Vorhaben und übernehmen auch die
              Wartung Ihres Heizkessels.
            </p>
            <div className="actions">
              <a className="button" href="#kontakt">
                Kontakt aufnehmen <span aria-hidden="true">↗</span>
              </a>
              <a className="button secondary" href={company.tel}>
                Anrufen
              </a>
            </div>
            <div className="hero-bottom">
              <span>Persönlicher Kontakt. Gemeinsam abgestimmt.</span>
              <a href="#leistungen">
                Unsere Leistungen <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
        </section>
        <section id="leistungen" className="section container">
          <div className="section-heading">
            <p className="eyebrow">Was wir für Sie tun</p>
            <h2>Handwerk für Ihr Zuhause.</h2>
            <p>
              Ob neues Vorhaben oder Arbeiten am Bestand: Sprechen Sie mit uns
              darüber, welche Unterstützung Sie benötigen.
            </p>
          </div>
          <div className="service-list">
            {services.map((s, i) => (
              <article
                id={s.id}
                className={`service ${s.photo ? "" : "text-only"}`}
                key={s.id}
              >
                <div>
                  <span className="service-number">0{i + 1}</span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                  <ul>
                    {s.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                {s.photo && <Photo name={s.photo} alt={s.alt!} />}
              </article>
            ))}
          </div>
        </section>
        <section id="kesselwartung" className="maintenance">
          <div className="container maintenance-inner">
            <div>
              <p className="eyebrow">Service für Ihre Heizung</p>
              <h2>Zeit für die Kesselwartung?</h2>
              <p>
                Wir übernehmen die Wartung Ihres Heizkessels. Nennen Sie uns bei
                Ihrer Anfrage möglichst den Hersteller und das Modell, damit wir
                die weiteren Schritte mit Ihnen abstimmen können.
              </p>
            </div>
            <a className="button" href="#kontakt">
              Wartung anfragen <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
        <section id="betrieb" className="section container about">
          <p className="eyebrow">Firma Andreas Mucha</p>
          <h2>
            Ein kleiner Betrieb
            <br />
            mit persönlichem Kontakt.
          </h2>
          <p>
            Andreas Mucha und ein Mitarbeiter kümmern sich um die Arbeiten.
            Sprechen Sie mit uns über Ihr Vorhaben – gemeinsam klären wir, wie
            wir Sie unterstützen können.
          </p>
        </section>
        <Kontakt id="kontakt" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HomeAndConstructionBusiness",
              name: company.name,
              url: siteUrl + "/",
              telephone: "+4917639735624",
              email: company.email,
              address: {
                "@type": "PostalAddress",
                streetAddress: company.street,
                postalCode: "01896",
                addressLocality: "Lichtenberg",
                addressCountry: "DE",
              },
            }),
          }}
        />
      </main>
      <Footer />
    </>
  );
}
