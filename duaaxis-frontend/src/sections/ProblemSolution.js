import React from 'react';

const ProblemSolution = () => {
  return (
    <section id="problem" className="py-16 bg-primary-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-primary-200 font-semibold tracking-wide uppercase">The Challenge</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Fixed Panels Waste Solar Potential</p>
          <p className="mt-4 max-w-2xl text-xl text-primary-100 mx-auto">
            Traditional fixed solar panels can't follow the sun's movement, resulting in significant energy waste throughout the day.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-medium text-gray-900 flex items-center">
                <span className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-red-100 text-red-600 mr-3">
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </span>
                Fixed Panel Limitations
              </h3>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-5 w-5 text-red-500 mt-0.5">
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.93 6.707a1 1 0 010-1.414l.707-.707a1 1 0 011.414 0L10 8.586l3.536-3.536a1 1 0 011.414 0l.707.707a1 1 0 010 1.414L11.414 10l3.536 3.536a1 1 0 010 1.414l-.707.707a1 1 0 01-1.414 0L10 11.414l-3.536 3.536a1 1 0 01-1.414 0l-.707-.707a1 1 0 010-1.414L8.586 10 4.93 6.707z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <p className="ml-3 text-sm text-gray-600">Only optimal for a few hours each day</p>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-5 w-5 text-red-500 mt-0.5">
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.93 6.707a1 1 0 010-1.414l.707-.707a1 1 0 011.414 0L10 8.586l3.536-3.536a1 1 0 011.414 0l.707.707a1 1 0 010 1.414L11.414 10l3.536 3.536a1 1 0 010 1.414l-.707.707a1 1 0 01-1.414 0L10 11.414l-3.536 3.536a1 1 0 01-1.414 0l-.707-.707a1 1 0 010-1.414L8.586 10 4.93 6.707z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <p className="ml-3 text-sm text-gray-600">Lose up to 45% of potential energy generation</p>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-5 w-5 text-red-500 mt-0.5">
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.93 6.707a1 1 0 010-1.414l.707-.707a1 1 0 011.414 0L10 8.586l3.536-3.536a1 1 0 011.414 0l.707.707a1 1 0 010 1.414L11.414 10l3.536 3.536a1 1 0 010 1.414l-.707.707a1 1 0 01-1.414 0L10 11.414l-3.536 3.536a1 1 0 01-1.414 0l-.707-.707a1 1 0 010-1.414L8.586 10 4.93 6.707z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <p className="ml-3 text-sm text-gray-600">Inefficient use of installation space</p>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-5 w-5 text-red-500 mt-0.5">
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.93 6.707a1 1 0 010-1.414l.707-.707a1 1 0 011.414 0L10 8.586l3.536-3.536a1 1 0 011.414 0l.707.707a1 1 0 010 1.414L11.414 10l3.536 3.536a1 1 0 010 1.414l-.707.707a1 1 0 01-1.414 0L10 11.414l-3.536 3.536a1 1 0 01-1.414 0l-.707-.707a1 1 0 010-1.414L8.586 10 4.93 6.707z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <p className="ml-3 text-sm text-gray-600">Lower return on investment</p>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-medium text-gray-900 flex items-center">
                <span className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-green-100 text-green-600 mr-3">
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </span>
                DuaAxis Solution
              </h3>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-5 w-5 text-green-500 mt-0.5">
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <p className="ml-3 text-sm text-gray-600">Follows sun's path from sunrise to sunset</p>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-5 w-5 text-green-500 mt-0.5">
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <p className="ml-3 text-sm text-gray-600">Generates up to 45% more energy than fixed systems</p>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-5 w-5 text-green-500 mt-0.5">
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <p className="ml-3 text-sm text-gray-600">Maximizes energy production in limited spaces</p>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-5 w-5 text-green-500 mt-0.5">
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <p className="ml-3 text-sm text-gray-600">Faster return on investment</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-primary-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
            Maximize Your Solar Investment
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;