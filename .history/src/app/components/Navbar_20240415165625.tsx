const Navbar = (): React.JSX.Element =>
    <nav className="shadow-lg fixed w-screen top-0 z-10 px-3 bg-blue-900">
        <div className="max-w-6xl mx-auto">
            <div className="flex justify-between">
                <div className="inline-flex justify-center md:p-4 mb-1 mt-1 md:mt-0 md:mb-0">
                    <a>
                        <span className="font-bold text-2xl text-yellow-300">Firma Andreas Mucha</span>
                </div>
            </div>
        </div>
    </nav>

export default Navbar