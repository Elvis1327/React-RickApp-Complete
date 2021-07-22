import { Link } from 'react-router-dom'
import React from 'react'

export const ResponsiveDropdown = ({botonResponsive, setBotonResponsive}) => {
    return (
        <div>
            {botonResponsive &&
            <div className="responsive__menu">
                <ul className="responsive_ul">
                    <li className="responsive_li">
                        <Link
                            to="/login" 
                            className="responsive__links"
                            onClick={() => setBotonResponsive(false)}
                            >Login
                        </Link>
                    </li>
                    <li className="responsive_li">
                        <Link 
                            to="/register" 
                            className="responsive__links"
                            onClick={() => setBotonResponsive(false)}
                            >Register
                        </Link>
                    </li>
                </ul>
            </div>
            }
        </div>
    )
}
