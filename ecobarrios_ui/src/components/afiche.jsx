import '../styles/components/modal/modal.css'

export default function Afiche(solution){
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
                                        <image src = "https://www.google.com/search?sca_esv=76156e36b6817723&sxsrf=ANbL-n7f5y369mAXat68upodEOmV52B4rA:1769192310681&udm=2&fbs=ADc_l-bpk8W4E-qsVlOvbGJcDwpn60DczFdcvPnuv8WQohHLTaMb_WtLz8zQ41bNqiqMK_04Ozv42qQXGXRTVAFht9zrxKRrC957s7UePa8UGAP5emsJINUukcK1IFL3ND2_x73iSq1CzFQe_Jak9E6E7is2JiGkz3piUHTOC2-QIkzUMBncmuhLVndGPZf8AUoUlxN39Twzg1dR0Hm-GXGDPj9rV_EpwqM7X6D7QWJias-2MwqyxmM&q=perro&sa=X&ved=2ahUKEwjMt975oqKSAxViO7kGHUlOFDsQtKgLegQIEhAB#sv=CAMSVhoyKhBlLU9vSUZCQzlTeDZyV2ZNMg5Pb0lGQkM5U3g2cldmTToOeDRDaDhGS2MxTVBoTE0gBCocCgZtb3NhaWMSEGUtT29JRkJDOVN4NnJXZk0YADABGAcgvs2V7gQwAkoKCAEQAhgCIAIoAg" ></image>
                                    </div>
                                </div>
    )
}