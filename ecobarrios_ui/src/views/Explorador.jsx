import '../App.css'
import Map from '../components/map.jsx'      
import React, { useState, useEffect } from 'react'
import Panel_botones from '../components/panel_botones.jsx'

function Explorador() {
  const [ecobarrios, setEcobarrio] = useState([]) 

  const [filters, setFilters] = useState({
    action_lines: [],
    n_sol: -1,
    consolidationStatus:[],
  })
  console.log(filters)
    useEffect(() => {
      const fetchEcobarrios = async() =>{
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/ecobarrios`,{
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
        <h1>🗺️Ecobarrios</h1>
        <div style={{width: '15rem'}}></div> {/* Espaciador */}
        <Panel_botones array_textos={["Explorar", "Agregar datos", "Afinidad", "Reportes"]} array_rutas={["/", "/forms"]} />
      </div>
      <Map ecobarrios = {ecobarrios} setFilters = {setFilters} />
    </>
  )
}

export default Explorador
