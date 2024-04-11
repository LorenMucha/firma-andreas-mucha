import { FaHandsClapping } from "react-icons/fa6";

export default function Intro() {
    return (
        <div className="lg:h-screen w-screen h-max section flex justify-center items-center mt-10">
            <div className="font-extrabold text-8xl">Firma Andreas Mucha</div>
            <div className="font-extrabold text-8xl">
                <h3 className="text-yellow"> <FaHandsClapping />? </h3>
            </div>
        </div>
    )
}