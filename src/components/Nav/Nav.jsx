import React from 'react'
import { Link } from 'react-router-dom';
import './Nav.css'

const Nav = () => {
    return (
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/projects'>Projects</Link></li>
                <li><Link to='/events'>Events</Link></li>
                <li><Link to='/about'>About</Link></li>               
            </ul>
        </nav>
    )
}

export default Nav