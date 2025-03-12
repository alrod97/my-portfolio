
// src/components/publications/PublicationsSection.js
import React from 'react';

const PublicationsSection = () => {
  return (
    <section id="publications" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl mb-12" style={{ 
          fontWeight: '500',
          letterSpacing: '-0.025em'
        }}>Publications</h2>
        
        <div className="bg-white rounded-lg p-8 shadow-sm mb-8 border border-gray-100">
          <h3 className="text-xl font-medium mb-2">Global Average Feature Augmentation for Robust Semantic Segmentation with Transformers</h3>
          <p className="text-gray-500 mb-4">December 2024</p>
          <p className="mb-4">
            Alberto G. Rodriguez Salgado, Maying Shen, Philipp Harzig, Peter Mayer, Jose M. Alvarez
          </p>
          <a href="https://arxiv.org/abs/2412.01941" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
            https://arxiv.org/abs/2412.01941
          </a>
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;
