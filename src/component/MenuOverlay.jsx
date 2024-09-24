import React, { useContext } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import Switch from "react-switch"; // Import Switch
import { DarkModeContext } from "./DarkModeContext"; // Import dark mode context

const MenuOverlay = ({ links, onClose, navbarOpen, handleNavClick }) => {
    const { checked, toggleDarkMode } = useContext(DarkModeContext); // Menggunakan context untuk dark mode

    const handleToggle = (checked) => {
        toggleDarkMode(checked); // Memanggil fungsi toggle dark mode
    };

    return (
        <>
            {navbarOpen && (
                <div
                    onClick={onClose}
                    className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
                ></div>
            )}

            <div
                className={`fixed top-0 right-0 h-full w-64 ${
                    checked ? 'bg-gray-500' : 'bg-[#7dd3fc]'
                } text-white shadow-lg z-50 transition-transform duration-300 ease-in-out transform ${
                    navbarOpen ? 'translate-x-0' : 'translate-x-full'
                } md:hidden`}
            >
                <button onClick={onClose} className="absolute top-4 right-4 p-2 rounded-md">
                    <XMarkIcon className="h-6 w-6 text-white" />
                </button>
                <ul className="flex flex-col p-4 space-y-4 text-white">
                    {links.map((link, index) => (
                        <li key={index}>
                            <button
                                onClick={() => {
                                    handleNavClick(link);
                                    onClose();
                                }}
                                className="block py-2 px-4 text-white hover:text-yellow-400 rounded"
                            >
                                {link.title}
                            </button>
                        </li>
                    ))}
                </ul>
                <div className="flex items-center justify-start ps-6">
                    <Switch
                        onChange={handleToggle}
                        checked={checked}
                        handleDiameter={28}
                        offColor="#bbbbbb"
                        onColor="#ffd700"
                        offHandleColor="#ffffff"
                        onHandleColor="#ffffff"
                        height={20}
                        width={48}
                        uncheckedIcon={false}
                        checkedIcon={false}
                        className="react-switch"
                    />
                </div>
            </div>
        </>
    );
};

export default MenuOverlay;
