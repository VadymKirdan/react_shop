import React from 'react';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
            <header>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/help'>Help</NavLink>
                <NavLink to='/create'>Create</NavLink>
            </header>
        )
    }
}

export default Header;