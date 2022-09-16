import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Register from './Pages/Register';
import Login from './Pages/Login';
import DashBoard from './Pages/DashBoard';

import './App.css'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' exact element={<Login />} />
				<Route path='/register' element={<Register />} />
				<Route path='/dashboard' element={<DashBoard />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App
