import React from "react";
import { Link, NavLink } from "react-router-dom";
import './Navbar.css';
import logo from '../../assets/logo.png';


const Navbar = () => {
    return (
         <nav className="nav">
             <div className="nav-logo">
             <NavLink className="nav-brand" to="/">envited </NavLink>
             </div>
             
            <ul>
                <Link className="navb-btn" to="/">Log In</Link> 
            </ul>
            
        </nav>
    )
}

export default Navbar;