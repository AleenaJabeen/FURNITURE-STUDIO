import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'

function AdminLayout() {
  return (
    <>
    <h1>Admin view</h1>
    <Sidebar/>
    <Header/>
      <Outlet />
      
    </>
  )
}

export default AdminLayout
