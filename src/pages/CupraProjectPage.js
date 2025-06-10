// src/pages/CupraProjectPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import MediaCarousel from '../components/media/MediaCarousel';
import CupraTimeline from '../components/projects/CupraTimeline';

const CupraProjectPage = () => {
  const mediaItems = [
    {
      type: 'image',
      src: `${process.env.PUBLIC_URL}/images/visionProImage.jpeg`,
      alt: "Vision Transformer Research Visualization",
      respectAspectRatio: true
    },
    {
      type: 'youtube',
      id: "mSOxsR-X_QU", 
      poster: "/api/placeholder/800/450", 
      alt: "CUPRA Vision Pro YouTube Video 1"
    },
    {
      type: 'image',
      src: `${process.env.PUBLIC_URL}/images/usingCupraApp.jpeg`,
      alt: "Vision Transformer Research Visualization",
      respectAspectRatio: true
    },
    {
      type: 'youtube',
      id: "rZk9fffuQuM",
      poster: "rZk9fffuQuM&t=261s",
      alt: "CUPRA Vision Pro YouTube Video 2"
    },
    {
      type: 'image',
      src: `${process.env.PUBLIC_URL}/images/event.jpeg`,
      alt: "CUPRA Vision Pro App Image 3"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Minimal header with back button */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <Link to="/" className="flex items-center text-gray-900 hover:text-gray-600 transition-colors">
            <ArrowLeft className="h-5 w-5 mr-2" />
            <span className="text-sm font-medium">Back to Home</span>
          </Link>
          <span className="text-xl text-gray-900" style={{ 
            fontWeight: '500',
            letterSpacing: '-0.02em'
          }}>Alberto Rodriguez</span>
        </div>
      </header>

      {/* Main content */}
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl mb-8" style={{
            fontWeight: '500',
            letterSpacing: '-0.025em'
          }}>CUPRA Immersive 3D for Apple Vision Pro</h1>
          
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
          
          <CupraTimeline />
        </div>
      </main>
    </div>
  );
};

export default CupraProjectPage;