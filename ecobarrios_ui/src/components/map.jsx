import 'leaflet/dist/leaflet.css';
import '../styles/components/map.css';
import React, { useEffect } from 'react';
import L from 'leaflet';
import Sidebar from './sidebar';

export default function Map() {
  useEffect(() => {
    const el = document.getElementById('leaflet-map');
    if (!el) return;

    const map = L.map('leaflet-map').setView([-33.45, -70.66], 12); // ajustar centro/zoom
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://carto.com/">Carto</a>',
      subdomains: 'abcd'
    }).addTo(map);

    // forzar recalculo de tamaños para evitar tiles "desordenados"
    setTimeout(() => map.invalidateSize(), 0);

    return () => map.remove();
  }, []);

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

