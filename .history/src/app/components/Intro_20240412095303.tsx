import { FaHandsClapping } from "react-icons/fa6";


const Intro = (): React.JSX.Element =>
    <div className="lg:h-screen w-screen h-max section flex justify-center items-center bg-white">
        <div className="font-extrabold text-8xl text-black">Firma Andreas Mucha</div>
        <div> <FaHandsClapping className="text-yellow-600 ml-5" size={"5.5rem"} />
        </div>
    </div>;

export default Intro