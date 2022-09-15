import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';

import Register from './Auth/Register';
import Login from './Auth/Login';

import "./App.css";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Login />} />
				<Route path='/register' element={<Register />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;