import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/1098982/pexels-photo-1098982.jpeg?auto=compress&cs=tinysrgb&w=1920')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-2"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            <span className="block">Once you choose</span>
            <span className="block">Solutions, anything</span>
            <span className="block">is possible.</span>
          </h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-8"
          >
            <a 
              href="#contact" 
              className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition duration-300 transform hover:scale-105"
            >
              WORK WITH US
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll down indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-1 h-10 rounded-full bg-white bg-opacity-50 mx-auto"></div>
      </motion.div>
    </section>
  );
};

export default Hero;