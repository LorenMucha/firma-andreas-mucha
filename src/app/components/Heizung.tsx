import Image from "next/image"
import therme from "../../../public/images/heizung/therme.png"
import fußbodenHeizung from "../../../public/images/heizung/fußbodenheizung.jpg"
import { LeistungProps } from "../page"


const Heizung = (props: LeistungProps): React.JSX.Element =>
    <section id={props.id}>
        <div className="leistung">
            <div className="header">Heizung</div>
            <div className="md:flex flex-row mt-4">
                <div className="flex-1 md:w-4/6">
                    Mit unserer langjährigen Erfahrung unterstützen wir Sie bei der Planung und dem Bau kompletter Heizungsanlagen.
                    Unser Angebot umfasst <b>Brennwert-Gas-und Ölanlagen-, sowie Pelletsheizungen</b>.
                    Wir bieten Lösungen für <b>Wärmepumpen, Photovoltaik- und Solaranlagen</b> sowie an.
                </div>
                <div className="md:w-1/6 w-3/4 md:ml-5 mt-2 mx-auto">
                    <Image alt="image" src={therme} quality="100" width={200}/>
                </div>
                <div className="md:w-1/6 w-3/4 mt-2 mx-auto">
                    <Image alt="image" src={fußbodenHeizung} quality="100" width={200} />

                </div>
            </div>
        </div>
    </section>

export default Heizung