import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Register from './pages/register-page/index'
import Login from './pages/login-page/index'
// import DashBoard from './pages/dashboard-page/index'

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/dashboard" element={<DashBoard />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
