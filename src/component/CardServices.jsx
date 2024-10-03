import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DarkModeContext } from './DarkModeContext';

const CardService = ({ imageSrc, title, description, slug }) => {
    const { checked } = useContext(DarkModeContext);

    const truncateDescription = (desc, length) => {
        return desc.length > length ? desc.slice(0, length) + '...' : desc;
    };

    const cleanedDescription = truncateDescription(description.replace(/<[^>]+>/g, ''), 100);

    return (
        <div className="relative w-full max-w-xs md:max-w-sm lg:max-w-md h-[400px] mx-auto">
            <div className={`absolute inset-0 rounded-lg overflow-hidden shadow-md transition-all duration-300 ${checked ? 'bg-white' : 'bg-white'} flex flex-col`}>
                <img className="w-full h-48 object-cover" src={imageSrc} alt={title} />
                <div className='flex-grow flex flex-col justify-between p-4'>
                    <div>
                        <h5 className={`text-sm md:text-xl font-bold mb-1 text-gray-900`}>
                            {title}
                        </h5>
                        <p className={`text-xs md:text-sm text-gray-700 mb-3`}>
                            {cleanedDescription}
                        </p>
                    </div>
                    <Link
                        to={`service/${slug}`}
                        className={`items-start w-fit font-bold py-2 px-4 rounded transition duration-300 ${checked ? 'bg-gray-600 text-white hover:bg-yellow-400 hover:text-gray-600' : 'bg-[#08c4fc] text-white hover:bg-yellow-400'}`}
                    >
                        <span className="text-xs md:text-base">More Details</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CardService;
