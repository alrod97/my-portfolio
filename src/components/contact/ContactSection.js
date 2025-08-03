// src/components/contact/ContactSection.js
import React from 'react';
import { Mail, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  return (
    <section id="contact" className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl mb-12"
          style={{ 
            fontWeight: '500',
            letterSpacing: '-0.025em'
          }}
        >
          Contact
        </motion.h2>
        
        <motion.div 
          className="max-w-2xl"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div 
            variants={itemVariants}
            className="glass rounded-2xl p-8 backdrop-blur-xl"
          >
            <p className="text-lg mb-8">
              Feel free to reach out for collaborations, research opportunities, or just to connect!
            </p>
            
            <div className="space-y-6">
              <motion.a 
                href="mailto:alberto.rodriguez.salgado.97@gmail.com"
                className="flex items-center p-4 glass rounded-xl hover:bg-white/30 transition-all duration-300 group"
                whileHover={{ x: 5 }}
              >
                <div className="p-3 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 text-white mr-4">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Email</p>
                  <p className="text-gray-900 group-hover:gradient-text transition-all duration-300">
                    alberto.rodriguez.salgado.97@gmail.com
                  </p>
                </div>
              </motion.a>
              
              <motion.a 
                href="https://www.linkedin.com/in/alberto-rodriguez-salgado/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center p-4 glass rounded-xl hover:bg-white/30 transition-all duration-300 group"
                whileHover={{ x: 5 }}
              >
                <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 text-white mr-4">
                  <Linkedin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">LinkedIn</p>
                  <p className="text-gray-900 group-hover:gradient-text transition-all duration-300">
                    Connect on LinkedIn
                  </p>
                </div>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;