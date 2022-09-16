import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Register from './Pages/register-page'
import Login from './Pages/login-page'
import DashBoard from './Pages/dashboard-page'

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
