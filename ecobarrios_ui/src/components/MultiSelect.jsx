import '../styles/components/forms/forms.css'

function MultiSelect({ label, options, value, onChange }) {

  const handleToggle = (option) => {onChange(option)};

  return (
    <div className="input-group">
      <label>{label}</label>

      <div className="options-box">
        {options.map(op => (
          <div
            key={op}
            className={`option ${value.includes(op) ? "selected" : ""}`}
            onClick={() => handleToggle(op)}
          >
            {op}
          </div>
        ))}
      </div>

      <div className="chips">
        {value.map(v => (
          <span key={v} className="chip" onClick={() => handleToggle(v)}>
            {v} ✕
          </span>
        ))}
      </div>
    </div>
  );
}

export default MultiSelect;
