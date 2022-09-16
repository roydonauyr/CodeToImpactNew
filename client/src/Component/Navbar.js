import React from 'react';
import '../Style/Navbar.css';
import Logo from '../Asset/GIC.png';

const Navbar = () => {
	return (
        <div className='row'>
			<div className='navWrapper'>
				<div className='navLogo'>
					<img className='logo' src={Logo} alt='Logo' />
				</div>
			</div>
        </div>
	);
};

export default Navbar;