import React, { useState } from 'react';

const PublicationsSection = () => {
  const [showAbstract, setShowAbstract] = useState(false);

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
          
          <div className="mb-4">
            <button 
              onClick={() => setShowAbstract(!showAbstract)} 
              className="text-blue-600 hover:text-blue-800 underline mb-2 focus:outline-none"
            >
              {showAbstract ? 'Hide Abstract' : 'Show Abstract'}
            </button>
            
            {showAbstract && (
              <div className="bg-gray-50 p-4 rounded-md border border-gray-200 mt-2">
                <p className="text-gray-700">
                  Zero-shot robustness is crucial for the effective deployment 
                  of modern neural networks. Recently, Transformer-based 
                  networks such as SegFormer have shown impressive 
                  performance including zero-shot robustness for semantic segmentation. 
                  In this paper, we propose Channel Wise Feature 
                  Augmentation (CWFA), a simple yet efficient feature augmentation 
                  technique to improve the zero-shot robustness of Vision 
                  Transformers for semantic segmentation. The key novelty is a 
                  perturbation computed globally and applied to each feature 
                  independently. Importantly, our proposal has no computer 
                  overhead during inference and minimal compute overhead 
                  during training. Extensive evaluations on Cityscapes, PASCAL 
                  VOC 2012 and ADE20K, with three state-of-the-art 
                  Vision Transformer architectures—SegFormer, Swin Transformer, 
                  and Twins—demonstrate that CWFA-enhanced models 
                  significantly improve robustness without affecting clean 
                  data performance. Moreover, our method generalizes to adversarial 
                  robustness. For instance, on Cityscapes-C, applying 
                  our approach to a SegFormer-B1 model improves zero-shot 
                  robustness to impulse noise up to 27.7% mIoU while 
                  maintaining performance on clean data.
                </p>
              </div>
            )}
          </div>
          
          <a href="https://arxiv.org/abs/2412.01941" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
            https://arxiv.org/abs/2412.01941
          </a>
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;