import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { DarkModeContext } from './DarkModeContext';

const Footer = () => {
    const { checked } = useContext(DarkModeContext);
    const location = useLocation();

    const navLinks = [
        { title: "HOME", id: "home", path: "/" },
        { title: "SERVICES", id: "services", path: "/" },
        { title: "PROJECTS", id: "project", path: "/" },
        { title: "BLOGS", id: "blog", path: "/" },
        { title: "CONTACT US", id: "contact", path: "/" },
    ];

    const handleNavClick = (link) => {
        if (location.pathname === "/") {
            const section = document.getElementById(link.id);
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        } else {
            window.location.href = link.path;
        }
    };

    return (
        <footer className={`${checked ? 'bg-gray-800' : 'bg-white'} w-full`}>
            <div className="max-w-screen-xl mx-auto px-4 py-6">
                <div className="flex flex-col sm:flex-row justify-center space-x-0 sm:space-x-8 mb-10 mt-10">
                    {navLinks.map((link, index) => (
                        <button 
                            key={index} 
                            onClick={() => handleNavClick(link)} 
                            className={`text-${checked ? 'white' : 'black'} hover:text-gray-900 mb-2 sm:mb-0`}
                        >
                            {link.title}
                        </button>
                    ))}
                </div>
                <div className={`text-center ${checked ? 'text-gray-400' : 'text-gray-600'} text-sm mt-10 mb-10`}>
                    &#169; 2024 HARVEST<b>ABADI</b>. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
