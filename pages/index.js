import Link from 'next/link.js';
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
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap" rel="stylesheet"/>
      </Head>
      <NavBar/>
      <Homepage/>
      <Footer/>
    </>
  );
}

