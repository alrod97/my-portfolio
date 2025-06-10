// src/pages/HomePage.js
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/home/HeroSection';
import ProjectsSection from '../components/home/ProjectsSection';
import AboutSection from '../components/about/AboutSection';
import BlogPreview from '../components/blog/BlogPreview';
import PublicationsSection from '../components/publications/PublicationsSection';
import ContactSection from '../components/contact/ContactSection';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <BlogPreview />
      <PublicationsSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default HomePage;