import { CCarousel, CCarouselItem, CImage } from "@coreui/react"

const imageWidth = 100
const imageHeight = 100

const Intro = (): React.JSX.Element =>
    <div className="w-screen h-screen bg-white p-10">
        <div className="font-extrabold text-8xl text-black w-100">Firma Andreas Mucha</div>
        <div className="mt-5 w-100">
            <CCarousel controls indicators>
                <CCarouselItem>
                    <CImage className="d-block w-100" rounded width={imageWidth} height={imageHeight} src="/images/bad.jpg" alt="slide 1" />
                    <div className="text-black">Bad</div>
                </CCarouselItem>
                <CCarouselItem>
                    <CImage className="d-block w-100" rounded width={imageWidth} height={imageHeight} src="/images/dach.jpg" alt="slide 2" />
                </CCarouselItem>
                <CCarouselItem>
                    <CImage className="d-block w-100" width={imageWidth} height={imageHeight} src="/images/heizung.JPG" alt="slide 3" />
                </CCarouselItem>
            </CCarousel>
        </div>
    </div>

export default Intro