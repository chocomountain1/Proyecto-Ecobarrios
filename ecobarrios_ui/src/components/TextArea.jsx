function TextArea({ label, value, onChange }) {
  return (
    <div className="input-group">
      <label>{label}</label>
      <textarea rows={4} value={value} onChange={e => onChange(e.target.value)} />
    </div>
  );
}

export default TextArea;