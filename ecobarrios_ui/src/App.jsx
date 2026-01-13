import './App.css'
import Map from './components/map.jsx'      // importación del componente Map
import Panel_botones from './components/panel_botones.jsx'
function App() {
  return (
    <>
      <div className="cabecera">
        <h1>Ecobarrios</h1>
        <div style={{width: '18rem'}}></div> {/* Espaciador */}
        <Panel_botones array_textos={["Explorar", "Análisis", "Datos", "Reportes"]} />
      </div>
      <Map />  {/* uso del componente Map */}
    </>
  )
}

export default App
