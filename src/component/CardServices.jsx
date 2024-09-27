import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DarkModeContext } from './DarkModeContext';

const Card = ({ imageSrc, title, text }) => {
    const { checked } = useContext(DarkModeContext);

    return (
        <div className="relative w-full max-w-xs md:max-w-sm lg:max-w-md" style={{ paddingBottom: '133.33%' }}>
            <div className="absolute inset-0 rounded-md overflow-hidden shadow-lg bg-white flex flex-col">
                <img className="w-full h-48 object-cover" src={imageSrc} alt={title} />
                <div className="px-4 py-3 flex-grow">
                    <h5 className="text-xs md:text-2xl font-bold mb-2 text-[#000]"> 
                        {title} 
                    </h5>
                    <p className="text-gray-700 text-xs md:text-base"> 
                        {text} 
                    </p>
                </div>
                <div className="px-5 py-3 pb-7">
                    <Link 
                        to="/detail-service" 
                        className={`font-bold py-2 px-4 rounded transition duration-300 ${checked ? 'bg-gray-600 text-white hover:bg-yellow-400 hover:text-gray-600' : 'bg-[#08c4fc] text-white hover:bg-yellow-400'}`}
                    >
                        <span className="text-xs md:text-base">More Details</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Card;
