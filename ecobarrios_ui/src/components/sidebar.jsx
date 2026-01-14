import '../styles/components/sidebar/sidebar-header.css';
import '../styles/components/sidebar/sidebar.css';
import '../styles/components/sidebar/filter-section.css';
import '../styles/components/sidebar/filter-header.css';
import '../styles/components/sidebar/filter-header-text.css';
import '../styles/components/sidebar/filter-divider.css';
import React from 'react';
import OdsSelect from './ods_select';
import Switch from './switch';
import Slider from './slider';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>Filtros</h2>
      </div>
      <div className="filter-section">
        <div className="filter-header">
          <p className ="filter-header-text">Mostrar ecobarrios por ods específico</p>
        </div>
        <OdsSelect />
      </div>
      <div className="filter-divider"></div>
      <div className="filter-section">
        <div className="filter-header">
          <p className ="filter-header-text">Mostrar ecobarrios por cantidad de proyectos</p>
        </div>
        <Slider min={0} max={6} step={1} />
      </div>
    </div>
  );
}
