import '../App.css'
import Map from '../components/Map.jsx'
import React, { useState, useEffect } from 'react'
import Panel_botones from '../components/Panel_botones.jsx'

function Explorador() {
  const [ecobarrios, setEcobarrio] = useState([]) 

  const [filters, setFilters] = useState({
    action_lines: [],
    n_sol: -1,
    consolidationStatus:[],
  })
    useEffect(() => {
      const fetchEcobarrios = async() =>{
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/ecobarrios/sinFiltros`,{
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
