import React, { useState } from 'react';
import '../styles/components/elements/switch.css';

export default function Switch({ label, checked = false, onChange, setFilters}) {
  const [isChecked, setIsChecked] = useState(checked);

  const handleToggle = () => {
    setIsChecked(!isChecked);
    if (onChange) {
      onChange(!isChecked);
    }
      if(isChecked){
      setFilters((f) => ({
      ...f,
      n_sol: -1,
      
    }));
    }

      if(!isChecked){
        setFilters((f) =>({
          ...f,
          n_sol: 0,
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
