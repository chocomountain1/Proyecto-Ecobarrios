import '../styles/components/modal/modal.css';
import React from 'react';

export default function Proyect({ solutions}){
    const [openId, setOpenId] = React.useState(null)

    console.log(solutions);
    if(!solutions || solutions.length === 0){
        return(
            <div className = "modal-section-content">
                <p className = "modal-p-text"><em>🗂️No hay proyectos registrados para este ecobarrio</em></p>
            </div>
        )
    }

    const handleToggle= (id) => {
        setOpenId(openId == id ? null: id)
    }

    return(
        <div className = "modal-title-section">
            <div className = "modal-proyect-content">
                {solutions.map((solution, index) => (
                    <div key={index} className = "modal-proyect-card">
                        <div className = "modal-proyect-title" onClick={() => handleToggle(solution.id)}>
                        <h3 className = "modal-h3-text" style = {{ textDecoration: "underline"}}><strong>{solution.nombre_proyecto}</strong></h3>
                        </div>
                        {openId== solution.id &&(<p key = {index}className = "modal-p-text"><strong>Solución propuesta:</strong> {solution.propuesta_solucion}</p>)}
                    </div>
                ))}
            </div>
        </div>
    )
}