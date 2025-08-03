// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import HomePage from './pages/HomePage';
import CupraProjectPage from './pages/CupraProjectPage';
import NvidiaProjectPage from './pages/NvidiaProjectPage';
import BlogPostPage from './pages/BlogPostPage';
import ScrollToTop from './components/layout/ScrollToTop';

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
    filter: 'blur(10px)'
  },
  in: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)'
  },
  out: {
    opacity: 0,
    y: -20,
    filter: 'blur(10px)'
  }
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.6
};

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route 
          path="/" 
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <HomePage />
            </motion.div>
          } 
        />
        <Route 
          path="/projects/cupra-vision-pro" 
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <CupraProjectPage />
            </motion.div>
          } 
        />
        <Route 
          path="/projects/nvidia-research" 
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <NvidiaProjectPage />
            </motion.div>
          } 
        />
        <Route 
          path="/blog/:id" 
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <BlogPostPage />
            </motion.div>
          } 
        />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  const basename = process.env.NODE_ENV === 'production' ? '/my-portfolio' : '';

  return (
    <Router basename={basename}>
      <ScrollToTop />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 font-sans antialiased text-gray-900 overflow-x-hidden" style={{ 
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
        fontWeight: '400',
        letterSpacing: '-0.015em'
      }}>
        <div className="fixed inset-0 bg-gradient-to-br from-blue-50/20 via-purple-50/20 to-pink-50/20 pointer-events-none" />
        <AnimatedRoutes />
      </div>
    </Router>
  );
};

export default App;