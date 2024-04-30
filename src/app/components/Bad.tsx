import { LeistungProps } from "../page";
import Image from "next/image"
import badewanne from "../../../public/images/bad/badewanne.png"
import kleinesBad from "../../../public/images/bad/kleinesBad.jpg"
import waschtisch from "../../../public/images/bad/waschtisch.jpg"
import kloset from "../../../public/images/bad/kloset.jpg"


const Bad = (props: LeistungProps): React.JSX.Element =>
    <section id={props.id}>
        <div className="leistung">
            <div className="header">Bad</div>
            <div className="md:flex flex-row mt-4">
                <div className="flex-1 md:w-4/6">
                Wir bieten Ihnen persönliche Beratung direkt vor Ort, um maßgeschneiderte <b>Lösungen für Ihr Bad</b> zu entwickeln. 
                Egal, ob es sich um ein kleines Gästebad oder ein luxuriöses Spa handelt, wir finden die perfekte Gestaltung für jeden Raum und jeden Geschmack.
                <b>In Zusammenarbeit mit zuverlässigen Partnerfirmen</b> realisieren wir Komplettlösungen, von der Planung bis zur Umsetzung. 
                Unsere Spezialität liegt auch im <b>seniorengerechten Badumbau,</b> inklusive Unterstützung bei der <b>Beantragung von Kassenleistungen</b>. 
                Zudem bieten wir <b>einzigartige Wandverkleidungen</b> aus robusten Verbundwerkstoffen, individuell gestaltet mit Ihrem persönlichen Fotomotiv.
                </div>
                <div className="md:w-1/6 w-3/4 md:mr-5 md:ml-5 mt-2 mx-auto flex flex-col">
                    <Image alt="image" src={badewanne} quality="100" width={200} className="pb-2 mx-auto" />
                    <Image alt="image" src={kleinesBad} quality="100" width={200} className="mx-auto"/>
                </div>
                <div className="md:w-1/6 w-3/4 mt-2 mx-auto flex flex-col">
                    <Image alt="image" src={waschtisch} quality="100" width={200} className="pb-2 mx-auto" />
                    <Image alt="image" src={kloset} quality="100" width={200} className="mx-auto"/>
                </div>

            </div>
        </div>
    </section>

export default Bad