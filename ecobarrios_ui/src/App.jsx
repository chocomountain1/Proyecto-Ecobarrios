import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button.jsx'  // importación del componente Button
import Panel_botones from './components/panel_botones.jsx'
function App() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="cabecera">
        <h1>Ecobarrios</h1>
        <div style={{width: '18rem'}}></div> {/* Espaciador */}
        <Panel_botones array_textos={["Explorar", "Análisis", "Datos", "Reportes"]} />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
