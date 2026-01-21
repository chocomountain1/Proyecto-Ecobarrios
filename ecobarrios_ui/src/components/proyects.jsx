import '../styles/components/modal/modal.css';

export default function Proyect({ solutions }){
    console.log(solutions);
    if(!solutions || solutions.length === 0){
        return(
            <div className = "modal-section-content">
                <p className = "modal-p-text"><em>🗂️No hay proyectos registrados para este ecobarrio</em></p>
            </div>
        )
    }
    return(
        <div className = "modal-title-section">
            <div className = "modal-section-content">
                {solutions.map((solution, index) => (
                    <div key={index} className = "modal-proyect-card">
                        <h3 className = "modal-h3-text">{solution.nombre_proyecto}</h3>
                        <p className = "modal-p-text">{solution.propuesta_solucion}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}