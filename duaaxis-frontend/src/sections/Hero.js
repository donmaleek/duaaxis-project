import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentStat, setCurrentStat] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Set loaded state after component mounts
    setIsLoaded(true);
    
    // Auto-rotate statistics
    const statInterval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % statistics.length);
    }, 3000);
    
    return () => clearInterval(statInterval);
  }, []);

  const toggleVideoPlayback = () => {
    setIsPlaying(!isPlaying);
    const video = document.querySelector('video');
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
    }
  };

  const statistics = [
    { value: "45%", label: "More Energy Production" },
    { value: "98%", label: "System Uptime" },
    { value: "25+", label: "Years Warranty" },
    { value: "500+", label: "Installations" }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="relative h-screen flex items-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        onCanPlayThrough={() => setIsLoaded(true)}
      >
        <source src="/duaaxis2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Side - Text Content */}
          <div className="lg:w-1/2 text-white text-center lg:text-left">
            <div className={`transform transition-all duration-1000 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="block">Maximize Solar</span>
                <span className="block text-primary-400 bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                  Energy Production
                </span>
              </h1>
              
              <p className="mt-6 text-lg sm:text-xl text-gray-200 max-w-2xl leading-relaxed">
                DuaAxis advanced dual-axis solar tracking systems increase energy production by up to 45% compared to fixed installations. 
                Our IoT-enabled smart technology ensures optimal performance in Egypt's unique climate conditions.
              </p>

              {/* Statistics */}
              <div className="mt-8 grid grid-cols-2 gap-4 sm:flex sm:space-x-8">
                {statistics.map((stat, index) => (
                  <div 
                    key={index} 
                    className={`text-center transition-all duration-500 ${
                      index === currentStat ? 'scale-110' : 'scale-100 opacity-70'
                    }`}
                  >
                    <div className="text-2xl sm:text-3xl font-bold text-primary-400">{stat.value}</div>
                    <div className="text-sm sm:text-base text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="mt-10 flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 justify-center lg:justify-start">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-full shadow-lg bg-primary-600 hover:bg-primary-700 transform hover:-translate-y-1 transition-all duration-300"
                >
                  Get a Free Quote
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </button>
                
                <button
                  onClick={() => scrollToSection('features')}
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-full shadow-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transform hover:-translate-y-1 transition-all duration-300"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  Watch Demo
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - Visual Element */}
          <div className="lg:w-1/2 mt-12 lg:mt-0 lg:pl-12">
            <div className={`transform transition-all duration-1000 delay-300 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <div className="relative">
                {/* Main visual placeholder - would be replaced with actual graphic */}
                <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
                  <div className="aspect-video bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-2xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
                        </svg>
                      </div>
                      <p className="text-white font-semibold">DuaAxis Solar Tracker</p>
                      <p className="text-gray-300 text-sm">Real-time performance monitoring</p>
                    </div>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary-500/20 rounded-full backdrop-blur-sm border border-primary-400/30 animate-bounce"></div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-secondary-500/20 rounded-full backdrop-blur-sm border border-secondary-400/30 animate-bounce delay-1000"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Control */}
      <button 
        onClick={toggleVideoPlayback}
        className="absolute bottom-6 right-6 z-20 bg-black/5 text-white p-3 rounded-full hover:bg-black/50 transition-colors backdrop-blur-sm"
        aria-label={isPlaying ? "Pause video" : "Play video"}
      >
        {isPlaying ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        )}
      </button>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>

      {/* Loading State */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-black flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
        </div>
      )}
    </header>
  );
};

export default Hero;