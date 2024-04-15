import { CCarousel, CCarouselItem, CImage } from "@coreui/react"

const Intro = (): React.JSX.Element =>
    <div className=" bg-white p-10">
        <div className="font-extrabold text-8xl text-black w-100">Firma Andreas Mucha</div>
        <div className="mt-5">
            <CCarousel controls indicators>
                <CCarouselItem>
                    <CImage width={500} height={500} src="/images/bad.jpg" alt="slide 1" />
                    <div className="text-black">Bad</div>
                </CCarouselItem>
                <CCarouselItem>
                    <CImage width={500} height={500} src="/images/dach.jpg" alt="slide 2" />
                </CCarouselItem>
                <CCarouselItem>
                    <CImage width={500} height={500} src="/images/heizung.JPG" alt="slide 3" />
                </CCarouselItem>
            </CCarousel>
        </div>
    </div>

export default Intro