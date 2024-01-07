import React from 'react'
import { NavLink } from 'react-router-dom'
import { CustomNavLinkLogo, CustomNavLinkLogoSpan,CustomNavLink, NavbarItem, NavbarList, NavbarStyle } from './styles'

import { useAuthentication } from '../../hooks/useAuthentication'
import { useAuthValue } from '../../context/AuthContext'


const NavBar = () => {
    const {logout} = useAuthentication()
    const {user} = useAuthValue()

    console.log("User:", user);

  return (
    <NavbarStyle>
        <CustomNavLinkLogo to='/'>
            <p>Strange<CustomNavLinkLogoSpan>World</CustomNavLinkLogoSpan></p>

        </CustomNavLinkLogo>
        <NavbarList>
            <NavbarItem>
                <CustomNavLink to='/'>Home</CustomNavLink>
                
            </NavbarItem>
           {user && (
            <>
                 <NavbarItem>
                <CustomNavLink to='/posts/create'>Novo Post</CustomNavLink>
                
            </NavbarItem>
            <NavbarItem>
                <CustomNavLink to='/dashboard'>Dashboard</CustomNavLink>
                
            </NavbarItem>
            
            </>
           )}
           {!user && (
            <>
            <NavbarItem>
           <CustomNavLink to='/login'>Entrar</CustomNavLink>
           
            </NavbarItem>
            <NavbarItem>
           <CustomNavLink to='/register'>Cadastrar</CustomNavLink>
           
       </NavbarItem>
       
       </>
           )}
            <NavbarItem>
                
                <CustomNavLink to='/about'>Sobre</CustomNavLink>
            </NavbarItem>
            {user && (
                <NavbarItem>
                    <button onClick={logout}>Sair</button>
                </NavbarItem>
            )}
        </NavbarList>  
    </NavbarStyle>
  )
}

export default NavBar
