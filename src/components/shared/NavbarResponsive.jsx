import React, {useState} from 'react';

import { ResponsiveDropdownRick } from './ResponsiveDropdownRick';

export const NavbarResponsive = () => {
    const [ botonResponsive, setBotonResponsive ] = useState(false);

    return (
        <>
            <header className="header-responsive">
                <div className="responsive_icon-menu" onClick={() => setBotonResponsive(!botonResponsive)}>
                    <i className="fas fa-bars responsive__menu-button"></i>
                </div>
                <div className="responsive_icon">
                    <i className="fab fa-android responsive__android"></i>
                </div>
            </header>
            <ResponsiveDropdownRick 
                botonResponsive={botonResponsive}
                setBotonResponsive={setBotonResponsive}
            />
        </>

    )
}




