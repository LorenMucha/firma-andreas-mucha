import { IconContext } from "react-icons";
import { FaHandsClapping } from "react-icons/fa6";

export default function Intro() {
    return (
        <IconContext.Provider
            value={{ color: 'blue', size: '50px' }}
        >
            <div className="lg:h-screen w-screen h-max section flex justify-center items-center mt-10">
                <div className="font-extrabold text-8xl">Firma Andreas Mucha</div>
                <div> <FaHandsClapping/>
                </div>
            </div>
            )
}