import React from 'react';
import './Header.css';
import TeslaLogo from '../assets/teslaLogoSmall.svg'




const Header = () => {
        return (
            <div className="header">
                <div className="header-logo">
                    <img src={TeslaLogo} alt='Tesla-Logo'  />
                </div>

                <div className="header-center">
                    <p>Model S</p>
                    <p>Model 3</p>
                    <p>Model X</p>
                    <p>SOLAR ROOF</p>
                    <p>SOLAR PANELS</p>
                </div>

                <div className="header-right">
                    <p>SHOP</p>
                    <p>TESLA ACCOUNT</p>
                </div>
            </div>
        )
}

export default Header;