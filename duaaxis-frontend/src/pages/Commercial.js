import React, { useState, useEffect } from 'react';
import { Card } from '../components/Ui';

const Commercial = () => {
  const [currentCaseStudy, setCurrentCaseStudy] = useState(0);
  const [financialData, setFinancialData] = useState({
    systemSize: 500,
    electricityRate: 0.12
  });

  useEffect(() => {
    // Auto-rotate case studies
    const interval = setInterval(() => {
      setCurrentCaseStudy((prev) => (prev + 1) % caseStudies.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFinancialData(prev => ({
      ...prev,
      [name]: parseFloat(value) || 0
    }));
  };

  const applications = [
    {
      title: "Office Buildings",
      description: "Reduce operating costs and demonstrate sustainability leadership with rooftop or ground-mounted systems",
      icon: "🏢",
      benefits: ["Lower operating costs", "LEED certification points", "Enhanced corporate image", "Predictable energy pricing"]
    },
    {
      title: "Retail Centers",
      description: "Lower energy costs for tenants and attract eco-conscious customers with visible solar installations",
      icon: "🛍️",
      benefits: ["Tenant attraction", "Marketing advantage", "Reduced common area costs", "Sustainability branding"]
    },
    {
      title: "Manufacturing",
      description: "Power energy-intensive operations with predictable, low-cost energy and reduce carbon footprint",
      icon: "🏭",
      benefits: ["Process power", "Energy independence", "Carbon reduction", "Operational savings"]
    },
    {
      title: "Warehouses",
      description: "Utilize large roof spaces for maximum energy generation and reduce facility operating costs",
      icon: "📦",
      benefits: ["Large surface area", "Minimal interference", "High ROI", "Energy-intensive operations"]
    },
    {
      title: "Hotels & Resorts",
      description: "Power extensive facilities and showcase environmental commitment to guests",
      icon: "🏨",
      benefits: ["24/7 operation", "Guest appeal", "Pool heating", "SPA facilities power"]
    },
    {
      title: "Educational Institutions",
      description: "Reduce utility costs and create educational opportunities for students",
      icon: "🎓",
      benefits: ["Learning tool", "Long-term savings", "Sustainability education", "Community leadership"]
    }
  ];

  const benefits = [
    { metric: "25-40%", description: "Reduction in energy costs", icon: "💸", detail: "Compared to grid electricity" },
    { metric: "5-8 years", description: "Typical ROI period", icon: "⏱️", detail: "With tax incentives" },
    { metric: "30%+", description: "ITC tax credit eligibility", icon: "📋", detail: "Federal investment tax credit" },
    { metric: "100%", description: "Scalable to any size operation", icon: "📊", detail: "From 10kW to 10MW+" }
  ];

  const caseStudies = [
    {
      company: "Nile Business Park",
      location: "Cairo, Egypt",
      system: "1.2MW Rooftop Installation",
      results: {
        capacity: "1.2 MW",
        production: "2.1 GWh/year",
        savings: "$252,000/year",
        ROI: "5.2 years",
        carbon: "1,500 tons CO2 avoided"
      },
      testimonial: "DuaAxis helped us reduce our operating costs by 35% while enhancing our sustainability credentials."
    },
    {
      company: "Red Sea Resort",
      location: "Hurghada, Egypt",
      system: "800kW Ground Mount",
      results: {
        capacity: "800 kW",
        production: "1.4 GWh/year",
        savings: "$196,000/year",
        ROI: "4.8 years",
        carbon: "1,000 tons CO2 avoided"
      },
      testimonial: "Our guests appreciate our commitment to renewable energy, and our energy bills have never been lower."
    },
    {
      company: "Alexandria Manufacturing",
      location: "Alexandria, Egypt",
      system: "2.5MW Tracking System",
      results: {
        capacity: "2.5 MW",
        production: "4.5 GWh/year",
        savings: "$540,000/year",
        ROI: "5.9 years",
        carbon: "3,200 tons CO2 avoided"
      },
      testimonial: "The dual-axis trackers have proven exceptionally reliable in our coastal environment."
    }
  ];

  // Calculate financials based on inputs
  const calculateFinancials = () => {
    const { systemSize, electricityRate } = financialData;
    const totalInvestment = systemSize * 2500; // $2.50 per watt
    const itcCredit = totalInvestment * 0.3;
    const netCost = totalInvestment - itcCredit;
    const annualProduction = systemSize * 1800; // kWh per kW
    const annualSavings = annualProduction * electricityRate;
    const srecIncome = systemSize * 90; // $90 per kW annually
    const totalAnnualBenefit = annualSavings + srecIncome;
    const roiYears = netCost / totalAnnualBenefit;

    return {
      totalInvestment: totalInvestment.toLocaleString(),
      itcCredit: itcCredit.toLocaleString(),
      netCost: netCost.toLocaleString(),
      annualProduction: annualProduction.toLocaleString(),
      annualSavings: annualSavings.toLocaleString(),
      srecIncome: srecIncome.toLocaleString(),
      totalAnnualBenefit: totalAnnualBenefit.toLocaleString(),
      roiYears: roiYears.toFixed(1)
    };
  };

  const financialResults = calculateFinancials();

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-20 lg:py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Commercial <span className="text-secondary-400">Solutions</span></h1>
            <p className="text-xl md:text-2xl text-primary-100 max-w-4xl mx-auto mb-8 leading-relaxed">
              Lower operating costs and enhance your sustainability profile with commercial-grade dual-axis solar tracking systems
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
                Request Consultation
              </button>
              <button className="border border-white text-white hover:bg-white/10 font-medium py-3 px-8 rounded-full transition-all duration-300">
                Download Brochure
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
              <div className="text-2xl md:text-3xl font-bold">500+</div>
              <div className="text-sm md:text-base opacity-90">Commercial Installations</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold">98%</div>
              <div className="text-sm md:text-base opacity-90">Uptime Guarantee</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold">25</div>
              <div className="text-sm md:text-base opacity-90">Years Warranty</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold">24/7</div>
              <div className="text-sm md:text-base opacity-90">Monitoring</div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Commercial <span className="text-primary-600">Applications</span></h2>
            <p className="text-gray-600 text-lg">
              Our dual-axis solar tracking systems are designed for various commercial and industrial applications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applications.map((app, index) => (
              <Card key={index} variant="elevated" padding="medium" className="text-center hover:shadow-xl transition-shadow duration-300 group">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{app.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{app.title}</h3>
                <p className="text-gray-600 mb-4">{app.description}</p>
                <div className="text-left">
                  <h4 className="font-medium text-gray-900 mb-2">Key Benefits:</h4>
                  <ul className="space-y-1">
                    {app.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-600">
                        <span className="text-primary-500 mr-2">✓</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Commercial <span className="text-primary-600">Benefits</span></h2>
            <p className="text-gray-600 text-lg">
              Why leading businesses choose DuaAxis for their commercial solar needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <div className="text-3xl font-bold text-primary-600 mb-2">{benefit.metric}</div>
                <p className="text-gray-900 font-medium mb-2">{benefit.description}</p>
                <p className="text-gray-600 text-sm">{benefit.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Analysis */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Financial <span className="text-primary-600">Analysis</span></h2>
            <p className="text-gray-600 text-lg">
              Calculate the return on investment for your commercial solar project
            </p>
          </div>

          <Card variant="elevated" padding="large" className="mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-6">Customize Your Analysis</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">System Size (kW)</label>
                    <input
                      type="range"
                      name="systemSize"
                      min="10"
                      max="5000"
                      step="10"
                      value={financialData.systemSize}
                      onChange={handleInputChange}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-sm text-gray-600">10 kW</span>
                      <span className="font-semibold">{financialData.systemSize} kW</span>
                      <span className="text-sm text-gray-600">5,000 kW</span>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Electricity Rate ($/kWh)</label>
                    <input
                      type="number"
                      name="electricityRate"
                      min="0.05"
                      max="0.50"
                      step="0.01"
                      value={financialData.electricityRate}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-6">Investment Overview</h3>
                <div className="space-y-4 bg-gray-50 p-6 rounded-lg">
                  <div className="flex justify-between">
                    <span className="text-gray-700">System Size:</span>
                    <span className="font-semibold">{financialData.systemSize} kW</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Total Investment:</span>
                    <span className="font-semibold">${financialResults.totalInvestment}</span>
                  </div>
                  <div className="flex justify-between text-green-600">
                    <span>ITC Tax Credit (30%):</span>
                    <span className="font-semibold">${financialResults.itcCredit}</span>
                  </div>
                  <div className="flex justify-between border-t border-gray-200 pt-3">
                    <span className="text-gray-900 font-medium">Net Cost:</span>
                    <span className="font-semibold text-lg">${financialResults.netCost}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Annual Benefits</h3>
                <div className="space-y-3 bg-gray-50 p-6 rounded-lg">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Energy Production:</span>
                    <span className="font-semibold">{financialResults.annualProduction} kWh</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Energy Savings:</span>
                    <span className="font-semibold">${financialResults.annualSavings}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">SREC Income:</span>
                    <span className="font-semibold">${financialResults.srecIncome}</span>
                  </div>
                  <div className="flex justify-between border-t border-gray-200 pt-3">
                    <span className="text-gray-900 font-medium">Total Annual Benefit:</span>
                    <span className="font-semibold text-lg">${financialResults.totalAnnualBenefit}</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <div className="text-center p-6 bg-primary-50 rounded-lg">
                  <div className="text-sm text-gray-600 mb-2">Return on Investment</div>
                  <div className="text-3xl font-bold text-primary-600 mb-2">{financialResults.roiYears} years</div>
                  <div className="text-sm text-gray-600">Based on your inputs</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-between items-center pt-6 border-t border-gray-200">
              <p className="text-gray-600 text-sm">
                Calculations are estimates. Contact us for a detailed financial analysis.
              </p>
              <div className="flex gap-3">
                <button className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300">
                  Download Full Report
                </button>
                <button className="border border-primary-600 text-primary-600 hover:bg-primary-50 font-medium py-3 px-6 rounded-lg transition-colors duration-300">
                  Schedule Consultation
                </button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Success <span className="text-primary-600">Stories</span></h2>
            <p className="text-gray-600 text-lg">
              Real-world examples of commercial DuaAxis installations
            </p>
          </div>

          <div className="relative">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className={`transition-opacity duration-500 ${
                  index === currentCaseStudy ? 'opacity-100' : 'opacity-0 absolute inset-0'
                }`}
              >
                <Card variant="elevated" padding="large" className="hover:shadow-xl transition-shadow duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <div className="flex justify-between items-start mb-6">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">{study.company}</h3>
                          <p className="text-gray-600">{study.location} • {study.system}</p>
                        </div>
                        <span className="bg-primary-100 text-primary-800 text-xs font-medium px-3 py-1 rounded-full">
                          Case Study
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="text-center p-4 bg-green-50 rounded-lg">
                          <div className="text-xl font-bold text-green-800">{study.results.capacity}</div>
                          <div className="text-green-600 text-sm">System Capacity</div>
                        </div>
                        <div className="text-center p-4 bg-blue-50 rounded-lg">
                          <div className="text-xl font-bold text-blue-800">{study.results.production}</div>
                          <div className="text-blue-600 text-sm">Annual Production</div>
                        </div>
                        <div className="text-center p-4 bg-amber-50 rounded-lg">
                          <div className="text-xl font-bold text-amber-800">{study.results.savings}</div>
                          <div className="text-amber-600 text-sm">Annual Savings</div>
                        </div>
                        <div className="text-center p-4 bg-purple-50 rounded-lg">
                          <div className="text-xl font-bold text-purple-800">{study.results.ROI}</div>
                          <div className="text-purple-600 text-sm">Return on Investment</div>
                        </div>
                      </div>
                      
                      <blockquote className="border-l-4 border-primary-500 pl-4 italic text-gray-700">
                        "{study.testimonial}"
                      </blockquote>
                    </div>
                    <div className="bg-primary-50 rounded-lg p-8 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-primary-800 mb-2">{study.results.carbon}</div>
                        <div className="text-primary-700">Carbon Emissions Avoided Annually</div>
                        <div className="mt-6 text-sm text-primary-600">
                          Equivalent to planting {Math.round(parseInt(study.results.carbon) / 0.06)} trees
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
            
            <div className="flex justify-center mt-6 space-x-2">
              {caseStudies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentCaseStudy(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentCaseStudy ? 'bg-primary-600 w-8' : 'bg-gray-300'
                  }`}
                  aria-label={`View case study ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Power Your Business with Solar?</h2>
          <p className="text-primary-100 text-lg mb-8 max-w-3xl mx-auto">
            Join leading Egyptian businesses that are reducing costs and carbon emissions with DuaAxis commercial solar solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
              Get Commercial Quote
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

export default Commercial;