// src/components/home/HeroSection.js
import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0, filter: 'blur(10px)' },
    visible: {
      y: 0,
      opacity: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0, filter: 'blur(20px)' },
    visible: {
      scale: 1,
      opacity: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 1,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <section className="pt-32 pb-20 px-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, 100, 0], y: [0, -100, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-300/20 to-pink-300/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -100, 0], y: [0, 100, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-blue-300/20 to-cyan-300/20 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="flex flex-col md:flex-row"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="md:w-2/3 mb-12 md:mb-0">
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold mb-6 text-primary"
              style={{ fontWeight: '500', letterSpacing: '-0.03em', lineHeight: '1.2' }}
            >
              <span className="gradient-text">Deep Learning</span> &amp;{' '}
              <span className="gradient-text">Computer Vision</span> Engineer
            </motion.h1>

            <motion.div
              variants={itemVariants}
              className="glass rounded-2xl p-6 mb-6 backdrop-blur-xl"
            >
              <p className="text-lg text-gray-700" style={{ lineHeight: '1.6' }}>
                I innovate at the intersection of{' '}
                <span className="font-semibold gradient-text">Computer Vision</span>,{' '}
                <span className="font-semibold gradient-text">Deep Learning</span>, and{' '}
                <span className="font-semibold gradient-text">3D Graphics</span>, bridging
                research and real‑world products. My current focus: {' '}
                <span className="font-semibold gradient-text"> 3D Generative Models </span>
                powering{' '}
                <span className="font-semibold gradient-text">Virtual &amp; Mixed Reality</span>{' '}
                experiences for the automotive domain. Currently driving spatial‑AI initiatives at{' '}
                <span className="font-semibold text-primary">Volkswagen&nbsp;AG</span> in Munich.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="glass rounded-2xl p-6 mb-6 backdrop-blur-xl"
            >
              <p className="text-lg text-gray-700" style={{ lineHeight: '1.6' }}>
                I thrive on <span className="font-semibold gradient-text">technical depth</span>
                —from understanding the fundamentals of Transformers, CNNs, backpropagation, to  <span className="font-semibold text-primary">CUDA</span>{' '}
                kernels and how they accelerate the key behind the magic of Deep Learning models: a matrix multiplication. In
                2023‑24 I created <span className="font-semibold gradient-text">CWFA</span> with{' '}
                <span className="font-semibold text-primary">NVIDIA</span> under the supervision of Dr. Jose M. Alvarez, improving the robustness of segmentation transformers on
                out‑of‑distribution data.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="glass rounded-2xl p-6 backdrop-blur-xl"
            >
              <p className="text-lg text-gray-700" style={{ lineHeight: '1.6' }}>
                On the product side, I led Computer Vision for the{' '}
                <span className="font-semibold text-primary">CUPRA Immersive App</span>, enabling customers to
                configure life‑size 3D cars on the{' '}
                <span className="font-semibold gradient-text">Apple&nbsp;Vision&nbsp;Pro </span>. This App is currently available on the Apple Store, and in Madrid and Barcelona CUPRAs showrooms. Over the last years I have learnt to prioritize{' '}
                <span className="font-semibold text-primary">user experience</span>,{' '}
                <span className="font-semibold gradient-text">scalability</span>, and measurable impact—always
                exploring the state-of-the art technologies.
              </p>
            </motion.div>
          </div>

          <div className="md:w-1/3 md:pl-12 flex items-center justify-center">
            <motion.div
              variants={imageVariants}
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-2xl blur-2xl"></div>
              <div className="relative w-64 overflow-hidden rounded-2xl shadow-2xl glass">
                <img
                  src={`${process.env.PUBLIC_URL}/images/profile_image.JPG`}
                  alt="Portrait"
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
