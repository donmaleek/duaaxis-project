import React, { useState } from 'react';
import { Card } from '../components/Ui';

const Documentation = () => {
  const [activeSection, setActiveSection] = useState('api');
  const [expandedItems, setExpandedItems] = useState({});
  const [searchQuery, setSearchQuery] = useState('');

  const toggleExpand = (section, index) => {
    setExpandedItems(prev => ({
      ...prev,
      [`${section}-${index}`]: !prev[`${section}-${index}`]
    }));
  };

  const documentationSections = {
    api: {
      title: 'API Documentation',
      icon: '🔌',
      description: 'Complete API reference for integrating with DuaAxis systems',
      content: [
        { 
          title: 'Authentication', 
          endpoint: 'POST /api/v1/auth/login', 
          description: 'Authenticate with the API to obtain access tokens',
          method: 'POST',
          code: `curl -X POST https://api.duaaxis.com/v1/auth/login \\
  -H "Content-Type: application/json" \\
  -d '{"email": "your@email.com", "password": "your_password"}'`,
          response: `{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "expires_in": 3600,
  "user": { "id": "123", "email": "your@email.com" }
}`
        },
        { 
          title: 'Get Devices', 
          endpoint: 'GET /api/v1/devices', 
          description: 'Retrieve list of registered devices for your account',
          method: 'GET',
          code: `curl -X GET https://api.duaaxis.com/v1/devices \\
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN"`,
          response: `{
  "devices": [
    {
      "id": "device_123",
      "name": "Solar Tracker #1",
      "status": "online",
      "last_update": "2023-12-15T10:30:00Z"
    }
  ]
}`
        },
        { 
          title: 'Device Status', 
          endpoint: 'GET /api/v1/devices/{id}/status', 
          description: 'Get real-time status for a specific device',
          method: 'GET',
          code: `curl -X GET https://api.duaaxis.com/v1/devices/device_123/status \\
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN"`,
          response: `{
  "device_id": "device_123",
  "status": "online",
  "power_output": 2450,
  "efficiency": 92.5,
  "last_updated": "2023-12-15T10:29:45Z"
}`
        },
        { 
          title: 'Energy Data', 
          endpoint: 'GET /api/v1/devices/{id}/energy', 
          description: 'Retrieve historical energy production data',
          method: 'GET',
          code: `curl -X GET "https://api.duaaxis.com/v1/devices/device_123/energy?from=2023-12-01&to=2023-12-15" \\
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN"`,
          response: `{
  "device_id": "device_123",
  "period": { "from": "2023-12-01", "to": "2023-12-15" },
  "total_energy": 1250.5,
  "daily_data": [
    { "date": "2023-12-01", "energy": 85.2 },
    { "date": "2023-12-02", "energy": 92.1 }
  ]
}`
        }
      ]
    },
    sdk: {
      title: 'SDK References',
      icon: '📚',
      description: 'Client libraries for easy integration with various platforms',
      content: [
        { 
          title: 'JavaScript SDK', 
          endpoint: 'npm install @duaaxis/sdk', 
          description: 'Client-side integration for web applications',
          method: 'NPM',
          code: `import { DuaAxisClient } from '@duaaxis/sdk';

const client = new DuaAxisClient({
  apiKey: 'your_api_key',
  environment: 'production' // or 'sandbox'
});

// Get device status
const status = await client.devices.getStatus('device_123');
console.log(status);`,
          response: `// Returns device status object
{
  device_id: 'device_123',
  status: 'online',
  power_output: 2450,
  // ... other fields
}`
        },
        { 
          title: 'Python SDK', 
          endpoint: 'pip install duaaxis-sdk', 
          description: 'Data analysis and backend integration',
          method: 'PIP',
          code: `from duaaxis_sdk import Client

client = Client(api_key='your_api_key')

# Get energy data
energy_data = client.devices.get_energy(
    device_id='device_123',
    start_date='2023-12-01',
    end_date='2023-12-15'
)
print(energy_data)`,
          response: `# Returns energy data dictionary
{
    'device_id': 'device_123',
    'total_energy': 1250.5,
    'daily_data': [...]
}`
        },
        { 
          title: 'Mobile SDK', 
          endpoint: 'iOS/Android packages', 
          description: 'Native mobile app development for iOS and Android',
          method: 'MOBILE',
          code: `// Android (Kotlin)
val duaAxis = DuaAxisSDK.Builder()
    .apiKey("your_api_key")
    .build()

// Get device list
duaAxis.deviceService.getDevices { result ->
    result.onSuccess { devices ->
        // Handle devices
    }
}`,
          response: `// Returns list of devices
[
  {
    id: "device_123",
    name: "Solar Tracker #1",
    status: "online"
  }
]`
        }
      ]
    },
    examples: {
      title: 'Code Examples',
      icon: '💻',
      description: 'Practical examples and tutorials for common use cases',
      content: [
        { 
          title: 'Basic Integration', 
          endpoint: 'JavaScript example', 
          description: 'Quick start guide for web integration',
          method: 'EXAMPLE',
          code: `// Basic integration example
const initializeDuaAxis = async () => {
  try {
    const client = new DuaAxisClient({ apiKey: 'YOUR_API_KEY' });
    
    // Get all devices
    const devices = await client.devices.list();
    
    // Display devices
    devices.forEach(device => {
      console.log(\`Device: \${device.name}, Status: \${device.status}\`);
    });
  } catch (error) {
    console.error('Integration failed:', error);
  }
};`,
          response: `// Successful execution logs:
// Device: Solar Tracker #1, Status: online
// Device: Solar Tracker #2, Status: offline
// ...`
        },
        { 
          title: 'Webhook Setup', 
          endpoint: 'Python example', 
          description: 'Real-time data processing with webhooks',
          method: 'EXAMPLE',
          code: `# Flask webhook example
from flask import Flask, request, jsonify
from duaaxis_sdk import WebhookVerifier

app = Flask(__name__)
verifier = WebhookVerifier(webhook_secret='your_webhook_secret')

@app.route('/webhooks/duaaxis', methods=['POST'])
def handle_webhook():
    try:
        signature = request.headers.get('X-DuaAxis-Signature')
        payload = request.get_data()
        
        # Verify webhook
        if not verifier.verify_signature(payload, signature):
            return jsonify({'error': 'Invalid signature'}), 401
        
        event = request.json
        process_webhook_event(event)
        
        return jsonify({'status': 'success'})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

def process_webhook_event(event):
    event_type = event['type']
    if event_type == 'device.status_update':
        print(f"Device {event['data']['device_id']} status updated")
    # Handle other event types...`,
          response: `# Webhook payload example:
{
  "type": "device.status_update",
  "data": {
    "device_id": "device_123",
    "status": "online",
    "timestamp": "2023-12-15T10:30:00Z"
  }
}`
        },
        { 
          title: 'Dashboard Integration', 
          endpoint: 'React example', 
          description: 'Custom dashboard setup with real-time data',
          method: 'EXAMPLE',
          code: `// React component example
import { useDuaAxis } from '@duaaxis/react-sdk';

function DeviceDashboard() {
  const { devices, loading, error } = useDuaAxis();
  
  if (loading) return <div>Loading devices...</div>;
  if (error) return <div>Error: {error.message}</div>;
  
  return (
    <div className="dashboard">
      <h2>Solar Devices</h2>
      <div className="devices-grid">
        {devices.map(device => (
          <DeviceCard key={device.id} device={device} />
        ))}
      </div>
    </div>
  );
}`,
          response: `// Renders a dashboard with device cards showing:
// - Device name and status
// - Current power output
// - Efficiency percentage
// - Last update timestamp`
        }
      ]
    }
  };

  const filteredContent = documentationSections[activeSection].content.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.endpoint.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const quickLinks = [
    { title: 'API Status', href: '/api-status', icon: '📊', description: 'Check API availability and performance' },
    { title: 'Getting Started', href: '/guides', icon: '🚀', description: 'Step-by-step implementation guides' },
    { title: 'Support Center', href: '/support', icon: '🛠️', description: 'Get help from our technical team' },
    { title: 'API Changelog', href: '/changelog', icon: '📝', description: 'Latest updates and changes' },
    { title: 'Rate Limits', href: '/rate-limits', icon: '⏱️', description: 'Understand API usage limits' },
    { title: 'Best Practices', href: '/best-practices', icon: '⭐', description: 'Recommended implementation patterns' }
  ];

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Technical Documentation</h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto mb-8">
            Comprehensive resources for developers integrating with DuaAxis solar tracking systems
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <span className="font-semibold">REST API</span> & Webhooks
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <span className="font-semibold">5+ SDKs</span> Available
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <span className="font-semibold">24/7</span> Technical Support
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
              placeholder="Search documentation..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
          </div>
        </div>

        {/* Section Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {Object.keys(documentationSections).map(section => (
            <button
              key={section}
              onClick={() => setActiveSection(section)}
              className={`flex items-center px-6 py-3 rounded-lg transition-all ${
                activeSection === section
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              <span className="mr-2 text-lg">{documentationSections[section].icon}</span>
              {documentationSections[section].title}
            </button>
          ))}
        </div>

        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            {documentationSections[activeSection].title}
          </h2>
          <p className="text-gray-600 text-lg">
            {documentationSections[activeSection].description}
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <Card variant="elevated" padding="large" className="mb-8">
              <div className="space-y-6">
                {filteredContent.map((item, index) => (
                  <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center mb-2">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800 mr-3">
                            {item.method}
                          </span>
                          <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                        </div>
                        <div className="bg-gray-100 p-4 rounded-md font-mono text-sm mb-3">
                          {item.endpoint}
                        </div>
                        <p className="text-gray-600 mb-4">{item.description}</p>
                      </div>
                      <button
                        onClick={() => toggleExpand(activeSection, index)}
                        className="text-primary-600 hover:text-primary-700 ml-4"
                      >
                        {expandedItems[`${activeSection}-${index}`] ? 'Collapse' : 'Expand'}
                      </button>
                    </div>

                    {expandedItems[`${activeSection}-${index}`] && (
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2">Code Example</h4>
                          <pre className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto text-sm">
                            <code>{item.code}</code>
                          </pre>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2">Response</h4>
                          <pre className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto text-sm">
                            <code>{item.response}</code>
                          </pre>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </Card>

            {/* Additional Resources */}
            <Card variant="elevated" padding="large">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Additional Resources</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a href="/api-guide" className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-primary-300 hover:shadow-md transition-all">
                  <span className="text-2xl mr-4">📖</span>
                  <div>
                    <h4 className="font-medium text-gray-900">API Guide</h4>
                    <p className="text-sm text-gray-600">Complete API reference</p>
                  </div>
                </a>
                <a href="/webhooks" className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-primary-300 hover:shadow-md transition-all">
                  <span className="text-2xl mr-4">🔔</span>
                  <div>
                    <h4 className="font-medium text-gray-900">Webhooks</h4>
                    <p className="text-sm text-gray-600">Real-time event notifications</p>
                  </div>
                </a>
                <a href="/error-codes" className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-primary-300 hover:shadow-md transition-all">
                  <span className="text-2xl mr-4">❓</span>
                  <div>
                    <h4 className="font-medium text-gray-900">Error Codes</h4>
                    <p className="text-sm text-gray-600">Troubleshooting guide</p>
                  </div>
                </a>
                <a href="/sdk-docs" className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-primary-300 hover:shadow-md transition-all">
                  <span className="text-2xl mr-4">📦</span>
                  <div>
                    <h4 className="font-medium text-gray-900">SDK Docs</h4>
                    <p className="text-sm text-gray-600">Client library documentation</p>
                  </div>
                </a>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card variant="elevated" padding="large" className="sticky top-24">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
              <div className="space-y-3">
                {quickLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                  >
                    <span className="text-xl mr-3 group-hover:text-primary-600 transition-colors">{link.icon}</span>
                    <div>
                      <h4 className="font-medium text-gray-900 group-hover:text-primary-600 transition-colors">{link.title}</h4>
                      <p className="text-sm text-gray-600">{link.description}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Need Help?</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Our technical team is ready to assist you with integration challenges.
                </p>
                <a
                  href="/support"
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white text-center font-medium py-2 px-4 rounded-lg transition-colors block"
                >
                  Contact Support
                </a>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documentation; 