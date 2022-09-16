import React, { useState, useRef } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import './index.css';

const cookies = new Cookies();
const Register = () => {
	const [register, setRegister] = useState({});
	const [error, setError] = useState({});
	const refInput = useRef();
	const navigate = useNavigate();

	const handleClick = async () => {
		try {

			console.log('clicked');
			const axiosConfig = {
				headers: { 'Content-Type': 'application/json' },
			};
			let postData = {
				email: refInput.current[0].value,
				name: refInput.current[1].value,
				password: refInput.current[2].value,
				department: refInput.current[3].value,
			};

			axios.post('/api/auth/register', postData, axiosConfig).then((response) => {
				setRegister(response);
				console.log(response);
				//Navigation
                //navigate()
			});
		} catch (error) {
			setError(error);
		}
	};
	return (
		<>
			<Navbar />
			<div className='RegWrapper'>
				<div className='RegContainer'>
					<div className='RegInfo'>
						<b>Sign up for</b>
						<span class='eldercare'>
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
							<p>With just a few simple steps.</p>
							<d>Have an account? Sign in</d>
							<a href='/' className='register'>
								{' '}
								here!
							</a>
						</c>
					</div>
					<div className='Register'>
						<h1>Sign Up</h1>
						<form ref={refInput}>
							<input
								className='form'
								type='text'
								name='Email'
								placeholder='Enter Email'
							/>
							<input
								className='form'
								type='text'
								name='Name'
								placeholder='Full Name'
							/>
							<input
								className='form'
								type='password'
								name='Password'
								placeholder='Password'
							/>
							<input
								className='form'
								type='text'
								name='Department'
								placeholder='Enter Department'
							/>
						</form>

						<button className='RegisterButton' onClick={handleClick}>
							Register
						</button>
						{register.email && <div>{register.name} has been registered! </div>}
						{register.errors && <div>{register.errors.msg} </div>}
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Register;