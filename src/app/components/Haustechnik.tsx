import { LeistungProps } from "../page";
import anschlussBild from "../../../public/images/haustechnik/anschluss.jpg"
import gestellBild from "../../../public/images/haustechnik/gestell.jpg"
import rohrBild from "../../../public/images/haustechnik/rohr.jpg"
import Image from "next/image";

const Haustechnik = (props: LeistungProps): React.JSX.Element =>
    <section id={props.id}>
        <div className="leistung">
            <div className="header">Haustechnik</div>
            <div className="md:flex flex-row mt-4">
                <div className="flex-1 md:w-4/6">
                    Wir bieten umfassende Dienstleistungen rund um Installation, Reparatur, und Wartung von 
                    <b>Trinkwasser-, Abwasser-, Gas- und Heizungsinstalationen</b> in allen gängigen Materialien.
                    Wir kümmern uns um das Nachrüsten von <b>Hauswasserstationen, Entkalkungsanlagen und Leckageschutzsystemen</b>.
                    Auch der Austausch und die <b>Reinigung von Trinkwasserspeichern</b> gehören zu unseren Leistungen.
                    Unsere erfahrenen Techniker sind spezialisiert auf die Wartung und Instandsetzung von <b>Gas- und Trinkwasseranlagen</b>,
                    um Ihre Installationen sicher und effizient zu halten.
                    Darüber hinaus bieten wir den Einbau von <b>Rückstauverschlüssen, Hebeanlagen und Fettabscheidern</b> an.
                </div>
                <div className="md:w-1/6 w-3/4 md:mr-5 md:ml-5 mt-2 mx-auto flex flex-col">
                    <Image alt="image" src={anschlussBild} quality="100" width={300} className="pb-2 md:mx-auto" />
                    <Image alt="image" src={rohrBild} quality="100" width={300} className="md:mx-auto" />
                </div>
                <div className="md:w-1/6 w-3/4 mt-2 mx-auto flex flex-col h-[400px]">
                    <Image alt="image" src={gestellBild} quality="100" width={140} className="mx-auto" />
                </div>
            </div>
        </div>
    </section>

export default Haustechnik