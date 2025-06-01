// src/components/home/HeroSection.js
import React from 'react';

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-2/3 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary" style={{
              fontWeight: '500',
              letterSpacing: '-0.03em',
              lineHeight: '1.2'
            }}>
              <span className="text-accent">Deep Learning</span> & <span className="text-accent">Computer Vision</span> Engineer
            </h1>
            <p className="text-lg mb-8 max-w-2xl text-gray-700" style={{ lineHeight: '1.6' }}>
              At <span className="font-semibold text-primary">Volkswagen AG</span>, I specialize in
              <span className="font-semibold text-accent"> translating state-of-the-art research</span> into
              <span className="font-semibold text-accent"> real-world AI solutions</span>, focusing on
              <span className="font-semibold text-accent"> deep learning</span>,
              <span className="font-semibold text-accent"> computer vision</span>, and
              <span className="font-semibold text-accent"> 3D generative AI</span> for automotive applications.
            </p>
            <p className="text-lg mb-8 max-w-2xl text-gray-700" style={{ lineHeight: '1.6' }}>
              I develop innovative methods like <span className="font-semibold text-accent">CWFA (Channel Wise Feature Augmentation) </span>
               under <span className="font-semibold text-primary">Dr. Jose M Alvarez (NVIDIA)</span> supervision,
              enhancing <span className="font-semibold text-primary">SegFormer's robustness</span> to
              <span className="font-semibold text-accent">out-of-distribution data</span> for semantic segmentation.
              I've also created <span className="font-semibold text-accent">mixed reality solutions</span> like the
              <span className="font-semibold text-primary"> CUPRA Vision Pro</span> car configuration platform.
            </p>
            <p className="text-lg max-w-2xl text-gray-700" style={{ lineHeight: '1.6' }}>
              Currently, I focus on <span className="font-semibold text-accent">3D generative AI</span> for
              <span className="font-semibold text-primary">internal design use cases</span>, researching
              <span className="font-semibold text-accent"> cutting-edge architectures</span> and
              <span className="font-semibold text-primary"> fine-tuning models</span> to meet specific industrial needs,
              bridging the gap between <span className="font-semibold text-accent">academic innovation</span> and
              <span className="font-semibold text-primary"> practical implementation</span>.
            </p>
          </div>
          <div className="md:w-1/3 md:pl-12 flex items-center justify-center">
            <div className="w-64 overflow-hidden rounded-md shadow-lg">
              <img
                src={`${process.env.PUBLIC_URL}/images/profile_image.JPG`}
                alt="Portrait"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;