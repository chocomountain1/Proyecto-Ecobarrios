import '../styles/components/modal/modal.css';
import React from 'react';
import { useState } from "react";
import SolutionModal from "./solution_modal";
import Afiche from "./afiche"

export default function Proyect({ solutions}){
    const [open, setOpen] = useState(false);
    
    
    if(!solutions || solutions.length === 0){
        return(
            <div className = "modal-section-content">
                <p className = "modal-p-text"><em>🗂️No hay proyectos registrados para este ecobarrio</em></p>
            </div>
        )
    }


    return(
        <div className = "modal-title-section">
            <div className = "modal-proyect-content">
                {solutions.map((solution, index) => (
                    <div key={index} className = "modal-proyect-card">
                        <div className = "modal-proyect-title" onClick={() => setOpen(true)}>
                        <h3 className = "modal-h3-text" style = {{ textDecoration: "underline"}}><strong>{solution.nombre_proyecto}</strong></h3>
                        </div>
                        <SolutionModal isOpen={open} onClose={() => setOpen(false) } solution = {solution}>
                            <div className='modal-section-title'>
                                <h2 className = "modal-h2-text">Propuesta de solución</h2>
                                <div className = "modal-section-content">
                                    <p className = "modal-p-text">{solution.propuesta_solucion}</p>
                                </div>
                            
                                <div className='modal-section-title'>
                                    <h2 className = "modal-h2-text">Nivel de madurez y grado de innovación</h2>
                                    <div className = "modal-section-content">
                                        <p className = "modal-p-text"><strong>🚀Technology Readiness Level: </strong>Nivel {solution.TRL}</p>
                                        <p className = "modal-p-text"><strong>💡Grado de innovación: </strong>{solution.grado_innovacion}</p>
                                        <p className = "modal-p-text"><strong>🧪Social Readiness Level: </strong>Nivel {solution.SRL}</p>
                                    </div>
                                </div>
                                <Afiche solution = {solution}></Afiche>
                                
                            </div>
                        </SolutionModal>
                    </div>
                ))}
            </div>
        </div>
    )
}