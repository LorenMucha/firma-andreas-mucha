import { useState } from "react";
import { CiMail } from "react-icons/ci";
import { NavbarItem } from "../page";
import Link from "next/link";




const Navbar = ({ items }: { items: NavbarItem[] }): React.JSX.Element => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar shadow-lg fixed w-full top-0 z-10 px-3 py-3 bg-white">
            <div className="mx-auto flex flex-grow items-center justify-between">
                <div className="block lg:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex items-center px-3 py-2 rounded text-black hover:text-black-400"
                    >
                        <svg
                            className={`fill-current h-5 w-5 ${isOpen ? "hidden" : "block"}`}
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                        <svg
                            className={`fill-current h-5 w-5 ${isOpen ? "block" : "hidden"}`}
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
                        </svg>
                    </button>
                </div>
                <div className="lg:px-10 sm:w-1/3">
                    <span className="text-green-200">Andreas Mucha</span>
                </div>
                <div className="flex flex-grow hidden lg:block">
                    <div className="text-sm flex-grow">
                        {items.map((item, index) => (
                            <Link key={index} href={`/${item.link}`} className="text-xl underline inline-block mt-0 text-black ml-6">
                                {item.text}
                            </Link>
                        ))}
                    </div>
                </div>
                <div>
                    <Link href="/#kontakt" className="text-xl underline sm:block hidden">Kontakt</Link>
                    <CiMail size="2.5rem" className="sm:hidden" />
                </div>
            </div>
            <div className={`bg-white relative py-1 ${isOpen ? "block" : "hidden"} z-50`}>
                <ul>
                    {items.map((item, index) => (
                        <li key={index}>
                            <Link className="block text-sm text-black underline px-2 py-1" href={`/${item.link}`}>{item.text}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav >
    )
}

export default Navbar
