import Image from "next/image"
import bad from "../../../public/images/bad/bad_intro.svg"
import dach from "../../../public/images/dach/dach_intro.svg"
import haustechnik from "../../../public/images/haustechnik/haustechnik_intro.svg"
import heizung from "../../../public/images/heizung/heizung_intro.svg"


const Intro = (): React.JSX.Element => {

    const images = [{ image: dach, link: 'dach' }, { image: haustechnik, link: 'haustechnik' }, { image: heizung, link: 'heizung' }, { image: bad, link: 'bad' }]

    return (
        <div className="sm:w-full h-screen bg-white flex justify-center items-center flex-col px-5">
            <div className="pb-2 sm:mt-0 mt-24 w-auto sm:text-left text-center text-4xl"> Ihr Fachbetrieb für</div>
            <div className="sm:ml-0 ml-4 grid grid-cols-2 gap-1 w-auto h-auto">
                {images.map((item, index) => (
                    <a key={index} href={`#${item.link}`}>
                        <Image alt="image" className="w-full duration-300 ease-in-out hover:scale-110" src={item.image} />
                    </a>
                ))}
            </div>
        </div>)
}

export default Intro

