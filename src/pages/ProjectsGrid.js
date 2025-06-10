// src/components/home/ProjectsGrid.js
import React from 'react';
import { Link } from 'react-router-dom';

const ProjectsGrid = () => {
  return (
    <section id="work" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-20 mt-12 text-center" style={{ 
          fontWeight: '500',
          letterSpacing: '-0.025em',
          lineHeight: '1.2'
        }}>
          Computer Vision. Deep Learning.
          <br />
          Mixed Reality. AI Research.
        </h2>
        
        <div className="flex flex-wrap">
          {/* Project 1 - Apple Vision Pro */}
          <div className="w-full md:w-1/2 mb-24 px-4">
            <Link to="/projects/cupra-vision-pro" className="block group">
              <div className="mb-4 overflow-hidden rounded-lg">
                <img 
                  src={`${process.env.PUBLIC_URL}/images/CupraVisionProUsing.jpeg`} 
                  alt="CUPRA Vision Pro App" 
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="text-center">
                <h3 className="font-medium text-base group-hover:text-gray-600 transition-colors" style={{ letterSpacing: '-0.01em' }}>
                  CUPRA Immersive 3D
                </h3>
                <p className="text-sm text-gray-500" style={{ fontWeight: '400' }}>Apple Vision Pro App</p>
              </div>
            </Link>
          </div>
          
          {/* Project 2 - NVIDIA Research */}
          <div className="w-full md:w-1/2 mb-24 px-4 md:mt-32">
            <Link to="/projects/nvidia-research" className="block group">
              <div className="mb-4 overflow-hidden rounded-lg">
                <img 
                  src={`${process.env.PUBLIC_URL}/images/cwfa_mainimage.jpeg`} 
                  alt="Vision Transformer Research" 
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="text-center">
                <h3 className="font-medium text-base group-hover:text-gray-600 transition-colors" style={{ letterSpacing: '-0.01em' }}>
                  Robust Vision Transformers
                </h3>
                <p className="text-sm text-gray-500" style={{ fontWeight: '400' }}>NVIDIA Research Collaboration</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;