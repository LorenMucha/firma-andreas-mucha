import Image from "next/image";
import { LeistungProps } from "../page";
import dachrinneBild from "../../../public/images/dach/dachrinne.png"
import holzBild from "../../../public/images/dach/holz.png"
import kupferBild from "../../../public/images/dach/kupfer.png"
import schornsteinBild from "../../../public/images/dach/schornstein.jpg"

const Dach = (props: LeistungProps): React.JSX.Element => {
    return (<section id={props.id}>
        <div className="leistung">
            <div className="header">Dach</div>
            <div className="md:flex flex-row mt-4">
                <div className="flex-1 md:w-4/6">
                    Unsere Leistungen umfassen die Planung und fachgerechte Ausführung von <b>Dachdeckungen aus Zink, Kupfer, Aluminium und Edelstahl</b>.
                    Zudem kümmern wir uns um die Montage von <b>Entwässerungssystemen sowie Dachrinnen-Begleitheizungen</b>, um Ihr Dach optimal zu schützen.
                    Bei uns erhalten Sie auch <b>fachmännische Reparaturen</b> von defekten Abdeckungen, Dachrinnen und Fallrohren, um Schäden frühzeitig zu
                    beheben und weitere Probleme zu vermeiden. Darüber hinaus bieten wir Dachreparaturen und <b>Gerüstbau</b> in kleinem Umfang an,
                    um Ihnen eine umfassende Lösung aus einer Hand zu bieten.
                </div>
                <div className="md:w-1/6 w-3/4 md:mr-5 md:ml-5 mt-2 mx-auto flex flex-col">
                    <Image alt="image" src={holzBild} quality="100" width={300} height={150} className="pb-2 md:mx-auto" />
                    <Image alt="image" src={kupferBild} quality="100" width={300} height={150} className="md:mx-auto" />
                </div>
                <div className="md:w-1/6 w-3/4 mt-2 mx-auto flex flex-col h-[400px]">
                    <Image alt="image" src={dachrinneBild} quality="100" width={300} className="mx-auto pb-2" />
                    <Image alt="image" src={schornsteinBild} quality="100" width={300} className="mx-auto" />
                </div>
            </div>
        </div>
    </section>
    )
}

export default Dach