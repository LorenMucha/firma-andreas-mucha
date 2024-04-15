import { CCarousel, CCarouselItem, CImage } from "@coreui/react"

const Leistungen = [
    { image: "/images/bad.jpg", title: "Bad" },
    { image: "/images/dach.jpg", title: "Dach" },
    { image: "/images/heizung.JPG", title: "Heizung" }
]

const Intro = (): React.JSX.Element =>
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-white p-10">
        <CCarousel controls indicators>
            {Leistungen.map(leistung => (

            )}
        </CCarousel>
    </div>

export default Intro