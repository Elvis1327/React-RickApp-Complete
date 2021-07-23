import { Link } from 'react-router-dom'
import React from 'react'
import { Button } from '@material-ui/core'
import { logoutAcount } from '../../actions/auth'
import { useDispatch } from 'react-redux'

export const ResponsiveDropdownRick = ({botonResponsive, setBotonResponsive}) => {
    const dispatch = useDispatch()


    const handleLogount = () => {
        dispatch(logoutAcount());
        setBotonResponsive(false);
    };

    return (
        <div>
            {botonResponsive &&
            <div className="responsive__menu">
                <ul className="responsive_ul">
                    <li className="responsive_li">
                        <Link
                            to="/rick-screen" 
                            className="responsive__links"
                            onClick={() => setBotonResponsive(false)}
                            >Users
                        </Link>
                    </li>
                    <li className="responsive_li">
                        <Link 
                            to="/rick-search" 
                            className="responsive__links"
                            onClick={() => setBotonResponsive(false)}
                            >Search
                        </Link>
                    </li>
                    <li className="responsive_li">
                        <Button
                            variant="contained" 
                            color="secondary"
                            onClick={handleLogount}>
                            Logout
                        </Button>
                    </li>
                </ul>
            </div>
            }
        </div>
    )
}
