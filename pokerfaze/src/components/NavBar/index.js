import React from 'react';
import logo from './NavBarLogo/poker.png'
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavSocial
} from './NavBarElements';


const NavigationBar = () => {
    
    return (
        <>
            <Nav>
                <NavLink to = '/'>
                    <img 
                        src= {logo}
                        alt = ''
                    />
                    <h1>Poker FaZe</h1>
                </NavLink>

                <Bars/>
                <NavMenu>
                    <NavLink to = '/myhardware' activeStyle>
                        My Hardware
                    </NavLink>
                    <NavLink to = '/contact' activeStyle>
                        Contact Me
                    </NavLink>
                </NavMenu>

                <NavSocial>

                </NavSocial>
            </Nav>
        </>
    );
}
    


export default NavigationBar;