import React, { Component } from 'react';
import { Navbar, NavItem, Icon, Button } from 'react-materialize';

class NavBar extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <Navbar brand='Little Pet Society' right>
          {/* <NavItem onClick={() => console.log('test click')}>Getting started</NavItem*/}
          <NavItem href='components.html'><Icon>perm_identity</Icon></NavItem>
          <NavItem href='components.html'><Icon>help_outline</Icon></NavItem>
          <NavItem href='components.html'><Icon>chrome_reader_mode</Icon></NavItem>
          <NavItem href='components.html'><Icon>chat</Icon></NavItem>
          <NavItem divider />
          <Button waves='light'>Log Out<Icon right>exit_to_app</Icon></Button>
        </Navbar>
      </div>
    )
  }
}

export default NavBar;
