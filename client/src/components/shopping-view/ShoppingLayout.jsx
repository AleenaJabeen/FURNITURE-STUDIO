import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'

function ShoppingLayout() {
  return (
    <div>
      <h1>Shopping</h1>
      <Header/>
      <main>
        <Outlet/>
      </main>
    </div>
  )
}

export default ShoppingLayout
