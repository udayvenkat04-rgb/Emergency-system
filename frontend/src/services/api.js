import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
});

export const triggerEmergency = async () => {
  return api.post('/emergency/trigger');
};

export const fetchContacts = async () => {
  const response = await api.get('/contacts');
  return response.data;
};

export const generateShareLink = async () => {
  const response = await api.post('/location/share');
  return response.data;
};

export const getSharedLocation = async (shareId) => {
  const response = await api.get(`/location/share/${shareId}`);
  return response.data;
};

export const addContact = async (contact) => {
  const response = await api.post('/contacts', contact);
  return response.data;
};

export const updateLocation = async (latitude, longitude) => {
  const response = await api.post('/location/update', { latitude, longitude });
  return response.data;
};

export default api;
