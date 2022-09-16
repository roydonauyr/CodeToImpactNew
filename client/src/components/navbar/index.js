import React from 'react'
import './index.css'
import Logo from '../../assets/gic-logo.png'

function Navbar() {
  return (
    <div className="row">
      <div className="navWrapper">
        <div className="navLogo">
          <img className="logo" src={Logo} alt="Logo" />
          <div>hello this is the navbar testing</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
