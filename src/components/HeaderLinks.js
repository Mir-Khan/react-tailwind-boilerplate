import React from 'react';
import { NavLink } from 'react-router-dom';

// this class is for the non-mobile version of the nav

function HeaderLinks(routes) {
    const linkStyles = "mr-5 text-center hover:bg-blue-600";
    return (
        <div className="hidden md:flex items-center px-5">
            <NavLink to="/" className={linkStyles}>Link1</NavLink>
            <NavLink to="/" className={linkStyles}>Link2</NavLink>
            <NavLink to="/" className={linkStyles}>Link3</NavLink>
            <NavLink to="/" className={linkStyles}>Link4</NavLink>
        </div>
    )
}

export default HeaderLinks;