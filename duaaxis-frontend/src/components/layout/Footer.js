import React, { useState } from 'react';

/**
 * Footer Functional Component
 * 
 * @function Footer
 * @returns {JSX.Element} Rendered footer component with responsive grid layout
 * 
 * @description
 * This component implements a comprehensive footer with four main sections:
 * 1. Company description
 * 2. Solutions navigation
 * 3. Support resources
 * 4. Social media links and newsletter subscription
 * 
 * The footer is built with Tailwind CSS for responsive design and includes
 * accessibility features like screen reader text for social media icons.
 */
const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // Here you would typically send the email to your backend
      console.log('Subscribed with email:', email);
      setSubscribed(true);
      setEmail('');
      
      // Reset subscription status after 3 seconds
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    // Footer container with background, text color, and vertical padding
    <footer className="bg-gray-900 text-white pt-16 pb-10 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-secondary-500"></div>
      <div className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-primary-500/10 blur-xl"></div>
      <div className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-secondary-500/10 blur-xl"></div>
      
      {/*
        Main content container with max-width and horizontal padding
        - max-w-7xl: Limits content width on large screens
        - mx-auto: Centers the container horizontally
        - px-4 sm:px-6 lg:px-8: Responsive horizontal padding
      */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/*
          Responsive grid layout for footer sections
          - grid-cols-1: Single column on mobile
          - sm:grid-cols-2: Two columns on small screens and above
          - md:grid-cols-4: Four columns on medium screens and above
          - gap-8: Consistent spacing between grid items
        */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4">
          
          {/* 
            Company Information Section 
            Contains brief description of DuaAxis
          */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img
                src="/logo1.png"
                alt="DuaAxis Logo"
                className="h-10 w-auto"
              />
              <span className="ml-3 text-primary-400 font-bold text-xl tracking-tight">
                DuaAxis
              </span>
              <span className="ml-2 bg-secondary-500 text-white text-xs px-2 py-1 rounded-full shadow-sm">
                Solar
              </span>
            </div>
            <p className="text-base text-gray-400 leading-relaxed">
              Revolutionizing solar energy with advanced dual-axis tracking technology and IoT integration for maximum efficiency.
            </p>
            
            {/* Contact Information */}
            <div className="pt-2 space-y-2">
              <div className="flex items-start">
                <svg className="w-5 h-5 text-primary-500 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span className="text-sm text-gray-400">Cairo, Egypt</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <span className="text-sm text-gray-400">+20 1124542828</span>
              </div>
            </div>
          </div>
          
          {/*
            Solutions Navigation Section
            Contains links to different solution categories
          */}
          <div>
            <h3 className="text-lg font-semibold text-white tracking-wide mb-6 relative inline-block">
              Solutions
              <span className="absolute -bottom-2 left-0 w-10 h-0.5 bg-primary-500"></span>
            </h3>
            <ul className="space-y-4">
              {[
                { name: 'Residential', href: '/residential', icon: '🏠' },
                { name: 'Commercial', href: '/commercial', icon: '🏢' },
                { name: 'Utility Scale', href: '/utility-scale', icon: '⚡' },
                { name: 'Agricultural', href: '/agricultural', icon: '🌱' },
                { name: 'Government', href: '/government', icon: '🏛️' }
              ].map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    className="flex items-center text-base text-gray-400 hover:text-primary-400 transition-colors duration-300 group"
                  >
                    <span className="mr-2 opacity-70 group-hover:opacity-100 transition-opacity">{item.icon}</span>
                    <span className="relative">
                      {item.name}
                      <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/*
            Support Resources Section
            Contains links to documentation and support channels
          */}
          <div>
            <h3 className="text-lg font-semibold text-white tracking-wide mb-6 relative inline-block">
              Support
              <span className="absolute -bottom-2 left-0 w-10 h-0.5 bg-primary-500"></span>
            </h3>
            <ul className="space-y-4">
              {[
                { name: 'Documentation', href: '/documentation' },
                { name: 'Installation Guides', href: '/guides' },
                { name: 'API Status', href: '/api-status' },
                { name: 'Case Studies', href: '/case-studies' },
                { name: 'Contact Support', href: '/support' }
              ].map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    className="text-base text-gray-400 hover:text-primary-400 transition-colors duration-300 group"
                  >
                    <span className="relative">
                      {item.name}
                      <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/*
            Social Media and Newsletter Section
            Contains social media icons and newsletter subscription form
          */}
          <div>
            <h3 className="text-lg font-semibold text-white tracking-wide mb-6 relative inline-block">
              Connect With Us
              <span className="absolute -bottom-2 left-0 w-10 h-0.5 bg-primary-500"></span>
            </h3>
            
            {/*
              Social Media Icons Container
              - flex: Horizontal layout for icons
              - space-x-4: Consistent spacing between icons
            */}
            <div className="flex space-x-4">
              {[
                { 
                  name: 'Facebook', 
                  href: '#', 
                  icon: <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                },
                { 
                  name: 'Twitter', 
                  href: '#', 
                  icon: <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                },
                { 
                  name: 'LinkedIn', 
                  href: '#', 
                  icon: <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                  </svg>
                },
                { 
                  name: 'Instagram', 
                  href: '#', 
                  icon: <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.904 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                },
                { 
                  name: 'YouTube', 
                  href: '#', 
                  icon: <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                  </svg>
                }
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 text-gray-400 hover:text-white hover:bg-primary-600 transition-all duration-300 transform hover:-translate-y-1"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            
            {/*
              Newsletter Subscription Section
              Contains form for email subscription
            */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-white tracking-wide mb-4 relative inline-block">
                Stay Updated
                <span className="absolute -bottom-2 left-0 w-10 h-0.5 bg-primary-500"></span>
              </h3>
              
              {subscribed ? (
                <div className="mt-4 p-3 bg-green-500/10 border border-green-500/20 rounded-md text-green-400 text-sm">
                  Thank you for subscribing to our newsletter!
                </div>
              ) : (
                /*
                Newsletter Subscription Form
                - Uses flex layout for responsive design
                - Includes email input and submit button
                */
                <form className="mt-4 space-y-3" onSubmit={handleSubmit}>
                  <div className="relative">
                    <input 
                      aria-label="Email" 
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required 
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 text-base text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300" 
                      placeholder="Enter your email" 
                    />
                    <svg className="absolute right-3 top-3.5 h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"></path>
                    </svg>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full bg-primary-600 border border-transparent rounded-lg py-3 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-primary-500 transition-all duration-300 transform hover:-translate-y-0.5"
                  >
                    Subscribe
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </button>
                </form>
              )}
              
              <p className="mt-3 text-xs text-gray-500">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
        
        {/*
          Footer Bottom Section
          Contains copyright information and policy links
          - border-t: Top border for visual separation
          - flex-col md:flex-row: Responsive layout for copyright and links
        */}
        <div className="mt-16 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-base text-gray-500 flex items-center">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            {new Date().getFullYear()} DuaAxis. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex flex-wrap justify-center gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Sitemap'].map((item) => (
              <a 
                key={item} 
                href="#" 
                className="text-sm text-gray-500 hover:text-primary-400 transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;