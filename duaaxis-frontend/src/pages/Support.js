import React, { useState } from 'react';
import { Card } from '../components/Ui';

const Support = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    issueType: 'Technical Issue',
    description: '',
    urgency: 'Medium',
    projectId: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState('contact');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        issueType: 'Technical Issue',
        description: '',
        urgency: 'Medium',
        projectId: ''
      });
    }, 5000);
  };

  const supportChannels = [
    {
      title: "Email Support",
      contact: "support@duaaxis.com",
      description: "Typically respond within 2 hours",
      icon: "✉️",
      hours: "24/7",
      responseTime: "2 hours"
    },
    {
      title: "Phone Support",
      contact: "+20 2 1234 5678",
      description: "Direct line to our support team",
      icon: "📞",
      hours: "Sun-Thu, 8AM-6PM EET",
      responseTime: "Immediate"
    },
    {
      title: "Live Chat",
      contact: "Available on dashboard",
      description: "Instant messaging with our technicians",
      icon: "💬",
      hours: "24/7 for urgent issues",
      responseTime: "< 5 minutes"
    },
    {
      title: "Emergency Line",
      contact: "+20 100 123 4567",
      description: "For critical system outages",
      icon: "🚨",
      hours: "24/7",
      responseTime: "Immediate"
    }
  ];

  const faqs = [
    {
      question: "How do I reset my system password?",
      answer: "You can reset your password through the dashboard settings or contact support for assistance."
    },
    {
      question: "What is your typical response time for support tickets?",
      answer: "We aim to respond to all tickets within 2 hours during business hours and within 4 hours outside business hours."
    },
    {
      question: "Do you offer on-site support?",
      answer: "Yes, we offer on-site support for all installations within Egypt. Remote support is available for international clients."
    },
    {
      question: "How can I check my system's performance?",
      answer: "You can monitor your system's performance in real-time through our customer dashboard or mobile app."
    }
  ];

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">We're Here to Help</h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto mb-8">
            Our expert support team is ready to assist you with any questions or issues you may have with your DuaAxis system
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <span className="font-semibold">24/7</span> Technical Support
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <span className="font-semibold">98%</span> Customer Satisfaction
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <span className="font-semibold">&lt; 2h</span> Average Response Time
            </div>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto">
            {[
              { id: 'contact', label: 'Contact Support' },
              { id: 'faq', label: 'FAQs' },
              { id: 'resources', label: 'Resources' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 font-medium text-sm border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-primary-600 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {activeTab === 'contact' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Support Channels */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">Support Channels</h2>
              <div className="grid grid-cols-1 gap-6">
                {supportChannels.map((channel, index) => (
                  <Card key={index} variant="elevated" padding="medium" className="hover:shadow-lg transition-shadow">
                    <div className="flex items-start">
                      <div className="text-2xl mr-4">{channel.icon}</div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{channel.title}</h3>
                        <p className="text-primary-600 font-medium">{channel.contact}</p>
                        <div className="flex flex-wrap gap-4 mt-2">
                          <span className="text-sm text-gray-600 flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            {channel.hours}
                          </span>
                          <span className="text-sm text-gray-600 flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                            </svg>
                            Response: {channel.responseTime}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mt-2">{channel.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Support Stats */}
              <Card variant="elevated" padding="medium" className="bg-primary-50 border-primary-100">
                <h3 className="font-semibold text-gray-900 mb-4">Our Support Commitment</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary-600">24/7</div>
                    <div className="text-sm text-gray-600">Monitoring</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary-600">98%</div>
                    <div className="text-sm text-gray-600">Satisfaction Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary-600">15min</div>
                    <div className="text-sm text-gray-600">Emergency Response</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary-600">100%</div>
                    <div className="text-sm text-gray-600">Egypt-based Team</div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Support Form */}
            <div>
              <Card variant="elevated" padding="large">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Submit a Support Request</h2>
                
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Request Submitted Successfully!</h3>
                    <p className="text-gray-600">We'll get back to you within 2 hours. For urgent issues, please call our emergency line.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Project ID (if applicable)</label>
                      <input
                        type="text"
                        name="projectId"
                        value={formData.projectId}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                        placeholder="DX-XXXX-XXXX"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Issue Type *</label>
                        <select
                          name="issueType"
                          value={formData.issueType}
                          onChange={handleChange}
                          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                        >
                          <option value="Technical Issue">Technical Issue</option>
                          <option value="Billing Question">Billing Question</option>
                          <option value="Feature Request">Feature Request</option>
                          <option value="General Inquiry">General Inquiry</option>
                          <option value="Emergency Outage">Emergency Outage</option>
                          <option value="Maintenance Request">Maintenance Request</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Urgency *</label>
                        <select
                          name="urgency"
                          value={formData.urgency}
                          onChange={handleChange}
                          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                        >
                          <option value="Low">Low</option>
                          <option value="Medium">Medium</option>
                          <option value="High">High</option>
                          <option value="Critical">Critical</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Description *</label>
                      <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        rows="5"
                        required
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                        placeholder="Please describe your issue in detail..."
                      />
                    </div>

                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="attach-files"
                        className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                      />
                      <label htmlFor="attach-files" className="ml-2 text-sm text-gray-600">
                        Attach screenshots or files (max 5MB)
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 transform hover:-translate-y-0.5 shadow-md"
                    >
                      Submit Request
                    </button>
                  </form>
                )}
              </Card>
            </div>
          </div>
        )}

        {activeTab === 'faq' && (
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index} variant="elevated" padding="medium" className="hover:shadow-lg transition-shadow">
                  <details className="group">
                    <summary className="flex justify-between items-center font-semibold text-gray-900 cursor-pointer list-none">
                      <span>{faq.question}</span>
                      <span className="transition-transform group-open:rotate-180">▼</span>
                    </summary>
                    <div className="mt-4 text-gray-600">
                      {faq.answer}
                    </div>
                  </details>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'resources' && (
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Support Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card variant="elevated" padding="medium" className="text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">📚</div>
                <h3 className="font-semibold text-gray-900 mb-2">Documentation</h3>
                <p className="text-gray-600 mb-4">Comprehensive guides and manuals</p>
                <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg transition-colors">
                  View Documentation
                </button>
              </Card>
              <Card variant="elevated" padding="medium" className="text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🎥</div>
                <h3 className="font-semibold text-gray-900 mb-2">Video Tutorials</h3>
                <p className="text-gray-600 mb-4">Step-by-step installation guides</p>
                <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg transition-colors">
                  Watch Videos
                </button>
              </Card>
              <Card variant="elevated" padding="medium" className="text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🔧</div>
                <h3 className="font-semibold text-gray-900 mb-2">Maintenance Guides</h3>
                <p className="text-gray-600 mb-4">Routine maintenance procedures</p>
                <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg transition-colors">
                  Download Guides
                </button>
              </Card>
              <Card variant="elevated" padding="medium" className="text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="font-semibold text-gray-900 mb-2">API Documentation</h3>
                <p className="text-gray-600 mb-4">Integration guides for developers</p>
                <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg transition-colors">
                  View API Docs
                </button>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Support;