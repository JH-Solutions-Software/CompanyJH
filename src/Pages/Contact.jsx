import React, { useState } from 'react';
import DynamicForm from '../Components/Form';
import { motion } from 'framer-motion';
import '../assets/styles/Form.css';

const Contact = () => {
  const [showForm, setShowForm] = useState(true);
  const [isConfettiVisible, setConfettiVisible] = useState(false);

  const formFields = [
    {
      name: 'firstName', 
      label: 'First Name*', 
      type: 'text', 
      placeholder: 'Enter your first name',
      rules: { required: 'First name is required' },
    },
    {
      name: 'lastName', 
      label: 'Last Name*', 
      type: 'text',
      placeholder: 'Enter your last name',
      rules: { required: 'Last name is required' },
    },
    {
      name: 'email', 
      label: 'Email*', 
      type: 'email',
      placeholder: 'Enter your contact email',
      rules: { 
        required: 'Email is required', 
        pattern: { 
          value: /^\S+@\S+$/i, 
          message: 'Invalid email address',
        },
      },
    },
    {
      name: 'company', 
      label: 'Company Name', 
      type: 'text',
      placeholder: 'Optional',
    },
    {
      name: 'inquiry', 
      label: 'Inquiry*', 
      type: 'text',
      placeholder: 'Briefly explain your inquiry',
      rules: { required: 'An inquiry is required' },
    },
  ];

  const handleFormSubmit = (data) => {
    console.log('Form Submitted:', data);
    setConfettiVisible(true);
    setShowForm(false);
  };

  return (
    <div id="contacto" className='contact-container spacer layer6'>
      <div className='contact-section'>
        <div className='contact-info'>
          <motion.h2 
            className='contact-title'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Contact Us
          </motion.h2>
          <motion.h2 
            className='contact-txt'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            At JH Software Solutions, we are dedicated to transforming your business processes with cutting-edge technology. Whether you have a question, need a consultation, or want to discuss a potential project, our team is here to help. Reach out to us today and let’s start a conversation about how we can drive your business forward. Fill out the form below with your details, and one of our experts will get back to you promptly. We look forward to collaborating with you!
          </motion.h2>
        </div>
        <motion.div 
          className='form-container'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {showForm && (
            <DynamicForm 
              title="Let us help your business" 
              fields={formFields} 
              onSubmit={handleFormSubmit} 
            />
          )}
          {!showForm && (
            <motion.h2 
              className='contact-sent' 
              animate={{ y: 100 }} 
              transition={{ type: "spring" }}
            >
              Thanks for reaching us, we'll contact you soon!
            </motion.h2>
          )}
         
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
