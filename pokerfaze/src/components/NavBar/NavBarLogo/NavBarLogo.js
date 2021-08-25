import './NavBarLogo.css';
import logo from './poker.png';
import React from 'react';
import {Link} from 'react-router-dom'

const NavBarLogo = () => {
    return (
        <Link className = 'navBarLogoContainer' to = '/'>
            <img className = 'pokerLogo'
                src = {logo}
                alt = ''
            />
            <span className = 'siteName'>
                Poker FaZe
            </span>
        </Link>
        
    );
}

export default NavBarLogo;