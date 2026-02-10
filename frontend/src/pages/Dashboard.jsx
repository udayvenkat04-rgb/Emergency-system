import React from 'react';
import Map from '../components/Map';
import ContactList from '../components/ContactList';
import ShareLink from '../components/ShareLink';

function Dashboard({ onNavigate }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-red-600 text-white p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <button
            onClick={() => onNavigate('home')}
            className="px-4 py-2 bg-white text-red-600 rounded font-semibold hover:bg-gray-100"
          >
            Back to Home
          </button>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-xl font-bold mb-4">Live Location</h2>
              <Map />
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow p-4">
              <ContactList />
            </div>
            <div className="bg-white rounded-lg shadow p-4">
              <ShareLink />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
