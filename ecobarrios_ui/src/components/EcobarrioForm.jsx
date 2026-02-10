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
  const [error,setError] = useState({});

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

  const validate = () => {
    const newErrors = {};

    if (!data.nombre || data.nombre.trim() === "") {
      newErrors.nombre = "El nombre del ecobarrio es obligatorio";
    }

    if (!data.comuna || data.comuna.trim() === "") {
      newErrors.comuna = "La comuna del ecobarrio debe ser específicada";
    }

    if (!data.maps || data.maps.length < 5) {
      newErrors.maps = "La referencia de ubicación debe tener al menos 5 caracteres";
    }

    if (!data.lat){
      newErrors.lat = "Ingresar latitud con formato de Google Maps"
    }

    if (!data.lon ){
      newErrors.lon = "Ingresar longitud con formato de Google Maps"
    }

    if (!data.contacto || data.contacto.trim() == ""){
      newErrors.contacto = "El nombre de contacto es obligatorio"
    }

    if(!data.correo || data.correo.trim() == ""){
      newErrors.correo = "El correo de contacto es obligatorio"
    }

    if(!data.telefono ){
      newErrors.telefono ="El teléfono de contacto es obligatorio"
    }

    if (!data.linea_accion || data.linea_accion.length === 0) {
      newErrors.lineasAccion = "Debes seleccionar al menos una línea de acción para el ecobarrio";
    }

    if(!data.estado || data.estado.length === 0){
      newErrors.estado = "Debes seleccionar al menos un estado de consolidación para el ecobarrio"
    }

    const desafios_filtrados = data.desafios.filter(d => Object.values(d).some(valor => valor.trim() !== ""))
    if(!desafios_filtrados || desafios_filtrados.length === 0){
      newErrors.desafios = "Debes agregar almenos un desafío para este ecobarrio"
    }

    return newErrors;
  };

  const quitarEmoji = (texto) => {
    return texto.split(" ").slice(1).join(" ");
  };

  const handleChange = (field, value) => {
    setData(d => ({ ...d, [field]: value }));
  };

  const handleActionLineChange = (field, newValue) => {
    const limpio = quitarEmoji(newValue);

    setData(d => ({
      ...d,
      [field]: d[field]?.includes(limpio)
        ? d[field].filter((e) => e !== limpio)
        : [...(d[field] || []), limpio]
    }));
  };

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
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setError(validationErrors);
      return; 
    }

    setError({}); 
    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/ecobarrios/create`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const response = res.json();
    if(!res.ok && !response.ok){
      alert("Hubo un error cargando el ecobarrio y sus desafíos :(")
    } else{
      alert("Ecobarrio y sus desafíos cargados correctamente!");
    }
  };

  return (
    <div className="form-container">
      <Section title="Datos del Ecobarrio">
        <InputText label="Nombre" value={data.nombre} onChange={v => handleChange("nombre", v)} />
        {error.nombre && <p className="error">{error.nombre}</p>}
        <InputText label="Comuna" value={data.comuna} onChange={v => handleChange("comuna", v)} />
        {error.comuna && <p className="error">{error.comuna}</p>}
        <InputText label="Referencia de ubicación" value={data.maps} onChange={v => handleChange("maps", v)}/>
        {error.maps && <p className="error">{error.maps}</p>}
        <InputText label="Latitud" value={data.lat} onChange={v => handleChange("lat", v)} />
        {error.lat && <p className="error">{error.lat}</p>}
        <InputText label="Longitud" value={data.lon} onChange={v => handleChange("lon", v)} />
        {error.lon && <p className="error">{error.lon}</p>}
      </Section>

      <Section title="Contacto">
        <InputText label="Nombre contacto" value={data.contacto} onChange={v => handleChange("contacto", v)} />
        {error.contacto && <p className="error">{error.contacto}</p>}
        <InputText label="Correo contacto" value={data.correo} onChange={v => handleChange("correo", v)} />
        {error.correo && <p className="error">{error.correo}</p>}
        <InputText label="Número contacto" value={data.telefono} onChange={v => handleChange("telefono", v)}/>
        {error.telefono && <p className="error">{error.telefono}</p>}
      </Section>

      <Section title="Clasificación">
        <MultiSelect label="Líneas de acción" options={lineas} value={data.linea_accion} onChange={v => handleActionLineChange("linea_accion", v)}/>
          {error.lineasAccion && <p className="error">{error.lineasAccion}</p>}
        <Select label="Estado de consolidación" options={estados} value={data.estado} onChange={v => handleChange("estado", v)} />
          {error.estado && <p className="error">{error.estado}</p>}
      </Section>
      
      <Section title="Desafío/s planteados">
      {error.desafios && <p className = "error">{error.desafios}</p>}
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
