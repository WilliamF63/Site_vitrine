import React from 'react';
import Footer from '../Components/Footer/Footer';
import NavBar from '../Components/NavBar/NavBar';
import Contact from '../Components/Contact/Contact';
import ButtonScrollTop from '../Components/ButtonScrollTop/ButtonScrollTop';

const ContactPage = () => {
  return (
    <div>
      <NavBar/>
      <Contact/>
      <Footer/>
      {/* <ButtonScrollTop/> */}
    </div>
  );
};

export default ContactPage;
