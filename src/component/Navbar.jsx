"use client";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Bars3Icon } from "@heroicons/react/24/solid";
import Switch from "react-switch";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
    { title: "Home", id: "home", path: "/" },
    { title: "Services", id: "services", path: "/" },
    { title: "Projects", id: "project", path: "/" },
    { title: "Blog", id: "blog", path: "/" },
    { title: "Contact Us", id: "contact", path: "/" },
];

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [checked, setChecked] = useState(false);
    const [bgColor, setBgColor] = useState("transparent");
    const location = useLocation(); // Mengambil lokasi saat ini

    const handleToggle = (checked) => {
        setChecked(checked);
        document.body.classList.toggle('dark-theme', checked);
    };

    const handleScrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
            setNavbarOpen(false);
        }
    };

    const handleNavClick = (link) => {
        if (location.pathname === "/") {
            // Jika berada di halaman utama, scroll ke section
            handleScrollToSection(link.id);
        } else {
            // Jika berada di halaman lain, navigasi ke link
            window.location.href = link.path; // Atau gunakan <Link>
        }
    };

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 50) {
            setBgColor("bg-[#60b4fc]");
        } else {
            setBgColor("transparent");
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-20 transition-all duration-300 ${bgColor}`}>
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
                                <button 
                                    onClick={() => handleNavClick(link)} // Menangani klik
                                    className="text-white hover:text-yellow-400 transition-colors duration-300"
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
