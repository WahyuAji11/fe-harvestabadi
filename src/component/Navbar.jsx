"use client";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon } from "@heroicons/react/24/solid";
import Switch from "react-switch";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
    { title: "Home", id: "home" },
    { title: "Services", id: "services" },
    { title: "Projects", id: "project" },
    { title: "Blog", id: "blog" },
    { title: "Contact Us", id: "contact" },
];

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [checked, setChecked] = useState(false);

    const handleToggle = (checked) => {
        setChecked(checked);
        document.body.classList.toggle('dark-theme', checked);
    };

    const handleScrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
            setNavbarOpen(false); // Close the mobile menu after clicking
        }
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-10 bg-[#60b4fc]">
            <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
                <Link to="#home" className="text-2xl md:text-5xl text-white">
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
                                <button 
                                    onClick={() => handleScrollToSection(link.id)} 
                                    className="text-white hover:text-yellow-400"
                                >
                                    {link.title}
                                </button>
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
