import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav(){

    return(
        <nav>
            <NavLink to="/" exact={true} activeClassName="active" className="nav-link">
                <h3>Home page</h3>
            </NavLink>
            <div className="nav-links">
                <NavLink to="/search" activeClassName="active" className="nav-link">
                    Search
                </NavLink>
                <NavLink to="/upload" activeClassName="active" className="nav-link">
                    Upload
                </NavLink>
            </div>
        </nav>
    );
}

export default Nav;