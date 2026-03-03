import { createPortal } from "react-dom";
import React from 'react'
import {useEffect} from 'react'
import "../styles/components/modal/modal_solution.css";


export default function SolutionModal({ isOpen, onClose, children, solution}) {
    const [problem, setProblem] = React.useState([null]);
    useEffect(() => {
        if (!isOpen || !solution?.id) return;
        
        fetch(`${import.meta.env.VITE_API_URL}/api/ecobarrios/${solution.id}/problem`)
        .then((res) => res.json())
        .then(data => setProblem(data))
        .catch((error) => console.error('Error fetching problem:', error));
    }, [isOpen, solution?.id]);
    if (!isOpen) return null;

  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-container"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose}>✖</button>
        <div className='modal-name'>
            <h1 className='modal-h1-text'>{solution.nombre_proyecto}</h1>
            <div className='modal-section-title'>
                                <h2 className = "modal-h2-text">Problema al que se responde</h2>
                                <div className = "modal-section-content">
                                    <p className = "modal-p-text">{problem.descripcion}</p>
                                </div>
            </div>
        </div>
        
        {children}
      </div>
      
    </div>,
    document.body
  );
}
