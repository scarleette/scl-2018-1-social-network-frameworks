import React from 'react';
import { Navbar, NavItem, Icon, Button } from 'react-materialize';

const NavBar = () => {
    return (
      <div>
        <Navbar brand='Little Pet Society' right>
          {/* <NavItem onClick={() => console.log('test click')}>Getting started</NavItem*/}
          <NavItem>Little Pet Society</NavItem>
          <NavItem divider />
          <NavItem href='components.html'><Icon>perm_identity</Icon>Perfil</NavItem>
          <NavItem href='components.html'><Icon>help_outline</Icon>Clinicas Veterinarias</NavItem>
          <NavItem href='components.html'><Icon>chrome_reader_mode</Icon>Muro</NavItem>
          <NavItem href='components.html'><Icon>chat</Icon>Chat</NavItem>
          <NavItem divider />
          <Button waves='light'>Log Out</Button>
        </Navbar>
      </div>
    )
  };

export default NavBar;
