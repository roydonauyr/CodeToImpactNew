import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Register from './pages/register-page'
import Login from './pages/login-page'
import DashBoard from './pages/dashboard-page'

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<DashBoard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
