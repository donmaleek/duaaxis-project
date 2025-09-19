import React, { useState } from 'react';
import { Card } from '../components/Ui';

const Guides = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const guideCategories = [
    {
      id: 'installation',
      title: 'Installation Guides',
      icon: '🔧',
      description: 'Step-by-step instructions for setting up your DuaAxis system',
      guides: [
        { 
          title: 'Getting Started with DuaAxis', 
          duration: '15 min', 
          level: 'Beginner',
          description: 'Complete setup guide for new DuaAxis system owners',
          lastUpdated: '2023-11-15',
          downloads: 1245
        },
        { 
          title: 'Hardware Setup Guide', 
          duration: '30 min', 
          level: 'Intermediate',
          description: 'Detailed hardware installation and mounting instructions',
          lastUpdated: '2023-12-01',
          downloads: 892
        },
        { 
          title: 'Network Configuration', 
          duration: '20 min', 
          level: 'Intermediate',
          description: 'Network setup and connectivity configuration',
          lastUpdated: '2023-11-20',
          downloads: 756
        },
        { 
          title: 'Safety Procedures', 
          duration: '25 min', 
          level: 'All Levels',
          description: 'Important safety guidelines for installation and maintenance',
          lastUpdated: '2023-10-15',
          downloads: 1103
        }
      ]
    },
    {
      id: 'configuration',
      title: 'Configuration',
      icon: '⚙️',
      description: 'Optimize your system settings for maximum performance',
      guides: [
        { 
          title: 'System Settings', 
          duration: '10 min', 
          level: 'Beginner',
          description: 'Basic system configuration and preferences',
          lastUpdated: '2023-11-10',
          downloads: 987
        },
        { 
          title: 'Advanced Optimization', 
          duration: '25 min', 
          level: 'Advanced',
          description: 'Advanced performance tuning and optimization techniques',
          lastUpdated: '2023-12-05',
          downloads: 543
        },
        { 
          title: 'API Integration', 
          duration: '45 min', 
          level: 'Advanced',
          description: 'Complete guide to API integration and automation',
          lastUpdated: '2023-11-25',
          downloads: 432
        },
        { 
          title: 'Mobile App Setup', 
          duration: '15 min', 
          level: 'Beginner',
          description: 'Mobile application installation and configuration',
          lastUpdated: '2023-10-20',
          downloads: 876
        }
      ]
    },
    {
      id: 'troubleshooting',
      title: 'Troubleshooting',
      icon: '🔍',
      description: 'Solve common issues and optimize system performance',
      guides: [
        { 
          title: 'Common Issues', 
          duration: '15 min', 
          level: 'Beginner',
          description: 'Solutions for frequently encountered problems',
          lastUpdated: '2023-11-18',
          downloads: 1254
        },
        { 
          title: 'Performance Optimization', 
          duration: '30 min', 
          level: 'Intermediate',
          description: 'Improve system efficiency and energy production',
          lastUpdated: '2023-12-08',
          downloads: 678
        },
        { 
          title: 'Emergency Procedures', 
          duration: '20 min', 
          level: 'All Levels',
          description: 'Emergency protocols and safety measures',
          lastUpdated: '2023-10-30',
          downloads: 765
        },
        { 
          title: 'Seasonal Maintenance', 
          duration: '25 min', 
          level: 'Intermediate',
          description: 'Seasonal maintenance checklist and procedures',
          lastUpdated: '2023-09-15',
          downloads: 543
        }
      ]
    },
    {
      id: 'maintenance',
      title: 'Maintenance',
      icon: '🛠️',
      description: 'Routine maintenance and long-term care for your system',
      guides: [
        { 
          title: 'Routine Maintenance', 
          duration: '20 min', 
          level: 'Beginner',
          description: 'Regular maintenance schedule and tasks',
          lastUpdated: '2023-11-22',
          downloads: 654
        },
        { 
          title: 'Cleaning Procedures', 
          duration: '15 min', 
          level: 'Beginner',
          description: 'Proper cleaning techniques for optimal performance',
          lastUpdated: '2023-10-25',
          downloads: 789
        },
        { 
          title: 'Component Replacement', 
          duration: '30 min', 
          level: 'Advanced',
          description: 'Guide to replacing system components',
          lastUpdated: '2023-12-03',
          downloads: 321
        },
        { 
          title: 'Winter Preparation', 
          duration: '20 min', 
          level: 'Intermediate',
          description: 'Preparing your system for winter conditions',
          lastUpdated: '2023-09-28',
          downloads: 432
        }
      ]
    }
  ];

  const videoTutorials = [
    {
      title: 'Complete Installation Walkthrough',
      duration: '25:30',
      level: 'Intermediate',
      thumbnail: '/video-installation.jpg',
      views: '12.4K',
      uploadDate: '2 weeks ago'
    },
    {
      title: 'Mobile App Configuration Guide',
      duration: '15:45',
      level: 'Beginner',
      thumbnail: '/video-app.jpg',
      views: '8.7K',
      uploadDate: '3 weeks ago'
    },
    {
      title: 'Advanced Performance Optimization',
      duration: '32:15',
      level: 'Advanced',
      thumbnail: '/video-optimization.jpg',
      views: '5.2K',
      uploadDate: '1 month ago'
    },
    {
      title: 'Troubleshooting Common Issues',
      duration: '18:20',
      level: 'All Levels',
      thumbnail: '/video-troubleshooting.jpg',
      views: '9.8K',
      uploadDate: '2 months ago'
    }
  ];

  const allGuides = guideCategories.flatMap(category => 
    category.guides.map(guide => ({ ...guide, category: category.id }))
  );

  const filteredGuides = allGuides.filter(guide => 
    (activeCategory === 'all' || guide.category === activeCategory) &&
    (guide.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
     guide.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const popularGuides = [...allGuides].sort((a, b) => b.downloads - a.downloads).slice(0, 3);

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Guides & Documentation</h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto mb-8">
            Comprehensive resources to help you install, configure, and maintain your DuaAxis solar tracking system
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <span className="font-semibold">50+</span> Detailed Guides
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <span className="font-semibold">20+</span> Video Tutorials
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <span className="font-semibold">24/7</span> Expert Support
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Search guides and documentation..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent shadow-sm"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === 'all'
                ? 'bg-primary-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            All Guides
          </button>
          {guideCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category.id
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Popular Guides */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Most Popular Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {popularGuides.map((guide, index) => (
              <Card key={index} variant="elevated" padding="medium" className="hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start justify-between mb-3">
                  <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-1 rounded">
                    {guide.level}
                  </span>
                  <span className="text-xs text-gray-500">{guide.duration}</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{guide.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{guide.description}</p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{guide.downloads.toLocaleString()} downloads</span>
                  <span>Updated {guide.lastUpdated}</span>
                </div>
                <button className="w-full mt-4 bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-md transition-colors">
                  View Guide
                </button>
              </Card>
            ))}
          </div>
        </div>

        {/* All Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {guideCategories.map((category) => (
            <Card key={category.id} variant="elevated" padding="large" className="hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">{category.icon}</span>
                <h2 className="text-xl font-semibold text-primary-600">{category.title}</h2>
              </div>
              <p className="text-gray-600 mb-6">{category.description}</p>
              <div className="space-y-4">
                {category.guides.map((guide, guideIndex) => (
                  <div key={guideIndex} className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-medium text-gray-900">{guide.title}</h3>
                      <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded ml-2 whitespace-nowrap">
                        {guide.duration}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{guide.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-1 rounded">
                        {guide.level}
                      </span>
                      <span className="text-xs text-gray-500">{guide.downloads.toLocaleString()} downloads</span>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-6 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-md transition-colors">
                View All {category.title}
              </button>
            </Card>
          ))}
        </div>

        {/* Video Tutorials */}
        <Card variant="elevated" padding="large" className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Video Tutorials</h2>
              <p className="text-gray-600">Watch step-by-step video guides for visual learning</p>
            </div>
            <button className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-md transition-colors">
              View All Videos
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {videoTutorials.map((video, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg aspect-video flex items-center justify-center mb-3 relative overflow-hidden">
                  <div className="text-white text-4xl">▶️</div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-primary-600 transition-colors">
                    {video.title}
                  </h3>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="bg-gray-100 px-2 py-1 rounded text-xs mr-2">{video.level}</span>
                    <span>{video.views} views</span>
                    <span className="mx-2">•</span>
                    <span>{video.uploadDate}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Support CTA */}
        <Card variant="elevated" padding="large" className="bg-primary-50 border-primary-100">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Additional Help?</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our technical support team is available 24/7 to assist you with any questions or issues
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-md transition-colors">
                Contact Support
              </button>
              <button className="border border-primary-600 text-primary-600 hover:bg-primary-50 font-medium py-3 px-6 rounded-md transition-colors">
                Schedule a Call
              </button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Guides;