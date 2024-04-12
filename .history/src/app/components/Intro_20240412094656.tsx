import { FaHandsClapping } from "react-icons/fa6";

type AppProps = {
    name: 'Firma Andreas Mucha'
}

const App = ({ message }: AppProps): React.JSX.Element => <div>{message}</div>;

export default function Intro() {
    return (
        <div className="lg:h-screen w-screen h-max section flex justify-center items-center bg-white">
            <div className="font-extrabold text-8xl text-black">F</div>
            <div> <FaHandsClapping className="text-yellow-600 ml-5" size={"5.5rem"} />
            </div>
        </div>
    )
}