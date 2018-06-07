import React from 'react';
import { NavLink, Nav } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class Header extends React.Component {
    render() {
        return (
            <header>
                <Navbar inverse>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a>React Shop</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        <NavItem>
                            <NavLink to='/'>Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='/help'>Help</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='/create'>Create</NavLink>
                        </NavItem>
                    </Nav>
                    <Nav pullRight>
                        <NavItem>
                            <NavLink to='/cart'>Cart</NavLink>
                        </NavItem>
                	</Nav>
                 </Navbar>
            </header>
        )
    }
}

export default Header;