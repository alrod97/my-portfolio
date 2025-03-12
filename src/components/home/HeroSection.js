// src/components/home/HeroSection.js
import React from 'react';

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-2/3 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ 
              fontWeight: '500', 
              letterSpacing: '-0.03em',
              lineHeight: '1.2'
            }}>
              Deep Learning & Computer Vision Engineer
            </h1>
            <p className="text-lg mb-8 max-w-2xl" style={{ lineHeight: '1.6', fontWeight: '400' }}>
              At Volkswagen AG, I specialize in developing cutting-edge AI solutions for automotive applications, combining deep learning expertise with 3D visualization technologies.
            </p>
            <p className="text-lg mb-8 max-w-2xl" style={{ lineHeight: '1.6', fontWeight: '400' }}>
              My work spans from creating immersive mixed reality experiences with Apple Vision Pro to enhancing the robustness of Vision Transformer models for autonomous driving applications in collaboration with NVIDIA.
            </p>
            <p className="text-lg max-w-2xl" style={{ lineHeight: '1.6', fontWeight: '400' }}>
              I'm passionate about pushing the boundaries of AI, computer vision, and spatial computing to create innovative solutions that bridge the digital and physical worlds.
            </p>
          </div>
          <div className="md:w-1/1 md:pl-12 flex items-center justify-center">
            <div className="w-64 overflow-hidden rounded-md">
              <img 
                src="https://media.licdn.com/dms/image/v2/D4D03AQG8lvgDda3Mpg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1724171213849?e=1747267200&v=beta&t=lOZBC6fE5OARDrMvZeMT3IwVmNFXk92eRKHmmNz1yqs" 
                alt="Portrait" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;