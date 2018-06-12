import React from 'react';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
            <header>
                <div className="site-menu">
                    <div className="menu-items">
                        <div className="logo">
                            <a>React Shop</a>
                        </div>
                        <nav>
                            <ul className="nav-list">
                                <li className="nav-item"><NavLink to='/'>Home</NavLink></li>
                                <li className="nav-item"><NavLink to='/help'>Help</NavLink></li>
                                <li className="nav-item"><NavLink to='/create'>Create</NavLink></li>
                            </ul>      
                        </nav>
                        <div className="actions">
                            <NavLink to='/cart'>Cart</NavLink>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;