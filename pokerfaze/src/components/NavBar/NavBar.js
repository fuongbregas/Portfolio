import './NavBar.css';
import React from 'react';
import NavBarLogo from './NavBarLogo/NavBarLogo';
import NavBarLink from './NavBarLink/NavBarLink';
import NavBar from 'react-bootstrap/Navbar'
const NavigationBar = () => {
    return (
        <NavBar className = 'navbar' >
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
        </NavBar>
    );
}

export default NavigationBar;