import { IconContext } from "react-icons";
import { FaHandsClapping } from "react-icons/fa6";

export default function Intro() {
    return (
            <div className="lg:h-screen w-screen h-max section flex justify-center items-center mt-10">
                <div className="font-extrabold text-8xl">Firma Andreas Mucha</div>
                <IconContext.Provider
            value={{ color: 'blue', size: '50px' }}
        >
                <div> <FaHandsClapping/>
                </div>
                </IconContext.Provide
            </div>
            )
}