import React from 'react'
import { Link } from 'react-router-dom'

const Menu = ({ label, target, style }) => {
  return (
    <>
        <Link to={target} className={style}>{label}</Link>
    </>
  )
}

export default Menu