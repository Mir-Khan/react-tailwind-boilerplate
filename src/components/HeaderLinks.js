import React from 'react';
import { NavLink } from 'react-router-dom';

// this component is for the non-mobile version of the nav

function HeaderLinks({ routes }) {
    const linkStyles = "mr-5 text-center hover:underline px-1 whitespace-nowrap";
    const links = routes.map((route, index) =>
        <NavLink to={route.path} className={linkStyles} key={`header-link-${index}`}>{route.name}</NavLink>
    );
    return (
        <div className="hidden md:flex items-center px-5">
            {links}
        </div>
    )
}

export default HeaderLinks;