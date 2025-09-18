import React, { useState } from 'react';
import { Card } from '../components/Ui';

const Documentation = () => {
  const [activeSection, setActiveSection] = useState('api');

  const documentationSections = {
    api: {
      title: 'API Documentation',
      content: [
        { title: 'Authentication', endpoint: 'POST /auth/login', description: 'Authenticate with the API' },
        { title: 'Get Devices', endpoint: 'GET /devices', description: 'Retrieve list of devices' },
        { title: 'Device Status', endpoint: 'GET /devices/{id}/status', description: 'Get device status' },
        { title: 'Energy Data', endpoint: 'GET /devices/{id}/energy', description: 'Retrieve energy production data' }
      ]
    },
    sdk: {
      title: 'SDK References',
      content: [
        { title: 'JavaScript SDK', endpoint: 'npm install @duaaxis/sdk', description: 'Client-side integration' },
        { title: 'Python SDK', endpoint: 'pip install duaaxis-sdk', description: 'Data analysis integration' },
        { title: 'Mobile SDK', endpoint: 'iOS/Android packages', description: 'Mobile app development' }
      ]
    },
    examples: {
      title: 'Code Examples',
      content: [
        { title: 'Basic Integration', endpoint: 'JavaScript example', description: 'Quick start guide' },
        { title: 'Webhook Setup', endpoint: 'Python example', description: 'Real-time data processing' },
        { title: 'Dashboard Integration', endpoint: 'React example', description: 'Custom dashboard setup' }
      ]
    }
  };

  return (
    <div className="min-h-screen pt-16">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900">Technical Documentation</h1>
          <p className="mt-4 text-lg text-gray-600">Comprehensive technical resources for developers</p>
        </div>

        <div className="flex flex-wrap gap-4 mb-8">
          {Object.keys(documentationSections).map(section => (
            <button
              key={section}
              onClick={() => setActiveSection(section)}
              className={`px-4 py-2 rounded-md ${
                activeSection === section
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {documentationSections[section].title}
            </button>
          ))}
        </div>

        <Card variant="elevated" padding="large">
          <h2 className="text-2xl font-semibold mb-6">{documentationSections[activeSection].title}</h2>
          <div className="space-y-6">
            {documentationSections[activeSection].content.map((item, index) => (
              <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
                <h3 className="text-lg font-medium text-gray-900 mb-2">{item.title}</h3>
                <div className="bg-gray-100 p-4 rounded-md font-mono text-sm mb-2">
                  {item.endpoint}
                </div>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card variant="elevated" padding="large" className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a href="/api-status" className="text-primary-600 hover:text-primary-700">API Status</a>
            <a href="/guides" className="text-primary-600 hover:text-primary-700">Getting Started Guides</a>
            <a href="/support" className="text-primary-600 hover:text-primary-700">Contact Support</a>
          </div>
        </Card>
      </div>

    </div>
  );
};

export default Documentation;