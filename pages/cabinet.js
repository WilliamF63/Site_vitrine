import React from 'react';
import Cabinet from '../Components/Cabinet/Cabinet';
import Footer from '../Components/Footer/Footer';
import NavBar from '../Components/NavBar/NavBar';
import ButtonScrollTop from '../Components/ButtonScrollTop/ButtonScrollTop';

const CabinetPage = () => {
  return (
    <div>
      <NavBar/>
      <Cabinet />
      <Footer/>
      <ButtonScrollTop/>
    </div>
  );
};

export default CabinetPage;
