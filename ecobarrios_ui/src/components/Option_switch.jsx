import React, { useState } from 'react';
import '../styles/components/elements/switch.css';

export default function OptionSwitch({ label, checked = false, onChange, setFilters, consolidationStatus}) {
  const [isChecked, setIsChecked] = useState(checked);

   const handleToggle = () => {
    setIsChecked(!isChecked);
    if (onChange) {
      onChange(!isChecked);
    }
      if(isChecked){
      setFilters((f) => ({
      ...f,
      consolidationStatus: f.consolidationStatus.filter((e) => e != consolidationStatus),
    }));
    }

      if(!isChecked){
        setFilters((f) =>({
          ...f,
          consolidationStatus: [...f.consolidationStatus, consolidationStatus],
        }))
      }
  }
  return (
    <div className="switch-container">
      <label className="switch">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleToggle}
        />
        <span className="slider"></span>
      </label>
      {label && <span className="switch-label">{label}</span>}
    </div>
  );
}
