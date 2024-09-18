"use client";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon } from "@heroicons/react/24/solid";
import Switch from "react-switch";
import MenuOverlay from "../pages/MenuOverlay";

const navLinks = [
    { title: "Home", path: "/" },
    { title: "Services", path: "/services" },
    { title: "Projects", path: "/projects" },
    { title: "Blog", path: "/blog" },
    { title: "Contact Us", path: "/contact" },
];

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [checked, setChecked] = useState(false);

    const handleToggle = (checked) => {
        setChecked(checked);
        if (checked) {
            document.body.classList.add('dark-theme');
        } else {
            document.body.classList.remove('dark-theme');
        }
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-10 bg-[#60b4fc]">
            <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
                <Link to="/" className="text-2xl md:text-5xl text-white">
                    HARVEST<b>ABADI</b>
                </Link>
                <div className="mobile-menu block md:hidden">
                    <button
                        onClick={() => setNavbarOpen(!navbarOpen)}
                        className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-yellow-400"
                    >
                        <Bars3Icon className="h-5 w-5" />
                    </button>
                </div>
                <div className="menu hidden md:block md:w-auto">
                    <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <Link to={link.path} className="text-white hover:text-yellow-400">
                                    {link.title}
                                </Link>
                            </li>
                        ))}
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
                    </ul>
                </div>
            </div>
            <MenuOverlay links={navLinks} navbarOpen={navbarOpen} onClose={() => setNavbarOpen(false)} />
        </nav>
    );
};

export default Navbar;
