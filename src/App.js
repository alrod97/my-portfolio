// src/App.js
import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HeroSection from './components/home/HeroSection';
import ProjectsSection from './components/home/ProjectsSection';
import CupraProject from './components/projects/CupraProject';
import NvidiaProject from './components/projects/NvidiaProject';
import AboutSection from './components/about/AboutSection';
import PublicationsSection from './components/publications/PublicationsSection';
import ContactSection from './components/contact/ContactSection';

const App = () => {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-gray-900" style={{ 
      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      fontWeight: '400',
      letterSpacing: '-0.015em'
    }}>
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <CupraProject />
      <NvidiaProject />
      <AboutSection />
      <PublicationsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;




