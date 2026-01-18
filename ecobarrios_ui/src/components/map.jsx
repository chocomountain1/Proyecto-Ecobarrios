import 'leaflet/dist/leaflet.css';
import '../styles/components/elements/map.css';
import "leaflet.awesome-markers/dist/leaflet.awesome-markers.css"; //markers personalizados
import "@fortawesome/fontawesome-free/css/all.css"; //fuentes en los markers personalizados
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import myMarker from './icons/markers';
import Sidebar from './sidebar';

// Diccionario para desambiguar el estado de consolidación de los ecobarrios
const consolidationStatus = {
  "No participó en Sendero Ecobarrio" : "gray",
  "Semilla" : "green",
  "En Consolidación" : "orange",
  "Referente" : "red"
}

export default function Map({ ecobarrios }) {
  console.log(ecobarrios)
  console.log(ecobarrios[0]);
  return (
    <div className="map-container">
      <div className="map-area">
        <MapContainer center={[-33.45, -70.66]} zoom={10} style={{ height: "100%", width: "100%" }}>
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            attribution='&copy; OpenStreetMap contributors &copy; CARTO'
          ></TileLayer>;

          {ecobarrios.map((e) => (
            <MarkerClusterGroup>
            <Marker icon= {myMarker(consolidationStatus[e.sendero_ecobarrio])} position={[e.lat, e.lon]} key={e.id}>
              <Popup>
                <div>
                  <h3>{e.nombre}</h3>
                </div>
              </Popup>
            </Marker>
            </MarkerClusterGroup>
          ))}
        </MapContainer>
        </div>
      <div className="sidebar-space" aria-hidden="true">
        {<Sidebar />}
      </div>
    </div>
  );
}
