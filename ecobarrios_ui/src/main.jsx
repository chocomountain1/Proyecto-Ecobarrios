import { createRoot } from 'react-dom/client'
import { BrowserRouter} from 'react-router-dom'
import App from './App.jsx'
import './styles/base.css' // importación de estilos base
import './styles/variables.css' // importación de variables CSS, con estilo dark y "tipografia elegante"


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
