import React, { useState, useEffect, useRef } from 'react';
import '../styles/components/elements/ods_select.css';

export default function OdsSelect({setFilters}) {
  const [selectedOds, setSelectedOds] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  const odsOptions = [
  { id: 1, name: 'Biodiversidad', display: '🦋 Biodiversidad'},
  { id: 2, name: 'Restauración Ecológica', display: '🌱 Restauración Ecológica' },
  { id: 3, name: 'Educación Ambiental', display: '📚 Educación Ambiental' },
  { id: 4, name: 'Áreas Verdes' , display: '🌳 Áreas Verdes'},
  { id: 5, name: 'Gestión y Manejo de Residuos', display:'♻️ Gestión y Manejo de Residuos' },
  { id: 6, name: 'Huertos Comunitarios', display: '🥕 Huertos Comunitarios' },
  { id: 7, name: 'Eficiencia Energética', display: '⚡Eficiencia Energética' },
  { id: 8, name: 'Tenencia Responsable de Mascotas', display: '🐶 Tenencia Responsable de Mascotas' },
  { id: 9, name: 'Seguridad', display: '🛡️ Seguridad' },
  { id: 10, name: 'Gestión Hídrica', display: '💧 Gestión Hídrica' },
  { id: 11, name: 'Contaminación Atmosférica', display:'🌫️ Contaminación Atmosférica' },
];

  const handleToggleOds = (odsId) => {
    setSelectedOds((prev) =>{
      const list = prev.includes(odsId)
        ? prev.filter((id) => id !== odsId)
        : [...prev, odsId]
      setFilters((prev) =>({
        ...prev,
        action_lines: list.map((e) => odsOptions[e-1].name),
      }));
      return list
    });
  };

  const handleClear = () => {
    setSelectedOds([]);
    setIsOpen(false);
    setFilters((prev) =>({
      ...prev,
      action_lines : []
    }))
  };

  // Cerrar el dropdown cuando se hace click fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="ods-select-container" ref={containerRef}>
      <button
        className="ods-select-trigger"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOds.length === 0
          ? 'Selecciona una línea de acción'
          : `${selectedOds.length} Líneas de acción seleccionadas`}
        <span className={`arrow ${isOpen ? 'open' : ''}`}>▼</span>
      </button>

      {isOpen && (
        <div className="ods-select-dropdown">
          <div className="ods-select-options">
            {odsOptions.map((ods) => (
              <div
                key={ods.id}
                className={`ods-select-option ${
                  selectedOds.includes(ods.id) ? 'selected' : ''
                }`}
                onClick={() => handleToggleOds(ods.id)}
              >
                <span className="ods-label">
                  {ods.id}. {ods.display}
                </span>
                {selectedOds.includes(ods.id) && (
                  <span className="checkmark">✓</span>
                )}
              </div>
            ))}
          </div>
          {selectedOds.length > 0 && (
            <button className="ods-clear-btn" onClick={handleClear}>
              Limpiar selección
            </button>
          )}
        </div>
      )}
    </div>
  );
}
