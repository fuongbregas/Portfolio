import './NavBar.css';
import React from 'react';
import NavBarLogo from './NavBarLogo/NavBarLogo';
import NavBarLink from './NavBarLink/NavBarLink';
const NavBar = () => {
    return (
        <nav className = 'navbar'>
            <div className = 'navbarContainer'>
                <div className = 'start'>
                    <NavBarLogo/>
                </div>
                <div className = 'middle'>
                    <NavBarLink/>
                </div>
                
                <div className = 'end'>

                </div>
            </div>
        </nav>
    );
}

export default NavBar;