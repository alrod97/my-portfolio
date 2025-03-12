// src/components/layout/Footer.js
import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 px-6 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <span className="text-sm text-gray-500">© Alberto Rodriguez 2025</span>
        </div>
        <div className="flex space-x-6">
          <a href="https://www.linkedin.com/in/alberto-rodriguez-salgado/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">
            <span className="sr-only">LinkedIn</span>
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="mailto:alberto.rodriguez.salgado.97@gmail.com" className="text-gray-500 hover:text-gray-700">
            <span className="sr-only">Email</span>
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;