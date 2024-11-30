import React from "react";
import styles from '../../css/AdminCSS/AdminLayout.module.css'
import { useDispatch } from "react-redux";
import { logoutUser } from "../../store/auth-slice";

function Header({ setOpen }) {

  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(logoutUser());
  }
  return (
    <>
      <header className={`d-flex align-items-center justify-content-between px-3 py-2  ${styles.header}`} style={{borderBottom: "1px solid var(--primary-color)"}}>
        <button className={`d-sm-block d-lg-none border-0 outline-0 p-1 ${styles.headermenu}`} onClick={() => setOpen(true)} >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-align-justify"
          >
            <path d="M3 12h18" />
            <path d="M3 18h18" />
            <path d="M3 6h18" />
          </svg>
          <span className="visually-hidden">Toggle Menu</span>
        </button>
        <div className="d-flex flex-grow-1 justify-content-end">
          <button onClick={handleLogout} className={`d-inline-flex gap-2 align-items-center me-2 rounded px-3 py-2 fs-6 fw-medium  border-0 outline-0  ${styles.headerbtn}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-log-out"
            >
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <polyline points="16 17 21 12 16 7" />
              <line x1="21" x2="9" y1="12" y2="12" />
            </svg>
            Logout
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
