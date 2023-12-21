import React from 'react'
import { NavLink } from 'react-router-dom'
import { CustomNavLinkLogo, CustomNavLinkLogoSpan,CustomNavLink, NavbarItem, NavbarList, NavbarStyle } from './styles'


const NavBar = () => {
  return (
    <NavbarStyle>
        <CustomNavLinkLogo to='/'>
            <p>Strange<CustomNavLinkLogoSpan>World</CustomNavLinkLogoSpan></p>

        </CustomNavLinkLogo>
        <NavbarList>
            <NavbarItem>
                <CustomNavLink to='/home'>Home</CustomNavLink>
                
            </NavbarItem>
            <NavbarItem>
                <CustomNavLink to='/login'>Login</CustomNavLink>
                
            </NavbarItem>
            <NavbarItem>
                <CustomNavLink to='/register'>Register</CustomNavLink>
                
            </NavbarItem>
            <NavbarItem>
                
                <CustomNavLink to='/about'>Sobre</CustomNavLink>
            </NavbarItem>
        </NavbarList>  
    </NavbarStyle>
  )
}

export default NavBar
