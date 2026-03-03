import { useState, useEffect } from "react";
import InputText from "./InputText";
import TextArea from "./TextArea";
import MultiSelect from "./MultiSelect";
import Select from "./Select";
import Section from "./Section";
import "../styles/components/forms/forms.css";

function ProblemaForm() {
  const [ecobarrios, setEcobarrios] =useState([]);
  const [desafios, setDesafios] = useState([]);

  useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}api/ecobarrios/sinFiltros`).then(r => r.json()).then(data => setEcobarrios(data));},[]);

  const [data, setData] = useState({
    usuarios: "",
    clientes: "",
    descripcion: "",
    desafioId: -1,
    soluciones: {
      propuesta_solucion:"",
      nombre_proyecto:"",
      TRL:0,
      grado_innovacion:"",
      SRL:0
    }
  });
  console.log(data)
  const innovation_options = [
    "Incremental",
    "Radical",
    "Disruptivo",
    "Radical contextual"
  ]
  const handleChange = (field, value) => {
    setData(d => ({ ...d, [field]: value }));
  };

  const handleSolutionChange = (field,value) =>{
    setData(prev => ({
      ...prev,
      soluciones:{
        ...prev.soluciones,
        [field]: value
      }
    }
    ))
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/ecobarrios/problemas/create`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const response = await res.json();

    if(!res.ok && !response.ok){
      alert("Hubo un problema cargando el problema y la solución :(")
    } else{
      alert("Problema y solución cargado correctamente!");
    }
  };

  return (
    <div className="form-container">
        <Section title = {"Ecobarrio y su desafío al cual responde la propuesta de solución"}>
        <div className="input-group">
          <select
        onChange={e => {
          const id = e.target.value;

          fetch(`${import.meta.env.VITE_API_URL}/api/ecobarrios/${id}/desafios`)
            .then(r => r.json())
            .then(setDesafios);
        }}
      >
        <option>Selecciona ecobarrio</option>
        {ecobarrios.map(e => (
          <option key={e.id} value={e.id}>{e.nombre}</option>
        ))}
      </select>
      </div>
      <div className="input-group">
      <select
        onChange={e =>
          setData(prev => ({
            ...prev,
            desafioId: Number(e.target.value)
          }))
        }
      >
        <option>Selecciona desafío</option>
        {desafios && desafios.map(d => (
          <option key={d.id} value={d.id}>{d.titulo}</option>
        ))}
      </select>
      </div>
      </Section>
      <Section title="Problema abordado">
        <InputText label="Descipción del problema" value={data.descripcion} onChange={v => handleChange("descripcion", v)} />
        <InputText label="Usuarios" value={data.usuarios} onChange={v => handleChange("usuarios", v)} />
        <InputText label="Clientes" value={data.clientes} onChange={v => handleChange("clientes", v)}/>
      </Section>
      <Section title="Propuesta de solución">
        <InputText label="Propuesta de solución" value={data.soluciones.propuesta_solucion} onChange={v => handleSolutionChange("propuesta_solucion", v)} />
        <InputText label="Nombre del proyecto" value={data.soluciones.nombre_proyecto} onChange={v => handleSolutionChange("nombre_proyecto", v)} />
        <InputText label="Nivel de Madurez Tecnológica" value={data.soluciones.TRL} onChange={v => handleSolutionChange("TRL", v)}/>
        <Select label="Grado de innovación" options={innovation_options} value={data.soluciones.grado_innovacion} onChange={v => handleSolutionChange("grado_innovacion", v)}/>
        <InputText label= "Nivel de Escalabilidad Tecnológica" value={data.soluciones.SRL} onChange={v => handleSolutionChange("SRL", v)}/>
        <InputText label= "Url del Poster del Proyecto" value={data.soluciones.url} onChange = {v => handleSolutionChange("url", v)}/>
      </Section>
      <button className="submit-btn" onClick={handleSubmit}>
        Guardar Problema y Solución
      </button>
      </div>
  );
}

export default ProblemaForm;
