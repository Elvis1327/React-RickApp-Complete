import { Link } from 'react-router-dom'
import React from 'react'
import { Button } from '@material-ui/core'
import { useDispatch } from 'react-redux'

export const ResponsiveDropdownRick = ({botonResponsive, setBotonResponsive}) => {

    return (
        <div>
            {botonResponsive &&
            <div className="responsive__menu">
                <ul className="responsive_ul">
                    <li className="responsive_li">
                        <Link
                            to="/" 
                            className="responsive__links"
                            onClick={() => setBotonResponsive(false)}
                            >Users
                        </Link>
                    </li>
                    <li className="responsive_li">
                        <Link 
                            to="/search" 
                            className="responsive__links"
                            onClick={() => setBotonResponsive(false)}
                            >Search
                        </Link>
                    </li>
                </ul>
            </div>
            }
        </div>
    )
}
