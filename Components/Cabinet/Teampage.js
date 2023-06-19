import React from 'react';
import EquipeDentaire from './EquipeDentaire';

const TeamPage = () => {
  // Array of team members
  const teamMembers = [
    {
      name: 'Full Name',
      role: 'Dentist',
      imageUrl: '/../public/images/equipe/pdp-equipe.jpg',
    },
    {
      name: 'Full Name',
      role: 'Assistant',
      imageUrl: '/../public/images/equipe/pdp-equipe.jpg',
    },
    {
      name: 'Full Name',
      role: 'Assistant',
      imageUrl: '/../public/images/equipe/pdp-equipe.jpg',
    },
    {
      name: 'Full Name',
      role: 'Assistant',
      imageUrl: '/../public/images/equipe/pdp-equipe.jpg',
    },
    {
      name: 'Full Name',
      role: 'Assistant',
      imageUrl: '/../public/images/equipe/pdp-equipe.jpg',
    },
    {
      name: 'Full Name',
      role: 'Assistant',
      imageUrl: '/../public/images/equipe/pdp-equipe.jpg',
    },
  ];

  return (
    <div className="justify-center justify-items-center my-16 grid grid-cols-3 gap-4 bg-white">
      {/* Render each team member using the EquipeDentaire component */}
      {teamMembers.map((member, index) => (
        <EquipeDentaire key={index} {...member} />
      ))}
    </div>
  );
};

export default TeamPage;
