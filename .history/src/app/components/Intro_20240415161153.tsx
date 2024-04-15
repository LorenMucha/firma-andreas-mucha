import { CCarousel, CCarouselItem, CImage } from "@coreui/react"

const imageWidth = 200
const imageHeight = 100

const Intro = (): React.JSX.Element =>
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-white p-10">
        <div className="font-extrabold text-8xl text-black w-100">Firma Andreas Mucha</div>
        <div className="mt-5">
            <CCarousel controls indicators>
                <CCarouselItem>
                    <div className="clearfix">
                        <CImage width={imageWidth} height={imageHeight} src="/images/bad.jpg" alt="slide 1" />
                        <div className="text-black">Bad</div>
                    </div>
                </CCarouselItem>
                <CCarouselItem>
                    <div className="clearfix">
                        <CImage width={imageWidth} height={imageHeight} src="/images/dach.jpg" alt="slide 2" />
                    </div>
                </CCarouselItem>
                <CCarouselItem>
                    <div className="cl"
                        <CImage width={imageWidth} height={imageHeight} src="/images/heizung.JPG" alt="slide 3" />
                    </div>
                </CCarouselItem>
            </CCarousel>
        </div>
    </div>

export default Intro