import '../styles/components/modal/modal.css'

export default function Afiche({solution}){
    if(!solution) return null;
    console.log(solution);
    if(!solution.url){
        return(
            <div className = "modal-section-title">
                <h2 className = "modal-h2-text">Afiche del proyecto</h2>
                                    <div className = "modal-section-content">
                                       <p className = "modal-p-text"><em>😞 No hay afiches registrados para este proyecto 😞 </em></p>
                                    </div>
            </div>
            
        )
    }
    return(
    <div className='modal-section-title'>
                                    <h2 className = "modal-h2-text">Afiche del proyecto</h2>
                                    <div className = "modal-section-content">
                                        <iframe
                                            src={solution.url}
                                            width="100%"
                                            height="500px"
                                            style={{ border: "none" }}
                                        />
                                    </div>
                                </div>
    )
}