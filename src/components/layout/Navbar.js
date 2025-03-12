// src/components/layout/Navbar.js
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="py-6 w-full backdrop-blur-sm bg-white/80 fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-xl text-gray-900" style={{ 
              fontWeight: '500',
              letterSpacing: '-0.02em'
            }}>Alberto Rodriguez</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <a href="#work" className="px-3 py-2 text-sm text-gray-900 hover:text-gray-600" style={{ fontWeight: '400' }}>
              Work
            </a>
            <a href="#about" className="px-3 py-2 text-sm text-gray-900 hover:text-gray-600" style={{ fontWeight: '400' }}>
              About
            </a>
            <a href="#publications" className="px-3 py-2 text-sm text-gray-900 hover:text-gray-600" style={{ fontWeight: '400' }}>
              Publications
            </a>
            <a href="#contact" className="px-3 py-2 text-sm text-gray-900 hover:text-gray-600" style={{ fontWeight: '400' }}>
              Contact
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1 bg-white">
            <a
              href="#work"
              className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Work
            </a>
            <a
              href="#about"
              className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#publications"
              className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Publications
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;