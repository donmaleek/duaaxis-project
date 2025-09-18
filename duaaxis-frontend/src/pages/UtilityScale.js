import React from 'react';
import { Card } from '../components/Ui';

const UtilityScale = () => {
  const features = [
    {
      title: "Massive Scale",
      description: "Deploy systems from 1MW to 100MW+ with consistent performance",
      icon: "🌍"
    },
    {
      title: "Grid Stability",
      description: "Provide predictable, reliable power to the electrical grid",
      icon: "🔌"
    },
    {
      title: "Low LCOE",
      description: "Achieve the lowest Levelized Cost of Energy in the industry",
      icon: "💰"
    },
    {
      title: "Remote Management",
      description: "Manage thousands of trackers from a single dashboard",
      icon: "📊"
    }
  ];

  const projects = [
    {
      name: "Sun Valley Solar Farm",
      capacity: "50 MW",
      location: "Nevada, USA",
      production: "120 GWh/year"
    },
    {
      name: "Desert Sun Project",
      capacity: "75 MW",
      location: "Arizona, USA",
      production: "180 GWh/year"
    },
    {
      name: "Prairie Light Farm",
      capacity: "100 MW",
      location: "Texas, USA",
      production: "240 GWh/year"
    }
  ];

  return (
    <div className="min-h-screen pt-16">

      
      {/* Hero Section */}
      <section className="bg-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-orange-900 mb-4">Utility Scale Solutions</h1>
            <p className="text-xl text-orange-700 max-w-3xl mx-auto">
              Powering the future with utility-scale solar farms that deliver maximum energy yield and reliability
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Engineered for Utility Scale</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} variant="elevated" padding="medium" className="text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} variant="elevated" padding="large">
                <h3 className="text-xl font-semibold mb-4">{project.name}</h3>
                <div className="space-y-3">
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
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <button className="w-full bg-orange-600 text-white py-2 rounded-md hover:bg-orange-700">
                    View Case Study
                  </button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Scale Comparison */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card variant="elevated" padding="large">
            <h2 className="text-2xl font-bold mb-6">Why Dual-Axis for Utility Scale?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">DuaAxis vs Fixed-Tilt (100MW Farm)</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Annual Energy Production:</span>
                    <div>
                      <span className="font-semibold text-green-600">240 GWh</span>
                      <span className="text-sm text-gray-500 ml-2">(+45%)</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Land Usage Efficiency:</span>
                    <div>
                      <span className="font-semibold text-green-600">+30%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">LCOE:</span>
                    <div>
                      <span className="font-semibold text-green-600">$0.028/kWh</span>
                      <span className="text-sm text-gray-500 ml-2">(-22%)</span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Financial Impact</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Additional CAPEX:</span>
                    <span className="font-semibold">+15%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Additional Revenue:</span>
                    <span className="font-semibold text-green-600">+45%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">ROI Improvement:</span>
                    <span className="font-semibold text-green-600">+2.3 years</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>


    </div>
  );
};

export default UtilityScale;