import React, { useState } from "react";
import Image from "next/image";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full md:fixed md:-mt-12 z-50">
      {/* Navbar burger menu for small screens */}
      <div className="md:hidden">
        <button
          className="text-gray-300 hover:text-white hover:underline px-3 py-2 bg-slate-800 rounded-2xl text-sm font-medium fixed ml-4 z-50"
          onClick={toggleMenu}
        >
          <svg
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {isMenuOpen && (
          <div className="bg-gray-800 py-2 px-4 fixed w-full -mt-20 z-40 pl-20 pt-6">
            {/* Links for the menu */}
            <a
              href="/"
              className="block text-gray-300 hover:text-white hover:underline py-2"
            >
              Acceuil
            </a>
            <a
              href="/cabinet"
              className="block text-gray-300 hover:text-white hover:underline py-2"
            >
              Cabinet
            </a>
            <a
              href="/equipements"
              className="block text-gray-300 hover:text-white hover:underline py-2"
            >
              Equipment
            </a>
            <a
              href="/contact"
              className="block text-gray-300 hover:text-white hover:underline py-2"
            >
              Contact
            </a>
            <a
              href="https://www.doctolib.fr/"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-gray-300 hover:text-white hover:underline py-2"
            >
              Prendre RDV
            </a>
          </div>
        )}
      </div>

      {/* Base navbar */}
      <nav className="bg-slate-800 hidden md:block -mt-5 z-50">
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
            <div className="max-w-full">
              <div className="ml-10 flex items-center">
                {/* Links for the navbar */}
                <a
                  href="/"
                  className="text-gray-300 hover:text-white hover:underline px-3 py-2 rounded-md text-sm font-medium"
                >
                  Acceuil
                </a>
                <a
                  href="/cabinet"
                  className="text-gray-300 hover:text-white hover:underline px-3 py-2 rounded-md text-sm font-medium"
                >
                  Cabinet
                </a>
                <a
                  href="/equipements"
                  className="text-gray-300 hover:text-white hover:underline px-3 py-2 rounded-md text-sm font-medium"
                >
                  Equipment
                </a>
                <a
                  href="/contact"
                  className="text-gray-300 hover:text-white hover:underline px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact
                </a>
                <a
                  href="https://www.doctolib.fr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white hover:underline px-3 py-2 rounded-md text-sm font-medium"
                >
                  Prendre RDV
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
