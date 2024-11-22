import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const locations = [
  { name: "Kangayam", coords: [11.0055, 77.5604] },
  { name: "Chennai", coords: [13.0827, 80.2707] },
  { name: "California", coords: [36.7783, -119.4179] },
  { name: "London", coords: [51.5074, -0.1278] }
];

const ActualMapComponent = () => (
  <MapContainer center={[20, 0]} zoom={2} style={{ height: "500px", width: "100%" }}>
    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="© OpenStreetMap contributors" />
    {locations.map((location, index) => (
      <Marker key={index} position={location.coords}>
        <Popup>{location.name}</Popup>
      </Marker>
    ))}
  </MapContainer>
);

export default ActualMapComponent;
