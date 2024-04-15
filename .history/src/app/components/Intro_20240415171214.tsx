import { CCarousel, CCarouselItem, CImage } from "@coreui/react"

const Leistungen = [
    { image: "/images/bad.jpg", title: "Bad" },
    { image: "/images/dach.jpg", title: "Dach" },
    { image: "/images/heizung.JPG", title: "Heizung" }
]

const Intro = (): React.JSX.Element =>
    <div className="d-flex flex justify-center items-center bg-black pt-10">
        <CCarousel controls indicators transition="crossfade">
            {Leistungen.map((leistung, index) => (
                <CCarouselItem key={index}>
                    <CImage align="center" className="object-fill" fluid rounded src={leistung.image} alt="slide 1" />
                    <div className="text-center text-2xl text-black">
                        {leistung.title}
                    </div>
                </CCarouselItem>
            ))}
        </CCarousel>
    </div>

export default Intro