import Panel_botones from '../components/panel_botones.jsx'
import EcobarrioForm from '../components/EcobarrioForm.jsx';

function Formulario(){
    return(
        <>
              <div className="cabecera">
                <h1>🗺️Ecobarrios</h1>
                <div style={{width: '15rem'}}></div> {/* Espaciador */}
                <Panel_botones array_textos={["Explorar", "Agregar datos", "Afinidad", "Reportes"]} array_rutas={["/", "/forms"]} />
              </div>
              <div>
                <EcobarrioForm></EcobarrioForm>
              </div>
        </>
    )
}

export default Formulario;