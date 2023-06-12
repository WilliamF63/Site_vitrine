import Image from "next/image";

const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white">
          <div className="flex flex-row w-full">
            <div className="w-2/6 mx-auto text-center mt-3">
              <h3 className="text-lg font-bold">Cabinet dentaire</h3>
              <ul className="mt-4 space-y-2">
                <li>00 Avenue Rue Impasse</li>
                <li>63000 Ville</li>
                <li> - </li>
                <li>04 00 00 00 00</li>
              </ul>
            </div>
            <div className="w-2/6 ml-16 mx-auto text-center mt-3">
              <h3 className="text-lg font-bold">Plan du site</h3>
              <ul className="mt-4 space-y-2">
                <li><a className="hover:underline" href="/">Acceuil</a></li>
                <li><a className="hover:underline" href="/cabinet">Cabinet</a></li>
                <li><a className="hover:underline" href="/equipements">Equipements</a></li>
                <li><a className="hover:underline" href="/contact">Contact</a></li>
              </ul>
            </div>
            <div className="w-2/6 mx-auto text-center mt-3">
                <h3 className="text-lg font-bold">Liens</h3>
              <ul className="mt-4 space-y-2">
                <li><a className="hover:underline" href="https://www.doctolib.fr/">Prendre RDV</a></li>
                <li><a className="hover:underline" href="lien.html">Lien</a></li>
              </ul>
            </div>
            <div className="w-20 mt-6 mr-6">
              <Image
                src="/../public/images/logo/logo-dentiste.png"
                alt="Logo"
                width={100}
                height={100}
              />
            </div>
          </div>
        <div className="w-full mt-6 p-4">
          <h6 className="uppercase pt-4 text-center text-xs">© Paul Fernandes 2023</h6>
        </div>
      </footer>
    );
  };

  export default Footer;