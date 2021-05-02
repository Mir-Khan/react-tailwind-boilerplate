import { React, Fragment } from 'react';
import { Menu, Transition } from "@headlessui/react";
import { MenuIcon } from '@heroicons/react/solid';
import { NavLink } from 'react-router-dom';

function DropDown() {
    return (
        <Menu >
            {({ open }) => (
                <>
                    <Menu.Button className="md:hidden"><MenuIcon className="w-8 h-8 ml-2 outline onlcick" /></Menu.Button>
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
                            className="absolute text-center right-1 md:right-0 top-10 md:w-80 w-72 px-5 py-5 text-black flex flex-col mt-2 bg-white divide-y divide-gray-400 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <Menu.Item className="pb-2">
                                {({ active }) => (
                                    <NavLink to="/">Home</NavLink>
                                )}
                            </Menu.Item>
                            <Menu.Item className="pb-2">
                                {({ active }) => (
                                    <NavLink to="/other-page" >Other page</NavLink>
                                )}
                            </Menu.Item>
                            <Menu.Item className="pb-2">
                                {({ active }) => (
                                    <NavLink to="/other-page" >Other page</NavLink>
                                )}
                            </Menu.Item>
                            <Menu.Item className="pb-2">
                                {({ active }) => (
                                    <NavLink to="/other-page" >Other page</NavLink>
                                )}
                            </Menu.Item>
                        </Menu.Items>
                    </Transition>
                </>
            )}
        </Menu>
    );
}

export default DropDown;