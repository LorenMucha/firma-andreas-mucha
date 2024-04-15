import { CImage } from "@coreui/react"

const Leistungen = [
    { image: "/images/bad.jpg", title: "Bad" },
    { image: "/images/dach.jpg", title: "Dach" },
    { image: "/images/heizung.JPG", title: "Heizung" }
]

const Intro = (): React.JSX.Element =>
    <div className="w-screen h-screen bg-white flex justify-center items-center flex-wrap">
        <div className="container grid grid-cols-1 gap-3">
            <div className="text-4xl text-black text-center">Herzlich Wilkommen </div>
            <div className="flex justify-center items-center">
                {Leistungen.map((leistung, index) => (
                    <div key={index}>
                        {<div className="max-w-sm rounded shadow-lg ml-5 hover:scale-110 ">
                            <CImage className="w-full" src={leistung.image} />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2 text-blue-900">{leistung.title}</div>
                                <p className="text-gray-700 text-base">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                                </p>
                            </div>
                        </div>
                        }
                    </div>
                ))}
            </div>
        </div>
    </div>

export default Intro