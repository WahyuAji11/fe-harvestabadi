import React from 'react';

const CardProject = ({ imageSrc, alt }) => {
    return (
        <div className="max-w-xs md:max-w-sm lg:max-w-md mx-auto mb-3">
            <div className="relative" style={{ paddingBottom: '177.78%' }}>
                <img src={imageSrc} alt={alt} className="absolute inset-0 w-full h-full object-cover rounded-md shadow-lg" />
            </div>
        </div>
    );
};

export default CardProject;
