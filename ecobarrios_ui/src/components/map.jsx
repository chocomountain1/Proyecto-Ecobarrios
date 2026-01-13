import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

export default function Map() {
  return (
    <MapContainer 
      center={[-33.45, -70.66]} 
      zoom={5} 
      style={{ height: '400px' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[-33.45, -70.66]}>
        <Popup>Hola!</Popup>
      </Marker>
    </MapContainer>
  );
}