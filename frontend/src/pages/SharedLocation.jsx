import React, { useEffect, useState } from 'react';
import Map from '../components/Map';
import { getSharedLocation } from '../services/api';

function SharedLocation({ shareId, onNavigate }) {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const data = await getSharedLocation(shareId);
        setLocation(data);
      } catch (err) {
        setError('Could not load shared location');
        console.error('Error:', err);
      } finally {
        setLoading(false);
      }
    };

    if (shareId) {
      fetchLocation();
    }
  }, [shareId]);

  if (loading) return <div className="text-center py-10">Loading location...</div>;
  if (error) return <div className="text-center py-10 text-red-600">{error}</div>;

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-4xl mx-auto p-4">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="mb-4">
            <button
              onClick={() => onNavigate('home')}
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
            >
              Back to Home
            </button>
          </div>
          <h1 className="text-3xl font-bold mb-2">Shared Emergency Location</h1>
          <p className="text-gray-600 mb-4">
            {location?.userName || 'User'} shared their location with you
          </p>
          <div className="rounded-lg overflow-hidden">
            <Map location={location} />
          </div>
          {location && (
            <div className="mt-4 p-4 bg-gray-50 rounded">
              <p className="text-sm text-gray-600">
                Last updated: {new Date(location.timestamp).toLocaleTimeString()}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SharedLocation;
