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
  <h3 className="text-2xl font-semibold mb-8 text-primary">
    <span className="text-accent">Deep Learning</span>.  
    <span className="text-accent"> Computer Vision</span>.  
    <br />
    <span className="text-accent">Mixed Reality</span>.  
    <span className="text-accent"> Research</span>.
  </h3>
  <p className="text-lg mb-6 max-w-3xl text-gray-700" style={{ lineHeight: '1.6', fontWeight: '400' }}>
  I'm a <span className="font-semibold text-primary"> Deep Learning & Computer Vision Engineer</span> at 
  <span className="font-semibold text-primary"> Volkswagen AG</span> in Munich, specializing in
  <span className="font-semibold text-accent"> AI-driven applications</span> and
  <span className="font-semibold text-accent"> spatial computing</span> with
  <span className="font-semibold text-primary">Apple Vision Pro</span>.
</p>

<p className="text-lg mb-6 max-w-3xl text-gray-700" style={{ lineHeight: '1.6' }}>
  My interests include <span className="font-semibold text-accent">Deep Learning</span>,
  <span className="font-semibold text-accent"> 3D Computer Vision</span>,
  <span className="font-semibold text-accent"> Computer Graphics</span>, and
  <span className="font-semibold text-accent"> Applied Mathematics</span>. I'm passionate about building
  <span className="font-semibold text-primary"> innovative products</span> that
  <span className="font-semibold text-accent"> excite people</span> and deliver
  <span className="font-semibold text-accent"> real impact</span>.
</p>

<p className="text-lg max-w-3xl text-gray-700" style={{ lineHeight: '1.6', fontWeight: '400' }}>
  My approach emphasizes <span className="font-semibold text-primary"> practical innovation</span>, turning ambitious ideas into
  <span className="font-semibold text-accent"> functional</span>,
  <span className="font-semibold text-primary"> state-of-the-art experiences</span>.
</p>

</div>

        
        {/* Experience */}
        <div className="mb-16">
      <h3 className="text-xl font-medium mb-8">Experience</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
        <div>
          <h4 className="font-medium">Deep Learning & Computer Vision Engineer</h4>
          <div className="text-gray-600">Volkswagen AG</div>
          <div className="text-gray-500 mb-3">Munich, Germany | 09/2023 - Present</div>
          <ul className="list-disc pl-5 text-sm space-y-1 text-gray-700">
            <li>Led development of CUPRA's first native Vision OS app for Apple Vision Pro, available on the App Store</li>
            <li>Achieved ~€500K in cost savings while boosting brand visibility through strategic tech implementation</li>
            <li>Developed Channel Wise Feature Augmentation (CWFA) in collaboration with NVIDIA to enhance Vision Transformers</li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-medium">ML & Computer Vision Research Student</h4>
          <div className="text-gray-600">Volkswagen AG</div>
          <div className="text-gray-500 mb-3">Munich, Germany | 05/2021 - 03/2023</div>
          <ul className="list-disc pl-5 text-sm space-y-1 text-gray-700">
            <li>Conducted 3D segmentation of point cloud airbag crash data using PyTorch</li>
            <li>Initiated NVIDIA collaboration to develop feature space augmentation methods</li>
            <li>Research led to publication on robust semantic segmentation for autonomous driving</li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-medium">Intern</h4>
          <div className="text-gray-600">Bosch</div>
          <div className="text-gray-500 mb-3">Stuttgart, Germany | 01/2020 - 04/2020</div>
          <ul className="list-disc pl-5 text-sm space-y-1 text-gray-700">
            <li>Developed GUI for visualizing ML results on Computational Fluid Simulations using Python and Kivy</li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-medium">Research Assistant and Math Tutor</h4>
          <div className="text-gray-600">TU Berlin</div>
          <div className="text-gray-500 mb-3">Berlin, Germany | 07/2018 - 09/2020</div>
          <ul className="list-disc pl-5 text-sm space-y-1 text-gray-700">
            <li>Validated FORTRAN simulations and performed HPC scaling tests on up to 5,000 processors</li>
            <li>Taught tutorials on numerical mathematics and linear algebra for engineering students</li>
          </ul>
        </div>
      </div>
    </div>
        
        {/* Education */}
        <div className="mb-16 max-w-3xl">

  <h3 className="text-2xl font-semibold mb-8 border-b pb-2">Education</h3>
  
  <div className="space-y-8">
    {/* Master's Degree */}
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start">
        <div>
          <h4 className="text-xl font-medium text-gray-800">Master of Science</h4>
          <div className="text-gray-700 font-medium">Technical University of Munich</div>
        </div>
        <div className="text-gray-500 text-sm">10/2020 - 08/2023</div>
      </div>
      
      <div className="mt-2">
        <div className="text-gray-700">
          <span className="font-medium">Major in Robotics, Cognition and Intelligence</span> 
          <span className="ml-2 px-2 py-1 bg-green-50 text-green-700 text-xs rounded-full">GPA: 1.8</span>
        </div>
      </div>
      
      <div className="mt-4 space-y-3">
        <div className="text-gray-600">
          <span className="font-medium text-gray-700">Selected Projects:</span>
          <ul className="mt-1 ml-5 list-disc text-gray-600">
            <li>Deep Learning Multi-lane Detection with Bosch</li>
            <li>Seminar on Graph Neural Networks</li>
            <li>Machine Learning I</li>
            <li>Computer Vision II: Multiple View Geometry</li>
            <li>Advanced Deep Learning for Computer Vision (Panoptic Segmentation with 3D Lidar)</li>
            <li>Machine Learning for Graphs and Sequential Data</li>
          </ul>
        </div>
        
        <div className="text-gray-600">
          <span className="font-medium text-gray-700">Thesis:</span>
          <div className="mt-1 ml-5">
            Robustness of Vision Transformer Models for Semantic Segmentation in Autonomous Driving
            <span className="ml-2 px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full">Grade: 1.0</span>
          </div>
        </div>
      </div>
    </div>
    
    {/* Bachelor's Degree */}
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start">
        <div>
          <h4 className="text-xl font-medium text-gray-800">Bachelor of Science</h4>
          <div className="text-gray-700 font-medium">Technical University of Berlin</div>
        </div>
        <div className="text-gray-500 text-sm">10/2015 - 08/2020</div>
      </div>
      
      <div className="mt-2">
        <div className="text-gray-700">
          <span className="font-medium">Major in Engineering Science</span>
          <span className="ml-2 px-2 py-1 bg-green-50 text-green-700 text-xs rounded-full">GPA: 2.0</span>
        </div>
        <div className="mt-1 text-gray-600">
          Focus on Numerical Mathematics and Computational Fluid Dynamics (CFD)
        </div>
      </div>
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