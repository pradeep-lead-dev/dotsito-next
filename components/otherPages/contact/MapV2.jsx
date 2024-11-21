'use client'
import { useEffect } from 'react';
import L from 'leaflet';
import dynamic from 'next/dynamic';

import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";

const MapComponent = () => {
  useEffect(() => {
    // Fix default marker icons to prevent errors
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
      iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    });
  }, []);

  // Updated locations
  const locations = [
    { lat: 36.7783, lng: -119.4179, title: 'California, USA' }, // California, USA
    { lat: 51.5074, lng: -0.1278, title: 'London, UK' },       // London, UK
    { lat: 13.0827, lng: 80.2707, title: 'Chennai, India' },   // Chennai, India
    { lat: 10.7342, lng: 77.4288, title: 'Kangayam, India' },  // Kangayam, India
  ];

  return (
    <MapContainer
      center={[30.0, 0.0]} // Adjust center to cover all locations
      zoom={2.5}             // Zoom level for a world view
      style={{ height: '500px', width: '100%' }}
      minZoom={2.5}          // Prevent zooming out too far
      maxZoom={18}         // Allow zooming in for details
      maxBounds={[
        [-90, -180],       // Restrict panning to a single world view
        [90, 180]
      ]}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {locations.map((location, index) => (
        <Marker key={index} position={[location.lat, location.lng]}>
          <Tooltip>{location.title}</Tooltip>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;
