import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import Footer from './Footer'
import StickyNavbar from './Navbar'

const layout = () => {
  return (
    <>
      <StickyNavbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default layout