import React, { useState, useEffect } from 'react';
import { Card } from '../components/Ui';

const UtilityScale = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [currentFeature, setCurrentFeature] = useState(0);
  const [systemSize, setSystemSize] = useState(100); // MW

  useEffect(() => {
    // Auto-rotate features
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);

  const handleSystemSizeChange = (size) => {
    setSystemSize(size);
  };

  const calculateProjectEconomics = (size) => {
    const capacity = size; // MW
    const annualProduction = capacity * 2400; // MWh per MW
    const revenue = annualProduction * 45; // $45 per MWh
    const capex = capacity * 1.2; // $1.2M per MW
    const opex = capacity * 15; // $15k per MW per year
    const netRevenue = revenue - opex;
    const paybackPeriod = capex / netRevenue;

    return {
      capacity: `${capacity} MW`,
      annualProduction: `${(annualProduction / 1000).toFixed(1)} GWh`,
      revenue: `$${(revenue / 1000000).toFixed(1)}M`,
      capex: `$${capex.toFixed(1)}M`,
      opex: `$${opex.toFixed(1)}K/year`,
      paybackPeriod: `${paybackPeriod.toFixed(1)} years`
    };
  };

  const economics = calculateProjectEconomics(systemSize);

  const features = [
    {
      title: "Massive Scale Deployment",
      description: "Deploy systems from 1MW to 500MW+ with consistent performance and centralized management",
      icon: "🌍",
      details: "Our modular design allows for seamless scaling from small community projects to massive utility-scale solar farms with thousands of trackers."
    },
    {
      title: "Grid Stability & Integration",
      description: "Provide predictable, reliable power to the electrical grid with advanced grid-forming capabilities",
      icon: "🔌",
      details: "Smart inverters and advanced control systems ensure stable grid integration even during fluctuating weather conditions."
    },
    {
      title: "Lowest LCOE",
      description: "Achieve the lowest Levelized Cost of Energy in the industry through superior efficiency",
      icon: "💰",
      details: "45% higher energy production compared to fixed-tilt systems translates to significantly lower lifetime costs per kWh generated."
    },
    {
      title: "Centralized Management",
      description: "Manage thousands of trackers from a single dashboard with predictive maintenance",
      icon: "📊",
      details: "Our cloud-based monitoring platform provides real-time analytics, performance tracking, and predictive maintenance alerts."
    },
    {
      title: "Robust Durability",
      description: "Engineered for harsh environments with 25+ year design life and minimal maintenance",
      icon: "⚡",
      details: "Military-grade components and weather-resistant design ensure reliable operation in extreme desert conditions and harsh weather."
    },
    {
      title: "Smart Tracking Algorithms",
      description: "Advanced sun-tracking with weather adaptation and soiling mitigation features",
      icon: "🤖",
      details: "AI-powered tracking algorithms optimize energy capture while adapting to weather conditions and minimizing soiling losses."
    }
  ];

  const projects = [
    {
      name: "Nile Delta Solar Park",
      capacity: "150 MW",
      location: "Delta Region, Egypt",
      production: "360 GWh/year",
      completion: "2023",
      impact: "Powers 150,000 homes annually",
      co2: "200,000 tons CO2 avoided",
      image: "/project-nile.jpg"
    },
    {
      name: "Red Sea Energy Farm",
      capacity: "200 MW",
      location: "Eastern Desert, Egypt",
      production: "480 GWh/year",
      completion: "2024",
      impact: "Powers 200,000 homes annually",
      co2: "270,000 tons CO2 avoided",
      image: "/project-redsea.jpg"
    },
    {
      name: "Western Desert Solar Array",
      capacity: "500 MW",
      location: "Western Desert, Egypt",
      production: "1.2 TWh/year",
      completion: "2025",
      impact: "Powers 500,000 homes annually",
      co2: "675,000 tons CO2 avoided",
      image: "/project-western.jpg"
    }
  ];

  const systemSizes = [
    { size: 10, label: "Community Scale", description: "10-50 MW" },
    { size: 100, label: "Utility Scale", description: "50-200 MW" },
    { size: 250, label: "Large Scale", description: "200-500 MW" },
    { size: 500, label: "Mega Scale", description: "500+ MW" }
  ];

  const comparisonData = {
    duaaxis: {
      production: "2.4 GWh/MW/year",
      lcoe: "$0.028/kWh",
      efficiency: "98%",
      landUse: "4 acres/MW"
    },
    fixedTilt: {
      production: "1.65 GWh/MW/year",
      lcoe: "$0.036/kWh",
      efficiency: "92%",
      landUse: "5 acres/MW"
    },
    singleAxis: {
      production: "1.9 GWh/MW/year",
      lcoe: "$0.032/kWh",
      efficiency: "95%",
      landUse: "4.5 acres/MW"
    }
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-20 lg:py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Utility Scale <span className="text-secondary-400">Solutions</span></h1>
            <p className="text-xl md:text-2xl text-primary-100 max-w-4xl mx-auto mb-8 leading-relaxed">
              Powering Egypt's future with utility-scale solar farms that deliver maximum energy yield, reliability, and return on investment
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
                Request Proposal
              </button>
              <button className="border border-white text-white hover:bg-white/10 font-medium py-3 px-8 rounded-full transition-all duration-300">
                Download White Paper
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-primary-600 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl md:text-3xl font-bold">2.5+ GW</div>
              <div className="text-sm md:text-base opacity-90">Total Capacity Installed</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold">45%</div>
              <div className="text-sm md:text-base opacity-90">More Efficient</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold">$0.028</div>
              <div className="text-sm md:text-base opacity-90">LCOE per kWh</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold">25+</div>
              <div className="text-sm md:text-base opacity-90">Year Warranty</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Engineered for <span className="text-primary-600">Utility Scale</span></h2>
            <p className="text-gray-600 text-lg">
              Advanced dual-axis technology designed specifically for large-scale solar deployments in Egypt's unique climate
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Feature showcase */}
            <div className="relative">
              <div className="bg-gradient-to-br from-primary-50 to-orange-50 rounded-2xl p-8 lg:p-12 shadow-lg">
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

      {/* Economic Calculator Section */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Project <span className="text-primary-600">Economics</span></h2>
            <p className="text-gray-600 text-lg">
              Calculate the financial performance of your utility-scale solar project
            </p>
          </div>

          <Card variant="elevated" padding="large" className="mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* System Size Selector */}
              <div>
                <h3 className="text-xl font-semibold mb-6">Select Project Scale</h3>
                <div className="grid grid-cols-2 gap-4">
                  {systemSizes.map((system, index) => (
                    <div
                      key={index}
                      onClick={() => handleSystemSizeChange(system.size)}
                      className={`p-4 border rounded-lg text-center cursor-pointer transition-all ${
                        systemSize === system.size
                          ? 'border-primary-500 bg-primary-50 shadow-md'
                          : 'border-gray-200 hover:border-primary-300'
                      }`}
                    >
                      <div className="text-2xl font-bold text-primary-600">{system.size}MW</div>
                      <div className="text-sm text-gray-600">{system.label}</div>
                      <div className="text-xs text-gray-500 mt-2">{system.description}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Economics Display */}
              <div>
                <h3 className="text-xl font-semibold mb-6">Project Economics</h3>
                <div className="bg-primary-50 rounded-xl p-6 mb-6">
                  <div className="text-center mb-4">
                    <div className="text-sm text-gray-600">Selected Scale</div>
                    <div className="text-2xl font-bold text-primary-600">{economics.capacity}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm text-gray-600">Annual Production</div>
                      <div className="font-semibold">{economics.annualProduction}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Annual Revenue</div>
                      <div className="font-semibold">{economics.revenue}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">CAPEX</div>
                      <div className="font-semibold">{economics.capex}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">OPEX</div>
                      <div className="font-semibold">{economics.opex}</div>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-lg font-semibold text-gray-600 mb-2">Payback Period</div>
                  <div className="text-3xl font-bold text-primary-600">{economics.paybackPeriod}</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Technology Comparison */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technology <span className="text-primary-600">Comparison</span></h2>
            <p className="text-gray-600 text-lg">
              Why dual-axis tracking outperforms other solar technologies for utility-scale applications
            </p>
          </div>

          <Card variant="elevated" padding="large">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-4 px-6 font-semibold">Metric</th>
                    <th className="text-center py-4 px-6 font-semibold bg-primary-50">DuaAxis Dual-Axis</th>
                    <th className="text-center py-4 px-6 font-semibold">Single-Axis Tracking</th>
                    <th className="text-center py-4 px-6 font-semibold">Fixed-Tilt</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { metric: "Energy Production", duaaxis: comparisonData.duaaxis.production, single: comparisonData.singleAxis.production, fixed: comparisonData.fixedTilt.production },
                    { metric: "LCOE", duaaxis: comparisonData.duaaxis.lcoe, single: comparisonData.singleAxis.lcoe, fixed: comparisonData.fixedTilt.lcoe },
                    { metric: "System Efficiency", duaaxis: comparisonData.duaaxis.efficiency, single: comparisonData.singleAxis.efficiency, fixed: comparisonData.fixedTilt.efficiency },
                    { metric: "Land Use", duaaxis: comparisonData.duaaxis.landUse, single: comparisonData.singleAxis.landUse, fixed: comparisonData.fixedTilt.landUse }
                  ].map((row, index) => (
                    <tr key={index} className="border-b border-gray-200 even:bg-gray-50">
                      <td className="py-4 px-6 font-medium">{row.metric}</td>
                      <td className="py-4 px-6 text-center bg-primary-50 font-semibold text-primary-600">{row.duaaxis}</td>
                      <td className="py-4 px-6 text-center">{row.single}</td>
                      <td className="py-4 px-6 text-center">{row.fixed}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="mt-8 p-6 bg-green-50 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">Key Advantage:</h4>
              <p className="text-green-700">
                DuaAxis dual-axis tracking delivers 45% more energy than fixed-tilt systems and 25% more than single-axis trackers, 
                resulting in the lowest LCOE and highest return on investment for utility-scale projects.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Projects Section */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured <span className="text-primary-600">Projects</span></h2>
            <p className="text-gray-600 text-lg">
              Large-scale solar farms powered by DuaAxis technology across Egypt and the region
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} variant="elevated" padding="large" className="hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg mb-6 flex items-center justify-center text-white text-6xl">
                  {project.image ? "📷" : "☀️"}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{project.name}</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Capacity:</span>
                    <span className="font-semibold">{project.capacity}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Location:</span>
                    <span className="font-semibold">{project.location}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Production:</span>
                    <span className="font-semibold">{project.production}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Completed:</span>
                    <span className="font-semibold">{project.completion}</span>
                  </div>
                </div>
                <div className="bg-primary-50 p-4 rounded-lg mb-4">
                  <p className="text-sm text-primary-700">{project.impact}</p>
                  <p className="text-sm text-primary-700 mt-1">{project.co2}</p>
                </div>
                <button className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 rounded-lg transition-colors duration-300">
                  View Case Study
                </button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Develop Your Utility-Scale Project?</h2>
          <p className="text-primary-100 text-lg mb-8 max-w-3xl mx-auto">
            Partner with DuaAxis for Egypt's most advanced utility-scale solar technology and comprehensive project development support
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
              Request Developer Kit
            </button>
            <button className="border border-white text-white hover:bg-white/10 font-medium py-3 px-8 rounded-full transition-all duration-300">
              Contact Our Team
            </button>
          </div>
          <p className="text-primary-200 text-sm mt-6">
            Comprehensive feasibility studies • EPC services • Financing support • O&M contracts
          </p>
        </div>
      </section>
    </div>
  );
};

export default UtilityScale;