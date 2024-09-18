import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

const MenuOverlay = ({ links, onClose, navbarOpen }) => {
    return (
        <>
            {navbarOpen && (
                <div
                    onClick={onClose}
                    className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
                ></div>
            )}

            <div
                className={`fixed top-0 right-0 h-full w-64 bg-white text-gray-800 shadow-lg z-50 transition-transform duration-300 ease-in-out transform ${
                    navbarOpen ? 'translate-x-0' : 'translate-x-full'
                } md:hidden`}
            >
                <button onClick={onClose} className="absolute top-4 right-4 p-2 rounded-md">
                    <XMarkIcon className="h-6 w-6 text-gray-800" />
                </button>
                <ul className="flex flex-col p-4 space-y-4 text-gray-800">
                    {links.map((link, index) => (
                        <li key={index}>
                            <Link
                                to={link.path}
                                className="block py-2 px-4 text-gray-800 hover:bg-gray-200 rounded"
                            >
                                {link.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default MenuOverlay;
