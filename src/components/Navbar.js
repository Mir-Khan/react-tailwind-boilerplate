import React from 'react';
import logo from '../images/logo.png';
import DropDown from './DropDown';
import HeaderLinks from './HeaderLinks';
import DarkToggle from './DarkToggle';
import { linkList } from '../util/linkList';

function Navbar(colors) {
    return (
        <div className={`flex justify-end ${colors.styles} shadow-md sticky top-0`}>
            <nav className="h-auto flex w-screen py-2 justify-start">
                <div id="brand" className="pr-4 pl-3 mr-4 flex items-center">
                    <img src={logo} alt="Logo" className="h-10 w-10 mr-3" />
                    <h3>Website Branding</h3>
                </div>
            </nav>
            <DarkToggle />
            <DropDown routes={linkList} />
            <HeaderLinks routes={linkList} />
        </div>
    )
}

export default Navbar;