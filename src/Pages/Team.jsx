// Team.js
import React from 'react';
import { motion } from 'framer-motion';
import CustomCard from '../Components/TeamCard';
import howard from '../assets/images/team/howard.jpeg';
import "../assets/styles/Team.css";

const team = [
  {
    name: "Jorge Padilla",
    role: "Devops/Backend",
    image: howard,
    color: "38E54D"
  },
  {
    name: "Howard Garcia",
    role: "Backend/Frontend",
    image: howard,
    color: "FF204E"

  },
  {
    name: "Héctor Zamorano",
    role: "Frontend",
    image: howard,
    color: "39B5E0"
  },
  {
    name: "Javier Esparza",
    role: "Backend/Frontend",
    image: howard,
    color: "6420AA"
  },
];

const Team = () => {
  return (
      <div id="equipo" className="team-section  spacer layer5">
        <div className='team-container'>
        <motion.h2 
        className='custom-heading '
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Nuestro Equipo
        </motion.h2>

         <section className='grid-container'>
          {team.map((member, index) => (
                  
              <CustomCard 
                name={member.name} 
                role={member.role} 
                image={member.image} 
                color={member.color}
              />

          ))}
          </section>
        </div>
      </div>
  );
};

export default Team;
