import './NavBarLink.css';
import React from 'react';
import {Link} from 'react-router-dom'

const NavBarLink = () => {
    return (
        <div className = 'NavBarLinkContainer'>
            <Link className = 'NavBarLink' to = '/myhardware'>
                My Hardware
            </Link>
            <Link className = 'NavBarLink' to = '/contact'>
                Contact Me
            </Link>
            
        </div>
    );
}

export default NavBarLink;