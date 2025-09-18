import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md shadow-sm transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo Section */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img
                src="/logo1.png"
                alt="DuaAxis Logo"
                className="h-14 w-auto transition-transform duration-300 hover:scale-105"
              />
              <span className="ml-3 text-primary-600 font-bold text-2xl tracking-tight">
                DuaAxis
              </span>
              <span className="ml-2 bg-secondary-500 text-white text-xs px-3 py-1 rounded-full shadow-sm">
                Solar
              </span>
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:ml-10 md:flex md:space-x-8">
              {[
                { name: 'About', href: '#about' },
                { name: 'Features', href: '#features' },
                { name: 'Why Us', href: '#problem' },
                { name: 'Testimonials', href: '#testimonials' }
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative text-gray-600 hover:text-primary-600 transition font-medium text-sm px-1 pt-1"
                >
                  {item.name}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-primary-500 transition-all group-hover:w-full"></span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact button + Mobile menu button */}
          <div className="flex items-center">
            {/* Desktop Contact Button */}
            <div className="hidden md:flex">
              <a
                href="#contact"
                className="ml-6 inline-flex items-center px-5 py-2 rounded-full text-sm font-medium text-white bg-primary-600 shadow hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition"
              >
                Contact Us
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="-mr-2 flex items-center md:hidden">
              <button
                type="button"
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-primary-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500 transition"
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
        className={`md:hidden bg-white shadow-lg transform transition-all duration-300 ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="px-4 pt-4 pb-6 space-y-2">
          <a href="#about" className="block text-gray-600 hover:text-primary-600 transition font-medium">About</a>
          <a href="#features" className="block text-gray-600 hover:text-primary-600 transition font-medium">Features</a>
          <a href="#problem" className="block text-gray-600 hover:text-primary-600 transition font-medium">Why Us</a>
          <a href="#testimonials" className="block text-gray-600 hover:text-primary-600 transition font-medium">Testimonials</a>
          <a href="#contact" className="block text-gray-600 hover:text-primary-600 transition font-medium">Contact Us</a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
