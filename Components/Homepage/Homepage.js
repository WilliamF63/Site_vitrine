import Diaporama from '../Homepage/Diaporama.js';
import ButtonPrendreRDV from '../Homepage/BoutonPrendreRDV.js';
import image1 from '../../public/images/diapo/dt-img.jpg';
import image2 from '../../public/images/diapo/dt-img2.jpg';
import image3 from '../../public/images/diapo/dt-img3.jpg';
import image4 from '../../public/images/diapo/dt-img4.jpg';
import image5 from '../../public/images/diapo/dt-img5.jpg';


const images = [image1, image2, image3, image4, image5 ];

const Homepage = () => {

      return (
        <>
         <section className="text-center mt-16">
          <h1 className="text-5xl pt-16 uppercase md:text-6xl relative inline-block pb-8">
            Bienvenue au cabinet dentaire
            <span className="block h-px bg-black absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2"></span>
          </h1>
</section>
          <section className='mt-14'>
            <Diaporama images={images}/>
          </section>
          <section className='mt-16'>
            <h2 className='mt-16 text-justify text-l mx-6 md:text-lg'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. 
            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, 
            pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, 
            vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis 
            pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo 
            ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
            Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. 
            Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, 
            sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit 
            id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. 
            Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis 
            magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,</h2>
      </section>
      <a href='https://www.doctolib.fr/' className='uppercase w-48 text-center text-2xl mt-14 mb-12 bg-cyan-950 text-white p-2 flex justify-center items-center
      mx-auto border rounded-lg hover:bg-cyan-900'>
        Prendre RDV
      </a>
       </>
    
      );
    };
    
export default Homepage;