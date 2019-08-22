import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Nav(){
    const navStyle = {
        color: 'white',
        textDecoration: 'none'
    };
    return(
        <nav>
            <Link to="/" style={navStyle}>
                <h3>Logo</h3>
            </Link>
            <ul className="nav-links">
                <Link to="/upload" style={navStyle}>
                    <li>Upload</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;