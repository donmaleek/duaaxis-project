import React from 'react';

const Hero = () => {
  return (
    <header className="hero-pattern pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Maximize Solar Energy</span>
              <span className="block text-primary-600">With Dual-Axis Tracking</span>
            </h1>
            <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl md:mt-5 md:text-xl">
              DuaAxis solar tracking systems increase energy production by up to 45% compared to fixed installations. Our IoT-enabled technology ensures optimal performance in any condition.
            </p>
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row sm:space-x-4">
              <a href="#contact" className="mb-3 sm:mb-0 inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                Get a Quote
              </a>
              <a href="#features" className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                Learn More
              </a>
            </div>
          </div>
          <div className="mt-8 md:mt-0 md:w-1/2">
            <div className="relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-64 w-64 bg-primary-200 rounded-full opacity-20 animate-pulse"></div>
              </div>
              <img className="relative rounded-lg shadow-xl" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect fill='%23f0f9ff' width='600' height='400'/%3E%3Cpath fill='%230ea5e9' fill-opacity='0.2' d='M300,200 L550,350 L550,50 Z'/%3E%3Ccircle fill='%23facc15' cx='300' cy='200' r='80'/%3E%3Cpath fill='%230284c7' d='M200,100 C250,50 450,50 500,100 L500,300 C450,350 250,350 200,300 Z'/%3E%3C/svg%3E" alt="DuaAxis Solar Tracker" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;