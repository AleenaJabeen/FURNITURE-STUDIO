import React , {useState} from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import styles from '../../css/AdminCSS/AdminLayout.module.css'

function AdminLayout() {
  const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <div className="d-flex min-vh-100 w-100">
      {/* Admin Sidebar */}
      <Sidebar
        open={openSidebar}
        setOpen={setOpenSidebar}
      />

      <div className="d-flex flex-column flex-grow-1">
        {/* Admin Header */}
        <Header
          setOpen={setOpenSidebar}
        />

        <main className={`flex-grow-1 d-flex flex-column p-3 p-md-4 ${styles.main}`}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;
