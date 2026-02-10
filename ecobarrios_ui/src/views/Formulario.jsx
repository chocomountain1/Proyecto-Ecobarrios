import Panel_botones from '../components/Panel_botones.jsx'
import EcobarrioForm from '../components/EcobarrioForm.jsx';
import ProblemaForm from '../components/ProblemaForm.jsx';
import PanelBotonesForm from '../components/PanelBotonesForm.jsx';
import { useState } from 'react';

function Formulario(){
  const [form, setForm] = useState({
    ecobarrio: true,
    problema: false,
    nose: false
  });
    return(
        <>
              <div className="cabecera">
                <h1>🗺️Ecobarrios</h1>
                <div style={{width: '15rem'}}></div> {/* Espaciador */}
                <Panel_botones array_textos={["Explorar", "Agregar datos", "Afinidad", "Reportes"]} array_rutas={["/", "/forms"]} />
              </div>
                <PanelBotonesForm array_textos={["Ecobarrios y desafíos", "Problema y solución", "Equipo desarrollador y datos académicos"]} setForm = {setForm}></PanelBotonesForm>
              <div>
                {form.ecobarrio && <EcobarrioForm></EcobarrioForm>}
              </div>
              <div>
                {form.problema && <ProblemaForm></ProblemaForm>}
              </div>
        </>
    )
}

export default Formulario;