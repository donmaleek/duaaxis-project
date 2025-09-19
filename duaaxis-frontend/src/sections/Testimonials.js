import React, { useState, useEffect } from 'react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    
    // Auto-rotate testimonials
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "Ahmed Hassan",
      role: "Commercial Farm Owner",
      company: "Nile Delta Agribusiness",
      location: "Cairo, Egypt",
      content: "We installed DuaAxis trackers on our farm and saw a 42% increase in energy production compared to our old fixed panels. The ROI was much faster than we anticipated, and the system has been incredibly reliable in our desert climate.",
      rating: 5,
      image: "/testimonial-ahmed.jpg",
      stats: {
        system: "150kW System",
        production: "45% increase",
        payback: "4.2 years ROI"
      }
    },
    {
      id: 2,
      name: "Fatima Mahmoud",
      role: "Manufacturing Plant Director",
      company: "Red Sea Manufacturing",
      location: "Alexandria, Egypt",
      content: "The IoT monitoring system is fantastic. We can track performance in real-time and the system automatically optimizes based on weather conditions. Maintenance has been minimal even in our coastal environment with high salinity.",
      rating: 5,
      image: "/testimonial-fatima.jpg",
      stats: {
        system: "500kW System",
        production: "48% more energy",
        payback: "3.8 years ROI"
      }
    },
    {
      id: 3,
      name: "Mohamed Ali",
      role: "Residential Community Manager",
      company: "Giza Heights Community",
      location: "Giza, Egypt",
      content: "We needed to maximize energy production in a limited space for our community center. DuaAxis was the perfect solution, generating significantly more power than traditional panels would have. Our residents love the sustainability story.",
      rating: 5,
      image: "/testimonial-mohamed.jpg",
      stats: {
        system: "75kW System",
        production: "43% increase",
        payback: "4.5 years ROI"
      }
    },
    {
      id: 4,
      name: "Layla Abdel",
      role: "Hotel General Manager",
      company: "Luxor Resort & Spa",
      location: "Luxor, Egypt",
      content: "As a luxury resort, we needed a solar solution that was both efficient and aesthetically pleasing. DuaAxis delivered on both counts. Our energy costs have decreased by 60% while maintaining our property's beautiful appearance.",
      rating: 5,
      image: "/testimonial-layla.jpg",
      stats: {
        system: "200kW System",
        production: "52% more energy",
        payback: "3.5 years ROI"
      }
    },
    {
      id: 5,
      name: "Omar Sherif",
      role: "Industrial Facility Manager",
      company: "Suez Industrial Park",
      location: "Suez, Egypt",
      content: "The durability of DuaAxis systems in harsh industrial environments impressed us. Despite dust, heat, and occasional sandstorms, the trackers have maintained peak performance with minimal maintenance required.",
      rating: 5,
      image: "/testimonial-omar.jpg",
      stats: {
        system: "1.2MW System",
        production: "47% increase",
        payback: "4.0 years ROI"
      }
    }
  ];

  const stats = [
    { value: "98%", label: "Customer Satisfaction" },
    { value: "45%", label: "Average Energy Increase" },
    { value: "4.2", label: "Years Average ROI" },
    { value: "500+", label: "Happy Customers" }
  ];

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className={`transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <span className="inline-block bg-gradient-to-r from-primary-500 to-secondary-500 text-white text-sm font-semibold py-2 px-4 rounded-full mb-4">
              Customer Stories
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Trusted by <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">Egypt's Leaders</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover why businesses across Egypt are choosing DuaAxis for their solar energy needs
            </p>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-2xl p-6 shadow-lg text-center transform transition-all duration-500 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-3xl font-bold text-primary-600 mb-2">{stat.value}</div>
              <div className="text-sm font-medium text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Testimonials */}
        <div className="relative">
          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <div 
                key={testimonial.id} 
                className={`bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-700 text-lg italic mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
                      {testimonial.image ? '' : testimonial.name.charAt(0)}
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-xs text-gray-500">{testimonial.company}</p>
                  </div>
                </div>

                {/* Stats */}
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div>
                      <div className="text-sm font-semibold text-primary-600">{testimonial.stats.system}</div>
                      <div className="text-xs text-gray-500">System Size</div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-green-600">{testimonial.stats.production}</div>
                      <div className="text-xs text-gray-500">Production</div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-blue-600">{testimonial.stats.payback}</div>
                      <div className="text-xs text-gray-500">Payback</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Featured Testimonial Carousel */}
          <div className={`bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 lg:p-12 text-white mb-12 transform transition-all duration-700 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="flex items-start">
              <div className="flex-1">
                <div className="flex mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <svg key={i} className="h-6 w-6 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                <p className="text-xl lg:text-2xl italic mb-8 leading-relaxed">
                  "{testimonials[currentTestimonial].content}"
                </p>

                <div>
                  <h3 className="text-lg font-semibold">{testimonials[currentTestimonial].name}</h3>
                  <p className="text-primary-200">{testimonials[currentTestimonial].role} • {testimonials[currentTestimonial].company}</p>
                  <p className="text-primary-300 text-sm">{testimonials[currentTestimonial].location}</p>
                </div>
              </div>
              
              <div className="hidden lg:block ml-8">
                <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-3xl text-white">
                    {testimonials[currentTestimonial].image ? '' : testimonials[currentTestimonial].name.charAt(0)}
                  </span>
                </div>
              </div>
            </div>

            {/* Carousel Navigation */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentTestimonial ? 'bg-white w-8' : 'bg-white/30'
                  }`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className={`text-center transform transition-all duration-700 delay-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Ready to Join Our Success Stories?</h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              See how DuaAxis can transform your energy production and contribute to your sustainability goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-4 px-8 rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
                View Case Studies
              </button>
              <button className="border border-primary-600 text-primary-600 hover:bg-primary-50 font-medium py-4 px-8 rounded-full transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;