const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div>
              <h3 className="text-lg font-bold">Cabinet dentaire</h3>
              <ul className="mt-4 space-y-2">
                <li>Élément 1</li>
                <li>Élément 2</li>
                <li>Élément 3</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold">Plan du site</h3>
              <ul className="mt-4 space-y-2">
                <li><a className="hover:underline" href="/">Acceuil</a></li>
                <li><a className="hover:underline" href="/">Cabinet</a></li>
                <li><a className="hover:underline" href="">Equipements</a></li>
                <li><a className="hover:underline" href="">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold">Colonne 3</h3>
              <ul className="mt-4 space-y-2">
                <li>Élément 1</li>
                <li>Élément 2</li>
                <li>Élément 3</li>
              </ul>
            </div>
          </div>
        </div>
        <h2></h2>
      </footer>
    );
  };
  
  export default Footer;
  