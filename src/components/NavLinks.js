import React from 'react';
import { Link } from 'react-router-dom';
// if related to navigation, it will typically be imported from react-router-dom
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
            <li>
                <Link to="/skateparks">Skateparks</Link>
            </li>
            <li>
                <Link to="/cities">Cities</Link>
            </li>
            <li>
                <Link to="/motorhomes">Motorhomes</Link>
            </li>
            <li>
                <Link to="/skateboarders">Skateboarders</Link>
            </li>

        </ul>
    )

}

export default NavLinks;