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
    <div className="flex justify-center space-x-8">
      {teamMembers.map((member, index) => (
        <EquipeDentaire key={index} {...member} />
      ))}
    </div>
  );
};

export default TeamPage;
