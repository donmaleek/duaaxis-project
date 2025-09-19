import React, { useState, useEffect } from 'react';

const Stats = () => {
  const [animatedValues, setAnimatedValues] = useState({
    energy: 0,
    uptime: 0,
    roi: 0,
    co2: 0,
    energyGenerated: 0,
    costSavings: 0
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          animateStats();
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('stats-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const animateStats = () => {
    const duration = 2000; // ms
    const steps = 60;
    const interval = duration / steps;

    const statsToAnimate = {
      energy: 45,
      uptime: 99.5,
      roi: 40,
      co2: 2450,
      energyGenerated: 6.5,
      costSavings: 780
    };

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep += 1;
      const progress = currentStep / steps;

      setAnimatedValues({
        energy: Math.floor(statsToAnimate.energy * progress),
        uptime: Math.floor(statsToAnimate.uptime * progress),
        roi: Math.floor(statsToAnimate.roi * progress),
        co2: Math.floor(statsToAnimate.co2 * progress),
        energyGenerated: (statsToAnimate.energyGenerated * progress).toFixed(1),
        costSavings: Math.floor(statsToAnimate.costSavings * progress)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setAnimatedValues(statsToAnimate);
      }
    }, interval);
  };

  const statsData = [
    {
      id: 1,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      value: `${animatedValues.energy}%`,
      label: 'More Energy',
      description: 'Compared to fixed solar panel installations',
      color: 'from-primary-500 to-primary-600'
    },
    {
      id: 2,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      value: `${animatedValues.uptime}%`,
      label: 'System Uptime',
      description: 'Reliable performance in all weather conditions',
      color: 'from-green-500 to-green-600'
    },
    {
      id: 3,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      value: `${animatedValues.roi}%`,
      label: 'Faster ROI',
      description: 'Return on investment compared to fixed systems',
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 4,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
        </svg>
      ),
      value: 'IoT',
      label: 'Smart Connected',
      description: 'Real-time monitoring and AI optimization',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const comparisonData = [
    { label: 'Energy Production', duaaxis: 100, fixed: 69, unit: '%' },
    { label: 'Efficiency in Cloudy Conditions', duaaxis: 85, fixed: 60, unit: '%' },
    { label: 'Winter Performance', duaaxis: 92, fixed: 55, unit: '%' },
    { label: 'Return on Investment (5 years)', duaaxis: 142, fixed: 100, unit: '%' },
  ];

  return (
    <section id="stats-section" className="py-20 lg:py-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className={`transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <span className="inline-block bg-gradient-to-r from-primary-500 to-secondary-500 text-white text-sm font-semibold py-2 px-4 rounded-full mb-4">
              Superior Performance
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">DuaAxis Outperforms</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our dual-axis technology delivers unmatched energy production and reliability compared to traditional solar solutions
            </p>
          </div>
        </div>

        {/* Main Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {statsData.map((stat) => (
            <div 
              key={stat.id} 
              className={`bg-white rounded-2xl shadow-xl p-6 border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${stat.id * 100}ms` }}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r rounded-2xl mb-4 mx-auto">
                <div className="text-white">
                  {stat.icon}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{stat.label}</h3>
                <p className="text-gray-600 text-sm">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Performance Comparison Section */}
        <div className={`mb-16 transform transition-all duration-700 delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-12">
            Performance Comparison: <span className="text-primary-600">DuaAxis</span> vs <span className="text-gray-400">Fixed Panels</span>
          </h3>
          
          <div className="space-y-6">
            {comparisonData.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-semibold text-gray-900">{item.label}</span>
                  <span className="bg-primary-100 text-primary-800 text-sm font-medium px-3 py-1 rounded-full">
                    +{Math.round((item.duaaxis / item.fixed - 1) * 100)}% better
                  </span>
                </div>
                
                <div className="space-y-3">
                  {/* DuaAxis Bar */}
                  <div className="flex items-center">
                    <span className="w-24 text-sm font-medium text-primary-600">DuaAxis</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-4 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary-500 to-primary-600 rounded-full transition-all duration-1000"
                        style={{ width: isVisible ? `${item.duaaxis}%` : '0%' }}
                      ></div>
                    </div>
                    <span className="w-16 text-sm font-medium text-primary-600 text-right">
                      {isVisible ? item.duaaxis : 0}{item.unit}
                    </span>
                  </div>
                  
                  {/* Fixed Panel Bar */}
                  <div className="flex items-center">
                    <span className="w-24 text-sm font-medium text-gray-500">Fixed</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-4 overflow-hidden">
                      <div 
                        className="h-full bg-gray-400 rounded-full transition-all duration-1000"
                        style={{ width: isVisible ? `${item.fixed}%` : '0%' }}
                      ></div>
                    </div>
                    <span className="w-16 text-sm font-medium text-gray-500 text-right">
                      {isVisible ? item.fixed : 0}{item.unit}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Environmental Impact Section */}
        <div className={`bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 lg:p-12 text-white transform transition-all duration-700 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h3 className="text-2xl lg:text-3xl font-bold text-center mb-12">
            Environmental Impact <span className="text-secondary-400">(Per 100 Systems)</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* CO2 Reduction */}
            <div className="text-center">
              <div className="mx-auto bg-white/20 backdrop-blur-sm rounded-2xl p-5 w-20 h-20 flex items-center justify-center mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h4 className="text-2xl lg:text-3xl font-bold mb-2">{animatedValues.co2.toLocaleString()} tons</h4>
              <p className="text-primary-100">CO₂ emissions reduced annually</p>
            </div>
            
            {/* Energy Generated */}
            <div className="text-center">
              <div className="mx-auto bg-white/20 backdrop-blur-sm rounded-2xl p-5 w-20 h-20 flex items-center justify-center mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h4 className="text-2xl lg:text-3xl font-bold mb-2">{animatedValues.energyGenerated} million kWh</h4>
              <p className="text-primary-100">Clean energy generated annually</p>
            </div>
            
            {/* Cost Savings */}
            <div className="text-center">
              <div className="mx-auto bg-white/20 backdrop-blur-sm rounded-2xl p-5 w-20 h-20 flex items-center justify-center mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14v6m-3-3h6M6 10h2a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6a2 2 0 012-2zm10-4a2 2 0 11-4 0 2 2 0 014 0zM4 6a2 2 0 100 4h16a2 2 0 100-4H4z" />
                </svg>
              </div>
              <h4 className="text-2xl lg:text-3xl font-bold mb-2">${animatedValues.costSavings.toLocaleString()}</h4>
              <p className="text-primary-100">Energy cost savings annually</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className={`text-center mt-16 transform transition-all duration-700 delay-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Ready to Maximize Your Solar Investment?</h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied customers who are already benefiting from DuaAxis superior performance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-4 px-8 rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
              Get Performance Report
            </button>
            <button className="border border-primary-600 text-primary-600 hover:bg-primary-50 font-medium py-4 px-8 rounded-full transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;