import React from 'react';
import { Link } from 'react-router-dom';
import './NavLinks.css'

const NavLinks = () => {

    return (
        <ul className="NavLinks">


            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>

        </ul>
    )

}

export default NavLinks;