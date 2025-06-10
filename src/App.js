// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CupraProjectPage from './pages/CupraProjectPage';
import NvidiaProjectPage from './pages/NvidiaProjectPage';
import BlogPostPage from './pages/BlogPostPage';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white font-sans antialiased text-gray-900" style={{ 
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
        fontWeight: '400',
        letterSpacing: '-0.015em'
      }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects/cupra-vision-pro" element={<CupraProjectPage />} />
          <Route path="/projects/nvidia-research" element={<NvidiaProjectPage />} />
          <Route path="/blog/:postId" element={<BlogPostPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;