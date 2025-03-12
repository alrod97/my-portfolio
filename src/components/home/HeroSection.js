// src/components/home/HeroSection.js
import React from 'react';

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-2/3 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary" style={{
              fontWeight: '500',
              letterSpacing: '-0.03em',
              lineHeight: '1.2'
            }}>
              <span className="text-accent">Deep Learning</span> & <span className="text-accent">Computer Vision</span> Engineer
            </h1>
            <p className="text-lg mb-8 max-w-2xl text-gray-700" style={{ lineHeight: '1.6' }}>
              At <span className="font-semibold text-primary">Volkswagen AG</span>, I develop
              <span className="font-semibold text-accent"> AI-driven automotive solutions</span>, leveraging
              <span className="font-semibold text-accent"> deep learning</span>,
              <span className="font-semibold text-accent"> 3D computer vision</span>,
              <span className="font-semibold text-accent"> spatial computing</span>, and
              <span className="font-semibold text-accent"> graphics</span> to build
              <span className="font-semibold"> immersive</span>,
              <span className="font-semibold"> high-performance</span> experiences.
            </p>
            <p className="text-lg mb-8 max-w-2xl text-gray-700" style={{ lineHeight: '1.6' }}>
              My projects range from <span className="font-semibold text-accent">mixed reality applications</span> with
              <span className="font-semibold text-primary"> Apple Vision Pro</span> to enhancing
              <span className="font-semibold text-primary"> Vision Transformers</span> for
              <span className="font-semibold text-accent"> autonomous driving</span> alongside
              <span className="font-semibold text-primary"> NVIDIA</span>.
            </p>
            <p className="text-lg max-w-2xl text-gray-700" style={{ lineHeight: '1.6' }}>
              I’m passionate about creating
              <span className="font-semibold text-primary"> impactful solutions</span> that merge
              <span className="font-semibold text-accent"> AI</span>,
              <span className="font-semibold text-accent"> spatial computing</span>, and
              <span className="font-semibold text-accent"> computer graphics</span>. My approach emphasizes
              <span className="font-semibold text-primary"> practical innovation</span>—turning ambitious ideas into
              <span className="font-semibold text-primary"> real-world products</span>.
            </p>
          </div>
          <div className="md:w-1/3 md:pl-12 flex items-center justify-center">
            <div className="w-64 overflow-hidden rounded-md shadow-lg">
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
