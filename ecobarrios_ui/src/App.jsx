import './App.css'
import Map from './components/map.jsx'      
import React, { useState, useEffect } from 'react'
import Panel_botones from './components/panel_botones.jsx'
function App() {
  const [ecobarrios, setEcobarrio] = useState([]) 

  const [filters, setFilters] = useState({
    action_lines: [],
    n_sol: -1,
  })
  console.log(filters)
    useEffect(() => {
      const fetchEcobarrios = async() =>{
        const response = await fetch('http://localhost:3000/api/ecobarrios',{
          method: 'POST',
          headers: { 'Content-Type' : 'application/json' },
          body: JSON.stringify(filters),
        });

        const data = await response.json();
        setEcobarrio(data);
      };

      fetchEcobarrios();
    }, [filters]);
      
  return (
    <>
      <div className="cabecera">
        <h1>Ecobarrios</h1>
        <div style={{width: '18rem'}}></div> {/* Espaciador */}
        <Panel_botones array_textos={["Explorar", "Afinidad", "Datos", "Reportes"]} />
      </div>
      <Map ecobarrios = {ecobarrios} setFilters = {setFilters} />
    </>
  )
}

export default App
