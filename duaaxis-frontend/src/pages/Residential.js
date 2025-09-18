import React from 'react';
import { Card, Button } from '../components/Ui';

const Residential = () => {
  const features = [
    {
      title: "Maximum Energy Production",
      description: "Generate up to 45% more energy than fixed panels from the same roof space",
      icon: "⚡"
    },
    {
      title: "Aesthetic Design",
      description: "Sleek, low-profile design that complements your home's architecture",
      icon: "🏡"
    },
    {
      title: "Smart Monitoring",
      description: "Track your energy production and savings from your smartphone",
      icon: "📊"
    },
    {
      title: "Weather Resilient",
      description: "Built to withstand extreme weather conditions with automatic stowing",
      icon: "🌧️"
    }
  ];

  const savings = [
    { year: "Year 1", savings: "$2,400" },
    { year: "Year 5", savings: "$12,800" },
    { year: "Year 10", savings: "$28,500" },
    { year: "Year 25", savings: "$89,200" }
  ];

  return (
    <div className="min-h-screen pt-16">

      
      {/* Hero Section */}
      <section className="bg-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-blue-900 mb-4">Residential Solutions</h1>
            <p className="text-xl text-blue-700 max-w-3xl mx-auto">
              Power your home with the most efficient residential solar technology available
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose DuaAxis for Your Home</h2>
          
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

      {/* Savings Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Estimated Energy Savings</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {savings.map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="text-2xl font-bold text-blue-600 mb-2">{item.year}</div>
                  <div className="text-xl font-semibold">{item.savings}</div>
                  <div className="text-sm text-gray-600 mt-2">Cumulative Savings</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of homeowners who are saving money and reducing their carbon footprint with DuaAxis
          </p>
          <div className="space-x-4">
            <Button variant="primary" size="large">Get a Free Quote</Button>
            <Button variant="outline" size="large">View Gallery</Button>
          </div>
        </div>
      </section>


    </div>
  );
};

export default Residential;