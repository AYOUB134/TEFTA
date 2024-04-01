import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './pages/components/home/Nav';
import Footer from './pages/components/home/Footer';
import Main from './pages/components/home/Main';
import ServicesPage from './pages/services/ServicesPage';
import AboutPage from './pages/about/AboutPage';
import PortfolioPage from './pages/Portfolio/PortfolioPage';
import ContactUsPage from './pages/Contact/ContactUsPage';
function App() {
  return (
    <Router>
      <>
        <Nav />
        <Routes>
          <Route path="/" element={<Main />} />

          
          <Route path="/services/:id" element={<ServicesPage 
          title="Our Services"
          description="Explore our range of services designed to meet your business needs. From web development to digital marketing, we offer comprehensive solutions to help your business grow and succeed. Browse through our services and let us know how we can help you achieve your goals."
          />} />


          <Route path="/services/" element={<ServicesPage
          title="Our Services"
          description="Explore our range of services designed to meet your business needs. From web development to digital marketing, we offer comprehensive solutions to help your business grow and succeed. Browse through our services and let us know how we can help you achieve your goals."   
          />} />



          <Route path="/about" element={<AboutPage 
             title="About TEFTA"
             description="At TEFTA, we are committed to delivering exceptional digital solutions that empower businesses to thrive in the digital age. Our team of experts combines creativity with technical expertise to create innovative solutions tailored to your specific needs. Learn more about our mission, values, and the team behind TEFTA." 
          />}  />



          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route 




          path="/contact" 
          element={<ContactUsPage 
           title="Contact Us" 
           description=" TEFTA ,  to connect Whether you have questions, feedback, or ideas, we're here to listen and respond. Your input helps us improve our services and create better experiences for you. Reach out today and let's start a conversation!"  
           />
           } />


        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
