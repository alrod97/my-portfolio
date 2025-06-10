// src/pages/NvidiaProjectPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import MediaCarousel from '../components/media/MediaCarousel';

const NvidiaProjectPage = () => {
  const mediaItems = [
    {
      type: 'image',
      src: `${process.env.PUBLIC_URL}/images/cwfa_mainimage.jpeg`,
      alt: "Vision Transformer Research Visualization",
      respectAspectRatio: true
    },
    {
      type: 'youtube',
      id: "xdrY40QyFBo",
      poster: "/api/placeholder/800/450",
      alt: "Vision Transformer Research Video",
      respectAspectRatio: false
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Minimal header with back button */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <Link to="/" className="flex items-center text-gray-900 hover:text-gray-600 transition-colors">
            <ArrowLeft className="h-5 w-5 mr-2" />
            <span className="text-sm font-medium">Back to Home</span>
          </Link>
          <span className="text-xl text-gray-900" style={{ 
            fontWeight: '500',
            letterSpacing: '-0.02em'
          }}>Alberto Rodriguez</span>
        </div>
      </header>

      {/* Main content */}
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl mb-8" style={{
            fontWeight: '500',
            letterSpacing: '-0.025em'
          }}>Robust Vision Transformers Research with NVIDIA</h1>
          
          <div className="mb-12">
            <MediaCarousel 
              mediaItems={mediaItems} 
              itemWidthClass="w-full md:w-2/3 lg:w-1/2"
              respectAspectRatio={true}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-xl font-medium mb-4">Channel Wise Feature Augmentation (CWFA)</h3>
              <p className="mb-4">
                Developed a novel feature augmentation method designed to enhance the robustness of Vision Transformers
                for semantic segmentation. This technique significantly improves resilience to out-of-distribution data
                while maintaining high performance on clean data.
              </p>
              <p className="mb-4">
                The research, conducted in collaboration with NVIDIA, builds upon work initiated during my master's thesis
                and has resulted in a published paper: "Global Average Feature Augmentation for Robust Semantic Segmentation
                with Transformers."
              </p>
              <div className="flex flex-wrap gap-2 mt-6">
                <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">PyTorch</span>
                <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">Python</span>
                <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">Git</span>
                <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">Computer Vision</span>
                <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">Deep Learning</span>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-medium mb-4">Technical Implementation</h3>
              <p className="mb-4">
                This research focused on addressing the vulnerability of state-of-the-art vision transformer architectures
                to real-world corruptions like Gaussian noise and snow, which is critical for autonomous driving applications.
              </p>
              <p className="mb-4">
                By augmenting features within the transformer architecture, we were able to improve model generalization to
                unseen corruptions without requiring extensive additional training data or computational resources.
              </p>
            </div>
          </div>

          {/* Research Results */}
          <div className="bg-gray-50 rounded-lg p-8 mb-12">
            <h3 className="text-xl font-medium mb-4">Key Research Outcomes</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Improved robustness to impulse noise up to 27.7% mIoU on Cityscapes-C</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Maintained performance on clean data while enhancing zero-shot robustness</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Validated across multiple architectures: SegFormer, Swin Transformer, and Twins</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Minimal computational overhead during training, no overhead during inference</span>
              </li>
            </ul>
          </div>

          {/* Publication Link */}
          <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
            <h3 className="text-lg font-medium mb-2">Publication</h3>
            <p className="text-gray-600 mb-4">
              Global Average Feature Augmentation for Robust Semantic Segmentation with Transformers
            </p>
            <a 
              href="https://arxiv.org/abs/2412.01941" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-600 hover:text-blue-800 flex items-center"
            >
              View on arXiv
              <ArrowLeft className="h-4 w-4 ml-1 transform rotate-180" />
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NvidiaProjectPage;