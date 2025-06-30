import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'; // Assuming you have a CSS file for styling

function Navbar(){
    return(
        <nav className="navbar">
            <div className="navbar-content">
            <h1>menteeGo</h1>
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/login">Login</Link>
            </div>
            </div>
            
        </nav>


    )
}
export default Navbar;