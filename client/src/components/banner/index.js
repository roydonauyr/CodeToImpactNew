import React from 'react'
import './index.css'
import Logo from '../../Asset/gic-logo-white.png'

function Banner() {
  return (
    <div className="banner">
      <image className="banner-img" src={Logo} alt="Logo" />
      <div className="banner-title">Page title</div>
    </div>
  )
}

export default Banner
