// This is the login front and back end integration code
import React, { useState, useRef } from 'react'
import axios from 'axios'
import Cookies from 'universal-cookie'

import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
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
      <div className="LoginWrapper">
        <div className="LoginContainer">
          <div className="LoginInfo">
            <b>Sign in to</b>
            <span className="eldercare">
              <span>E</span>
              <span>l</span>
              <span>d</span>
              <span>e</span>
              <span>r</span>
              <span>C</span>
              <span>a</span>
              <span>r</span>
              <span>e</span>
            </span>
            <c>
              <p>Don not have an account yet?</p>
              <d>Create an account</d>
              <a href="/register" className="register">
                {' '}
                here!
              </a>
            </c>
          </div>
          <div className="Login">
            <h1>Sign in</h1>
            <input
              className="email"
              ref={refEmail}
              type="text"
              name="email"
              placeholder="Enter Email"
            />
            <div className="passContainer">
              <input
                className="password"
                ref={refPassword}
                type={passwordShown ? 'text' : 'password'}
                name="password"
                placeholder="Password"
              />
              <button
                type="button"
                className="showPass"
                onClick={togglePassword}
              >
                <i className="gg-eye" />
              </button>
            </div>
            <a href="forget_password_url" className="forgetPass">
              Forgot your password?
            </a>
            <button type="button" className="loginButton" onClick={handleClick}>
              Log in
            </button>
            {error ? <div>{error}</div> : null}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Login
