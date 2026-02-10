import 'leaflet/dist/leaflet.css';
import '../styles/components/elements/map.css';
import '../styles/components/modal/modal-text.css';
import "leaflet.awesome-markers/dist/leaflet.awesome-markers.css"; //markers personalizados
import "@fortawesome/fontawesome-free/css/all.css"; //fuentes en los markers personalizados
import { MapContainer, TileLayer } from 'react-leaflet';
import MarkerComp from './markerComp';
import Modal from './modal';
import React from 'react';
import Sidebar from './sidebar';
import { useEffect } from 'react';
import Proyect from './proyects';


export default function Map({ ecobarrios, setFilters }) {
  const [selectedMarker, setSelectedMarker] = React.useState(null);
  const [solutions, setSolutions] = React.useState([]);
  const [deletePressed, setDeletePressed] = React.useState(false);
  
  const deleteEcobarrio = async (id) => {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/ecobarrios/${id}/delete`, {
      method: "DELETE",
    });

    const data = await res.json(); 

    if (res.ok) {
      window.location.href = "/";
      alert(data.message + " se recargará la página");
    } else {
      alert(data.error);
    }
  };
  useEffect(() => {
    if (!selectedMarker) return;

    fetch(`${import.meta.env.VITE_API_URL}/${selectedMarker.e.id}/solutions`)
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

            <div className = "modal-section-content">
              <button className='d-btn' onClick={() => setDeletePressed(true)}>Borrar Ecobarrio</button>
            </div>
            {deletePressed && <Modal onClose={() => setDeletePressed(false)}>
              <div className='modal-section-title'>
                <h2 className = "modal-section-content" >¿Quieres borrar este ecobarrio?</h2>
                <p className = "modal-p-text">Se borrarán todos los proyectos asociados</p>
                <div className = "modal-section-content">
                  <button className='d-btn' onClick={() => deleteEcobarrio(selectedMarker.e.id)}>
                      Sí quiero borrarlo
                  </button>
                  <button className = 'back-btn' onClick={() => setDeletePressed(false)}>
                    Volver
                  </button>
                </div>
              </div>
              </Modal>}
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
        {<Sidebar setFilters = {setFilters}/>}
      </div>
    </div>
    
  );
}
