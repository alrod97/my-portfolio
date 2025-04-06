
// src/components/projects/NvidiaProject.js
import React from 'react';
import MediaCarousel from '../media/MediaCarousel';

const NvidiaProject = () => {
  // Hardcoded media items (1 image and 1 video) for the NVIDIA Vision Transformers section
  const mediaItems = [
  {
    type: 'image',
    src: `${process.env.PUBLIC_URL}/images/cwfa_mainimage.jpeg`,  // Using absolute path with process.env.PUBLIC_URL
    alt: "Vision Transformer Research Visualization",
    respectAspectRatio: true // This image will maintain its original aspect ratio
  },
  {
    type: 'youtube',
    id: "xdrY40QyFBo",
    poster: "/api/placeholder/800/450",
    alt: "Vision Transformer Research Video",
    respectAspectRatio: false // This image will be cropped to fit the container

    // No respectAspectRatio specified, will use the default (false)
  }
];

// In your component:
const NvidiaProject = () => {
  return (
    <section id="vision-transformers" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl mb-8">Robust Vision Transformers Research with NVIDIA</h2>
        
        {/* Using the MediaCarousel with mixed aspect ratio items */}
        <div className="mb-12">
          <MediaCarousel 
            mediaItems={mediaItems} 
            itemWidthClass="w-full md:w-2/3 lg:w-1/2"
            // You can still set a default, which will apply to items that don't specify their own
            respectAspectRatio={false}
          />
        </div>
        
        {/* Rest of the component... */}
      </div>
    </section>
  );
};

  return (
    <section id="vision-transformers" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl mb-8" style={{
          fontWeight: '500',
          letterSpacing: '-0.025em'
        }}>Robust Vision Transformers Research with NVIDIA</h2>
        
        {/* Media HStack component */}
        <div className="mb-12">
        <MediaCarousel 
         mediaItems={mediaItems} 
         itemWidthClass="w-full md:w-2/3 lg:w-1/2"
         respectAspectRatio={true} // This is the default, so you can omit it
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
      </div>
    </section>
  );
};

export default NvidiaProject;