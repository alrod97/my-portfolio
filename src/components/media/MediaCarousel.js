// src/components/media/MediaCarousel.js
import React, { useState, useRef } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const MediaCarousel = ({ 
  mediaItems, 
  itemWidthClass = "w-full md:w-full lg:w-full",
  respectAspectRatio = false
}) => {
  const customStyles = `
    @media (min-width: 1024px) {
      .h-112 {
        height: 28rem;
      }
    }
  `;
  
  const scrollContainer = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollLeft = () => {
    if (scrollContainer.current) {
      const newPosition = Math.max(scrollPosition - 300, 0);
      scrollContainer.current.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      });
      setScrollPosition(newPosition);
      setCurrentIndex(Math.max(currentIndex - 1, 0));
    }
  };

  const scrollRight = () => {
    if (scrollContainer.current) {
      const maxScroll = scrollContainer.current.scrollWidth - scrollContainer.current.clientWidth;
      const newPosition = Math.min(scrollPosition + 300, maxScroll);
      scrollContainer.current.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      });
      setScrollPosition(newPosition);
      setCurrentIndex(Math.min(currentIndex + 1, mediaItems.length - 1));
    }
  };

  return (
    <motion.div 
      className="relative w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <style>{customStyles}</style>
      
      {/* Navigation buttons with glass effect */}
      <AnimatePresence>
        {scrollPosition > 0 && (
          <motion.button 
            onClick={scrollLeft}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 glass p-3 rounded-full shadow-lg hover:bg-white/90 transition-all"
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} />
          </motion.button>
        )}
      </AnimatePresence>
      
      <AnimatePresence>
        {scrollPosition < (scrollContainer.current?.scrollWidth - scrollContainer.current?.clientWidth || 0) && (
          <motion.button 
            onClick={scrollRight}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 glass p-3 rounded-full shadow-lg hover:bg-white/90 transition-all"
            aria-label="Scroll right"
          >
            <ChevronRight size={24} />
          </motion.button>
        )}
      </AnimatePresence>
      
      {/* Scrollable media container */}
      <div 
        ref={scrollContainer}
        className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-4 pb-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        onScroll={(e) => {
          setScrollPosition(e.target.scrollLeft);
          const index = Math.round(e.target.scrollLeft / (e.target.clientWidth / mediaItems.length));
          setCurrentIndex(index);
        }}
      >
        {mediaItems.map((item, index) => {
          const shouldRespectAspectRatio = item.respectAspectRatio !== undefined ? item.respectAspectRatio : respectAspectRatio;
          
          return (
            <motion.div 
              key={index} 
              className={`flex-none ${itemWidthClass} ${!shouldRespectAspectRatio ? 'h-80 md:h-96 lg:h-112' : ''} snap-center relative`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="glass rounded-2xl overflow-hidden h-full">
                {item.type === 'image' ? (
                  <motion.img 
                    src={item.src} 
                    alt={item.alt}
                    className={`w-full ${!shouldRespectAspectRatio ? 'h-full object-cover' : 'h-auto object-contain'}`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                ) : item.type === 'youtube' ? (
                  <div className={`w-full ${!shouldRespectAspectRatio ? 'h-full' : 'aspect-video'} relative`}>
                    <iframe
                      src={`https://www.youtube.com/embed/${item.id}?rel=0`}
                      title={item.alt}
                      className="w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                ) : (
                  <div className={`w-full ${!shouldRespectAspectRatio ? 'h-full' : 'aspect-video'} relative`}>
                    <video 
                      src={item.src}
                      poster={item.poster}
                      controls
                      className={`w-full ${!shouldRespectAspectRatio ? 'h-full object-cover' : 'h-auto'}`}
                      playsInline
                    >
                      Your browser does not support the video tag.
                    </video>
                    <motion.div 
                      className="absolute inset-0 bg-black/20 flex items-center justify-center pointer-events-none"
                      initial={{ opacity: 1 }}
                      whileHover={{ opacity: 0 }}
                    >
                      <motion.div 
                        className="w-16 h-16 rounded-full glass flex items-center justify-center"
                        whileHover={{ scale: 1.1 }}
                      >
                        <div className="w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-16 border-l-gray-800 ml-1"></div>
                      </motion.div>
                    </motion.div>
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
      
      {/* Enhanced indicator dots */}
      <div className="flex justify-center gap-2 mt-6">
        {mediaItems.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => {
              const containerWidth = scrollContainer.current?.clientWidth || 0;
              const targetScroll = index * (containerWidth / mediaItems.length);
              scrollContainer.current?.scrollTo({
                left: targetScroll,
                behavior: 'smooth'
              });
              setCurrentIndex(index);
            }}
            className={`h-2 rounded-full transition-all cursor-pointer ${
              currentIndex === index ? 'w-8 bg-gradient-to-r from-purple-600 to-pink-600' : 'w-2 bg-gray-300 hover:bg-gray-400'
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default MediaCarousel;