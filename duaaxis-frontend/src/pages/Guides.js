import React from 'react';
import { Card } from '../components/Ui';

const Guides = () => {
  const guideCategories = [
    {
      title: 'Installation',
      guides: [
        { title: 'Getting Started with DuaAxis', duration: '15 min', level: 'Beginner' },
        { title: 'Hardware Setup Guide', duration: '30 min', level: 'Intermediate' },
        { title: 'Network Configuration', duration: '20 min', level: 'Intermediate' }
      ]
    },
    {
      title: 'Configuration',
      guides: [
        { title: 'System Settings', duration: '10 min', level: 'Beginner' },
        { title: 'Advanced Optimization', duration: '25 min', level: 'Advanced' },
        { title: 'API Integration', duration: '45 min', level: 'Advanced' }
      ]
    },
    {
      title: 'Troubleshooting',
      guides: [
        { title: 'Common Issues', duration: '15 min', level: 'Beginner' },
        { title: 'Performance Optimization', duration: '30 min', level: 'Intermediate' },
        { title: 'Emergency Procedures', duration: '20 min', level: 'All Levels' }
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-16">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900">Guides & Documentation</h1>
          <p className="mt-4 text-lg text-gray-600">Learn how to get the most out of your DuaAxis system</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {guideCategories.map((category, index) => (
            <Card key={index} variant="elevated" padding="large" hover={true}>
              <h2 className="text-xl font-semibold mb-4 text-primary-600">{category.title}</h2>
              <div className="space-y-3">
                {category.guides.map((guide, guideIndex) => (
                  <div key={guideIndex} className="border-b border-gray-200 pb-3 last:border-b-0">
                    <h3 className="font-medium text-gray-900">{guide.title}</h3>
                    <div className="flex items-center text-sm text-gray-600 mt-1">
                      <span>{guide.duration}</span>
                      <span className="mx-2">•</span>
                      <span className="bg-gray-100 px-2 py-1 rounded text-xs">{guide.level}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <Card variant="elevated" padding="large">
          <h2 className="text-xl font-semibold mb-4">Video Tutorials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-100 rounded-lg p-4 aspect-video flex items-center justify-center">
              <span className="text-gray-500">Video Placeholder: Installation Walkthrough</span>
            </div>
            <div className="bg-gray-100 rounded-lg p-4 aspect-video flex items-center justify-center">
              <span className="text-gray-500">Video Placeholder: Configuration Guide</span>
            </div>
          </div>
        </Card>
      </div>

    </div>
  );
};

export default Guides;