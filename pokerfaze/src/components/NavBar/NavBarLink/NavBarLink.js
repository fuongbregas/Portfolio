import './NavBarLink.css';
import React from 'react';
import {Link} from 'react-router-dom'

const NavBarLink = () => {
    return (
        <ul className = 'NavBarLinkContainer'>
            <Link className = 'NavBarLink' to = '/'>
                <span className = 'NavBarItem' >My Hardware</span>
                
            </Link>
            <Link className = 'NavBarLink' to = '/'>
                <span className = 'NavBarItem' >Contact Me</span>
            </Link>
            
        </ul>
    );
}

export default NavBarLink;