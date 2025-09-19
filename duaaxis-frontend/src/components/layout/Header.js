import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Features', href: '#features' },
    { name: 'Why Us', href: '#problem' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Guides', href: '/guides' },
    { name: 'Utility', href: '/utility-scale' },
    { name: 'Solutions', href: '/commercial' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' : 'bg-white/80 backdrop-blur-md shadow-sm py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <a href="/" className="flex items-center group">
              <div className="relative">
                <img
                  src="/logo1.png"
                  alt="DuaAxis Logo"
                  className="h-12 w-auto transition-all duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary-500 opacity-0 group-hover:opacity-10 rounded-full transition-opacity duration-300"></div>
              </div>
              <span className="ml-3 text-primary-600 font-bold text-2xl tracking-tight">
                DuaAxis
              </span>
              <span className="ml-2 bg-secondary-500 text-white text-xs px-3 py-1 rounded-full shadow-sm">
                Solar
              </span>
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:ml-10 md:flex md:space-x-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative group text-gray-700 hover:text-primary-600 transition-all font-medium text-sm px-2 py-1"
                >
                  {item.name}
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact button + Mobile menu button */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <div className="hidden md:flex relative group">
              <button className="flex items-center text-gray-600 hover:text-primary-600 text-sm font-medium transition-colors">
                EN
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div className="absolute top-full right-0 mt-2 w-32 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600">العربية</a>
              </div>
            </div>

            {/* Desktop Contact Button */}
            <div className="hidden md:flex">
              <a
                href="#contact"
                className="ml-2 inline-flex items-center px-5 py-2.5 rounded-full text-sm font-medium text-white bg-primary-600 shadow-md hover:bg-primary-700 hover:shadow-lg transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all duration-300"
              >
                Contact Us
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                </svg>
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                type="button"
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-primary-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500 transition-colors duration-300"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-white shadow-xl transform transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-3">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              className="block py-2 px-3 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-md transition-colors duration-300 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <div className="pt-4 border-t border-gray-100">
            <a
              href="#contact"
              className="mt-2 inline-flex items-center justify-center w-full px-4 py-2.5 rounded-full text-sm font-medium text-white bg-primary-600 shadow hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
