import React from 'react';

const Hero = () => {
  return (
    <header className="relative h-[90vh] flex items-center">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/duaaxis2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          {/* Left Side */}
          <div className="md:w-1/2 text-white">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              <span className="block">Maximize Solar Energy</span>
              <span className="block text-primary-400">With Dual-Axis Tracking</span>
            </h1>
            <p className="mt-3 text-base sm:mt-5 sm:text-lg sm:max-w-xl md:mt-5 md:text-xl text-gray-200">
              DuaAxis solar tracking systems increase energy production by up to 45% compared to fixed installations. 
              Our IoT-enabled technology ensures optimal performance in any condition.
            </p>
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row sm:space-x-4">
              <a
                href="#contact"
                className="mb-3 sm:mb-0 inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                Get a Quote
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
