import { CCarousel, CCarouselItem, CImage } from "@coreui/react"

const bad = 

const Intro = (): React.JSX.Element =>
    <div className="lg:h-screen w-screen h-max section flex justify-center items-center bg-white">
        <div className="font-extrabold text-8xl text-black">Firma Andreas Mucha</div>
        <CCarousel controls indicators>
            <CCarouselItem>
                <CImage className="d-block w-100" src="/public/images/bad.jpg" alt="slide 1" />
            </CCarouselItem>
            <CCarouselItem>
                <CImage className="d-block w-100" src="/public/images/dach.jpg" alt="slide 2" />
            </CCarouselItem>
            <CCarouselItem>
                <CImage className="d-block w-100" src={AngularImg} alt="slide 3" />
            </CCarouselItem>
        </CCarousel>
    </div>

export default Intro