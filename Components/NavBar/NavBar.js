import Image from "next/image";

const NavBar = () => {
    return (
        
            <div className="w-full fixed -mt-16 z-50">
                <nav className="bg-gray-800">
                    <div className="ml-3">
                        <div className="flex items-center sm:justify-between h-16">
                            <div className="flex-shrink-0">
                                <a href="/">
                                    <Image 
                                        src="/../public/images/logo/logo-dentiste.png"
                                        alt="Logo"
                                        width={40}
                                        height={40}
                                    />
                                </a>
                            </div>
                            <div className="">
                                <div className="ml-10 flex items-center">
                                    <a href="/Homepage" className="text-gray-300 hover:text-white hover:underline px-3 py-2 rounded-md text-sm font-medium">Accueil</a>
                                    <a href="/Cabinet" className="text-gray-300 hover:text-white hover:underline px-3 py-2 rounded-md text-sm font-medium">Cabinet</a>
                                    <a href="/" className="text-gray-300 hover:text-white hover:underline px-3 py-2 rounded-md text-sm font-medium">Equipements</a>
                                    <a href="/" className="text-gray-300 hover:text-white hover:underline px-3 py-2 rounded-md text-sm font-medium">Contact</a>
                                    <a href='https://www.doctolib.fr/' target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white hover:underline px-3 py-2 rounded-md text-sm font-medium">Prendre RDV</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
        </div>

    )
}

export default NavBar;