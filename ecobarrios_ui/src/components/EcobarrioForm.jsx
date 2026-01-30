import { useState } from "react";
import InputText from "./InputText";
import TextArea from "./TextArea";
import MultiSelect from "./MultiSelect";
import Select from "./Select";
import Section from "./Section";
import "../styles/components/forms/forms.css";

function EcobarrioForm() {

  const [data, setData] = useState({
    nombre: "",
    comuna: "",
    lat: "",
    lon: "",
    maps: "",
    contacto: "",
    correo: "",
    telefono: "",
    linea_accion: [],
    estado: "",
    desafios: [{
        titulo: "",
        desc: "",
        ubicacion: ""
    }]
  });

  const estados = [
    "Semilla",
    "Emergente",
    "En Consolidación",
    "Referente",
    "No participó de Sendero Ecobarrios"
  ];

  const lineas = [
    '🦋 Biodiversidad',
    '🌱 Restauración Ecológica',
    '📚 Educación Ambiental',
    '🌳 Áreas Verdes',
    '♻️ Gestión y Manejo de Residuos',
    '🥕 Huertos Comunitarios',
    '⚡Eficiencia Energética',
    '🐶 Tenencia Responsable de Mascotas',
    '🛡️ Seguridad',
    '💧 Gestión Hídrica',
    '🌫️ Contaminación Atmosférica'
  ]

  const handleChange = (field, value) => {
    setData(d => ({ ...d, [field]: value }));
  };

  const handleActionLineChange = (field, newValue) => {
    setData(d => ({...d, 
        [field]: d[field]?.includes(newValue)? d[field].filter((e) => e != newValue):[...(d[field] || []), newValue]}))
  }

  const handleDesafioChange = (index, field, newValue) => {
  setData(d => {
    const nuevosDesafios = [...d.desafios];

    nuevosDesafios[index] = {
      ...nuevosDesafios[index],
      [field]: newValue
    };

    return {
      ...d,
      desafios: nuevosDesafios
    };
  });
};

  const addDesafio = () => {
    setData(d => ({
        ...d,
        desafios: [
        ...d.desafios,
        { titulo: "", desc: "", ubicacion: "" }
        ]
    }));
    };

  const removeDesafio = (index) => {
    setData(d => ({
        ...d,
        desafios: d.desafios.filter((_, i) => i !== index)
    }));
    };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:3000/api/ecobarrios/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    alert("Ecobarrio y sus desafíos cargados correctamente!");
  };

  return (
    <div className="form-container">
      <Section title="Datos del Ecobarrio">
        <InputText label="Nombre" value={data.nombre} onChange={v => handleChange("nombre", v)} />
        <InputText label="Comuna" value={data.comuna} onChange={v => handleChange("comuna", v)} />
        <InputText label="Referencia de ubicación" value={data.maps} onChange={v => handleChange("maps", v)}/>
        <InputText label="Latitud" value={data.lat} onChange={v => handleChange("lat", v)} />
        <InputText label="Longitud" value={data.lon} onChange={v => handleChange("lon", v)} />
      </Section>

      <Section title="Contacto">
        <InputText label="Nombre contacto" value={data.contacto} onChange={v => handleChange("contacto", v)} />
        <InputText label="Correo contacto" value={data.correo} onChange={v => handleChange("correo", v)} />
        <InputText label="Número contacto" value={data.telefono} onChange={v => handleChange("telefono", v)}/>
      </Section>

      <Section title="Clasificación">
        <MultiSelect label="Líneas de acción" options={lineas} value={data.linea_accion} onChange={v => handleActionLineChange("linea_accion", v)}/>
        <Select label="Estado de consolidación" options={estados} value={data.estado} onChange={v => handleChange("estado", v)} />
      </Section>
      
      <Section title="Desafío/s planteados">
        {data.desafios.map((desafio, i) => (
            <div key={i} className="desafio-block">
            <InputText
                label={`Título del desafío ${i + 1}`}
                value={desafio.titulo}
                onChange={v => handleDesafioChange(i, "titulo", v)}
            />

            <InputText
                label="Breve descripción"
                value={desafio.desc}
                onChange={v => handleDesafioChange(i, "desc", v)}
            />

            <InputText
                label="Ubicación geográfica del desafío"
                value={desafio.ubicacion}
                onChange={v => handleDesafioChange(i, "ubicacion", v)}
            />
            <button type="button" className = "delete-btn" onClick={() => removeDesafio(i)}>
                Eliminar
            </button>
            <Section title = ""></Section>
            </div>
            
        ))}

        <button type = "button" className="add-btn" onClick={addDesafio}>
            + Agregar otro desafío
        </button>
    
        </Section>
      <button className="submit-btn" onClick={handleSubmit}>
        Guardar Ecobarrio
      </button>
    </div>
  );
}

export default EcobarrioForm;
