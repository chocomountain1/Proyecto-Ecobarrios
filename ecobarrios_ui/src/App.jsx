import './App.css'
import Map from './components/map.jsx'      // importación del componente Map
import React, { useState, useEffect } from 'react'
import Panel_botones from './components/panel_botones.jsx'
function App() {
  const [ecobarrios, setEcobarrio] = useState([]) //aqui usamos el endpoint para traer los datos de ecobarrios
    useEffect(() => {
      fetch('http://localhost:3000/api/ecobarrios') 
        .then(response => response.json())
        .then(data => setEcobarrio(data))
        .catch(error => console.error('Error fetching ecobarrios:', error));
    }, [])

  return (
    <>
      <div className="cabecera">
        <h1>Ecobarrios</h1>
        <div style={{width: '18rem'}}></div> {/* Espaciador */}
        <Panel_botones array_textos={["Explorar", "Análisis", "Datos", "Reportes"]} />
      </div>
      <Map ecobarrios = {ecobarrios} />
    </>
  )
}

export default App
