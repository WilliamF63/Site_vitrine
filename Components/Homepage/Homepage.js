import Diaporama from '../Homepage/Diaporama.js';
import ButtonPrendreRDV from '../Homepage/BoutonPrendreRDV.js';

import image1 from '/public/images/diapo/dt-img.jpg';
import image2 from '/public/images/diapo/dt-img2.jpg';
import image3 from '/public/images/diapo/dt-img3.jpg';
import image4 from '/public/images/diapo/dt-img4.jpg';
import image5 from '/public/images/diapo/dt-img5.jpg';


const images = [image1,image2, image3, image4, image5 ];

const Homepage = () => {

      return (
        <>
         <section className="">
          <h1 className="text-6xl uppercase text-center mt-16 pt-16 relative">
            Bienvenue au cabinet dentaire</h1>
            <Diaporama images={images}/>
          </section>
       </>
    
      );
    };
    
export default Homepage;