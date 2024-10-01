import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const FloatingWhatsApp = () => {
    return (
        <a 
            href="https://wa.me/6282127282389"
            className="bg-[#25D366] border border-white p-3 rounded-full flex items-center justify-center ml-4 mt-6 md:block fixed bottom-10 right-10 z-50"
            target="_blank"
            rel="noopener noreferrer" 
        >  
            <FaWhatsapp className="text-white text-2xl" />
        </a>
    );
}

export default FloatingWhatsApp;
