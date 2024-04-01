import React from 'react';
import Contact from '../components/home/Contact';
import Adress from './Adress';
import Hero from '../components/home/Hero';

const ContactUsPage = ({ description, title }) => {
  return (
    <div>
      <Hero  title={title}  description={description}/>
      <Contact />
      <Adress />
    </div>
  );
};

export default ContactUsPage;
