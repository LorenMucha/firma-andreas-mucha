import { CCarousel, CCarouselItem, CImage } from "@coreui/react"

const Intro = (): React.JSX.Element =>
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-white p-10">
        <div className="font-extrabold text-8xl text-black w-100">Firma Andreas Mucha</div>
        <div className="mt-5 clearfix">
            <CCarousel controls indicators>
                <CCarouselItem>
                    <CImage className="object-cover" fluid rounded src="/images/bad.jpg" alt="slide 1" />
                    <div className="text-black">Bad</div>
                </CCarouselItem>
                <CCarouselItem>
                    <CImage className="object-cover" fluid rounded src="/images/dach.jpg" alt="slide 2" />
                </CCarouselItem>
                <CCarouselItem>
                    <CImage className="object-cover" fluid rounded src="/images/heizung.JPG" alt="slide 3" />
                </CCarouselItem>
            </CCarousel>
        </div>
    </div>

export default Intro