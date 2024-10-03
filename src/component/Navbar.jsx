import React, { useContext, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Bars3Icon } from "@heroicons/react/24/solid";
import Switch from "react-switch";
import MenuOverlay from "./MenuOverlay";
import { DarkModeContext } from "./DarkModeContext";

const navLinks = [
    { title: "Home", id: "home", path: "/" },
    { title: "Services", id: "services", path: "/services" },
    { title: "Projects", id: "projects", path: "/projects" },
    { title: "Blog", id: "blog", path: "/blog" },
    { title: "Contact Us", id: "contact", path: "/contact" },
];

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [bgColor, setBgColor] = useState("transparent");
    const { checked, toggleDarkMode } = useContext(DarkModeContext);
    const location = useLocation();

    const handleToggle = (checked) => {
        toggleDarkMode(checked);
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
            handleScrollToSection(link.id);
        } else {
            window.location.href = link.path;
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            setBgColor(offset > 50 ? (checked ? "bg-gray-800" : "bg-[#60b4fc]") : "transparent");
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [checked]);

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
                                    onClick={() => handleNavClick(link)}
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
            <MenuOverlay
                links={navLinks}
                navbarOpen={navbarOpen}
                onClose={() => setNavbarOpen(false)}
                handleNavClick={handleNavClick}
            />
        </nav>
    );
};

export default Navbar;
