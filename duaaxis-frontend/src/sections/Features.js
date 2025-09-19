import React, { useState, useEffect } from 'react';

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Animation trigger
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const features = [
    {
      id: 1,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
      title: "Dual-Axis Precision Tracking",
      description: "Our advanced trackers follow the sun's complete path both horizontally and vertically, maximizing solar exposure throughout the day and across all seasons for optimal energy capture.",
      stats: "45% more energy than fixed systems",
      details: "Patented algorithm ensures perfect sun alignment with 0.1° precision"
    },
    {
      id: 2,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
        </svg>
      ),
      title: "Smart IoT Integration",
      description: "Real-time monitoring and intelligent control through our advanced cloud platform. Receive instant alerts, optimize performance remotely, and integrate with smart grid systems.",
      stats: "24/7 remote monitoring & control",
      details: "5G-ready connectivity with edge computing capabilities"
    },
    {
      id: 3,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Weather Intelligence System",
      description: "Advanced sensors detect high winds, sandstorms, and extreme weather conditions, automatically moving to protective positions to prevent damage and ensure longevity.",
      stats: "Withstands 150 km/h winds",
      details: "AI-powered weather prediction and automatic safety protocols"
    },
    {
      id: 4,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      title: "Energy Storage Ready",
      description: "Seamless integration with leading battery storage systems to maximize energy independence, provide backup power, and enable smart energy management.",
      stats: "Works with all major battery brands",
      details: "Smart charging algorithms optimize battery life and performance"
    },
    {
      id: 5,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Maintenance Optimization",
      description: "Designed for minimal maintenance with self-diagnosing systems, remote troubleshooting, and easily replaceable components. Predictive maintenance alerts prevent downtime.",
      stats: "30% lower maintenance costs",
      details: "Self-cleaning coatings and remote diagnostics capabilities"
    },
    {
      id: 6,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Advanced Performance Analytics",
      description: "Comprehensive reporting and AI-driven analytics to monitor energy production, identify optimization opportunities, track savings, and measure environmental impact in real-time.",
      stats: "Real-time performance monitoring",
      details: "AI-powered insights and predictive performance optimization"
    }
  ];

  return (
    <section id="features" className="py-20 lg:py-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className={`transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <span className="inline-block bg-gradient-to-r from-primary-500 to-secondary-500 text-white text-sm font-semibold py-2 px-4 rounded-full mb-4 shadow-lg">
              Advanced Technology
            </span>
            <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-gray-900">
              Intelligent Solar <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">Tracking Features</span>
            </h2>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our dual-axis solar tracking systems combine precision engineering with artificial intelligence 
              to deliver unmatched performance and reliability in Egypt's challenging climate conditions.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`transform transition-all duration-500 hover:-translate-y-2 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div 
                className={`feature-card h-full p-8 rounded-2xl border border-gray-200 bg-white shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group ${
                  activeFeature === index ? 'ring-2 ring-primary-500 border-primary-200' : ''
                }`}
                onClick={() => setActiveFeature(index)}
                onMouseEnter={() => setActiveFeature(index)}
              >
                <div className="flex items-start space-x-6">
                  <div className="bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl p-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {feature.description}
                    </p>
                    <div className="bg-primary-50 rounded-lg p-4 border border-primary-100">
                      <div className="flex items-center">
                        <div className="bg-primary-500 rounded-full p-1 mr-3">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                        <span className="text-sm font-semibold text-primary-700">{feature.stats}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Spotlight */}
        <div className={`bg-gradient-to-r from-primary-50 to-secondary-50 rounded-3xl p-8 lg:p-12 border border-primary-100 transform transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {features[activeFeature].title}
              </h3>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                {features[activeFeature].details}
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-full transition-all duration-300 transform hover:-translate-y-1">
                  Learn More
                </button>
                <button className="border border-primary-600 text-primary-600 hover:bg-primary-50 font-medium py-3 px-6 rounded-full transition-all duration-300">
                  See Technical Specs
                </button>
              </div>
            </div>
            <div className="lg:text-right">
              <div className="inline-block bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-4xl font-bold text-primary-600 mb-2">
                  {features[activeFeature].stats.split(' ')[0]}
                </div>
                <div className="text-gray-600">
                  {features[activeFeature].stats.split(' ').slice(1).join(' ')}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
            { value: "45%", label: "More Energy Production" },
            { value: "98%", label: "System Uptime" },
            { value: "25+", label: "Years Warranty" },
            { value: "500+", label: "Installations" }
          ].map((stat, index) => (
            <div key={index} className="transform transition-all duration-500" style={{ transitionDelay: `${index * 100 + 500}ms` }}>
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                <div className="text-3xl font-bold text-primary-600 mb-2">{stat.value}</div>
                <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;