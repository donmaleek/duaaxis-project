import React, { useState, useEffect } from 'react';

const ProblemSolution = () => {
  const [activeTab, setActiveTab] = useState('problem');
  const [isVisible, setIsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({
    energyLoss: 0,
    efficiencyGain: 0,
    roiImprovement: 0
  });

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    
    // Animate statistics
    const animateStats = () => {
      let energyLoss = 0;
      let efficiencyGain = 0;
      let roiImprovement = 0;
      
      const interval = setInterval(() => {
        if (energyLoss < 45) energyLoss += 1;
        if (efficiencyGain < 45) efficiencyGain += 1;
        if (roiImprovement < 40) roiImprovement += 1;
        
        setAnimatedStats({
          energyLoss,
          efficiencyGain,
          roiImprovement
        });
        
        if (energyLoss >= 45 && efficiencyGain >= 45 && roiImprovement >= 40) {
          clearInterval(interval);
        }
      }, 30);
    };

    animateStats();
    
    return () => clearTimeout(timer);
  }, []);

  const problems = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: "Limited Sun Exposure",
      description: "Fixed panels only capture optimal sunlight for 3-4 hours per day, wasting precious energy potential during morning and evening hours.",
      impact: "Up to 45% energy loss"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      title: "Seasonal Inefficiency",
      description: "Fixed panels can't adjust to the sun's changing path across seasons, leading to significant energy loss during winter months.",
      impact: "25-30% seasonal variation"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      title: "Space Inefficiency",
      description: "Requires more panels and space to achieve the same energy output as tracking systems, increasing installation costs.",
      impact: "40% more space required"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Lower ROI",
      description: "Reduced energy production leads to longer payback periods and lower overall return on investment.",
      impact: "2-3 years longer payback"
    }
  ];

  const solutions = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Dual-Axis Precision Tracking",
      description: "Our systems follow the sun's complete path both horizontally and vertically, maximizing exposure from sunrise to sunset.",
      benefit: "+45% energy production"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "Smart AI Algorithms",
      description: "Advanced AI predicts weather patterns and optimizes positioning for maximum energy capture in any condition.",
      benefit: "AI-powered optimization"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      title: "Space Optimization",
      description: "Generate more energy from the same footprint, perfect for space-constrained installations.",
      benefit: "2x energy per square meter"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Faster ROI",
      description: "Increased energy production means quicker payback and higher lifetime returns on your investment.",
      benefit: "40% faster ROI"
    }
  ];

  return (
    <section id="problem" className="py-20 lg:py-28 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className={`transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-semibold py-2 px-4 rounded-full mb-4">
              The Solar Challenge
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Fixed Panels Waste <span className="bg-gradient-to-r from-secondary-400 to-accent-400 bg-clip-text text-transparent">45% of Solar Potential</span>
            </h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Traditional solar systems leave significant energy uncaptured. DuaAxis technology ensures you harness every possible ray of sunlight.
            </p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-1">
            {[
              { id: 'problem', label: 'The Problem' },
              { id: 'solution', label: 'Our Solution' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-8 py-3 rounded-xl text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-white text-primary-700 shadow-lg'
                    : 'text-white hover:text-primary-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Problem Side */}
          <div className={`transform transition-all duration-700 delay-100 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="bg-red-500 rounded-xl p-2 mr-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </span>
                Fixed Panel Limitations
              </h3>
              
              <div className="space-y-6">
                {problems.map((problem, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                    <div className="bg-red-500/20 rounded-xl p-3 flex-shrink-0">
                      <div className="text-red-400">
                        {problem.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white mb-2">{problem.title}</h4>
                      <p className="text-primary-200 text-sm mb-2">{problem.description}</p>
                      <span className="inline-block bg-red-500/20 text-red-300 text-xs font-medium px-3 py-1 rounded-full">
                        {problem.impact}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Solution Side */}
          <div className={`transform transition-all duration-700 delay-200 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="bg-green-500 rounded-xl p-2 mr-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                DuaAxis Solution
              </h3>
              
              <div className="space-y-6">
                {solutions.map((solution, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                    <div className="bg-green-500/20 rounded-xl p-3 flex-shrink-0">
                      <div className="text-green-400">
                        {solution.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white mb-2">{solution.title}</h4>
                      <p className="text-primary-200 text-sm mb-2">{solution.description}</p>
                      <span className="inline-block bg-green-500/20 text-green-300 text-xs font-medium px-3 py-1 rounded-full">
                        {solution.benefit}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Comparison */}
        <div className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mb-12 transform transition-all duration-700 delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h3 className="text-2xl font-bold text-white text-center mb-8">Performance Comparison</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-red-400 mb-2">
                {animatedStats.energyLoss}%
              </div>
              <div className="text-white font-semibold mb-2">Energy Wasted by Fixed Panels</div>
              <div className="text-primary-200 text-sm">Annual potential energy loss</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">
                +{animatedStats.efficiencyGain}%
              </div>
              <div className="text-white font-semibold mb-2">More Energy with DuaAxis</div>
              <div className="text-primary-200 text-sm">Compared to fixed systems</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">
                {animatedStats.roiImprovement}%
              </div>
              <div className="text-white font-semibold mb-2">Faster ROI</div>
              <div className="text-primary-200 text-sm">Improved return on investment</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className={`text-center transform transition-all duration-700 delay-400 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h3 className="text-2xl font-bold text-white mb-6">Ready to Maximize Your Solar Investment?</h3>
          <p className="text-xl text-primary-200 mb-8 max-w-2xl mx-auto">
            Stop leaving energy on the table. Our dual-axis technology ensures you capture every possible watt of solar power.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-700 hover:bg-gray-100 font-medium py-4 px-8 rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
              Get Your Free Energy Assessment
            </button>
            <button className="border border-white text-white hover:bg-white/10 font-medium py-4 px-8 rounded-full transition-all duration-300">
              View Case Studies
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;