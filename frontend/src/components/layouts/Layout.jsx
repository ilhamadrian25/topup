import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import Footer from './Footer'
import StickyNavbar from './Navbar'

const layout = () => {
  return (
    <>
    <StickyNavbar />
      {/* <Link to={'/'}>Home</Link>
      <Link to={'login'}>Login</Link> */}
      <Outlet />
      <Footer />
    </>
  )
}

export default layout