import Image from "next/image";

const NavBar = () => {
    return (
        <nav className="bg-gray-800">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-16">
      <div className="flex-shrink-0">
        <a href="/">
          <Image className="left-4"
            src="/../public/images/logo/logo-dentiste.png"
            alt="Logo"
            width={40}
            height={40}
          />
        </a>
      </div>
      <div className="hidden md:block">
        <div className="ml-10 flex items-baseline space-x-4">
          <a href="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Accueil</a>
          <a href="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Cabinet</a>
          <a href="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Equipements</a>
          <a href="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
        </div>
      </div>
    </div>
  </div>
</nav>

    )
}

export default NavBar;