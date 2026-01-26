import React, { useState, useEffect, useRef } from 'react';
import '../styles/components/elements/ods_select.css';

export default function OdsSelect(setFilter) {
  const [selectedOds, setSelectedOds] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  const odsOptions = [
    { id: 1, name: 'Biodiversidad' },
    { id: 2, name: 'Restauración Ecológica' },
    { id: 3, name: 'Educación Ambiental' },
    { id: 4, name: 'Áreas Verdes' },
    { id: 5, name: 'Gestión y Manejo de Residuos' },
    { id: 6, name: 'Huertos Comunitarios' },
    { id: 7, name: 'Eficiencia Energética' },
    { id: 8, name: 'Tenencia Responsable de Mascotas' },
    { id: 9, name: 'Seguridad' },
    { id: 10, name: 'Gestión Hídrica' },
    { id: 11, name: 'Contaminación Atmosférica' },
  ];

  const handleToggleOds = (odsId) => {
    setSelectedOds((prev) =>
      prev.includes(odsId)
        ? prev.filter((id) => id !== odsId)
        : [...prev, odsId]
    );
  };

  const handleClear = () => {
    setSelectedOds([]);
    setIsOpen(false);
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
          ? 'Selecciona un ODS'
          : `${selectedOds.length} ODS seleccionados`}
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
                  {ods.id}. {ods.name}
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
