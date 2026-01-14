import '../styles/components/sidebar-header.css';
import '../styles/components/sidebar.css';
import '../styles/components/filter-section.css';
import '../styles/components/filter-header.css';
import '../styles/components/filter-header-text.css';
import '../styles/components/filter-divider.css';
import React from 'react';
import OdsSelect from './ods_select';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>Filtros</h2>
      </div>
      <div className="filter-section">
        <div className="filter-header">
          <p className ="filter-header-text">Mostrar por ods específico</p>
        </div>
        <OdsSelect />
      </div>
      <div className="filter-divider"></div>
      <div className="filter-section">
        <div className="filter-header">
          <p className="filter-header-text">Mostrar solo ecobarrios con proyectos</p>
        </div>
        <div className="filter-divider"></div>
      </div>
    </div>
  );
}
