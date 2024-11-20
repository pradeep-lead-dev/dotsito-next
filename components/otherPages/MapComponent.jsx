import React, { useState } from 'react';
import Map, { Marker } from 'react-map-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import markerIcon from './marker-icon.png';  // Custom marker image
import "./Map.css"
const MapComponent = () => {
  // Define the initial view to center over Europe
  const [viewState, setViewState] = useState({
    latitude: 20.5937,    // Center to show both UK, US, and India
    longitude: 78.9629,
    zoom: 2,              // Zoom out to show multiple countries
  });

  // Define markers for UK, US, and India
  const markers = [
    { id: 1, lat: 51.5074, lng: -0.1278, label: 'UK' },      // London, UK
    { id: 2, lat: 37.7749, lng: -122.4194, label: 'US' },    // San Francisco, US
    { id: 3, lat: 28.6139, lng: 77.2090, label: 'India' },   // Delhi, India
  ];

  return (
    <Map
      initialViewState={viewState}
      style={{ width: '100%', height: '500px' }}   // Style for map container
      mapStyle="https://demotiles.maplibre.org/style.json"   // Use free MapLibre tiles (no API key required)
      onMove={(evt) => setViewState(evt.viewState)}         // Allow map to be interactive
      mapLib={import('maplibre-gl')}
    >
      {markers.map((marker) => (
        <Marker key={marker.id} latitude={marker.lat} longitude={marker.lng}>
          <img src={markerIcon} alt={`${marker.label} Marker`} style={{ width: '30px', height: '30px' }} />
        </Marker>
      ))}
    </Map>
  );
};

export default MapComponent;
