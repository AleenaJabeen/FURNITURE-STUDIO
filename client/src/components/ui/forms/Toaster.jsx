import React ,{useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from '../../../css/AuthCSS/register.module.css';

function Toaster({ toastMessage, setShowToast }) {
  return (
    <div
      className={`${styles.toastStyle} toast position-fixed bottom-0 end-0 p-3 ${toastMessage ? "show" : ""}`} 
      style={{ zIndex: 1050,background:"#caa571",transition: "opacity 0.2s ease-in-out" }}
      role="alert"
      
    >
      <div className={`${styles.toastStyle} toast-header`} style={{background:"#caa571"}}>
        <button
          type="button"
          className="btn-close"
          onClick={() => setShowToast(false)}
        ></button>
      </div>
      <div className="toast-body text-xl">{toastMessage}</div>
    </div>
  );
}

export default Toaster;
