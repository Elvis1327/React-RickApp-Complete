import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

import { NavbarResponsive } from './NavbarResponsive';


export const Navbar = () =>{

    return (
        <main>
            <NavbarResponsive />
                <header className="header">
                    <Link className="h1-header" to="/">Rick And Morty App</Link>
                    <nav className="navbar">
                        <ul className="nav-links">
                            <li className="nav-link">
                                <Button variant="contained" color="primary">
                                    <Link to="/" className="links">Users</Link>
                                </Button>
                            </li>
                            <li className="nav-link">
                                <Button variant="contained" color="primary">
                                    <Link to="/search" className="links">Search</Link>
                                </Button>
                            </li>
                        </ul>
                    </nav>
                </header>
        </main>
        
    )
}





