import React from 'react'
import './index.css'
import Logo from '../../Asset/GIC.png'

function Navbar() {
  return (
    <div className="row">
      <div className="navWrapper">
        <div className="navLogo">
          <img className="logo" src={Logo} alt="Logo" />
          <div>hello this is the navbar</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
