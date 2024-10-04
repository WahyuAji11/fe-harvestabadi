import React, { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import axios from 'axios';
import { API_URL } from '../config/config';

const FloatingWhatsApp = () => {
    const [whatsAppNumber, setWhatsAppNumber] = useState('');

    useEffect(() => {
        const getWhatsAppNumber = async () => {
            try {
                const response = await axios.get(`${API_URL}setting/whatsapp-number`);
                setWhatsAppNumber(response.data.data.whatsAppNumber);
            } catch (error) {
                console.error('Failed to fetch WhatsApp number:', error);
            }
        };

        getWhatsAppNumber();
    }, []);

    return (
        <a
            href={`https://wa.me/${whatsAppNumber}`}
            className="bg-[#25D366] border border-white p-3 rounded-full flex items-center justify-center ml-4 mt-6 md:block fixed bottom-10 right-10 z-50"
            target="_blank"
            rel="noopener noreferrer"
        >
            <FaWhatsapp className="text-white text-2xl" />
        </a>
    );
}

export default FloatingWhatsApp;
