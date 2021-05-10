import React from 'react';
import { Link } from 'react-router-dom';
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
                    <Link to="/"><img src={logo} alt="Logo" className="h-16 w-16 mr-3" /></Link>
                </div>
            </nav>
            <DarkToggle />
            <DropDown routes={linkList} />
            <HeaderLinks routes={linkList} />
        </div>
    )
}

export default Navbar;