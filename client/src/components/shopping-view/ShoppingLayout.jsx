import React from 'react'
import { Outlet } from 'react-router-dom'
import ShoppingHeader from './Header'
import Footer from './Footer'

function ShoppingLayout() {
  return (
    <>
 <ShoppingHeader/>
      <main>
        <Outlet/>
      </main>
      <Footer />
    </>
  )
}

export default ShoppingLayout
