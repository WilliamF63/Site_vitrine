import React from 'react';
import EquipeDentaire from './EquipeDentaire';

const TeamPage = () => {
  const teamMembers = [
    {
        name: 'Nom Prénom',
        role: 'Dentiste',
        imageUrl: '/../public/images/equipe/pdp-equipe.jpg',
    },
    {
        name: 'Nom Prénom',
        role: 'Assistante',
        imageUrl: '/../public/images/equipe/pdp-equipe.jpg',
    },
    {
        name: 'Nom Prénom',
        role: 'Assistante',
        imageUrl: '/../public/images/equipe/pdp-equipe.jpg',
    },
    {
        name: 'Nom Prénom',
        role: 'Assistante',
        imageUrl: '/../public/images/equipe/pdp-equipe.jpg',
    },
    {
        name: 'Nom Prénom',
        role: 'Assistante',
        imageUrl: '/../public/images/equipe/pdp-equipe.jpg',
    },
    {
        name: 'Nom Prénom',
        role: 'Assistante',
        imageUrl: '/../public/images/equipe/pdp-equipe.jpg',
    },
  ];

  return (
    <div className="justify-center justify-items-center my-16 grid grid-cols-3 gap-4 bg-white">
      {teamMembers.map((member, index) => (
        <EquipeDentaire key={index} {...member} />
      ))}
    </div>
  );
};

export default TeamPage;
