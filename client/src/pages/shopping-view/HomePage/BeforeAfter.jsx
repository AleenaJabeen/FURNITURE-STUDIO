import React from 'react';
import { before,after } from '../../../assets';
import { TiArrowSortedUp } from "react-icons/ti";
import { TiArrowSortedDown } from "react-icons/ti";


function BeforeAfter() {
  return (
    <>
      <section className="beforeAfter container-fluid">
      <div className="inline-line">
  <hr className="inline-hr"/>
  <span className='fw-bold'>BEFORE AFTER</span>
</div>
<h2 className='fw-bold text-white'>Let's Have A Look At What <br />Creativity Is!</h2>
<div className="row px-4 position-relative beforeAfterBody">
<div className="lightingBtnBody position-absolute btn"><TiArrowSortedUp className="lightingBtn" /><TiArrowSortedDown className="lightingBtn" /></div>
    <div className="col-6 p-0 m-0">
    <div className={`card bg-dark text-white  beforeAfterCard`}>
  <img src={before} className="img-fluid" alt="BEFORE"/>
  <div className="card-img-overlay d-flex  justify-content-start justify-content-md-center align-items-end p-0">
    <h5 className="card-title h5  px-4 py-3 m-0 bgB justify-self-start">Before</h5>
  </div>
</div>    </div>
    <div className="col-6 p-0 m-0">
        <div className={`card bg-dark text-white  beforeAfterCard`}>
  <img src={after} className="img-fluid" alt="AFTER"/>
  <div className="card-img-overlay d-flex justify-content-start justify-content-md-center align-items-end p-0">
    <h5 className="card-title h5 px-4 py-3 m-0 bgA justify-self-start">After</h5>
  </div>
</div>

    </div>
</div>

      </section>
    </>
  )
}

export default BeforeAfter
