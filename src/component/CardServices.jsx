import React from 'react';

const Card = ({ imageSrc, title, text, link }) => {
    return (
        <div className="relative w-full max-w-xs md:max-w-sm lg:max-w-md" style={{ paddingBottom: '133.33%' }}>
            <div className="absolute inset-0 rounded-md overflow-hidden shadow-lg bg-white flex flex-col">
                <img className="w-full h-48 object-cover" src={imageSrc} alt={title} />
                <div className="px-4 py-3 flex-grow">
                    <h5 className="text-xl font-bold mb-2 text-[#000] md:text-2xl">{title}</h5>
                    <p className="text-gray-700 text-sm md:text-base">
                        {text}
                    </p>
                </div>
                <div className="px-4 py-3">
                    <a href={link} className="bg-[#08c4fc] text-white font-bold py-2 px-4 rounded hover:bg-yellow-400 transition duration-300">
                        More Details
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Card;
