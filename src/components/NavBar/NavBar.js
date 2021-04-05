import React from 'react'; //importa libreria React
import { NavLink } from 'react-router-dom';
import Logo from '../../img/logo.png'

import './Navbar.css';

export default function NavBar() {
    return (
        <header className="navbar">
            <div>
                <p style={{color:'white', fontSize:'25px'}}>Movie<span style={{color:'#005c57', textShadow:'1px 2px 1px white'}}>ON</span></p>
                <img id="logo" src={Logo} width="40" height="40" className="d-inline-block align-top" alt="" />
            </div>
            <nav>
                <ul className="list">
                    <li className="list-item">
                        <NavLink exact to="/" >Home</NavLink>
                        <NavLink to="/favs" >Favoritas</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}