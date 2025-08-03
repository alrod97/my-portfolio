// src/components/home/ProjectsSection.js
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const ProjectsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const projectVariants = {
    hidden: { y: 50, opacity: 0, filter: 'blur(10px)' },
    visible: {
      y: 0,
      opacity: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  const projects = [
    {
      id: 1,
      title: 'CUPRA Immersive 3D',
      subtitle: 'Apple Vision Pro App',
      image: `${process.env.PUBLIC_URL}/images/CupraVisionProUsing.jpeg`,
      link: '/projects/cupra-vision-pro',
      gradient: 'from-purple-400 to-pink-400'
    },
    {
      id: 2,
      title: 'Robust Vision Transformers',
      subtitle: 'NVIDIA Research Collaboration',
      image: `${process.env.PUBLIC_URL}/images/cwfa_mainimage.jpeg`,
      link: '/projects/nvidia-research',
      gradient: 'from-blue-400 to-cyan-400'
    }
  ];

  return (
    <section id="work" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-20 mt-12 text-center"
          style={{ 
            fontWeight: '500',
            letterSpacing: '-0.025em',
            lineHeight: '1.2'
          }}
        >
          <span className="gradient-text">Computer Vision. Deep Learning.</span>
          <br />
          <span className="gradient-text">Mixed Reality. AI Research.</span>
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={projectVariants}
              className={`${index === 1 ? 'md:mt-16' : ''}`}
            >
              <Link to={project.link} className="block group">
                <div className="relative overflow-hidden rounded-2xl">
                  {/* Glass overlay */}
                  <div className="absolute inset-0 glass opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex items-center justify-center">
                    <motion.div 
                      initial={{ scale: 0, rotate: -180 }}
                      whileHover={{ scale: 1, rotate: 0 }}
                      className="btn-glass flex items-center gap-2"
                    >
                      View Project <ArrowUpRight className="w-4 h-4" />
                    </motion.div>
                  </div>
                  
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-5`} />
                  
                  {/* Image */}
                  <motion.img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-80 md:h-96 object-cover transition-transform duration-700 group-hover:scale-110"
                    whileHover={{ scale: 1.1 }}
                  />
                </div>
                
                {/* Project info with glass effect */}
                <motion.div 
                  className="mt-6 glass rounded-xl p-4 backdrop-blur-xl"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="font-medium text-lg group-hover:gradient-text transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">{project.subtitle}</p>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;