import { React, Fragment } from 'react';
import { Menu, Transition } from "@headlessui/react";
import { MenuIcon } from '@heroicons/react/solid';
import { NavLink } from 'react-router-dom';

function DropDown({ routes }) {
    const menuItems = routes.map((item, index) =>
        <Menu.Item className="pb-2" key={`dropdown-link-${index}`}>
            {({ active }) => (
                <NavLink to={item.path}>{item.name}</NavLink>
            )}
        </Menu.Item>);
    return (
        <Menu >
            {({ open }) => (
                <>
                    <Menu.Button className="md:hidden"><MenuIcon className="w-8 h-8 ml-2 focus:outline-none" /></Menu.Button>
                    <Transition
                        show={open}
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items static
                            className="absolute text-center right-3 top-10 w-72 px-5 py-5 text-black bg-white dark:text-white dark:bg-gray-800 flex flex-col mt-2 divide-y divide-gray-400 rounded-md shadow-lg">
                            {menuItems}
                        </Menu.Items>
                    </Transition>
                </>
            )}
        </Menu>
    );
}

export default DropDown;