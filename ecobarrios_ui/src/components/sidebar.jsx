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
import OptionSwitch from './option_switch';

export default function Sidebar({setFilters}) {
  const [switchChecked, setSwitchChecked] = React.useState(false);
  const [switchCheckedSemilla, setSwitchCheckedSemilla] = React.useState(false);
  const [switchCheckedEmergente, setSwitchCheckedEmergente] = React.useState(false);
  const [switchCheckedConsolidacion, setSwitchCheckedConsolidacion] = React.useState(false);
  const [switchCheckedReferente, setSwitchCheckedReferente] = React.useState(false);
  const [switchCheckedOtro, setSwitchCheckedOtro] = React.useState(false);
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>Filtros</h2>
      </div>
      <div className="filter-section">
        <div className="filter-header">
          <p className ="filter-header-text">Mostrar ecobarrios por linea de acción en específico</p>
        </div>
        <OdsSelect setFilters = {setFilters}/>
      </div>
      <div className="filter-divider"></div>
      <div className="filter-section">
        <div className="filter-header">
          <p className ="filter-header-text">Mostrar ecobarrios por cantidad de proyectos</p>
          <Switch checked = {switchChecked} onChange={() => setSwitchChecked(!switchChecked)} setFilters={setFilters} />
        </div>
        {switchChecked && <Slider min={0} max={6} step={1} setFilters = {setFilters}/>}
      </div>
      <div className="filter-divider"></div>
      <div className="filter-section">
        <div className="filter-header">
          <p className ="filter-header-text">Mostrar ecobarrios por su estado de consolidación</p>
        </div>
        <div className='filter-section-hor'>
          <p className = 'filter-option-text'>Semilla</p>
          <div className = 'filter-comp'>
          <OptionSwitch checked = {switchCheckedSemilla} onChange={() => setSwitchCheckedSemilla} setFilters={setFilters} consolidationStatus={"Semilla"}></OptionSwitch>
          </div>
        </div>
        <div className='filter-section-hor'>
          <div className='filter-header'>
            <p className = 'filter-option-text'>Emergente</p>
          </div>
          <div className = 'filter-comp'>
          <OptionSwitch checked = {switchCheckedEmergente} onChange={() => setSwitchCheckedEmergente} setFilters={setFilters} consolidationStatus={"Emergente"}></OptionSwitch>
          </div>
        </div>
        <div className='filter-section-hor'>
          <p className = 'filter-option-text'>En consolidación</p>
          <div className = 'filter-comp'>
          <OptionSwitch checked = {switchCheckedConsolidacion} onChange={() => setSwitchCheckedConsolidacion} setFilters = {setFilters} consolidationStatus={"En Consolidación"}></OptionSwitch>
          </div>
        </div>
        <div className='filter-section-hor'>
          <div className='filter-header'>
            <p className = 'filter-option-text'>Referente</p>
          </div>
          <div className = 'filter-comp'>
          <OptionSwitch checked = {switchCheckedReferente} onChange={() => setSwitchCheckedReferente} setFilters={setFilters} consolidationStatus={"Referente"}></OptionSwitch>
          </div>
        </div>
        <div className='filter-section-hor'>
          <div className='filter-header'>
            <p className = 'filter-option-text'>Otro</p>
          </div>
          <div className = 'filter-comp'>
          <OptionSwitch checked = {switchCheckedOtro} onChange={() => setSwitchCheckedOtro} setFilters={setFilters} consolidationStatus={"No participó en Sendero Ecobarrio"}></OptionSwitch>
          </div>
        </div>
      </div>
    </div>
  );
}
