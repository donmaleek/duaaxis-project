import React from 'react';
import { Card } from '../components/Ui';

const Agricultural = () => {
  const features = [
    {
      title: "Maximize Land Usage",
      description: "Generate income from unused land while maintaining agricultural operations",
      icon: "🌱"
    },
    {
      title: "Water Pumping",
      description: "Power irrigation systems with clean solar energy, reducing operational costs",
      icon: "💧"
    },
    {
      title: "Crop Protection",
      description: "Provide shade for sensitive crops while generating electricity",
      icon: "🛡️"
    },
    {
      title: "Remote Monitoring",
      description: "Monitor and control systems from anywhere with our IoT platform",
      icon: "📱"
    }
  ];

  const benefits = [
    { metric: "40-50%", description: "Higher energy yield compared to fixed systems" },
    { metric: "30%", description: "Reduction in irrigation energy costs" },
    { metric: "5-7 years", description: "Return on investment period" },
    { metric: "25+ years", description: "System lifespan" }
  ];

  return (
    <div className="min-h-screen pt-16">
     
      
      {/* Hero Section */}
      <section className="bg-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-green-900 mb-4">Agricultural Solutions</h1>
            <p className="text-xl text-green-700 max-w-3xl mx-auto">
              Transform your agricultural operations with dual-axis solar tracking technology designed for farming applications
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Designed for Farming Applications</h2>
          
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

      {/* Benefits Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Proven Results for Agriculture</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">{benefit.metric}</div>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card variant="elevated" padding="large">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Green Valley Farms Case Study</h2>
                <p className="text-gray-600 mb-4">
                  Green Valley Farms installed 50 DuaAxis trackers across their 200-acre property, 
                  achieving remarkable results in both energy production and agricultural benefits.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>45% more energy than fixed systems</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Complete irrigation system powered by solar</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>6.2-year return on investment</span>
                  </li>
                </ul>
              </div>
              <div className="bg-green-100 rounded-lg p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-800">1.2 MW</div>
                  <div className="text-green-600">Total System Capacity</div>
                  <div className="mt-4 text-2xl font-bold text-green-800">1,800 MWh</div>
                  <div className="text-green-600">Annual Energy Production</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>


    </div>
  );
};

export default Agricultural;