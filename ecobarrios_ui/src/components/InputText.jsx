function InputText({ label, value, onChange }) {
  return (
    <div className="input-group">
      <label>{label}</label>
      <input value={value} onChange={e => onChange(e.target.value)} />
    </div>
  );
}

export default InputText;
