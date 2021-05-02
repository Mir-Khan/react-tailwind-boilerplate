import React from 'react';
// import { NavLink } from 'react-router-dom';
import logo from '../images/logo.png';
import DropDown from '../components/DropDown';
import HeaderLinks from '../components/HeaderLinks';

function Header() {
    return (
        <div className="flex justify-end bg-gray-700 text-white">
            <nav className="h-auto flex w-screen py-2 justify-start">
                <div id="brand" className="pr-4 pl-3 mr-4 flex items-center">
                    <img src={logo} alt="Logo" className="h-10 w-10 mr-3" />
                    <h3>Website Branding</h3>
                </div>
            </nav>
            <DropDown />
            <HeaderLinks />
        </div>
    )
}

export default Header;