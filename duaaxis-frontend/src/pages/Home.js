import React, { useState, useEffect } from 'react';
import Hero from '../sections/Hero';
import Stats from '../sections/Stats';
import About from '../sections/About';
import Features from '../sections/Features';
import ProblemSolution from '../sections/ProblemSolution';
import Testimonials from '../sections/Testimonials';
import Contact from '../sections/Contact';

const Home = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading completion
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    // Handle scroll events
    const handleScroll = () => {
      // Show/hide scroll to top button
      setShowScrollTop(window.scrollY > 500);

      // Update active section based on scroll position
      const sections = ['hero', 'stats', 'about', 'features', 'problem', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveSection('hero');
  };

  // Navigation items
  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'stats', label: 'Performance' },
    { id: 'about', label: 'About' },
    { id: 'features', label: 'Features' },
    { id: 'problem', label: 'Why DuaAxis' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' }
  ];

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center z-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-white/30 border-t-white rounded-full animate-spin mx-auto mb-4"></div>
          <div className="text-white text-lg font-semibold">Loading DuaAxis...</div>
          <div className="text-white/70 text-sm mt-2">Solar Tracking Excellence</div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 relative">
      {/* Floating Navigation */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-2 border border-gray-200">
          <div className="space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-3 h-3 rounded-full transition-all duration-300 block ${
                  activeSection === item.id
                    ? 'bg-primary-600 scale-125'
                    : 'bg-gray-400 hover:bg-primary-400'
                }`}
                aria-label={`Scroll to ${item.label}`}
                title={item.label}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="fixed top-16 left-0 w-full h-1 bg-gray-200 z-40">
        <div 
          className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 transition-all duration-300"
          style={{ width: `${(navItems.findIndex(item => item.id === activeSection) + 1) / navItems.length * 100}%` }}
        />
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-primary-600 hover:bg-primary-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 z-40"
          aria-label="Scroll to top"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}

      {/* Quick Contact Floating Button */}
      <div className="fixed bottom-6 left-6 z-40 hidden lg:block">
        <div className="bg-white rounded-2xl shadow-xl p-4 border border-gray-200">
          <div className="text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-2">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div className="text-sm font-semibold text-gray-900">Need Help?</div>
            <div className="text-xs text-gray-600 mb-2">Talk to our experts</div>
            <a
              href="tel:+20212345678"
              className="text-primary-600 hover:text-primary-700 text-sm font-medium block"
            >
              +20 2 1234 5678
            </a>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative">
        <div id="hero">
          <Hero />
        </div>
        
        <div id="stats">
          <Stats />
        </div>
        
        <div id="about">
          <About />
        </div>
        
        <div id="features">
          <Features />
        </div>
        
        <div id="problem">
          <ProblemSolution />
        </div>
        
        <div id="testimonials">
          <Testimonials />
        </div>
        
        <div id="contact">
          <Contact />
        </div>
      </div>

      {/* Live Chat Widget (simplified) */}
      <div className="fixed bottom-24 right-6 z-40">
        <button className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </button>
      </div>

      {/* Cookie Consent Banner */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0 md:mr-4">
            <p className="text-sm">
              We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
            </p>
          </div>
          <div className="flex space-x-2">
            <button className="px-4 py-2 text-sm bg-gray-700 hover:bg-gray-600 rounded transition-colors">
              Learn More
            </button>
            <button className="px-4 py-2 text-sm bg-primary-600 hover:bg-primary-700 rounded transition-colors">
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;