import Image from "next/image";

const NavBar = () => {
    return (
        
            <div className="w-full">
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
                                    <a href="/../pages/homepage.js" className="text-gray-300 hover:text-white hover:underline px-3 py-2 rounded-md text-sm font-medium">Accueil</a>
                                    <a href="/../pages/cabinet.js" className="text-gray-300 hover:text-white hover:underline px-3 py-2 rounded-md text-sm font-medium">Cabinet</a>
                                    <a href="/" className="text-gray-300 hover:text-white hover:underline px-3 py-2 rounded-md text-sm font-medium">Equipements</a>
                                    <a href="/" className="text-gray-300 hover:text-white hover:underline px-3 py-2 rounded-md text-sm font-medium">Contact</a>
                                    <a href='https://www.doctolib.fr/' className="text-gray-300 hover:text-white hover:underline px-3 py-2 rounded-md text-sm font-medium">Prendre RDV</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
        </div>

    )
}

export default NavBar;