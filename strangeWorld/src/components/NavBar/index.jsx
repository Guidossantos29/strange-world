import React from 'react'
import { NavLink } from 'react-router-dom'
import { CustomNavLinkLogo, CustomNavLinkLogoSpan,CustomNavLink, NavbarItem, NavbarList, NavbarStyle } from './styles'

import { useAuthentication } from '../../hooks/useAuthentication'
import { useAuthValue } from '../../context/AuthContext'


const NavBar = () => {

    const {user} = useAuthValue

  return (
    <NavbarStyle>
        <CustomNavLinkLogo to='/'>
            <p>Strange<CustomNavLinkLogoSpan>World</CustomNavLinkLogoSpan></p>

        </CustomNavLinkLogo>
        <NavbarList>
            <NavbarItem>
                <CustomNavLink to='/home'>Home</CustomNavLink>
                
            </NavbarItem>
           {!user && (
            <>
                 <NavbarItem>
                <CustomNavLink to='/post/create'>Novo Post</CustomNavLink>
                
            </NavbarItem>
            <NavbarItem>
                <CustomNavLink to='/dashboard'>Dashboard</CustomNavLink>
                
            </NavbarItem>
            
            </>
           )}
            <NavbarItem>
                
                <CustomNavLink to='/about'>Sobre</CustomNavLink>
            </NavbarItem>
        </NavbarList>  
    </NavbarStyle>
  )
}

export default NavBar
