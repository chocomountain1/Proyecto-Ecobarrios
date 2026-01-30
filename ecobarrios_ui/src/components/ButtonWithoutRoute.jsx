import '../styles/components/elements/button.css';


export default function ButtonWithoutRoute({ text, setForm, name}) {
  return (
    <button type = "button" className='btn' onClick={() =>
    setForm(prev => {
        const nuevoEstado = {};

        for (const key in prev) {
        nuevoEstado[key] = false;
        }

        nuevoEstado[name] = true;

        return nuevoEstado;
    })
    }>
        {text}
    </button>
  )
}

