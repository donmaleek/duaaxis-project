import React, { useState, useEffect } from 'react';
import { Card, Button } from '../components/Ui';

const Residential = () => {
  const [currentSystem, setCurrentSystem] = useState(5); // kW
  const [currentSavingsYear, setCurrentSavingsYear] = useState(1);
  const [currentFeature, setCurrentFeature] = useState(0);

  useEffect(() => {
    // Auto-rotate features
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);

  const handleSystemSizeChange = (size) => {
    setCurrentSystem(size);
  };

  const features = [
    {
      title: "Maximum Energy Production",
      description: "Generate up to 45% more energy than fixed panels from the same roof space with our dual-axis tracking technology",
      icon: "⚡",
      details: "Our advanced tracking system follows the sun throughout the day, maximizing energy capture from sunrise to sunset."
    },
    {
      title: "Aesthetic Design",
      description: "Sleek, low-profile design that complements your home's architecture without compromising efficiency",
      icon: "🏡",
      details: "Designed with homeowners in mind, our systems blend seamlessly with various architectural styles while maintaining optimal performance."
    },
    {
      title: "Smart Monitoring",
      description: "Track your energy production, consumption, and savings in real-time from your smartphone or computer",
      icon: "📊",
      details: "Our intuitive mobile app provides detailed analytics, alerts, and remote control capabilities for your solar system."
    },
    {
      title: "Weather Resilient",
      description: "Built to withstand extreme weather conditions with automatic stowing and advanced durability features",
      icon: "🌧️",
      details: "Advanced sensors automatically protect your system during harsh weather, ensuring longevity and consistent performance."
    },
    {
      title: "Battery Integration",
      description: "Seamlessly integrate with battery storage systems for energy independence and backup power",
      icon: "🔋",
      details: "Store excess energy for use during peak hours or power outages, maximizing your energy independence and savings."
    },
    {
      title: "Easy Maintenance",
      description: "Self-cleaning features and remote diagnostics minimize maintenance requirements",
      icon: "🛠️",
      details: "Our systems are designed for minimal maintenance with self-diagnostic capabilities and easy access for service when needed."
    }
  ];

  const systemSizes = [
    { size: 3, label: "Small Home", panels: "8-10", output: "360-450 kWh/month" },
    { size: 5, label: "Medium Home", panels: "14-16", output: "600-720 kWh/month" },
    { size: 7, label: "Large Home", panels: "20-22", output: "840-990 kWh/month" },
    { size: 10, label: "Estate", panels: "28-32", output: "1200-1440 kWh/month" }
  ];

  const calculateSavings = (systemSize, years) => {
    const baseSavings = systemSize * 120; // $120 monthly savings per kW
    const annualSavings = baseSavings * 12;
    const totalSavings = annualSavings * years;
    const inflationAdjusted = totalSavings * Math.pow(1.03, years); // 3% annual electricity inflation
    
    return {
      monthly: baseSavings.toLocaleString(),
      annual: annualSavings.toLocaleString(),
      total: Math.round(inflationAdjusted).toLocaleString()
    };
  };

  const savingsData = calculateSavings(currentSystem, currentSavingsYear);

  const testimonials = [
    {
      name: "Ahmed & Fatima",
      location: "Cairo, Egypt",
      system: "5.2kW System",
      quote: "Our electricity bills have reduced by 80% since installing DuaAxis. The tracking feature makes a noticeable difference in energy production.",
      savings: "$2,800 annual savings"
    },
    {
      name: "The Hassan Family",
      location: "Alexandria, Egypt",
      system: "7.5kW System",
      quote: "The smart monitoring app helps us optimize our energy usage. We love being able to track our production in real-time.",
      savings: "$4,200 annual savings"
    },
    {
      name: "Mohammed R.",
      location: "Giza, Egypt",
      system: "4.8kW System",
      quote: "Installation was quick and professional. The system looks great on our roof and our neighbors have been asking about it.",
      savings: "$3,100 annual savings"
    }
  ];

  const processSteps = [
    { step: "1", title: "Consultation", description: "Free assessment of your home's solar potential", icon: "📋" },
    { step: "2", title: "Design", description: "Custom system design tailored to your energy needs", icon: "🎨" },
    { step: "3", title: "Approval", description: "We handle all permits and paperwork for you", icon: "✅" },
    { step: "4", title: "Installation", description: "Professional installation by certified technicians", icon: "⚙️" },
    { step: "5", title: "Activation", description: "System commissioning and monitoring setup", icon: "🚀" },
    { step: "6", title: "Support", description: "Ongoing maintenance and 24/7 monitoring support", icon: "🛡️" }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-20 lg:py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Residential <span className="text-secondary-400">Solutions</span></h1>
            <p className="text-xl md:text-2xl text-primary-100 max-w-4xl mx-auto mb-8 leading-relaxed">
              Power your home with Egypt's most advanced residential solar technology - designed for maximum efficiency and beautiful integration
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="large" className="transform hover:-translate-y-1 transition-all duration-300">
                Get a Free Quote
              </Button>
              <Button variant="outline-white" size="large">
                View Our Gallery
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-primary-600 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl md:text-3xl font-bold">2,500+</div>
              <div className="text-sm md:text-base opacity-90">Happy Homeowners</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold">45%</div>
              <div className="text-sm md:text-base opacity-90">More Efficient</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold">25</div>
              <div className="text-sm md:text-base opacity-90">Year Warranty</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold">24/7</div>
              <div className="text-sm md:text-base opacity-90">Monitoring</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose <span className="text-primary-600">DuaAxis</span> for Your Home</h2>
            <p className="text-gray-600 text-lg">
              Advanced dual-axis technology designed specifically for Egyptian homes and climate conditions
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Feature showcase */}
            <div className="relative">
              <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-2xl p-8 lg:p-12 shadow-lg">
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

      {/* Savings Calculator Section */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Calculate Your <span className="text-primary-600">Savings</span></h2>
            <p className="text-gray-600 text-lg">
              See how much you could save with a DuaAxis residential solar system
            </p>
          </div>

          <Card variant="elevated" padding="large" className="mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* System Size Selector */}
              <div>
                <h3 className="text-xl font-semibold mb-6">Select Your System Size</h3>
                <div className="grid grid-cols-2 gap-4">
                  {systemSizes.map((system, index) => (
                    <div
                      key={index}
                      onClick={() => handleSystemSizeChange(system.size)}
                      className={`p-4 border rounded-lg text-center cursor-pointer transition-all ${
                        currentSystem === system.size
                          ? 'border-primary-500 bg-primary-50 shadow-md'
                          : 'border-gray-200 hover:border-primary-300'
                      }`}
                    >
                      <div className="text-2xl font-bold text-primary-600">{system.size}kW</div>
                      <div className="text-sm text-gray-600">{system.label}</div>
                      <div className="text-xs text-gray-500 mt-2">{system.panels} panels</div>
                      <div className="text-xs text-gray-500">{system.output}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Savings Display */}
              <div>
                <h3 className="text-xl font-semibold mb-6">Your Estimated Savings</h3>
                <div className="bg-primary-50 rounded-xl p-6 mb-6">
                  <div className="text-center mb-4">
                    <div className="text-sm text-gray-600">Selected System</div>
                    <div className="text-2xl font-bold text-primary-600">{currentSystem}kW</div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-lg font-semibold">${savingsData.monthly}</div>
                      <div className="text-sm text-gray-600">Monthly</div>
                    </div>
                    <div>
                      <div className="text-lg font-semibold">${savingsData.annual}</div>
                      <div className="text-sm text-gray-600">Annual</div>
                    </div>
                    <div>
                      <div className="text-lg font-semibold">${savingsData.total}</div>
                      <div className="text-sm text-gray-600">Total*</div>
                    </div>
                  </div>
                </div>

                {/* Year Selector */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Projection Period</label>
                  <div className="flex space-x-2">
                    {[1, 5, 10, 25].map((year) => (
                      <button
                        key={year}
                        onClick={() => setCurrentSavingsYear(year)}
                        className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                          currentSavingsYear === year
                            ? 'bg-primary-600 text-white'
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                      >
                        {year} Year{year > 1 ? 's' : ''}
                      </button>
                    ))}
                  </div>
                </div>

                <p className="text-xs text-gray-500">
                  *Includes estimated 3% annual electricity price inflation. Actual savings may vary.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple <span className="text-primary-600">Installation</span> Process</h2>
            <p className="text-gray-600 text-lg">
              From consultation to activation, we make going solar easy and stress-free
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{step.icon}</span>
                </div>
                <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Hear From <span className="text-primary-600">Our Customers</span></h2>
            <p className="text-gray-600 text-lg">
              Real stories from Egyptian homeowners who have made the switch to DuaAxis
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} variant="elevated" padding="medium" className="hover:shadow-xl transition-shadow duration-300">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl">👤</span>
                  </div>
                  <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                  <p className="text-xs text-primary-600 font-medium mt-1">{testimonial.system}</p>
                </div>
                <blockquote className="text-gray-700 italic mb-4 text-center">
                  "{testimonial.quote}"
                </blockquote>
                <div className="text-center">
                  <div className="text-primary-600 font-semibold">{testimonial.savings}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Start Your Solar Journey?</h2>
          <p className="text-primary-100 text-lg mb-8 max-w-3xl mx-auto">
            Join thousands of Egyptian homeowners who are saving money, reducing their carbon footprint, and enjoying energy independence with DuaAxis
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="white" size="large" className="transform hover:-translate-y-1 transition-all duration-300">
              Get Your Free Quote
            </Button>
            <Button variant="outline-white" size="large">
              Schedule Consultation
            </Button>
          </div>
          <p className="text-primary-200 text-sm mt-6">
            No obligation • Free assessment • 25-year warranty
          </p>
        </div>
      </section>
    </div>
  );
};

export default Residential;