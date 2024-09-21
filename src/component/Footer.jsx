import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-white w-full">
            <div className="max-w-screen-xl mx-auto px-4 py-6">
                <div className="flex flex-col sm:flex-row justify-center space-x-0 sm:space-x-8 mb-10 mt-10">
                    <a href="/" className="text-black hover:text-gray-900 mb-2 sm:mb-0">HOME</a>
                    <a href="/services" className="text-black hover:text-gray-900 mb-2 sm:mb-0">SERVICES</a>
                    <a href="/projects" className="text-black hover:text-gray-900 mb-2 sm:mb-0">PROJECTS</a>
                    <a href="/blogs" className="text-black hover:text-gray-900 mb-2 sm:mb-0">BLOGS</a>
                    <a href="/contact" className="text-black hover:text-gray-900 mb-2 sm:mb-0">CONTACT US</a>
                </div>
                <div className="text-center text-gray-600 text-sm mt-10 mb-10">
                    &#169; 2024 HARVEST<b>ABADI</b>. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
