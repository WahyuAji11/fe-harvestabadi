import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const FloatingWhatsApp = () => {
    return (
        <Link className="bg-[#25D366] border border-white p-3 rounded-full flex items-center justify-center ml-4 mt-6 md:block fixed bottom-10 right-10 z-50">  
            <FaWhatsapp className="text-white text-2xl" />
        </Link>
    );
}

export default FloatingWhatsApp;
