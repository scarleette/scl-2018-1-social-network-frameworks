import React, {Component} from 'react';
import {Navbar} from 'react-materialize';

class Navbar extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div>
                <Navbar brand='logo' right>
                    <NavItem href='get-started.html'><Icon>search</Icon></NavItem>
                    <NavItem href='get-started.html'><Icon>view_module</Icon></NavItem>
                    <NavItem href='get-started.html'><Icon>refresh</Icon></NavItem>
                    <NavItem href='get-started.html'><Icon>more_vert</Icon></NavItem>
                </Navbar>
            </div>
        )
    }
}