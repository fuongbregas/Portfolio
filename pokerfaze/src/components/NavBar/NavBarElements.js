import styled from 'styled-components';
import {NavLink as Link} from 'react-router-dom';
import {FaBars} from 'react-icons/fa';

export const Nav = styled.nav`
    background: #141415;
    height: 80px;
    
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`

export const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`
export const NavLogoContainer = styled.div`
    
    height: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: row;
`

export const NavLogo = styled(Link)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    text-decoration: none;

    
`

export const NavWebName = styled.h1`
    font-weight: 100;
    padding-top: 10px;
    @media screen and (max-width: 768px) {
        display: none;
    }

    &:hover {
      color: #0084ff;
      transition: 0.4s; 
    }
`

export const NavLink = styled(Link)`
    color: white;
    text-decoration: none;
    overflow: hidden;
    height: 100%;
    box-sizing: border-box;
`

export const NavLinkName = styled.span`
    color: white;
    font-size: 20px;
    padding-top: 37px;

    &:hover {
        color: #0084ff;
        transition: 0.4s; 
    }
`

export const Bars = styled(FaBars)`
    display: none;
    color: white;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: -24px;
    text-align: center;
    list-style: none;

    height: 100%;
    box-sizing: border-box;
    @media screen and (max-width: 768px){
        display: none;
    }
`

export const NavLinkItem = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
`

export const NavItem = styled.li`
    height: 100px;
    align-items: center;
`

export const NavSocial = styled.div`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`