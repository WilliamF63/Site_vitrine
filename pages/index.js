import Head from 'next/head';
import NavBar from '../Components/NavBar/NavBar.js';
import Homepage from '../Components/Homepage/Homepage.js';
import Cabinet from '../Components/Cabinet/Cabinet.js';
import Equipements from '../Components/Equipements/Equipements.js';
import Contact from '../Components/Contact/Contact.js';
import Footer from '../Components/Footer/Footer.js';
import ButtonScrollTop from '../Components/ButtonScrollTop/ButtonScrollTop.js';

export default function Home() {

  return (
    <>
      <Head>
        <title>CABINET DENTAIRE</title>
      </Head>
      <NavBar/>
      <Homepage/>
    </>
  );
}
