import React, { useState, useRef } from 'react'
import axios from 'axios'

import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/navbar'
import Sidebar from '../../components/sidebar'
import Banner from '../../components/banner'
import './index.css'

function DashBoard() {
  const navigate = useNavigate()
  const [passwordShown, setPasswordShown] = useState(false)

  const handleClick = async () => {}

  return (
    <>
      test
      <Navbar />
      <Banner />
      <Sidebar />
    </>
  )
}

export default DashBoard
