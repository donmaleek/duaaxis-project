import React, { useState, useEffect } from 'react';
import { Card } from '../components/Ui';

const Agricultural = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentFeature, setCurrentFeature] = useState(0);

  useEffect(() => {
    // Auto-rotate features
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      title: "Maximize Land Usage",
      description: "Generate income from unused land while maintaining agricultural operations with our agrivoltaic solutions",
      icon: "🌱",
      details: "Dual-axis trackers allow for optimal space utilization, enabling both energy production and agriculture on the same land."
    },
    {
      title: "Water Pumping",
      description: "Power irrigation systems with clean solar energy, reducing operational costs and carbon footprint",
      icon: "💧",
      details: "Our systems provide reliable power for water pumps even in remote locations, eliminating diesel generator dependency."
    },
    {
      title: "Crop Protection",
      description: "Provide shade for sensitive crops while generating electricity and reducing water evaporation",
      icon: "🛡️",
      details: "Strategic placement of solar trackers creates microclimates that protect crops from extreme weather conditions."
    },
    {
      title: "Remote Monitoring",
      description: "Monitor and control systems from anywhere with our advanced IoT platform and predictive analytics",
      icon: "📱",
      details: "Real-time performance data, automated alerts, and remote troubleshooting capabilities for optimal system performance."
    }
  ];

  const benefits = [
    { metric: "40-50%", description: "Higher energy yield compared to fixed systems", icon: "📈" },
    { metric: "30%", description: "Reduction in irrigation energy costs", icon: "💸" },
    { metric: "5-7 years", description: "Return on investment period", icon: "⏱️" },
    { metric: "25+ years", description: "System lifespan with minimal maintenance", icon: "🔄" }
  ];

  const caseStudies = [
    {
      name: "Green Valley Farms",
      location: "Cairo, Egypt",
      size: "200-acre property",
      results: {
        capacity: "1.2 MW",
        production: "1,800 MWh",
        savings: "$120,000/year",
        ROI: "6.2 years"
      }
    },
    {
      name: "Nile Delta Agribusiness",
      location: "Nile Delta, Egypt",
      size: "500-acre property",
      results: {
        capacity: "2.8 MW",
        production: "4,200 MWh",
        savings: "$280,000/year",
        ROI: "5.8 years"
      }
    }
  ];

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

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section with Video Background */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/duaaxis1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Agricultural <span className="text-primary-400">Solutions</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your agricultural operations with advanced dual-axis solar tracking technology designed specifically for farming applications in Egypt's climate
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
              Request Consultation
            </button>
            <button className="border border-white text-white hover:bg-white/10 font-medium py-3 px-8 rounded-full transition-all duration-300">
              Download Brochure
            </button>
          </div>
        </div>

        {/* Video control button */}
        <button 
          onClick={toggleVideoPlayback}
          className="absolute bottom-6 right-6 z-20 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition-colors"
          aria-label={isPlaying ? "Pause video" : "Play video"}
        >
          {isPlaying ? "⏸️" : "▶️"}
        </button>

        {/* Scroll indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-primary-600 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl md:text-3xl font-bold">500+</div>
              <div className="text-sm md:text-base opacity-90">Agricultural Installations</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold">95%</div>
              <div className="text-sm md:text-base opacity-90">Uptime Guarantee</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold">24/7</div>
              <div className="text-sm md:text-base opacity-90">Remote Monitoring</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold">10</div>
              <div className="text-sm md:text-base opacity-90">Years Warranty</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Designed for <span className="text-primary-600">Farming Applications</span></h2>
            <p className="text-gray-600 text-lg">
              Our dual-axis solar tracking systems are specifically engineered to address the unique challenges of agricultural energy needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Feature showcase */}
            <div className="relative">
              <div className="bg-gradient-to-br from-primary-50 to-green-50 rounded-2xl p-8 lg:p-12 shadow-lg">
                <div className="text-6xl mb-6 text-center">{features[currentFeature].icon}</div>
                <h3 className="text-2xl font-bold text-center mb-4 text-gray-800">{features[currentFeature].title}</h3>
                <p className="text-gray-700 text-center">{features[currentFeature].details}</p>
              </div>
              
              {/* Feature navigation dots */}
              <div className="flex justify-center mt-6 space-x-2">
                {features.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentFeature(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentFeature ? 'bg-primary-600 w-8' : 'bg-gray-300'
                    }`}
                    aria-label={`View feature ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            
            {/* Feature grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className={`p-6 rounded-xl border transition-all duration-300 cursor-pointer ${
                    index === currentFeature 
                      ? 'border-primary-500 bg-primary-50 shadow-md transform -translate-y-1' 
                      : 'border-gray-200 hover:border-primary-300'
                  }`}
                  onClick={() => setCurrentFeature(index)}
                >
                  <div className="text-3xl mb-3">{feature.icon}</div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Proven <span className="text-primary-600">Results</span> for Agriculture</h2>
            <p className="text-gray-600 text-lg">
              Our dual-axis tracking technology delivers measurable benefits for agricultural operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <div className="text-3xl font-bold text-primary-600 mb-2">{benefit.metric}</div>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
          
          {/* Additional context */}
          <div className="mt-16 bg-white rounded-2xl p-8 shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-primary-600 text-2xl font-bold mb-2">Adaptable</div>
                <p className="text-gray-600">Custom solutions for different crop types and farm layouts</p>
              </div>
              <div>
                <div className="text-primary-600 text-2xl font-bold mb-2">Reliable</div>
                <p className="text-gray-600">Proven performance in Egypt's harsh climate conditions</p>
              </div>
              <div>
                <div className="text-primary-600 text-2xl font-bold mb-2">Sustainable</div>
                <p className="text-gray-600">Reduce carbon footprint while increasing profitability</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Success <span className="text-primary-600">Stories</span></h2>
            <p className="text-gray-600 text-lg">
              Real-world examples of how DuaAxis technology is transforming agricultural operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} variant="elevated" padding="large" className="hover:shadow-xl transition-shadow duration-300">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-xl font-bold">{study.name}</h3>
                    <p className="text-gray-600">{study.location} • {study.size}</p>
                  </div>
                  <span className="bg-primary-100 text-primary-800 text-xs font-medium px-3 py-1 rounded-full">
                    Case Study
                  </span>
                </div>
                
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-800">{study.results.capacity}</div>
                    <div className="text-green-600 text-sm">System Capacity</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-800">{study.results.production}</div>
                    <div className="text-blue-600 text-sm">Annual Production</div>
                  </div>
                  <div className="text-center p-4 bg-amber-50 rounded-lg">
                    <div className="text-2xl font-bold text-amber-800">{study.results.savings}</div>
                    <div className="text-amber-600 text-sm">Annual Savings</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-800">{study.results.ROI}</div>
                    <div className="text-purple-600 text-sm">Return on Investment</div>
                  </div>
                </div>
                
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>45-50% more energy than fixed systems</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Complete irrigation system powered by solar</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Remote monitoring and maintenance</span>
                  </li>
                </ul>
                
                <button className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-lg transition-colors">
                  Read Full Case Study
                </button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Agricultural Operations?</h2>
          <p className="text-primary-100 text-lg mb-8 max-w-3xl mx-auto">
            Join the growing number of Egyptian farms that are increasing profitability while reducing their environmental impact
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
              Schedule a Consultation
            </button>
            <button className="border border-white text-white hover:bg-white/10 font-medium py-3 px-8 rounded-full transition-all duration-300">
              Contact Our Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Agricultural;