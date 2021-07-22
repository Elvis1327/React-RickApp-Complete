import { Link } from 'react-router-dom';
import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import { ResponsiveDropdown } from './ResponsiveDropdown';
import { ResponsiveDropdownRick } from './ResponsiveDropdownRick';

export const NavbarResponsive = () => {
    const [ botonResponsive, setBotonResponsive ] = useState(false);
    const {check} = useSelector(state => state.auth);

    return (
        <>
        {(check === false)
        ?
        <div>
            <header className="header-responsive">
                <div className="responsive_icon-menu" onClick={() => setBotonResponsive(!botonResponsive)}>
                    <i className="fas fa-bars responsive__menu-button"></i>
                </div>
                <div className="responsive_icon">
                    <i className="fab fa-android responsive__android"></i>
                </div>
            </header>
            <ResponsiveDropdown 
                botonResponsive={botonResponsive} 
                setBotonResponsive={setBotonResponsive}
                />
        </div>
        :
        <div>
            <header className="header-responsive">
                <div className="responsive_icon-menu" onClick={() => setBotonResponsive(!botonResponsive)}>
                    <i class="fas fa-bars responsive__menu-button"></i>
                </div>
                <div className="responsive_icon">
                    <i class="fab fa-android responsive__android"></i>
                </div>
            </header>
        <ResponsiveDropdownRick 
            botonResponsive={botonResponsive}
            setBotonResponsive={setBotonResponsive}
            />
        </div>
        }
        </>
    )
}




