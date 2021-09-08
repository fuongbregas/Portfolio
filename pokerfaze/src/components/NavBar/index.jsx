import React, { useState } from 'react';
import logo from './NavBarLogo/poker.png'
import {
    Nav,
    NavContainer,
    NavLogoContainer,
    NavLogo,
    NavWebName,
    NavLink,
    NavLinkName,
    Bars,
    NavMenu,
    NavItem,
    NavSocial
} from './NavBarElements';


const NavigationBar = () => {
    const [isOpen, setisOpen] = useState(false);

    const toggle = () => {
      setisOpen(!isOpen);
    }

    return (
        <Nav>
            <NavContainer>
                <NavLogoContainer>
                    <NavLogo to = '/'>
                        <img 
                            src= {logo}
                            alt = ''
                        />
                        <NavWebName>
                            Poker FaZe
                        </NavWebName>
                        
                    </NavLogo>
                </NavLogoContainer>
                

                <Bars/>
                <NavMenu>
                    <NavItem>
                        <NavLink to = '/myhardware' >
                            <NavLinkName>
                                My Hardware
                            </NavLinkName>
                        </NavLink>
                    </NavItem>
                    
                    <NavItem>
                        <NavLink to = '/contact' >
                            <NavLinkName>
                                Contact Me
                            </NavLinkName>
                            
                        </NavLink>
                    </NavItem>
                    
                </NavMenu>

                <NavSocial>

                </NavSocial>
            </NavContainer>
        </Nav>
    );
}
    


export default NavigationBar;