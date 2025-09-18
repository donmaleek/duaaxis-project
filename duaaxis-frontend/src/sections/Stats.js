import React from 'react';

const Stats = () => {
  const statsData = [
    {
      id: 1,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      value: '45%',
      label: 'More Energy',
      description: 'Compared to fixed solar panel installations'
    },
    {
      id: 2,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      value: '99.5%',
      label: 'Uptime',
      description: 'Reliable performance in all weather conditions'
    },
    {
      id: 3,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      value: '25%',
      label: 'Faster ROI',
      description: 'Return on investment compared to fixed systems'
    },
    {
      id: 4,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
        </svg>
      ),
      value: 'IoT',
      label: 'Connected',
      description: 'Real-time monitoring and optimization'
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">Performance</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Why DuaAxis Outperforms
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our dual-axis technology consistently delivers superior energy production compared to traditional solar solutions.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {statsData.map((stat) => (
              <div 
                key={stat.id} 
                className="stat-card bg-white border border-gray-100 rounded-lg shadow-sm p-6 transition-all duration-300"
              >
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-primary-100 rounded-md p-3">
                    {stat.icon}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
                    <p className="text-sm font-medium text-gray-500">{stat.label}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-gray-600">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional stats section with progress bars */}
        <div className="mt-16">
          <h3 className="text-lg font-medium text-gray-900 text-center mb-8">
            Performance Comparison: DuaAxis vs Fixed Panels
          </h3>
          <div className="space-y-6">
            {[
              { label: 'Energy Production', duaaxis: 100, fixed: 69, unit: '%' },
              { label: 'Efficiency in Cloudy Conditions', duaaxis: 85, fixed: 60, unit: '%' },
              { label: 'Winter Performance', duaaxis: 92, fixed: 55, unit: '%' },
              { label: 'Return on Investment (5 years)', duaaxis: 142, fixed: 100, unit: '%' },
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4">
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">{item.label}</span>
                  <span className="text-sm font-medium text-gray-900">
                    +{Math.round((item.duaaxis / item.fixed - 1) * 100)}% better
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-20 text-sm font-medium text-primary-600">DuaAxis</div>
                  <div className="flex-1 h-4 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary-500 rounded-full" 
                      style={{ width: `${item.duaaxis}%` }}
                    ></div>
                  </div>
                  <div className="w-12 text-sm font-medium text-primary-600 text-right">
                    {item.duaaxis}{item.unit}
                  </div>
                </div>
                <div className="flex items-center space-x-4 mt-2">
                  <div className="w-20 text-sm font-medium text-gray-500">Fixed</div>
                  <div className="flex-1 h-4 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gray-400 rounded-full" 
                      style={{ width: `${item.fixed}%` }}
                    ></div>
                  </div>
                  <div className="w-12 text-sm font-medium text-gray-500 text-right">
                    {item.fixed}{item.unit}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Environmental impact stats */}
        <div className="mt-16 bg-primary-50 rounded-xl p-8">
          <h3 className="text-lg font-medium text-gray-900 text-center mb-8">
            Environmental Impact (Per 100 DuaAxis Units)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mx-auto bg-green-100 rounded-full p-4 w-16 h-16 flex items-center justify-center">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h4 className="mt-4 text-xl font-bold text-gray-900">2,450 tons</h4>
              <p className="mt-2 text-gray-600">CO₂ emissions reduced annually</p>
            </div>
            <div className="text-center">
              <div className="mx-auto bg-blue-100 rounded-full p-4 w-16 h-16 flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h4 className="mt-4 text-xl font-bold text-gray-900">6.5 million kWh</h4>
              <p className="mt-2 text-gray-600">Clean energy generated annually</p>
            </div>
            <div className="text-center">
              <div className="mx-auto bg-yellow-100 rounded-full p-4 w-16 h-16 flex items-center justify-center">
                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14v6m-3-3h6M6 10h2a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6a2 2 0 012-2zm10-4a2 2 0 11-4 0 2 2 0 014 0zM4 6a2 2 0 100 4h16a2 2 0 100-4H4z" />
                </svg>
              </div>
              <h4 className="mt-4 text-xl font-bold text-gray-900">$780,000</h4>
              <p className="mt-2 text-gray-600">Energy cost savings annually</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;