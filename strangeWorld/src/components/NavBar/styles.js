import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavbarStyle = styled.nav`
    padding: 30px;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    justify-content: space-between;
    gap: 10px;

`
export const NavbarList = styled.ul`
    display: flex;
    gap: 40px;
    


`


export const NavbarItem = styled.li`
    list-style: none;


`
export const CustomNavLinkLogo = styled(NavLink)`
    text-decoration: none;
    font-size: 1.5rem;


`
export const CustomNavLink = styled(NavLink)`
    text-decoration: none;
    font-size: 1.5rem;

    &:hover{
        background-color: #EEE7DA ;
        padding: 10px;
        border-radius: 5%;
        transition: .4s;
    }
    &.active{
        background-color: #EEE7DA ;
        padding: 10px;
        border-radius: 5%;

    }


`
export const CustomNavLinkLogoSpan = styled.span`
     font-weight: bold;
     text-transform: uppercase;
     


`