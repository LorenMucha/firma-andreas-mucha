import { CCarousel, CCarouselItem, CImage } from "@coreui/react"

const Intro = (): React.JSX.Element =>
    <div className="w-screen h-max section flex justify-center items-center bg-white">
        <div className="font-extrabold text-8xl text-black w-100">Firma Andreas Mucha</div>
        <div>
            <CCarousel controls indicators>
                <CCarouselItem>
                    <CImage className="object-cover d-blow-96 h-48" src="/images/bad.jpg" alt="slide 1" />
                </CCarouselItem>
                <CCarouselItem>
                    <CImage className="d-block w-100" src="/images/dach.jpg" alt="slide 2" />
                </CCarouselItem>
                <CCarouselItem>
                    <CImage className="d-block w-100" src="/images/heizung.JPG" alt="slide 3" />
                </CCarouselItem>
            </CCarousel>
        </div>
    </div>

export default Intro