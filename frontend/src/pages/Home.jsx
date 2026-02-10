import React from 'react';
import EmergencyButton from '../components/EmergencyButton';

function Home({ onNavigate }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-red-100">
      <nav className="bg-red-600 text-white p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Emergency System</h1>
          <button
            onClick={() => onNavigate('dashboard')}
            className="px-4 py-2 bg-white text-red-600 rounded font-semibold hover:bg-gray-100"
          >
            Dashboard
          </button>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto p-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">Emergency Contact System</h2>
          <p className="text-lg text-gray-600">One-click emergency with live location sharing</p>
        </div>

        <EmergencyButton />
      </div>
    </div>
  );
}

export default Home;
