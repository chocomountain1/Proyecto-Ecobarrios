import 'leaflet/dist/leaflet.css';
import '../styles/components/elements/map.css';
import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import Sidebar from './sidebar';

export default function Map({ ecobarrios }) {
  const mapRef = useRef(null);
  const markersRef = useRef([]);
  console.log(ecobarrios)
  console.log(ecobarrios[0]);
  console.log(typeof ecobarrios[0]?.lat);
  // Crear el mapa solo una vez
  useEffect(() => {
    const el = document.getElementById('leaflet-map');
    if (!el || mapRef.current) return;

    const map = L.map('leaflet-map').setView([-33.45, -70.66], 12);
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://carto.com/">Carto</a>',
      subdomains: 'abcd'
    }).addTo(map);
    setTimeout(() => map.invalidateSize(), 0);
    mapRef.current = map;

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  // Actualizar los pines cuando cambian los datos
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    // Eliminar marcadores anteriores
    markersRef.current.forEach(marker => marker.remove());
    markersRef.current = [];

    // Agregar nuevos marcadores
    if (Array.isArray(ecobarrios)) {
      ecobarrios.forEach(e => {
        if (typeof e.lat === 'number' && typeof e.lon === 'number') {
          const marker = L.marker([
            e.lat/1e14, 
            e.lon/1e14
          ]).addTo(map);
          markersRef.current.push(marker);
        }
      });
    }
  }, [ecobarrios]);

  return (
    <div className="map-container">
      <div className="map-area">
        <div id="leaflet-map" className="leaflet-map" />
      </div>
      <div className="sidebar-space" aria-hidden="true">
        {<Sidebar />}
      </div>
    </div>
  );
}

