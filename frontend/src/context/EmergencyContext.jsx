import React, { createContext, useState, useCallback } from 'react';

export const EmergencyContext = createContext();

export function EmergencyProvider({ children }) {
  const [isEmergency, setIsEmergency] = useState(false);
  const [emergencyData, setEmergencyData] = useState(null);
  const [activeContacts, setActiveContacts] = useState([]);

  const triggerEmergency = useCallback((data) => {
    setIsEmergency(true);
    setEmergencyData(data);
  }, []);

  const clearEmergency = useCallback(() => {
    setIsEmergency(false);
    setEmergencyData(null);
    setActiveContacts([]);
  }, []);

  const value = {
    isEmergency,
    emergencyData,
    activeContacts,
    triggerEmergency,
    clearEmergency,
    setActiveContacts,
  };

  return (
    <EmergencyContext.Provider value={value}>
      {children}
    </EmergencyContext.Provider>
  );
}
