import React, { useState } from 'react';
import '../styles/components/elements/slider.css';

export default function Slider({ label, min = 0, max = 10, step = 1, onChange, setFilters }) {
  const [value, setValue] = useState(min);

  const handleChange = (e) => {
    const newValue = parseInt(e.target.value);
    setValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  const getDisplayValue = () => {
    if (value >= 5 && max > 5) {
      return value === max ? '5+' : value;
    }
    return value;
  };

  return (
    <div className="slider-container">
      {label && <label className="slider-label">{label}</label>}
      <div className="slider-wrapper">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={handleChange}
          className="slider-input"
        />
        <div className="slider-value">{getDisplayValue()}</div>
      </div>
    </div>
  );
}
