import React from 'react';
import CompanySection from './companySection';
import Value from './Value';
import Hero from '../components/home/Hero';
const AboutPage = ({ description, title }) => {
  return (
    <div>
     <Hero title={title} description={description}></Hero>
     
     <CompanySection />
     <Value></Value>
    </div>
  );
};

export default AboutPage;
