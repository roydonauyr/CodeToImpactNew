import React, { useState, useRef } from 'react'
import axios from 'axios'

import Navbar from '../../components/navbar'
import Sidebar from '../../components/sidebar'
import Banner from '../../components/banner'
import './index.css'

function DashBoard() {
  const [passwordShown, setPasswordShown] = useState(false)

  const handleClick = async () => {}
  return (
    <>
      <Navbar />
      <Banner />
      <Sidebar />
    </>
  )
}

export default DashBoard
