import React from 'react'
import {Outlet} from 'react-router-dom'

function AuthLayout() {
  return (
    <>
    <h1>Auth Page</h1>
      <Outlet />
    </>
  )
}

export default AuthLayout
