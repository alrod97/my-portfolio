

// src/components/projects/CupraProject.js
import React from 'react';
import MediaCarousel from '../media/MediaCarousel';
import CupraTimeline from './CupraTimeline';

const CupraProject = () => {
  // Hardcoded media items (images and videos) for the CUPRA Vision Pro
  const mediaItems = [
    {
      type: 'image',
      src: `${process.env.PUBLIC_URL}/images/visionProImage.jpeg`,  // Using absolute path with process.env.PUBLIC_URL
      alt: "Vision Transformer Research Visualization",
      respectAspectRatio: true // This image will maintain its original aspect ratio
    },
    {
      type: 'youtube',
      id: "mSOxsR-X_QU", 
      poster: "/api/placeholder/800/450", 
      alt: "CUPRA Vision Pro YouTube Video 1"
    },
    {
      type: 'image',
      src: `${process.env.PUBLIC_URL}/images/usingCupraApp.jpeg`,  // Using absolute path with process.env.PUBLIC_URL
      alt: "Vision Transformer Research Visualization",
      respectAspectRatio: true // This image will maintain its original aspect ratio
    },
    {
      type: 'youtube',
      id: "rZk9fffuQuM",
      poster: "rZk9fffuQuM&t=261s",
      alt: "CUPRA Vision Pro YouTube Video 2"
    },
    {
      type: 'image',
      src: `${process.env.PUBLIC_URL}/images/event.jpeg`,  // Using absolute path with process.env.PUBLIC_URL
      alt: "CUPRA Vision Pro App Image 3"
    }
  ];

  return (
    <section id="cupra-vision-pro" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl mb-8" style={{
          fontWeight: '500',
          letterSpacing: '-0.025em'
        }}>CUPRA Immersive 3D for Apple Vision Pro</h2>
        
        <div className="mb-12">
          <MediaCarousel 
            mediaItems={mediaItems} 
            itemWidthClass="w-full md:w-2/3 lg:w-1/2" 
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="text-xl font-medium mb-4">First Automotive visionOS App</h3>
            <p className="mb-4">
              Led the development of CUPRA's groundbreaking immersive 3D car visualization application for Apple Vision Pro,
              making it the first native visionOS application from an automotive brand available on the Apple Store.
            </p>
            <p className="mb-4">
              The app utilizes cutting-edge spatial computing technologies including Swift, SwiftUI, RealityKit, and ARKit to create
              a truly immersive experience that allows users to explore CUPRA vehicles in extraordinary detail.
            </p>
            <div className="flex flex-wrap gap-2 mt-6">
              <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">Swift</span>
              <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">SwiftUI</span>
              <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">RealityKit</span>
              <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">ARKit</span>
              <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">visionOS</span>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-medium mb-4">Real-World Impact</h3>
            <p className="mb-4">
              Successfully deployed the app live in CUPRA showrooms in Barcelona and Madrid, engaging hundreds of users
              and providing a cutting-edge visualization tool for CUPRA's vehicles when physical stock is not available
              for all configurations.
            </p>
            <p className="mb-4">
              Managed the project from Volkswagen's side and coordinated with partners such as Audi Business Innovation
              and Apple to ensure the best app experience, while overseeing funding acquisition and stakeholder alignment,
              establishing CUPRA as a leader in leveraging mixed reality for automotive retail.
            </p>
          </div>
        </div>
        
        {/* Timeline component */}
        <CupraTimeline />
      </div>
    </section>
  );
};

export default CupraProject;
