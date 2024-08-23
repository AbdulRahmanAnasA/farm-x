// src/Login.js
import React, { useState, useEffect } from 'react';
import '../styles/LoginPage.css';

import Logo from '../assets/logo.png';
import BgImage from '../assets/image.png';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        // Google Sign-In Initialization
        if (window.google && window.google.accounts) {
            window.google.accounts.id.initialize({
                client_id: '510406383154-ap6n53dqh3a3hmu0rga7oehr9nc4u3fu.apps.googleusercontent.com',
                callback: handleCredentialResponse
            });

            window.google.accounts.id.renderButton(
                document.getElementById('googleLoginButton'),
                { theme: 'outline', size: 'large' }
            );
        }

        // Adjust layout on load and resize
        adjustLayout();
        window.addEventListener('resize', adjustLayout);

        return () => window.removeEventListener('resize', adjustLayout);
    }, []);

    const adjustLayout = () => {
        const navbar = document.querySelector('.navbar');
        const loginBox = document.querySelector('.login-box');

        if (window.innerWidth <= 600) {
            navbar.style.flexDirection = 'column';
            loginBox.style.maxWidth = '90%';
        } else {
            navbar.style.flexDirection = 'row';
            loginBox.style.maxWidth = '400px';
        }
    };

    const handleSignIn = (event) => {
        event.preventDefault();
        if (validateCredentials(email, password)) {
            window.location.href = '/';
        } else {
            alert('Invalid email or password');
        }
    };

    const validateCredentials = (email, password) => {
        const validEmail = 'abdulrahmananas.bm22@bitsathy.ac.in';
        const validPassword = 'abdul';
        return email === validEmail && password === validPassword;
    };

    const handleCredentialResponse = (response) => {
        console.log('Encoded JWT ID token: ' + response.credential);
        window.location.href = '/';
    };

    return (
        <div className="container" style={{backgroundImage: "url(" + BgImage + ")"}}>
            <div className="navbar">
                <img src={Logo} alt="FarmStockX Logo" className="logo" />
                <button className="home-button" onClick={() => window.location.href = 'index.html'}>Home</button>
            </div>
            <div className="login-box">
                <h1>Welcome to <span className="highlight">FarmStockX</span></h1>
                <h2>Login</h2>
                <form id="signInForm" onSubmit={handleSignIn}>
                    <label htmlFor="email">Enter your email address</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="example@gmail.com"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="password">Enter your Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Enter your password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <a href="#" className="forgot-password">Forgot Password?</a>
                    <button type="submit" className="sign-in-button">Sign in</button>
                    <div id="googleLoginButton"></div>
                </form>
            </div>
        </div>
    );
}

export default Login;
