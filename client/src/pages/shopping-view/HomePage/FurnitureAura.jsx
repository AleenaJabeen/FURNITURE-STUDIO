import React from 'react';
import { opulent,modern,trendy} from '../../../assets';


function FurnitureAura() {
  return (
    <>
     <section className="furnitureType container-fluid pt-5 pb-5">
        <div className="row ps-4">
            <div className="position-relative opulent col-12 col-md-6 col-lg-4" style={{backgroundImage:`url(${opulent})`,backgroundRepeat:"no-repeat"}}>
                <div className="position-absolute border border-2 box"><h4>Opulent</h4></div>
            </div>
            <div className="position-relative col-12 col-md-6 col-lg-4 modern" style={{backgroundImage:`url(${modern})`,backgroundRepeat:"no-repeat"}}>
            <div className="position-absolute border border-2 box"><h4>Modern</h4></div>
                </div>
                <div className="position-relative col-12 col-md-12 col-lg-4 trendy" style={{backgroundImage:`url(${trendy})`,backgroundRepeat:"no-repeat"}}>
                <div className="position-absolute border border-2 box"><h4>Trendy</h4></div>
                </div>
        </div>
        </section> 
    </>
  )
}

export default FurnitureAura
