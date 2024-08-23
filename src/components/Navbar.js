// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../assets/logo.png';

function Navbar() {
    return (
        <nav className="navbar">
            <img src={logo} alt="FarmStockX Logo" className="logo" />
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/login">Sign In</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
