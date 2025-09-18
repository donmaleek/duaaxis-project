import React from 'react';
import { Card } from '../components/Ui';

const Commercial = () => {
  const applications = [
    {
      title: "Office Buildings",
      description: "Reduce operating costs and demonstrate sustainability leadership",
      icon: "🏢"
    },
    {
      title: "Retail Centers",
      description: "Lower energy costs for tenants and attract eco-conscious customers",
      icon: "🛍️"
    },
    {
      title: "Manufacturing",
      description: "Power energy-intensive operations with predictable, low-cost energy",
      icon: "🏭"
    },
    {
      title: "Warehouses",
      description: "Utilize large roof spaces for maximum energy generation",
      icon: "📦"
    }
  ];

  const benefits = [
    { metric: "25-40%", description: "Reduction in energy costs" },
    { metric: "5-8 years", description: "Typical ROI period" },
    { metric: "30%+", description: "ITC tax credit eligibility" },
    { metric: "100%", description: "Scalable to any size operation" }
  ];

  return (
    <div className="min-h-screen pt-16">

      
      {/* Hero Section */}
      <section className="bg-indigo-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-indigo-900 mb-4">Commercial Solutions</h1>
            <p className="text-xl text-indigo-700 max-w-3xl mx-auto">
              Lower operating costs and enhance your sustainability profile with commercial-grade solar tracking
            </p>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Commercial Applications</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applications.map((app, index) => (
              <Card key={index} variant="elevated" padding="medium" className="text-center">
                <div className="text-4xl mb-4">{app.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{app.title}</h3>
                <p className="text-gray-600">{app.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Commercial Benefits</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-indigo-600 mb-2">{benefit.metric}</div>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Analysis */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card variant="elevated" padding="large">
            <h2 className="text-2xl font-bold mb-6">Financial Analysis: 500 kW System</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Investment Overview</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>System Size:</span>
                    <span className="font-semibold">500 kW</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Total Investment:</span>
                    <span className="font-semibold">$1.25M</span>
                  </div>
                  <div className="flex justify-between">
                    <span>ITC Tax Credit:</span>
                    <span className="font-semibold">$375,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Net Cost:</span>
                    <span className="font-semibold">$875,000</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Annual Benefits</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Energy Production:</span>
                    <span className="font-semibold">900,000 kWh</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Energy Savings:</span>
                    <span className="font-semibold">$108,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>SREC Income:</span>
                    <span className="font-semibold">$45,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Total Annual Benefit:</span>
                    <span className="font-semibold">$153,000</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-sm text-gray-600">Return on Investment</div>
                  <div className="text-2xl font-bold text-green-600">5.7 years</div>
                </div>
                <button className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700">
                  Download Full Report
                </button>
              </div>
            </div>
          </Card>
        </div>
      </section>


    </div>
  );
};

export default Commercial;