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
      description: "Started officially working with CUPRA on the Immersive App development.",
      linkedinPost: {
        url: "https://www.linkedin.com/posts/steven-stein-36777b71_applevisionpro-activity-7176955562595606528-IpPP?utm_source=share&utm_medium=member_desktop&rcm=ACoAACtRSSkBalKw6iN5lJ1feGO9ESOJXFipA7A",
        label: "View 1st iteration LinkedIn post"
      }
    },
    {
      date: "June 2024",
      title: "First Customer Showcase",
      description: "First live demonstration of the App with customers in Casa Seat, CUPRA's showroom in Barcelona.",
      casaSeatLink: {
        url: "https://www.casa.seat/es/agenda/Apple-Vision-Pro-en-CASA-SEAT",
        label: "View Casa SEAT event"
      }
    },
    {
      date: "August 2024",
      title: "App Store Launch",
      description: "Uploaded the App to the Apple Store in Germany, UK, and France, becoming the first automotive app live on the visionOS Apple Store.",
      linkedinPost: {
        url: "https://www.linkedin.com/posts/activity-7222258520157483008-06In?utm_source=share&utm_medium=member_desktop&rcm=ACoAACtRSSkBalKw6iN5lJ1feGO9ESOJXFipA7A",
        label: "View App Store launch announcement"
      }
    },
    {
      date: "September 2024",
      title: "Spain Deployment",
      description: "Barcelona and Madrid deployment for the CUPRA Terramar launch.",
      images: [
        {
          url: `${process.env.PUBLIC_URL}/images/terramar_visionPro_2.jpeg`,  // Using absolute path with process.env.PUBLIC_URL
          alt: "Vision Transformer Research Visualization",
        },
        {
          url: `${process.env.PUBLIC_URL}/images/terramar_visionPro_1.jpeg`,  // Using absolute path with process.env.PUBLIC_URL
          alt: "Vision Transformer Research Visualization",
        }
      ]
    },
    {
      date: "November 2024",
      title: "VW Branding at AdaLoveLave Festival",
      description: "Deployment for VW Branding at AdaLoveLave festival where around 100 people tried out the experience with extremely positive feedback. I WAS LUCKY to also present our product to customers directly.",
      images: [
        {
          url: `${process.env.PUBLIC_URL}/images/vwAdaLoveLace_1.jpeg`,  // Using absolute path with process.env.PUBLIC_URL
          alt: "Vision Transformer Research Visualization",
        },
        {
          url: `${process.env.PUBLIC_URL}/images/vwAdaLoveLace_2.jpeg`,  // Using absolute path with process.env.PUBLIC_URL
          alt: "Vision Transformer Research Visualization",
        },
        
      ]
    },
    
    {
      date: "February 2025",
      title: "Executive Presentation",
      description: "Presented the project in the VW IT Symposium to the VW Group Board as a successful collaboration. Received extremely good feedback on both product and presentation from the management.",
      linkedinPost: {
        url: "https://www.linkedin.com/posts/alberto-rodriguez-salgado_cupra-applevisionpro-activity-7298403542535487488-6zla?utm_source=share&utm_medium=member_desktop&rcm=ACoAACtRSSkBalKw6iN5lJ1feGO9ESOJXFipA7A",
        label: "View Executive Presentation feedback"
      },
      images: [
        {
          url: `${process.env.PUBLIC_URL}/images/executive_presentation_1.jpeg`,  // Using absolute path with process.env.PUBLIC_URL
          alt: "Vision Transformer Research Visualization",
        },
        {
          url: `${process.env.PUBLIC_URL}/images/executive_presentation_2.jpeg`,  // Using absolute path with process.env.PUBLIC_URL
          alt: "Vision Transformer Research Visualization",
        },
      ]
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
                  
                  {/* LinkedIn Post Link */}
                  {item.linkedinPost && (
                    <div className="mt-4">
                      <a 
                        href={item.linkedinPost.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
                      >
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                        {item.linkedinPost.label}
                      </a>
                    </div>
                  )}
                  
                  {/* Casa SEAT Link */}
                  {item.casaSeatLink && (
                    <div className="mt-4">
                      <a 
                        href={item.casaSeatLink.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition duration-200"
                      >
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm4 0h-2V7h2v10z" />
                        </svg>
                        {item.casaSeatLink.label}
                      </a>
                    </div>
                  )}
                  
                  {/* Images Gallery */}
                  {item.images && item.images.length > 0 && (
                    <div className="mt-4 grid grid-cols-1 gap-4">
                      {item.images.map((image, imgIndex) => (
                        <div key={imgIndex} className="rounded-lg overflow-hidden shadow-md">
                          <img 
                            src={image.url} 
                            alt={image.alt} 
                            className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
                          />
                        </div>
                      ))}
                    </div>
                  )}
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