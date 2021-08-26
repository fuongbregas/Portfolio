import './NavBarLogo.css';
import logo from './poker.png';
import React from 'react';
import {Link} from 'react-router-dom'

const NavBarLogo = () => {
    return (
       
            <div className = 'navBarLogoContainer'>
                <Link className = 'LogoLink' to = '/'>
                    <div className = 'linkContainer'>
                        <img className = 'pokerLogo'
                            src = {logo}
                            alt = ''
                        />
                        <span className = 'siteName'>
                            Poker FaZe
                        </span>
                    </div>
                    
                </Link>
            </div>
            
        
        
    );
}

export default NavBarLogo;