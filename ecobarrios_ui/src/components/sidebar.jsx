import '../styles/components/sidebar-header.css';
import '../styles/components/sidebar.css';
import '../styles/components/filter-section.css';
import '../styles/components/filter-header.css';
import React from 'react';
import Ods_button from './ods_button';
import '../styles/components/ods-button-container.css';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
      <h2>Filtros</h2>
      </div>
      <div className="filter-section">
        <div className="filter-header">
          <input type="checkbox" name="ods1" />
          <p>Mostrar por ods específico</p>
        </div>
        <div className="ods-button-container">
          <Ods_button number_ods={1} text={"Pobreza cero"} />
          <Ods_button number_ods={2} text={"Hambre cero"} />
          <Ods_button number_ods={3} text={"Salud y bienestar"} />
          <Ods_button number_ods={4} text={"Educación de calidad"} />
          <Ods_button number_ods={5} text={"Igualdad de género"} />
          <Ods_button number_ods={6} text={"Agua limpia y saneamiento"} />
          <Ods_button number_ods={7} text={"Energía asequible y no contaminante"} />
          <Ods_button number_ods={8} text={"Trabajo decente y crecimiento económico"} />
          <Ods_button number_ods={9} text={"Industria, innovación e infraestructura"} />
          <Ods_button number_ods={10} text={"Reducción de las desigualdades"} />
          <Ods_button number_ods={11} text={"Ciudades y comunidades sostenibles"} />
          <Ods_button number_ods={12} text={"Producción y consumo responsables"} />
          <Ods_button number_ods={13} text={"Acción por el clima"} />
          <Ods_button number_ods={14} text={"Vida submarina"} />
          <Ods_button number_ods={15} text={"Vida de ecosistemas terrestres"} />
          <Ods_button number_ods={16} text={"Paz, justicia e instituciones sólidas"} />
          <Ods_button number_ods={17} text={"Alianzas para lograr los objetivos"} />
        </div>
      </div>
    </div>
  );
}