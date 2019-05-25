import React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavLink} from 'reactstrap';
import { getuserInformation } from '../../context/actions/SessionStore';

export const Header = () => {
  const { name } = getuserInformation()
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Test Hooks</NavbarBrand>
        { name ?
            <NavbarBrand>Bienvenido {name}</NavbarBrand>
          :
            <NavLink href="/sign-in">Sign In</NavLink>
        }
      </Navbar>
    </div>)
    ;
}