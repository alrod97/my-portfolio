// src/components/home/ProjectsSection.js
import React from 'react';

const ProjectsSection = () => {
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
            <a href="#cupra-vision-pro" className="block">
              <div className="mb-4 overflow-hidden rounded-lg">
                <img 
                  src="https://media.licdn.com/dms/image/v2/D4D2DAQG8zXcZE46BdQ/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1733381023339?e=1742796000&v=beta&t=drIscN9Mq3FdTSGkMHjVtCGDfnFcRf1uHLtqgQu4nq4" 
                  alt="CUPRA Vision Pro App" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="text-center">
                <h3 className="font-medium text-base" style={{ letterSpacing: '-0.01em' }}>CUPRA Immersive 3D</h3>
                <p className="text-sm text-gray-500" style={{ fontWeight: '400' }}>Apple Vision Pro App</p>
              </div>
            </a>
          </div>
          
          {/* Project 2 - NVIDIA Research */}
          <div className="w-full md:w-1/2 mb-24 px-4 md:mt-32">
            <a href="#vision-transformers" className="block">
              <div className="mb-4 overflow-hidden rounded-lg">
                <img 
                  src="https://media.licdn.com/dms/image/v2/D4D2DAQHiwLAgeEb_tw/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1733394412294?e=1742796000&v=beta&t=XJXwSVGfU6cDAvGqIRGJuyI2aYHy_bSxJ62rhHIktRw" 
                  alt="Vision Transformer Research" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="text-center">
                <h3 className="font-medium text-base" style={{ letterSpacing: '-0.01em' }}>Robust Vision Transformers</h3>
                <p className="text-sm text-gray-500" style={{ fontWeight: '400' }}>NVIDIA Research Collaboration</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;