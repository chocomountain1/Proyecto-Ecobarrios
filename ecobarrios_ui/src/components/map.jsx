import 'leaflet/dist/leaflet.css';
import '../styles/components/elements/map.css';
import '../styles/components/modal/modal-text.css';
import "leaflet.awesome-markers/dist/leaflet.awesome-markers.css"; //markers personalizados
import "@fortawesome/fontawesome-free/css/all.css"; //fuentes en los markers personalizados
import { MapContainer, TileLayer } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import MarkerComp from './markerComp';
import Modal from './Modal';
import React from 'react';
import Sidebar from './sidebar';
import { useEffect } from 'react';
import Proyect from './proyects';

export default function Map({ ecobarrios }) {
  console.log(ecobarrios)
  console.log(ecobarrios[0]);
  const [selectedMarker, setSelectedMarker] = React.useState(null);
  const [solutions, setSolutions] = React.useState([]);
  useEffect(() => {
    if (!selectedMarker) return;

    fetch(`http://localhost:3000/api/ecobarrios/${selectedMarker.e.id}/solutions`)
      .then((res) => res.json())
      .then(data => setSolutions(data))
      .catch((error) => console.error('Error fetching solutions:', error));
  }, [selectedMarker]);
  return (
    <div className="map-container">
        {selectedMarker && (
        <Modal onClose={() => setSelectedMarker(null)}>
          <div className = "modal-name">
            <h1 className = "modal-h1-text">{selectedMarker.e.nombre}</h1>
          </div>
          <div className = "modal-section-title">
            <h2 className = "modal-h2-text">Información de contacto</h2>
            <div className = "modal-section-content">
                <p className = "modal-p-text">📍<strong>Dirección:</strong> {selectedMarker.e.maps}</p>
                <p className = "modal-p-text">📞<strong>Teléfono:</strong> {selectedMarker.e.telefono_contacto}</p>
                <p className = "modal-p-text">📧<strong>Correo electrónico:</strong> {selectedMarker.e.correo_contacto}</p>
            </div>
            <div className = "modal-section-title">
              <h2 className = "modal-h2-text">Línea de Acción</h2>
              <div className = "modal-section-content">
                  <p className = "modal-p-text">{selectedMarker.e.linea_de_accion}</p>
              </div>
            </div>
            <div className = "modal-section-title">
              <h2 className = "modal-h2-text">Proyectos abordados</h2>
                <Proyect solutions={solutions}/>
            </div>
          </div>
        </Modal>
        )}
      <div className="map-area">
        <MapContainer center={[-33.45, -70.66]} zoom={10} style={{ height: "100%", width: "100%" }}>
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            attribution='&copy; OpenStreetMap contributors &copy; CARTO'
          ></TileLayer>;

          {ecobarrios.map((e) => (
             <MarkerComp e={e} onSelect={setSelectedMarker} />
          ))}
        </MapContainer>
        </div>
      <div className="sidebar-space" aria-hidden="true">
        {<Sidebar />}
      </div>
    </div>
    
  );
}
