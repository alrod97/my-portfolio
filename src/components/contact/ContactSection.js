// src/components/contact/ContactSection.js
import React from 'react';
import { Mail, Linkedin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl mb-12" style={{ 
          fontWeight: '500',
          letterSpacing: '-0.025em'
        }}>Contact</h2>
        
        <div className="max-w-2xl">
          <p className="text-lg mb-6">
            Feel free to reach out for collaborations, research opportunities, or just to connect!
          </p>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-center">
              <Mail className="h-5 w-5 mr-3 text-gray-500" />
              <a href="mailto:alberto.rodriguez.salgado.97@gmail.com" className="text-gray-900 hover:text-gray-700">
                alberto.rodriguez.salgado.97@gmail.com
              </a>
            </div>
            <div className="flex items-center">
              <Linkedin className="h-5 w-5 mr-3 text-gray-500" />
              <a href="https://www.linkedin.com/in/alberto-rodriguez-salgado/" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-gray-700">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;