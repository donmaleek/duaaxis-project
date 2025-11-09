import React, { useState, useEffect, useCallback, useRef } from 'react';
import Hero from '../sections/Hero';
import Stats from '../sections/Stats';
import About from '../sections/About';
import Features from '../sections/Features';
import ProblemSolution from '../sections/ProblemSolution';
import Testimonials from '../sections/Testimonials';
import Contact from '../sections/Contact';

// Enhanced messaging system
const MESSAGING_FEATURES = {
  QUICK_CONTACT: 'quick_contact',
  LIVE_CHAT: 'live_chat',
  APPOINTMENT: 'appointment',
  SUPPORT: 'support'
};

const Home = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [activeMessaging, setActiveMessaging] = useState(null);
  const [unreadMessages, setUnreadMessages] = useState(0);
  const [isOnline, setIsOnline] = useState(true);
  const [systemNotification, setSystemNotification] = useState(null);
  
  // Cookie state management (from previous implementation)
  const [cookieConsent, setCookieConsent] = useState(null);
  const [showCookieBanner, setShowCookieBanner] = useState(false);
  const [showCookieSettings, setShowCookieSettings] = useState(false);
  const [cookiePreferences, setCookiePreferences] = useState({
    NECESSARY: { id: 'necessary', name: 'Necessary Cookies', description: 'Essential for website functionality', required: true, enabled: true },
    ANALYTICS: { id: 'analytics', name: 'Analytics Cookies', description: 'Help us understand visitor interactions', required: false, enabled: false },
    MARKETING: { id: 'marketing', name: 'Marketing Cookies', description: 'Personalize ads and content', required: false, enabled: false },
    PREFERENCES: { id: 'preferences', name: 'Preference Cookies', description: 'Remember your settings', required: false, enabled: false }
  });

  const messagingTimeoutRef = useRef(null);
  const notificationTimeoutRef = useRef(null);

  // Enhanced initialization
  useEffect(() => {
    initializeSiteWellbeing();
    
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Show welcome notification after load
      showSystemNotification('Welcome to DuaAxis!', 'Discover solar tracking excellence', 'info');
    }, 1500);

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
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

    // Network status monitoring
    const handleOnline = () => {
      setIsOnline(true);
      showSystemNotification('You are back online', 'Connection restored', 'success');
    };

    const handleOffline = () => {
      setIsOnline(false);
      showSystemNotification('You are offline', 'Some features may be limited', 'warning');
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      clearTimeout(timer);
      clearTimeout(messagingTimeoutRef.current);
      clearTimeout(notificationTimeoutRef.current);
    };
  }, []);

  // Site wellbeing initialization
  const initializeSiteWellbeing = () => {
    // Check preferred theme
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('duaaxis-theme');
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add('dark');
    }

    // Initialize reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      document.documentElement.classList.add('reduce-motion');
    }
  };

  // Enhanced messaging system
  const showMessagingFeature = (feature) => {
    setActiveMessaging(feature);
    // Auto-hide after 30 seconds of inactivity
    clearTimeout(messagingTimeoutRef.current);
    messagingTimeoutRef.current = setTimeout(() => {
      setActiveMessaging(null);
    }, 30000);
  };

  const showSystemNotification = (title, message, type = 'info') => {
    setSystemNotification({ title, message, type, id: Date.now() });
    
    clearTimeout(notificationTimeoutRef.current);
    notificationTimeoutRef.current = setTimeout(() => {
      setSystemNotification(null);
    }, 5000);
  };

  const startLiveChat = () => {
    showMessagingFeature(MESSAGING_FEATURES.LIVE_CHAT);
    setUnreadMessages(0);
    // Simulate initial message
    setTimeout(() => {
      setUnreadMessages(prev => prev + 1);
    }, 1000);
  };

  const scheduleAppointment = () => {
    showMessagingFeature(MESSAGING_FEATURES.APPOINTMENT);
  };

  // Enhanced scroll functions
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      setActiveSection(sectionId);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ 
      top: 0, 
      behavior: 'smooth' 
    });
    setActiveSection('hero');
  };

  // Navigation items
  const navItems = [
    { id: 'hero', label: 'Home', icon: '🏠' },
    { id: 'stats', label: 'Performance', icon: '📊' },
    { id: 'about', label: 'About', icon: '👥' },
    { id: 'features', label: 'Features', icon: '⭐' },
    { id: 'problem', label: 'Why DuaAxis', icon: '💡' },
    { id: 'testimonials', label: 'Testimonials', icon: '💬' },
    { id: 'contact', label: 'Contact', icon: '📞' }
  ];

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 flex items-center justify-center z-50">
        <div className="text-center">
          <div className="relative">
            <div className="w-20 h-20 border-4 border-white/20 border-t-white rounded-full animate-spin mx-auto mb-4"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 bg-gradient-to-r from-secondary-400 to-secondary-600 rounded-full animate-pulse"></div>
            </div>
          </div>
          <div className="text-white text-xl font-bold mb-2 animate-pulse">DuaAxis</div>
          <div className="text-white/80 text-sm">Solar Tracking Excellence</div>
          <div className="mt-4 text-white/60 text-xs">Loading your sustainable future...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 relative min-h-screen bg-gradient-to-br from-white via-gray-50 to-primary-50/30">
      {/* Enhanced Floating Navigation */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
        <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl p-3 border border-white/20">
          <div className="space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`group relative flex items-center justify-center w-4 h-4 rounded-full transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-primary-500 to-secondary-500 scale-125 shadow-lg'
                    : 'bg-gray-300/80 hover:bg-primary-300/80 hover:scale-110'
                }`}
                aria-label={`Scroll to ${item.label}`}
                title={item.label}
              >
                <span className="absolute -left-8 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap text-xs font-medium text-gray-700 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg shadow-lg">
                  {item.icon} {item.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Progress Bar */}
      <div className="fixed top-16 left-0 w-full h-1 bg-gray-200/50 z-40 backdrop-blur-sm">
        <div 
          className="h-full bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 transition-all duration-500 ease-out shadow-lg"
          style={{ 
            width: `${(navItems.findIndex(item => item.id === activeSection) + 1) / navItems.length * 100}%`,
            backgroundSize: '200% 100%',
            animation: 'gradientShift 3s ease infinite'
          }}
        />
      </div>

      {/* Enhanced Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 bg-gradient-to-br from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white p-4 rounded-2xl shadow-2xl transition-all duration-300 transform hover:scale-110 hover:shadow-2xl z-40 group"
          aria-label="Scroll to top"
        >
          <svg className="w-5 h-5 transform group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
          <div className="absolute inset-0 rounded-2xl bg-white/20 animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
        </button>
      )}

      {/* Enhanced Quick Contact Floating Button */}
      <div className="fixed bottom-6 left-6 z-40 hidden lg:block">
        <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl p-4 border border-white/20 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
          <div className="text-center">
            <div className="w-14 h-14 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div className="text-sm font-bold text-gray-900 mb-1">Need Help?</div>
            <div className="text-xs text-gray-600 mb-3">Solar Experts Available</div>
            <div className="space-y-1">
              <a
                href="tel:+20212345678"
                className="text-primary-600 hover:text-primary-700 text-sm font-semibold block transition-colors"
              >
                +20 2 1234 5678
              </a>
              <a
                href="mailto:info@duaaxis.com"
                className="text-secondary-600 hover:text-secondary-700 text-xs block transition-colors"
              >
                info@duaaxis.com
              </a>
            </div>
            <button 
              onClick={scheduleAppointment}
              className="mt-3 w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white text-xs font-semibold py-2 px-3 rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              Schedule Call
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Live Chat Widget */}
      <div className="fixed bottom-6 right-6 z-40">
        <div className="relative">
          <button 
            onClick={startLiveChat}
            className="bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-4 rounded-2xl shadow-2xl transition-all duration-300 transform hover:scale-110 hover:shadow-2xl group"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            {unreadMessages > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                {unreadMessages}
              </span>
            )}
            <div className="absolute inset-0 rounded-2xl bg-white/20 animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
          </button>
          
          {/* Chat status indicator */}
          <div className="absolute -top-1 -left-1">
            <div className={`w-3 h-3 rounded-full border-2 border-white ${isOnline ? 'bg-green-500' : 'bg-gray-400'}`}></div>
          </div>
        </div>
      </div>

      {/* Enhanced Messaging Features */}
      {activeMessaging === MESSAGING_FEATURES.LIVE_CHAT && (
        <div className="fixed bottom-24 right-6 w-80 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 z-50 animate-in slide-in-from-bottom duration-500">
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <h3 className="font-bold text-gray-900">Live Chat</h3>
              </div>
              <button 
                onClick={() => setActiveMessaging(null)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          <div className="p-4 max-h-60 overflow-y-auto">
            <div className="space-y-3">
              <div className="bg-primary-100 rounded-2xl rounded-tl-none p-3">
                <p className="text-sm text-gray-800">Hello! I'm Sarah, your solar energy consultant. How can I help you today?</p>
              </div>
            </div>
          </div>
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <input 
                type="text" 
                placeholder="Type your message..."
                className="flex-1 border border-gray-300 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <button className="bg-primary-600 hover:bg-primary-700 text-white p-2 rounded-xl transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* System Notifications */}
      {systemNotification && (
        <div className={`fixed top-24 right-6 max-w-sm bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border-l-4 ${
          systemNotification.type === 'success' ? 'border-green-500' :
          systemNotification.type === 'warning' ? 'border-yellow-500' :
          systemNotification.type === 'error' ? 'border-red-500' : 'border-primary-500'
        } z-50 animate-in slide-in-from-right duration-500`}>
          <div className="p-4">
            <div className="flex items-start space-x-3">
              <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                systemNotification.type === 'success' ? 'bg-green-100 text-green-600' :
                systemNotification.type === 'warning' ? 'bg-yellow-100 text-yellow-600' :
                systemNotification.type === 'error' ? 'bg-red-100 text-red-600' : 'bg-primary-100 text-primary-600'
              }`}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {systemNotification.type === 'success' ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  )}
                </svg>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 text-sm">{systemNotification.title}</h4>
                <p className="text-gray-600 text-sm mt-1">{systemNotification.message}</p>
              </div>
              <button 
                onClick={() => setSystemNotification(null)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Network Status Indicator */}
      {!isOnline && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-white px-4 py-2 rounded-lg shadow-lg z-50 animate-bounce">
          <div className="flex items-center space-x-2 text-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
            <span>You are currently offline</span>
          </div>
        </div>
      )}

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

      {/* Enhanced Cookie Consent Banner (from previous implementation) */}
      {showCookieBanner && (
        <div className="fixed bottom-4 left-4 right-4 max-w-4xl mx-auto bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 z-50 animate-in slide-in-from-bottom duration-500">
          {/* ... cookie banner content from previous implementation ... */}
        </div>
      )}

      <style jsx>{`
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .reduce-motion * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      `}</style>
    </div>
  );
};

export default Home;