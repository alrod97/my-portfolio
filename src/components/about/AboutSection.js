// src/components/about/AboutSection.js
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl mb-12" style={{ 
          fontWeight: '500',
          letterSpacing: '-0.025em'
        }}>About</h2>
        
        <div className="mb-16">
          <h3 className="text-2xl font-medium mb-8">
            Deep Learning. Computer Vision.
            <br />
            Mixed Reality. Research.
          </h3>
          <p className="text-lg mb-6 max-w-3xl">
            I'm a Deep Learning & Computer Vision Engineer at Volkswagen AG in Munich, Germany, specializing in AI-powered automotive applications and spatial computing experiences.
          </p>
        </div>
        
        {/* Experience */}
        <div className="mb-16">
          <h3 className="text-xl font-medium mb-8">Experience</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            <div>
              <h4 className="font-medium">Deep Learning & Computer Vision Engineer</h4>
              <div className="text-gray-500">Volkswagen AG</div>
              <div className="text-gray-500 mb-4">09/2023 - Current</div>
            </div>
            <div>
              <h4 className="font-medium">ML & Computer Vision Research Student</h4>
              <div className="text-gray-500">Volkswagen AG</div>
              <div className="text-gray-500 mb-4">05/2021 - 03/2023</div>
            </div>
            <div>
              <h4 className="font-medium">Intern</h4>
              <div className="text-gray-500">Bosch</div>
              <div className="text-gray-500 mb-4">01/2020 - 04/2020</div>
            </div>
            <div>
              <h4 className="font-medium">Research Student Assistant and Math Tutor</h4>
              <div className="text-gray-500">TU Berlin</div>
              <div className="text-gray-500 mb-4">07/2018 - 09/2020</div>
            </div>
          </div>
        </div>
        
        {/* Education */}
        <div className="mb-16">
          <h3 className="text-xl font-medium mb-8">Education</h3>
          <div className="space-y-6">
            <div>
              <h4 className="font-medium">Master of Science</h4>
              <div className="text-gray-500">Technical University of Munich</div>
              <div className="text-gray-500">Major in Robotics, Cognition and Intelligence with final GPA (German): 1.8</div>
              <div className="text-gray-500 mb-4">10/2020 - 08/2023</div>
            </div>
            <div>
              <h4 className="font-medium">Bachelor of Science</h4>
              <div className="text-gray-500">Technical University of Berlin</div>
              <div className="text-gray-500">Major in Engineering Science with final GPA (German): 2.0</div>
              <div className="text-gray-500 mb-4">10/2015 - 08/2020</div>
            </div>
          </div>
        </div>
        
        {/* Skills */}
        <div>
          <h3 className="text-xl font-medium mb-8">Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
            <div>
              <ul className="space-y-2">
                <li>Python | PyTorch | Swift | SwiftUI</li>
                <li>C++ | Git | Version Control</li>
                <li>Deep Learning | Computer Vision</li>
                <li>Semantic Segmentation | 3D Point Clouds</li>
              </ul>
            </div>
            <div>
              <ul className="space-y-2">
                <li>AWS (including Bedrock) | Cloud Computing</li>
                <li>RealityKit | ARKit | visionOS Development</li>
                <li>Generative AI | Image Generation</li>
                <li>English, Spanish, German – Professional proficiency</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;