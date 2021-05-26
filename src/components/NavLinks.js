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
            <li>
                <Link to="/hybrids">Hybrids</Link>
            </li>
            <li>
                <Link to="/robots">Robots</Link>
            </li>
            <li>
                <Link to="/minimarts">Minimarts</Link>
            </li>

        </ul>
    )

}

export default NavLinks;