import React, { useState, useEffect, useCallback, useRef } from 'react';
import Hero from '../sections/Hero';
import Stats from '../sections/Stats';
import About from '../sections/About';
import Features from '../sections/Features';
import ProblemSolution from '../sections/ProblemSolution';
import Testimonials from '../sections/Testimonials';
import Contact from '../sections/Contact';

// Enhanced AI response system
const AI_RESPONSES = {
  GREETINGS: {
    patterns: ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening'],
    responses: [
      "Hello! I'm Sarah, your solar energy consultant at DuaAxis. How can I help you today? 🌞",
      "Hi there! Welcome to DuaAxis. I'm here to answer all your solar tracking questions!",
      "Greetings! I'm Sarah from DuaAxis. Ready to explore how solar tracking can transform your energy production?"
    ]
  },
  PRODUCT_INFO: {
    patterns: ['product', 'tracker', 'system', 'technology', 'how it works', 'features'],
    responses: [
      "Our dual-axis solar trackers increase energy production by up to 45% compared to fixed systems! They automatically follow the sun's path throughout the day for maximum efficiency. ☀️",
      "DuaAxis trackers use advanced AI algorithms to optimize sun positioning in real-time. Our systems feature weather adaptation, remote monitoring, and 25-year durability.",
      "The magic is in our dual-axis design - it tracks both daily east-west movement and seasonal north-south changes. This ensures optimal angle year-round!"
    ]
  },
  PRICING: {
    patterns: ['price', 'cost', 'how much', 'investment', 'affordable'],
    responses: [
      "Our systems start at $15,000 for residential installations, with commercial solutions beginning at $50,000. Would you like a personalized quote? 💰",
      "The investment varies based on your energy needs and location. On average, our customers see ROI within 3-5 years through energy savings!",
      "We offer flexible financing options and can help you explore available solar incentives and tax credits in your area."
    ]
  },
  INSTALLATION: {
    patterns: ['install', 'setup', 'time', 'how long', 'process'],
    responses: [
      "Installation typically takes 2-4 days for residential systems. Our certified team handles everything from site assessment to grid connection! 🛠️",
      "The process includes site evaluation, custom design, installation, and commissioning. We ensure minimal disruption to your operations.",
      "Most commercial installations are completed within 2-3 weeks, depending on system size and site complexity."
    ],
  },
  BENEFITS: {
    patterns: ['benefit', 'advantage', 'why', 'better', 'efficiency'],
    responses: [
      "DuaAxis trackers boost energy production by 35-45%, reduce payback period by 2 years, and increase property value! 📈",
      "Beyond higher efficiency, our systems provide reliable performance in various weather conditions and come with comprehensive monitoring.",
      "You'll enjoy maximum energy harvest, reduced carbon footprint, and long-term energy cost stability with our advanced tracking technology."
    ]
  },
  MAINTENANCE: {
    patterns: ['maintenance', 'service', 'repair', 'warranty', 'support'],
    responses: [
      "Our systems require minimal maintenance - just semi-annual inspections. We offer 10-year comprehensive warranty with 24/7 remote monitoring! 🔧",
      "DuaAxis provides proactive maintenance alerts and has service teams across major regions. Most issues can be resolved remotely through our monitoring system.",
      "We offer tiered service packages from basic monitoring to full maintenance programs. All systems include 5 years of complimentary remote support."
    ]
  },
  CONTACT: {
    patterns: ['contact', 'speak', 'talk', 'meeting', 'consultation'],
    responses: [
      "I'd be happy to connect you with our solar experts! You can call us at +20 2 1234 5678 or schedule a consultation through our website. 📞",
      "Our team is available Monday-Friday 8AM-6PM. Would you like me to schedule a callback with one of our energy consultants?",
      "For immediate assistance, call our support line. For detailed project discussions, I recommend booking a virtual meeting with our engineering team."
    ]
  },
  DEFAULT: {
    responses: [
      "That's an interesting question about solar energy! While I specialize in DuaAxis tracking systems, our human experts would be perfect for detailed discussions. Would you like me to connect you with a solar consultant?",
      "I'm constantly learning about solar technology! For specific technical questions, our engineering team has the deepest expertise. Shall I arrange a consultation?",
      "Great question! Our solar specialists have extensive experience with similar inquiries. I can have them contact you with a comprehensive answer."
    ]
  }
};

const CHAT_STATES = {
  MINIMIZED: 'minimized',
  OPEN: 'open',
  MAXIMIZED: 'maximized'
};

const Home = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [chatState, setChatState] = useState(CHAT_STATES.MINIMIZED);
  const [unreadMessages, setUnreadMessages] = useState(0);
  const [isOnline, setIsOnline] = useState(true);
  const [systemNotification, setSystemNotification] = useState(null);
  const [chatMessages, setChatMessages] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);
  
  const chatContainerRef = useRef(null);
  const messagingTimeoutRef = useRef(null);
  const notificationTimeoutRef = useRef(null);

  // Site wellbeing initialization
  const initializeSiteWellbeing = useCallback(() => {
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

    // Check if user has previously interacted with chat
    const hasChatHistory = localStorage.getItem('duaaxis-chat-history');
    if (hasChatHistory) {
      setChatHistory(JSON.parse(hasChatHistory));
    }
  }, []);

  // Initialize chat with welcome message when opened
  useEffect(() => {
    if (chatState !== CHAT_STATES.MINIMIZED && chatMessages.length === 0) {
      const welcomeMessage = {
        id: Date.now(),
        text: "Hello! I'm Sarah, your solar energy consultant at DuaAxis. I can help you with:\n\n• Product information & features\n• Pricing & financing options\n• Installation process & timeline\n• System benefits & efficiency\n• Maintenance & support\n\nHow can I assist you with solar tracking today? 🌞",
        sender: 'ai',
        timestamp: new Date()
      };
      setChatMessages([welcomeMessage]);
    }
  }, [chatState, chatMessages.length]);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatMessages, isTyping]);

  // Enhanced initialization
  useEffect(() => {
    initializeSiteWellbeing();
    
    const timer = setTimeout(() => {
      setIsLoading(false);
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
  }, [initializeSiteWellbeing]);

  // AI Response Generator
  const generateAIResponse = useCallback((userMessage) => {
    const message = userMessage.toLowerCase();
    
    // Check for matching categories
    for (const [category, data] of Object.entries(AI_RESPONSES)) {
      if (category === 'DEFAULT') continue;
      
      const hasMatch = data.patterns.some(pattern => message.includes(pattern));
      if (hasMatch) {
        const randomResponse = data.responses[Math.floor(Math.random() * data.responses.length)];
        return randomResponse;
      }
    }
    
    // Fallback to default response
    const defaultResponse = AI_RESPONSES.DEFAULT.responses[
      Math.floor(Math.random() * AI_RESPONSES.DEFAULT.responses.length)
    ];
    return defaultResponse;
  }, []);

  // Chat state management
  const openChat = () => {
    setChatState(CHAT_STATES.OPEN);
    setUnreadMessages(0);
  };

  const maximizeChat = () => {
    setChatState(CHAT_STATES.MAXIMIZED);
  };

  const minimizeChat = () => {
    setChatState(CHAT_STATES.OPEN);
  };

  const closeChat = () => {
    setChatState(CHAT_STATES.MINIMIZED);
  };

  const toggleChat = () => {
    if (chatState === CHAT_STATES.MINIMIZED) {
      openChat();
    } else {
      closeChat();
    }
  };

  const showSystemNotification = (title, message, type = 'info') => {
    setSystemNotification({ title, message, type, id: Date.now() });
    clearTimeout(notificationTimeoutRef.current);
    notificationTimeoutRef.current = setTimeout(() => {
      setSystemNotification(null);
    }, 5000);
  };

  const sendMessage = async () => {
    if (!userInput.trim()) return;

    // Add user message
    const userMessage = {
      id: Date.now(),
      text: userInput,
      sender: 'user',
      timestamp: new Date()
    };

    setChatMessages(prev => [...prev, userMessage]);
    setUserInput('');
    setIsTyping(true);

    // Simulate AI thinking
    setTimeout(() => {
      const aiResponse = generateAIResponse(userInput);
      const aiMessage = {
        id: Date.now() + 1,
        text: aiResponse,
        sender: 'ai',
        timestamp: new Date()
      };
      
      setChatMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
      
      // Add to chat history for context
      const newChatHistory = [...chatHistory, { user: userInput, ai: aiResponse }];
      setChatHistory(newChatHistory);
      localStorage.setItem('duaaxis-chat-history', JSON.stringify(newChatHistory));
    }, 1500 + Math.random() * 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const quickReplies = [
    "How much does it cost?",
    "What's the installation time?",
    "Tell me about benefits",
    "Maintenance requirements?",
    "Speak to human expert"
  ];

  const handleQuickReply = (reply) => {
    setUserInput(reply);
    setTimeout(() => {
      sendMessage();
    }, 100);
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
      {/* Floating Navigation */}
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
            width: `${(navItems.findIndex(item => item.id === activeSection) + 1) / navItems.length * 100}%`
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
          </div>
        </div>
      </div>

      {/* Enhanced Live Chat Widget - Minimized State */}
      {chatState === CHAT_STATES.MINIMIZED && (
        <div className="fixed bottom-6 right-6 z-50">
          <div className="relative">
            <button 
              onClick={toggleChat}
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
            
            <div className="absolute -top-1 -left-1">
              <div className={`w-3 h-3 rounded-full border-2 border-white ${isOnline ? 'bg-green-500' : 'bg-gray-400'}`}></div>
            </div>
          </div>
        </div>
      )}

      {/* Live Chat Interface - Open State */}
      {chatState === CHAT_STATES.OPEN && (
        <div className="fixed bottom-24 right-6 w-80 sm:w-96 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 z-50 animate-in slide-in-from-bottom duration-500">
          <div className="p-4 border-b border-gray-200/60">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">SA</span>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Sarah - Solar Expert</h3>
                  <p className="text-xs text-green-600">Online • Ready to help</p>
                </div>
              </div>
              <div className="flex items-center space-x-1">
                <button 
                  onClick={maximizeChat}
                  className="text-gray-400 hover:text-gray-600 transition-colors p-1"
                  title="Maximize"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                  </svg>
                </button>
                <button 
                  onClick={closeChat}
                  className="text-gray-400 hover:text-gray-600 transition-colors p-1"
                  title="Minimize"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Chat Messages */}
          <div 
            ref={chatContainerRef}
            className="p-4 max-h-80 overflow-y-auto space-y-4"
          >
            {chatMessages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl p-3 ${
                    message.sender === 'user'
                      ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-br-none'
                      : 'bg-gray-100 text-gray-800 rounded-bl-none'
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                  <p className={`text-xs mt-1 ${
                    message.sender === 'user' ? 'text-primary-100' : 'text-gray-500'
                  }`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-800 rounded-2xl rounded-bl-none p-3">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Quick Replies */}
          {chatMessages.length <= 2 && (
            <div className="px-4 pb-2">
              <div className="flex flex-wrap gap-2">
                {quickReplies.map((reply, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickReply(reply)}
                    className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1.5 rounded-full transition-colors duration-200"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input Area */}
          <div className="p-4 border-t border-gray-200/60">
            <div className="flex space-x-2">
              <div className="flex-1 relative">
                <textarea
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  rows="1"
                  className="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none pr-10"
                  style={{ minHeight: '40px', maxHeight: '100px' }}
                />
                <button 
                  onClick={sendMessage}
                  disabled={!userInput.trim()}
                  className={`absolute right-2 bottom-2 p-1 rounded-lg transition-colors ${
                    userInput.trim() 
                      ? 'bg-primary-600 hover:bg-primary-700 text-white' 
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
            </div>
            <p className="text-xs text-gray-500 text-center mt-2">
              Typically replies in seconds • AI-powered assistance
            </p>
          </div>
        </div>
      )}

      {/* Live Chat Interface - Maximized State */}
      {chatState === CHAT_STATES.MAXIMIZED && (
        <div className="fixed inset-4 sm:inset-10 lg:inset-20 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 z-50 animate-in zoom-in duration-500">
          <div className="flex flex-col h-full">
            <div className="p-4 border-b border-gray-200/60">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold text-lg">SA</span>
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">Sarah - Solar Energy Consultant</h3>
                    <p className="text-sm text-green-600">Online • Ready to help with all your solar questions</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button 
                    onClick={minimizeChat}
                    className="text-gray-400 hover:text-gray-600 transition-colors p-2"
                    title="Restore"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                    </svg>
                  </button>
                  <button 
                    onClick={closeChat}
                    className="text-gray-400 hover:text-gray-600 transition-colors p-2"
                    title="Close"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Chat Messages - Maximized */}
            <div 
              ref={chatContainerRef}
              className="flex-1 p-6 overflow-y-auto space-y-4"
            >
              {chatMessages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[70%] rounded-2xl p-4 ${
                      message.sender === 'user'
                        ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-br-none'
                        : 'bg-gray-100 text-gray-800 rounded-bl-none'
                    }`}
                  >
                    <p className="text-base whitespace-pre-wrap">{message.text}</p>
                    <p className={`text-sm mt-2 ${
                      message.sender === 'user' ? 'text-primary-100' : 'text-gray-500'
                    }`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 text-gray-800 rounded-2xl rounded-bl-none p-4">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-3 h-3 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-3 h-3 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Quick Replies - Maximized */}
            {chatMessages.length <= 2 && (
              <div className="px-6 pb-4">
                <div className="flex flex-wrap gap-3">
                  {quickReplies.map((reply, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickReply(reply)}
                      className="text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-full transition-colors duration-200"
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Area - Maximized */}
            <div className="p-6 border-t border-gray-200/60">
              <div className="flex space-x-3">
                <div className="flex-1 relative">
                  <textarea
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message about solar energy, pricing, installation, or anything else..."
                    rows="2"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none pr-12"
                    style={{ minHeight: '60px', maxHeight: '120px' }}
                  />
                  <button 
                    onClick={sendMessage}
                    disabled={!userInput.trim()}
                    className={`absolute right-3 bottom-3 p-2 rounded-lg transition-colors ${
                      userInput.trim() 
                        ? 'bg-primary-600 hover:bg-primary-700 text-white' 
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </button>
                </div>
              </div>
              <p className="text-sm text-gray-500 text-center mt-3">
                AI-powered solar energy assistance • Typically replies in seconds
              </p>
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