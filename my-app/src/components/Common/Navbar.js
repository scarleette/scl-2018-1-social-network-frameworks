import React, { Component } from 'react';
import { Navbar, NavItem, Icon } from 'react-materialize';

class NavBar extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <Navbar brand='Littl Pet Society' right>
          {/* <NavItem onClick={() => console.log('test click')}>Getting started</NavItem*/}
          <NavItem href='components.html'><Icon>perm_identity</Icon></NavItem>
          <NavItem href='components.html'><Icon>help_outline</Icon></NavItem>
          <NavItem href='components.html'><Icon>chrome_reader_mode</Icon></NavItem>
          <NavItem href='components.html'><Icon>chat</Icon></NavItem>
        </Navbar>
      </div>
    )
  }
}

export default NavBar;
