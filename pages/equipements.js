import React from 'react';
import Footer from '../Components/Footer/Footer';
import NavBar from '../Components/NavBar/NavBar';
import Equipements from '../Components/Equipements/Equipements';
import ButtonScrollTop from '../Components/ButtonScrollTop/ButtonScrollTop';

const EquipementsPage = () => {
  return (
    <div>
      <NavBar/>
      <Equipements/>
      <Footer/>
      <ButtonScrollTop/>
    </div>
  );
};

export default EquipementsPage;
