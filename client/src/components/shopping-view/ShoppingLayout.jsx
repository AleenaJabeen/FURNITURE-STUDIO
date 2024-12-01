import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import ShoppingHeader from './Header'

function ShoppingLayout() {
  return (
    <>
 <ShoppingHeader/>
      <main>
        <Outlet/>
      </main>
    </>
  )
}

export default ShoppingLayout
