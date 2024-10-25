import React from 'react';
import Navbar from '../components/Navbar';
import ContactMain from '../components/ContactMain';
import MapSection from '../components/MapSection';
import  { Footer } from '../components/Footer';

const Contact = ({ darkMode, setDarkMode }) => {
  return (
    <>
      <div className="wrapper">
        <div className="wrapperBackgroundColor">
          <header>
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />    
          </header>
          <ContactMain/>
        </div>
        <MapSection/>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
