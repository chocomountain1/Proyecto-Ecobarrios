import React, { useState } from 'react';
import '../styles/components/switch.css';

export default function Switch({ label, checked = false, onChange }) {
  const [isChecked, setIsChecked] = useState(checked);

  const handleToggle = () => {
    setIsChecked(!isChecked);
    if (onChange) {
      onChange(!isChecked);
    }
  };

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
