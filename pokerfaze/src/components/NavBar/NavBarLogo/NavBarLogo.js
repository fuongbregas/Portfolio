import './NavBarLogo.css';
import logo from './poker.png';
import React from 'react';

const NavBarLogo = () => {
    return (
        <div className = 'navBarLogoContainer'>
            <img className = 'pokerLogo'
                src = {logo}
                alt = ''
            />
            <span className = 'siteName'>
                Poker FaZe
            </span>
        </div>
        
    );
}

export default NavBarLogo;