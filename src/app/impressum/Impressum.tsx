import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import bad from "../../../public/images/bad/bad_intro.svg"
import dach from "../../../public/images/dach/dach_intro.svg"
import haustechnik from "../../../public/images/haustechnik/haustechnik_intro.svg"
import heizung from "../../../public/images/heizung/heizung_intro.svg"
import Image from "next/image"
import { navbarItems } from "../constants"

const images = [dach, haustechnik, heizung, bad]

const ImpressumPage = (): React.JSX.Element =>
    <main className="w-full">
        <Navbar items={navbarItems} />
        <section className="leading-none mt-24">
            <div className="leistung">
                <div>
                    <b>Inhaltlich verantwortlicher gem. §6 MDStV &amp; §6 TDG:</b>
                    <p>Firma Andreas Mucha</p>
                    <p>Seitenstraße 8<br />
                        01896 Lichtenberg</p>
                    <p>Telefon: 0176/39735624</p>
                    <p>Email: <a className="underline hover:text-green-200" href="mailto:fa.mucha@web.de">fa.mucha@web.de</a></p>
                    <b>Inhaber und Geschäftsführer:</b>
                    <p>Andreas Mucha</p>
                    <p>Registergericht: Amtsgericht Dresden</p><br />
                    <p>Umsatzsteuer Identifikations-Nr: DE236665763</p>
                    <div className="header text-center py-2">Inhalte dieser Website</div>
                    <div>Die Inhalte dieser Website werden mit größtmöglicher Sorgfalt erstellt.
                        Der Anbieter übernimmt jedoch keine Gewähr für die Richtigkeit, Vollständigkeit und Aktualität der bereitgestellten Inhalte.
                        Die Nutzung der abrufbaren Inhalte erfolgt auf eigene Gefahr des Nutzers.
                        Namentlich gekennzeichnete Beiträge geben die Meinung des jeweiligen Autors und nicht immer die Meinung des Anbieters wieder.
                    </div>
                    <div className="header text-center py-2">Verfügbarkeit der Website</div>
                    <div>Der Anbieter wird sich bemühen, den Dienst möglichst unterbrechungsfrei zum Abruf anzubieten.
                        Auch bei aller Sorgfalt können aber Ausfallzeiten nicht ausgeschlossen werden.
                        Der Anbieter behält sich das Recht vor, sein Angebot jederzeit zu ändern oder einzustellen.
                    </div>
                    <div className="header text-center py-2">Externe Links</div>
                    <div>Diese Website enthält Verknüpfungen zu Websites Dritter („externe Links“).
                        Diese Websites unterliegen der Haftung der jeweiligen Betreiber.
                        Der Anbieter hat bei der erstmaligen Verknüpfung der externen Links die fremden Inhalte daraufhin überprüft,
                        ob etwaige Rechtsverstöße bestehen. Zu dem Zeitpunkt waren keine Rechtsverstöße ersichtlich.
                        Der Anbieter hat keinerlei Einfluss auf die aktuelle und zukünftige Gestaltung und auf die Inhalte der verknüpften Seiten.
                        Das Setzen von externen Links bedeutet nicht, dass sich der Anbieter die hinter dem Verweis oder Link liegenden Inhalte zu Eigen macht.
                        Eine ständige Kontrolle dieser externen Links ist für den Anbieter ohne konkrete Hinweise auf Rechtsverstöße nicht zumutbar.
                        Bei Kenntnis von Rechtsverstößen werden jedoch derartige externe Links unverzüglich gelöscht.
                    </div>
                    <div className="header text-center py-2">Werbeanzeigen</div>
                    <div>Für den Inhalt der Werbeanzeigen ist der jeweilige Autor verantwortlich, ebenso wie für den Inhalt der beworbenen Website. 
                        Die Darstellung der Werbeanzeige stellt keine Akzeptanz durch den Anbieter dar.</div>
                    <div className="header text-center py-2">Kein Vertragsverhältnis</div>
                    <div>Mit der Nutzung der Website des Anbieters kommt keinerlei Vertragsverhältnis zwischen dem Nutzer und dem Anbieter zustande. 
                        Insofern ergeben sich auch keinerlei vertragliche oder quasivertragliche Ansprüche gegen den Anbieter. 
                        Für den Fall, dass die Nutzung der Website doch zu einem Vertragsverhältnis führen sollte, gilt rein vorsorglich nachfolgende 
                        Haftungsbeschränkung: Der Anbieter haftet für Vorsatz und grobe Fahrlässigkeit sowie bei Verletzung einer 
                        wesentlichen Vertragspflicht (Kardinalpflicht). Der Anbieter haftet unter Begrenzung auf Ersatz des 
                        bei Vertragsschluss vorhersehbaren vertragstypischen Schadens für solche Schäden, 
                        die auf einer leicht fahrlässigen Verletzung von Kardinalpflichten durch ihn oder eines seiner gesetzlichen Vertreter 
                        oder Erfüllungsgehilfen beruhen. Bei leicht fahrlässiger Verletzung von Nebenpflichten, die keine Kardinalpflichten sind, 
                        haftet der Anbieter nicht. Die Haftung für Schäden, die in den Schutzbereich einer vom Anbieter gegebenen Garantie oder Zusicherung 
                        fallen sowie die Haftung für Ansprüche aufgrund des Produkthaftungsgesetzes und Schäden aus der Verletzung des Lebens, 
                        des Körpers oder der Gesundheit bleibt hiervon unberührt.</div>
                    <div className="header text-center py-2">Urheberrecht</div>
                    <div>Die auf dieser Website veröffentlichten Inhalte und Werke sind urheberrechtlich geschützt. 
                        Jede vom deutschen Urheberrecht nicht zugelassene Verwertung bedarf der vorherigen schriftlichen Zustimmung des jeweiligen 
                        Autors oder Urhebers. Dies gilt insbesondere für Vervielfältigung, Bearbeitung, Übersetzung, Einspeicherung, 
                        Verarbeitung bzw. Wiedergabe von Inhalten in Datenbanken oder anderen elektronischen Medien und Systemen. 
                        Inhalte und Beiträge Dritter sind dabei als solche gekennzeichnet. Die unerlaubte Vervielfältigung oder Weitergabe einzelner 
                        Inhalte oder kompletter Seiten ist nicht gestattet und strafbar. 
                        Lediglich die Herstellung von Kopien und Downloads für den persönlichen, privaten und nicht kommerziellen Gebrauch ist erlaubt. 
                        Links zur Website des Anbieters sind jederzeit willkommen und bedürfen keiner Zustimmung durch den Anbieter der Website. 
                        Die Darstellung dieser Website in fremden Frames ist nur mit Erlaubnis zulässig.</div>
                    <div className="header text-center py-2">Anwendbares Recht</div>
                    <div>Es gilt ausschließlich das maßgebliche Recht der Bundesrepublik Deutschland. Besondere Nutzungsbedingungen*<br />
                        Soweit besondere Bedingungen für einzelne Nutzungen dieser Website von den vorgenannten abweichen,
                        wird an entsprechender Stelle ausdrücklich darauf hingewiesen.
                        In diesem Falle gelten im jeweiligen Einzelfall die besonderen Nutzungsbedingungen.
                    </div>
                </div>
            </div>
        </section>
        <hr className="my-5 w-screen md:block hidden" />
        <section className="md:block hidden">
            <div className="leistung">
                <div className="mx-auto">
                    <div className="mx-auto text-center text-4xl ">Ihr Fachbetrieb für</div>
                </div>
                <div className="flex flex-row">
                    {images.map((item, index) => (
                        <div key={index} >
                            <Image alt={index.toString()} src={item} className="object-cover pl-2" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
        <Footer links={navbarItems} />
    </main >

export default ImpressumPage

