import React from 'react';
import { Link,NavLink } from 'react-router-dom';
import './navbar.css'; // Assuming you have a CSS file for styling
import menteegologo from '../assets/image.png'; // Adjust the path as necessary

function Navbar(){
    return(
        <nav className="navbar">
            <div className="navbar-content">
            {/* <h1>menteeGo</h1> */}
            <img src={menteegologo} alt="MenteeGo Logo" className="logo" />

            <div className="nav-links">
                <NavLink to="/" className={({ isActive }) =>
    isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>
                <NavLink to="/about" className={({ isActive }) =>
    isActive ? 'nav-link active' : 'nav-link'}>About</NavLink>
                <NavLink to="/selectlogintype" className={({ isActive }) =>
    isActive ? 'nav-link active' : 'nav-link'}>Login</NavLink>
            </div>
            </div>
            
        </nav>


    )
}
export default Navbar;