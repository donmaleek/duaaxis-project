import React from 'react';
import { Card } from '../components/Ui';

const Support = () => {
  return (
    <div className="min-h-screen pt-16">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900">Contact Support</h1>
          <p className="mt-4 text-lg text-gray-600">Get help from our expert support team</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card variant="elevated" padding="large">
            <h2 className="text-xl font-semibold mb-4">Support Channels</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-gray-900">Email Support</h3>
                <p className="text-primary-600">support@duaaxis.com</p>
                <p className="text-sm text-gray-600 mt-1">Typically respond within 2 hours</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Phone Support</h3>
                <p className="text-primary-600">+1 (555) 123-HELP</p>
                <p className="text-sm text-gray-600 mt-1">Mon-Fri, 9AM-6PM EST</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Live Chat</h3>
                <p className="text-primary-600">Available on dashboard</p>
                <p className="text-sm text-gray-600 mt-1">24/7 for urgent issues</p>
              </div>
            </div>
          </Card>

          <Card variant="elevated" padding="large">
            <h2 className="text-xl font-semibold mb-4">Submit a Ticket</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Issue Type</label>
                <select className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2">
                  <option>Technical Issue</option>
                  <option>Billing Question</option>
                  <option>Feature Request</option>
                  <option>General Inquiry</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <textarea rows="4" className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"></textarea>
              </div>
              <button type="submit" className="bg-primary-600 text-white px-6 py-2 rounded-md hover:bg-primary-700">
                Submit Ticket
              </button>
            </form>
          </Card>
        </div>
      </div>

    </div>
  );
};

export default Support;