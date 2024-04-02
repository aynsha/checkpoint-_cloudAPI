import React from 'react';
import Intro from './components/intro/Intro';
import './App.css';
import ContactSection from './components/contact-section/ContactSection';
import Map from './Map';
import Disclaimer from './components/disclaimer/Disclaimer';
import Footer from './components/footer/Footer';
const App = () => {
  return (
    <div>
      <Intro />
      <ContactSection />
      <Map/>
      <Disclaimer/>
      <Footer/>
    </div>
  )
};

export default App;