import React from 'react';
import { NavLink } from 'react-router-dom';
import "../styles/navbar.scss"

function Navbar() {
    return (
        <div className="navbar">
            <NavLink  to="/">
                <img src="./img/kasa-logo.png" alt="Logo de Kasa" />
            </NavLink>
            <ul>
                <NavLink  to="/">
                    <li>Accueil</li>
                </NavLink>
                <NavLink to="/about">
                    <li>A Propos</li>
                </NavLink>
            </ul>
        </div>
    );
}

export default Navbar;