// src/components/projects/CupraTimeline.js
import React, { useState, useRef } from 'react';
import { ExternalLink, ChevronRight, ChevronLeft, Linkedin, MapPin, Image } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const CupraTimeline = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const scrollRef = useRef(null);
  
  const timelineItems = [
    {
      date: "September 2023",
      shortDate: "Sep '23",
      title: "Initial Concept",
      description: "Had an idea of showing cars on Apple Vision Pro and built a small Proof of Concept internally.",
      icon: "💡",
      color: "from-purple-500 to-pink-500"
    },
    {
      date: "November 2023",
      shortDate: "Nov '23",
      title: "Concept Validation",
      description: "Tried the Apple Vision Pro for the first time in Apple Developer Labs, confirming the stunning 3D car visualization quality and potential of the project.",
      icon: "✅",
      color: "from-blue-500 to-purple-500"
    },
    {
      date: "March 2024",
      shortDate: "Mar '24",
      title: "Official Project Start",
      description: "Started officially working with CUPRA on the Immersive App development.",
      icon: "🚀",
      linkedinPost: {
        url: "https://www.linkedin.com/posts/steven-stein-36777b71_applevisionpro-activity-7176955562595606528-IpPP?utm_source=share&utm_medium=member_desktop&rcm=ACoAACtRSSkBalKw6iN5lJ1feGO9ESOJXFipA7A",
        label: "View 1st iteration LinkedIn post"
      },
      color: "from-green-500 to-blue-500"
    },
    {
      date: "June 2024",
      shortDate: "Jun '24",
      title: "First Customer Showcase",
      description: "First live demonstration of the App with customers in Casa Seat, CUPRA's showroom in Barcelona.",
      icon: "👥",
      casaSeatLink: {
        url: "https://www.casa.seat/es/agenda/Apple-Vision-Pro-en-CASA-SEAT",
        label: "View Casa SEAT event"
      },
      color: "from-orange-500 to-red-500"
    },
    {
      date: "August 2024",
      shortDate: "Aug '24",
      title: "App Store Launch",
      description: "Uploaded the App to the Apple Store in Germany, UK, and France, becoming the first automotive app live on the visionOS Apple Store.",
      icon: "📱",
      linkedinPost: {
        url: "https://www.linkedin.com/posts/activity-7222258520157483008-06In?utm_source=share&utm_medium=member_desktop&rcm=ACoAACtRSSkBalKw6iN5lJ1feGO9ESOJXFipA7A",
        label: "View App Store launch announcement"
      },
      color: "from-pink-500 to-purple-500"
    },
    {
      date: "September 2024",
      shortDate: "Sep '24",
      title: "Spain Deployment",
      description: "Barcelona and Madrid deployment for the CUPRA Terramar launch.",
      icon: "🇪🇸",
      images: [
        {
          url: `${process.env.PUBLIC_URL}/images/terramar_visionPro_2.jpeg`,
          alt: "Vision Transformer Research Visualization",
        },
        {
          url: `${process.env.PUBLIC_URL}/images/terramar_visionPro_1.jpeg`,
          alt: "Vision Transformer Research Visualization",
        }
      ],
      color: "from-red-500 to-orange-500"
    },
    {
      date: "November 2024",
      shortDate: "Nov '24",
      title: "VW Festival",
      description: "Deployment for VW Branding at AdaLoveLave festival where around 100 people tried out the experience with extremely positive feedback. I WAS LUCKY to also present our product to customers directly.",
      icon: "🎪",
      images: [
        {
          url: `${process.env.PUBLIC_URL}/images/vwAdaLoveLace_1.jpeg`,
          alt: "Vision Transformer Research Visualization",
        },
        {
          url: `${process.env.PUBLIC_URL}/images/vwAdaLoveLace_2.jpeg`,
          alt: "Vision Transformer Research Visualization",
        }
      ],
      color: "from-purple-500 to-blue-500"
    },
    {
      date: "February 2025",
      shortDate: "Feb '25",
      title: "Executive Presentation",
      description: "Presented the project in the VW IT Symposium to the VW Group Board as a successful collaboration. Received extremely good feedback on both product and presentation from the management.",
      icon: "🎯",
      linkedinPost: {
        url: "https://www.linkedin.com/posts/alberto-rodriguez-salgado_cupra-applevisionpro-activity-7298403542535487488-6zla?utm_source=share&utm_medium=member_desktop&rcm=ACoAACtRSSkBalKw6iN5lJ1feGO9ESOJXFipA7A",
        label: "View Executive Presentation feedback"
      },
      images: [
        {
          url: `${process.env.PUBLIC_URL}/images/executive_presentation_1.jpeg`,
          alt: "Vision Transformer Research Visualization",
        },
        {
          url: `${process.env.PUBLIC_URL}/images/executive_presentation_2.jpeg`,
          alt: "Vision Transformer Research Visualization",
        }
      ],
      color: "from-green-500 to-teal-500"
    }
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="mt-16 mb-8">
      <motion.h3 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-xl font-medium mb-6"
      >
        Project Timeline
      </motion.h3>
      
      {/* Horizontal Timeline */}
      <div className="relative">
        {/* Navigation Buttons */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 glass p-2 rounded-full shadow-lg hover:bg-white/90 transition-all"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 glass p-2 rounded-full shadow-lg hover:bg-white/90 transition-all"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
        
        {/* Timeline Track */}
        <div className="absolute top-16 left-0 right-0 h-0.5 bg-gray-200 z-0" />
        
        {/* Scrollable Container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 px-8"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {timelineItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              className="flex-none w-64 relative"
            >
              {/* Timeline Node */}
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className={`w-8 h-8 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center text-white text-sm font-bold mb-4 mx-auto cursor-pointer`}
                  onClick={() => setSelectedItem(selectedItem === index ? null : index)}
                >
                  {index + 1}
                </motion.div>
                
                {/* Card */}
                <motion.div
                  whileHover={{ y: -5 }}
                  className="glass rounded-xl p-4 backdrop-blur-xl hover:bg-white/60 transition-all duration-300"
                >
                  {/* Icon & Date */}
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-xs text-gray-500">{item.shortDate}</span>
                  </div>
                  
                  {/* Title */}
                  <h4 className={`font-medium mb-2 text-sm bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                    {item.title}
                  </h4>
                  
                  {/* Quick Links */}
                  <div className="flex gap-2 mt-3">
                    {item.linkedinPost && (
                      <a
                        href={item.linkedinPost.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 glass rounded-lg hover:bg-white/80 transition-all"
                        title={item.linkedinPost.label}
                      >
                        <Linkedin className="w-3 h-3 text-blue-600" />
                      </a>
                    )}
                    {item.casaSeatLink && (
                      <a
                        href={item.casaSeatLink.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 glass rounded-lg hover:bg-white/80 transition-all"
                        title={item.casaSeatLink.label}
                      >
                        <MapPin className="w-3 h-3 text-red-600" />
                      </a>
                    )}
                    {item.images && (
                      <button
                        onClick={() => setSelectedItem(selectedItem === index ? null : index)}
                        className="p-1.5 glass rounded-lg hover:bg-white/80 transition-all ml-auto"
                        title="View images"
                      >
                        <Image className="w-3 h-3 text-gray-600" />
                      </button>
                    )}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Detail Panel */}
      <AnimatePresence>
        {selectedItem !== null && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: 20 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="mt-8 glass rounded-2xl p-6 backdrop-blur-xl"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className="text-lg font-medium mb-1">{timelineItems[selectedItem].title}</h4>
                <p className="text-sm text-gray-500">{timelineItems[selectedItem].date}</p>
              </div>
              <button
                onClick={() => setSelectedItem(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>
            
            <p className="text-gray-700 mb-4">{timelineItems[selectedItem].description}</p>
            
            {/* Images Grid */}
            {timelineItems[selectedItem].images && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                {timelineItems[selectedItem].images.map((image, imgIndex) => (
                  <motion.img
                    key={imgIndex}
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-32 object-cover rounded-lg"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: imgIndex * 0.1 }}
                  />
                ))}
              </div>
            )}
            
            {/* Full Links */}
            <div className="flex gap-4">
              {timelineItems[selectedItem].linkedinPost && (
                <a
                  href={timelineItems[selectedItem].linkedinPost.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700"
                >
                  <Linkedin className="w-4 h-4" />
                  {timelineItems[selectedItem].linkedinPost.label}
                </a>
              )}
              {timelineItems[selectedItem].casaSeatLink && (
                <a
                  href={timelineItems[selectedItem].casaSeatLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-red-600 hover:text-red-700"
                >
                  <MapPin className="w-4 h-4" />
                  {timelineItems[selectedItem].casaSeatLink.label}
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CupraTimeline;