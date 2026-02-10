import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

function Map({ location }) {
  const [position, setPosition] = useState([51.505, -0.09]); // Default position

  useEffect(() => {
    if (location?.latitude && location?.longitude) {
      setPosition([location.latitude, location.longitude]);
    } else {
      // Get user's current location
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setPosition([pos.coords.latitude, pos.coords.longitude]);
        },
        (error) => console.error('Geolocation error:', error)
      );
    }
  }, [location]);

  return (
    <MapContainer center={position} zoom={13} style={{ height: '500px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; OpenStreetMap contributors'
      />
      <Marker position={position}>
        <Popup>
          {location?.name || 'Current Location'}
          <br />
          Lat: {position[0].toFixed(4)}, Lng: {position[1].toFixed(4)}
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
