

// src/components/projects/CupraTimeline.js
import React from 'react';

const CupraTimeline = () => {
  const timelineItems = [
    {
      date: "September 2023",
      title: "Initial Concept",
      description: "Had an idea of showing cars on Apple Vision Pro and built a small Proof of Concept internally."
    },
    {
      date: "November 2023",
      title: "Concept Validation",
      description: "Tried the Apple Vision Pro for the first time in Apple Developer Labs, confirming the stunning 3D car visualization quality and potential of the project."
    },
    {
      date: "March 2024",
      title: "Official Project Start",
      description: "Started officially working with CUPRA on the Immersive App development."
    },
    {
      date: "June 2024",
      title: "First Customer Showcase",
      description: "First live demonstration of the App with customers in Casa Seat, CUPRA's showroom in Barcelona."
    },
    {
      date: "August 2024",
      title: "App Store Launch",
      description: "Uploaded the App to the Apple Store in Germany, UK, and France, becoming the first automotive app live on the visionOS Apple Store."
    },
    {
      date: "September 2024",
      title: "Spain Deployment",
      description: "Barcelona and Madrid deployment for the CUPRA Terramar launch."
    },
    {
      date: "February 2025",
      title: "Executive Presentation",
      description: "Presented the project in the VW IT Symposium to the VW Group Board as a successful collaboration."
    }
  ];

  return (
    <div className="mt-12 mb-16">
      <h3 className="text-xl font-medium mb-6">Project Timeline</h3>
      
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 transform -translate-x-1/2"></div>
        
        {/* Timeline items */}
        <div className="space-y-8">
          {timelineItems.map((item, index) => (
            <div 
              key={index} 
              className={`relative flex flex-col md:flex-row ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Dot marker */}
              <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-gray-100 border-2 border-gray-400 rounded-full z-10 transform -translate-x-1/2 flex items-center justify-center">
                <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
              </div>
              
              {/* Content */}
              <div className={`ml-16 md:ml-0 md:w-1/2 ${
                index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
              }`}>
                <div className="bg-white p-5 rounded-lg shadow-md">
                  <span className="inline-block px-3 py-1 bg-gray-200 text-gray-700 text-sm font-medium rounded-full mb-2">
                    {item.date}
                  </span>
                  <h4 className="text-lg font-medium mb-2">{item.title}</h4>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
              
              {/* Empty space for alignment on desktop */}
              <div className="hidden md:block md:w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CupraTimeline;