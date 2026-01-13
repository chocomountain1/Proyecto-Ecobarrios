import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './styles/base.css' // importación de estilos base por si es necesario algún reset
import './styles/variables.css' // importación de variables CSS, con estilo dark y "tipografia elegante"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
