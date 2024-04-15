import { CCarousel, CCarouselItem, CImage } from "@coreui/react"

const Leistungen

const Intro = (): React.JSX.Element =>
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-white p-10">
        <CCarousel controls indicators>
            <CCarouselItem>
                <CImage align="center" className="object-cover" fluid rounded src="/images/bad.jpg" alt="slide 1" />
            </CCarouselItem>
            <CCarouselItem>
                <CImage align="center" className="object-cover" fluid rounded src="/images/dach.jpg" alt="slide 2" />
            </CCarouselItem>
            <CCarouselItem>
                <CImage align="center" className="object-cover" fluid rounded src="/images/heizung.JPG" alt="slide 3" />
            </CCarouselItem>
        </CCarousel>
    </div>

export default Intro