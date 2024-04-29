import { CImage } from "@coreui/react"

const images = ['dach/dach_intro.svg', 'haustechnik/haustechnik_intro.svg', 'heizung/heizung_intro.svg', 'bad/bad_intro.svg']

const Intro = (): React.JSX.Element =>
    <div className="sm:w-full sm:h-screen bg-white flex sm:justify-center lg:items-center flex-col px-5">
        <div className="text-2xl pb-2 sm:mt-0 mt-24 w-auto text-left"> Ihr Fachbetrieb für</div>
        <div className="sm:ml-0 ml-4 grid grid-cols-2 gap-1 w-auto h-auto">
            {images.map((image, index) => (
                <CImage key={index} className="w-full duration-300 ease-in-out hover:scale-110" src={`/images/${image}`} />
            ))}
        </div>
    </div>

export default Intro