import React from 'react';
import { opulent,modern,trendy} from '../../../assets';


function FurnitureAura() {
  return (
    <>
     <section className="furnitureType container-fluid pt-5 md:pb-5 pb-2">
        <div className="row md:px-4 px-4">
            <div className="op position-relative opulent col-12 col-md-6 col-lg-4 md:pb-2 pb-0" style={{backgroundImage:`url(${opulent})`,backgroundRepeat:"no-repeat",backgroundPosition:"cover"}}>
                <div className="position-absolute border border-2 box"><h4>Opulent</h4></div>
            </div>
            <div className="tr position-relative col-12 col-md-6 col-lg-4 modern md:pb-2 pb-0" style={{backgroundImage:`url(${modern})`,backgroundRepeat:"no-repeat"}}>
            <div className="position-absolute border border-2 box"><h4>Modern</h4></div>
                </div>
                <div className="mo position-relative col-12 col-md-12 col-lg-4 trendy md:pb-2 pb-0" style={{backgroundImage:`url(${trendy})`,backgroundRepeat:"no-repeat"}}>
                <div className="position-absolute border border-2 box"><h4>Trendy</h4></div>
                </div>
        </div>
        </section> 
    </>
  )
}

export default FurnitureAura
