import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import HyreRight from './components/HyreRight';
import HyreTime from './components/HyreTime';
import Roles from './components/Roles';
import HyreSecure from './components/HyreSecure';
import HyreTestimonials from './components/HyreTestimonials';
import Faqs from './components/Faqs';
import CaseStudies from './components/CaseStudies';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App bg-[#f9f9f9]">
      <Header />
      <Hero />
      <HyreRight />
      <HyreTime />
      <Roles />
      <HyreSecure />
      <HyreTestimonials />
      <Faqs />
      <CaseStudies />
      <Footer />
    </div>
  );
}

export default App;