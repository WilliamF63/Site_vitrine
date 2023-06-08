import React from 'react';
import Cabinet from '../Components/Cabinet/Cabinet';
import Footer from '../Components/Footer/Footer';
import NavBar from '../Components/NavBar/NavBar';

const CabinetPage = () => {
  return (
    <div>
      <NavBar/>
      <Cabinet />
      <Footer/>
    </div>
  );
};

export default CabinetPage;
