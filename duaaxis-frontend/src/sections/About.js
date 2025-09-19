import React, { useState, useEffect } from 'react';

const About = () => {
  const [currentStat, setCurrentStat] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    const statInterval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % statistics.length);
    }, 3000);
    
    return () => {
      clearTimeout(timer);
      clearInterval(statInterval);
    };
  }, []);

  const statistics = [
    { value: "45%", label: "Higher Efficiency", description: "Than fixed solar systems" },
    { value: "500+", label: "Installations", description: "Across Egypt and MENA" },
    { value: "25+", label: "Years Warranty", description: "On all our systems" },
    { value: "98%", label: "Uptime", description: "Guaranteed reliability" }
  ];

  const teamMembers = [
    {
      name: "Dr. Ahmed Hassan",
      role: "Chief Technology Officer",
      expertise: "PhD in Renewable Energy, 15+ years in solar technology",
      image: "/team-ahmed.jpg"
    },
    {
      name: "Eng. Mohamed Ali",
      role: "Head of Engineering",
      expertise: "Mechanical Engineering Specialist, Solar Tracking Systems",
      image: "/team-mohamed.jpg"
    },
    {
      name: "Dr. Fatima Mahmoud",
      role: "Research Director",
      expertise: "Materials Science, Advanced Solar Cell Technology",
      image: "/team-fatima.jpg"
    }
  ];

  const milestones = [
    { year: "2018", event: "Company Founded", description: "Started with a vision to revolutionize solar tracking" },
    { year: "2019", event: "First Prototype", description: "Developed our first dual-axis tracking system" },
    { year: "2020", event: "Commercial Launch", description: "First commercial installation completed" },
    { year: "2022", event: "MENA Expansion", description: "Expanded operations across Middle East and North Africa" },
    { year: "2023", event: "AI Integration", description: "Launched AI-powered tracking algorithms" }
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className={`transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <span className="inline-block bg-gradient-to-r from-primary-500 to-secondary-500 text-white text-sm font-semibold py-2 px-4 rounded-full mb-4">
              Our Story
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Pioneering the <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">Future of Solar</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From a vision in Cairo to transforming solar energy across Egypt and beyond
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <div className={`transform transition-all duration-700 delay-100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
              Revolutionizing Solar Energy in Egypt
            </h3>
            <div className="space-y-6 text-lg text-gray-600">
              <p>
                DuaAxis was founded in Cairo with a bold mission: to maximize solar energy production through cutting-edge dual-axis tracking technology. 
                Our Egyptian engineering team has developed a revolutionary system that outperforms traditional fixed installations by up to 45%.
              </p>
              <p>
                What sets us apart is our deep understanding of Egypt's unique climate challenges. Our systems are specifically engineered to thrive in 
                desert conditions, with advanced dust mitigation, heat resistance, and sandstorm protection features.
              </p>
              <p>
                We combine precision German engineering with Egyptian innovation to create solar tracking systems that are both highly efficient and 
                perfectly adapted to the MENA region's environmental conditions.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              {statistics.map((stat, index) => (
                <div 
                  key={index} 
                  className={`text-center p-4 bg-white rounded-xl shadow-lg border border-gray-100 transition-all duration-500 ${
                    index === currentStat ? 'scale-105 ring-2 ring-primary-200' : 'scale-100'
                  }`}
                >
                  <div className="text-2xl lg:text-3xl font-bold text-primary-600 mb-1">{stat.value}</div>
                  <div className="text-sm font-semibold text-gray-900">{stat.label}</div>
                  <div className="text-xs text-gray-600 mt-1">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image/Visual */}
          <div className={`transform transition-all duration-700 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="relative">
              <img 
                className="rounded-2xl shadow-2xl w-full"
                src="https://images.unsplash.com/photo-1626618012641-bfbca5a31239?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
                alt="DuaAxis solar tracking system in Egyptian desert"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">2018</div>
                  <div className="text-sm text-gray-600">Founded in Cairo</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className={`bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-8 text-white transform transition-all duration-700 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="w-12 h-12 bg-white/20 rounded-xl p-3 mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-primary-100">
              To accelerate Egypt's renewable energy transition by providing the most efficient and reliable solar tracking technology, 
              making clean energy accessible and affordable for all.
            </p>
          </div>

          <div className={`bg-gradient-to-br from-secondary-600 to-secondary-800 rounded-2xl p-8 text-white transform transition-all duration-700 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="w-12 h-12 bg-white/20 rounded-xl p-3 mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-secondary-100">
              To be the leading solar technology provider in the MENA region, driving sustainable development through innovation and 
              setting new standards for renewable energy efficiency.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className={`mb-20 transform transition-all duration-700 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Journey</h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-primary-200 h-full"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <h4 className="text-xl font-bold text-gray-900">{milestone.event}</h4>
                    <p className="text-primary-600 font-semibold">{milestone.year}</p>
                    <p className="text-gray-600 mt-2">{milestone.description}</p>
                  </div>
                  
                  <div className="w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className={`transform transition-all duration-700 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Meet Our Leadership</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-32 h-32 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full mx-auto flex items-center justify-center text-white text-4xl">
                    {member.image ? '👤' : member.name.charAt(0)}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-full opacity-0 group-hover:opacity-20 transition-opacity"></div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h4>
                <p className="text-primary-600 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.expertise}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className={`text-center mt-16 transform transition-all duration-700 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Ready to Join the Solar Revolution?</h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover how DuaAxis can transform your energy production and contribute to a sustainable future
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 transform hover:-translate-y-1">
              Contact Our Team
            </button>
            <button className="border border-primary-600 text-primary-600 hover:bg-primary-50 font-medium py-3 px-8 rounded-full transition-all duration-300">
              View Our Technology
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;