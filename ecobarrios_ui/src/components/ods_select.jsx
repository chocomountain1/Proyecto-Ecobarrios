import React, { useState, useEffect, useRef } from 'react';
import '../styles/components/elements/ods_select.css';

export default function OdsSelect() {
  const [selectedOds, setSelectedOds] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  const odsOptions = [
    { id: 1, name: 'Pobreza cero' },
    { id: 2, name: 'Hambre cero' },
    { id: 3, name: 'Salud y bienestar' },
    { id: 4, name: 'Educación de calidad' },
    { id: 5, name: 'Igualdad de género' },
    { id: 6, name: 'Agua limpia y saneamiento' },
    { id: 7, name: 'Energía asequible y no contaminante' },
    { id: 8, name: 'Trabajo decente y crecimiento económico' },
    { id: 9, name: 'Industria, innovación e infraestructura' },
    { id: 10, name: 'Reducción de las desigualdades' },
    { id: 11, name: 'Ciudades y comunidades sostenibles' },
    { id: 12, name: 'Producción y consumo responsables' },
    { id: 13, name: 'Acción por el clima' },
    { id: 14, name: 'Vida submarina' },
    { id: 15, name: 'Vida de ecosistemas terrestres' },
    { id: 16, name: 'Paz, justicia e instituciones sólidas' },
    { id: 17, name: 'Alianzas para lograr los objetivos' },
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
