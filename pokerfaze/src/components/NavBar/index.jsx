import React, { useState } from 'react';
import {Link} from 'react-router-dom';
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
    NavLinkItem,
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
                       
                        
                    </NavLogo>
                    <NavLink to = '/'>
                        
                        <NavWebName>
                            Poker FaZe
                        </NavWebName>
                        
                    </NavLink>
                </NavLogoContainer>
                

                <Bars/>
                <NavMenu>
                    <NavItem>
                        <NavLinkItem to = '/myhardware' >
                            <NavLinkName>
                                My Hardware
                            </NavLinkName>
                        </NavLinkItem>
                    </NavItem>
                    
                    <NavItem>
                        <NavLinkItem to = '/contact' >
                            <NavLinkName>
                                About Me
                            </NavLinkName>
                        </NavLinkItem>
                    </NavItem>
                </NavMenu>
                <NavSocial>

                </NavSocial>
            </NavContainer>
        </Nav>
    );
}

export default NavigationBar;