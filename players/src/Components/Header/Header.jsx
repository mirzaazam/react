import React from 'react';
import logo from '../../../public/logo/logo.png';
import './Header.css';
const Header = () => {
    return (
        <div className='logo-container'>
            <img src={logo} alt="" />
            <h2 className='players-ln'>Players</h2>
            <ul className=''>
                <li><a href="#">Home</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Players</a></li>
            </ul>
        </div>
    );
};

export default Header;