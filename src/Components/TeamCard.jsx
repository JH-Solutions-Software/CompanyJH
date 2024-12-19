// CustomCard.js
import React from 'react';
import { motion } from 'framer-motion';
import '../assets/styles/Team.css'

const CustomCard = ({ name, role, image, color }) => {
  return (
    <motion.div
      className='team-card'
      whileHover={{
        scale: 1.1,
        translateY: -5,

      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >

        <img
          src={image}
          alt={name}
          width={200}
          height={200}
          className='circle'
          style={{border:` 5px solid #${color}` }}
        />

      <h3 
        style={{marginTop: '8px',color: `#${color}`}}
      >
        {name}
      </h3>
      <p 
        style={{fontSize: '14px'}}
      >
        {role}
      </p>
    </motion.div>
  );
};

export default CustomCard;
