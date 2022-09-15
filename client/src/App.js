import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';

import Register from './pages/register-page'
import Login from './pages/login-page'

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
