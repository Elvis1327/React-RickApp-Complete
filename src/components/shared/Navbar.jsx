import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { logoutAcount } from '../../actions/auth';
import OutsideClickHandler from 'react-outside-click-handler';
import { NavbarResponsive } from './NavbarResponsive';


export const Navbar = () =>{
    const {check} = useSelector(state => state.auth);
    const {user} = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const [dropdown, setDropDown] = useState(false);

    const handleLogount = () => {
        dispatch(logoutAcount());
    };
    return (

        <main>
            <NavbarResponsive />
            {(check === false)
                ?
                (<header className="header">
                    <Link className="h1-header" to="/">Rick And Morty App</Link>
                    <nav className="navbar">
                        <ul className="nav-links">
                            <li className="nav-link">
                                <Button color="primary">
                                    <Link to="/register" className="linkss">Sign Up</Link>
                                </Button>
                            </li>
                            <li className="nav-link">
                                <Button variant="contained" color="primary">
                                    <Link to="/login" className="links">Login</Link>
                                </Button>
                            </li>
                        </ul>
                    </nav>
            </header>)
            :
            (<header className="header">
                <NavbarResponsive />
                <h1 className="h1-header">Bienvenido: <strong>{user.name}</strong></h1>

                <nav className="navbar segundo-navbar">
                    <ul className="nav-links">
                        <li className="nav-link">
                            <Button  variant="contained" color="primary">
                                <Link to="/register" className="links">Search</Link>
                            </Button>
                        </li>
                        <li className="nav-link">
                            <Button variant="contained" color="primary">
                                <Link to="/rick-screen" className="links">Users</Link>
                            </Button>
                        </li>
                    </ul>
                    {/* DROPDOWN */}
            <OutsideClickHandler
                onOutsideClick={()=> {
                    setDropDown(false)
            }}
            >
                    <div className="dropdown" onClick={() => setDropDown(!dropdown)}>
                        <i className="fas fa-caret-down barra"></i>
                        {dropdown &&
                            <div className="dropdown-main">
                                <div className="dropdown-info">
                                    <div className="dropdown-img">
                                        <img src="data:image/jpeg;base64,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" alt="pic" />
                                        <h1> {user.name} </h1>
                                    </div>
                                    <div className="boton-logout-container">
                                        <Button 
                                            variant="contained" 
                                            color="secondary" 
                                            className="boton-logout"
                                            onClick={handleLogount}>
                                            Logout
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
            </OutsideClickHandler>
            {/* FIN DEL DROPDOWN */}
                </nav>
            </header>)
            }
        </main>
        
    )
}





