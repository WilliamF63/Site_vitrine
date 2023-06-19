import React from 'react';
import Cabinet from '../Components/Cabinet/Cabinet';
import Footer from '../Components/Footer/Footer';
import NavBar from '../Components/NavBar/NavBar';
import ButtonScrollTop from '../Components/ButtonScrollTop/ButtonScrollTop';

const CabinetPage = () => {
  return (
    <>
      <NavBar/>
      <Cabinet />
      <Footer/>
      <ButtonScrollTop/>
    </>
  );
};

export default CabinetPage;
