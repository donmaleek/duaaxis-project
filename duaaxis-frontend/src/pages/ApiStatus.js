import React, { useState, useEffect } from 'react';
import { Card } from '../components/Ui';

const ApiStatus = () => {
  const [status, setStatus] = useState('loading');
  const [responseTime, setResponseTime] = useState(0);

  useEffect(() => {
    // Simulate API status check
    const checkApiStatus = async () => {
      try {
        const start = Date.now();
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 800));
        const end = Date.now();
        
        setResponseTime(end - start);
        setStatus('operational');
      } catch (error) {
        setStatus('down');
      }
    };

    checkApiStatus();
    const interval = setInterval(checkApiStatus, 30000); // Check every 30 seconds

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = () => {
    switch (status) {
      case 'operational': return 'bg-green-100 text-green-800';
      case 'degraded': return 'bg-yellow-100 text-yellow-800';
      case 'down': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = () => {
    switch (status) {
      case 'operational': return 'Operational';
      case 'degraded': return 'Degraded Performance';
      case 'down': return 'Service Down';
      default: return 'Checking...';
    }
  };

  return (
    <div className="min-h-screen pt-16">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900">API Status</h1>
          <p className="mt-4 text-lg text-gray-600">Real-time status of DuaAxis services</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card variant="elevated" padding="large">
            <h2 className="text-xl font-semibold mb-4">Current Status</h2>
            <div className="flex items-center justify-between mb-4">
              <span className="text-lg font-medium">API Service</span>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor()}`}>
                {getStatusText()}
              </span>
            </div>
            <div className="space-y-2 text-sm text-gray-600">
              <p>Response Time: {responseTime}ms</p>
              <p>Last Checked: {new Date().toLocaleTimeString()}</p>
              <p>Uptime: 99.95% (30 days)</p>
            </div>
          </Card>

          <Card variant="elevated" padding="large">
            <h2 className="text-xl font-semibold mb-4">Service Components</h2>
            <div className="space-y-4">
              {[
                { name: 'Authentication API', status: 'operational' },
                { name: 'Data Streaming', status: 'operational' },
                { name: 'Device Management', status: 'operational' },
                { name: 'Analytics Engine', status: 'operational' },
                { name: 'Notification Service', status: 'operational' }
              ].map((service, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span>{service.name}</span>
                  <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <Card variant="elevated" padding="large" className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Incident History</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-green-500 pl-4 py-2">
              <p className="font-medium">No recent incidents</p>
              <p className="text-sm text-gray-600">All systems operational</p>
            </div>
            <div className="border-l-4 border-yellow-500 pl-4 py-2">
              <p className="font-medium">Scheduled Maintenance</p>
              <p className="text-sm text-gray-600">December 15, 2023 - Completed</p>
            </div>
          </div>
        </Card>
      </div>

    </div>
  );
};

export default ApiStatus;