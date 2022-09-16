// This is the login front and back end integration code
import React, { useState, useRef } from 'react'
import axios from 'axios'
import Cookies from 'universal-cookie'

import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/navbar'
import Sidebar from '../../components/sidebar'
import './index.css'

const cookies = new Cookies()

function Login() {
  const refEmail = useRef('')
  const refPassword = useRef('')
  const navigate = useNavigate()
  const [passwordShown, setPasswordShown] = useState(false)
  const [error, setError] = useState()

  const togglePassword = () => {
    setPasswordShown(!passwordShown)
  }

  const handleClick = async () => {
    try {
      const axiosConfig = {
        headers: {
          'Content-Type': 'application/json',
        },
      }

      const postData = {
        email: refEmail.current.value,
        password: refPassword.current.value,
      }

      axios
        .post(`/api/auth/login`, postData, axiosConfig, {
          withCredentials: true,
          crendentials: true,
        })
        .then(
          (response) => {
            if (response.status === 200) {
              cookies.set('access_token', response.data, { path: '/' })
            } else {
              console.log('login error')
            }
            // Handle navigation
            navigate('/dashboard')
          },
          (reason) => {
            console.error(reason)
            setError('Invalid Username or Password!')
          }
        )
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <Navbar />
      <Sidebar />
    </>
  )
}

export default Login
