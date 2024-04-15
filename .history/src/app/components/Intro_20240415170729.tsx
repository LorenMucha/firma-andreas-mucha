import { CCarousel, CCarouselItem, CImage } from "@coreui/react"

const Leistungen = [
    { image: "/images/bad.jpg", title: "Bad" },
    { image: "/images/dach.jpg", title: "Dach" },
    { image: "/images/heizung.JPG", title: "Heizung" }
]

const Intro = (): React.JSX.Element =>
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-white pt-10">
        <CCarousel controls indicators transition="crossfade">
            {Leistungen.map((leistung, index) => (
                <CCarouselItem key={index}>
                    <CImage align="center" fluid rounded src={leistung.image} alt="slide 1" />
                    <div className="text-2">
                        {leistung.title}
                    </div>
                </CCarouselItem>
            ))}
        </CCarousel>
    </div>

export default Intro