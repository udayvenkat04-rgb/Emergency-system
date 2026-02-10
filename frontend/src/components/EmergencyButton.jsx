import React, { useState } from 'react';
import { triggerEmergency } from '../services/api';

function EmergencyButton() {
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleEmergency = async () => {
    setIsLoading(true);
    try {
      const response = await triggerEmergency();
      setSuccess(true);
      console.log('Emergency triggered:', response);
      setTimeout(() => setSuccess(false), 3000);
    } catch (error) {
      console.error('Error triggering emergency:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <button
        onClick={handleEmergency}
        disabled={isLoading}
        className={`px-8 py-4 text-2xl font-bold text-white rounded-full transition ${
          success ? 'bg-green-500' : 'bg-red-600 hover:bg-red-700'
        } ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        {isLoading ? 'Sending...' : success ? 'Emergency Sent!' : '🚨 EMERGENCY'}
      </button>
    </div>
  );
}

export default EmergencyButton;
