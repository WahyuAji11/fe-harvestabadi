import React from 'react';

const DesignCard = ({ imageSrc, alt }) => {
    return (
        <div className="max-w-lg mx-auto mb-3">
            <div className="relative" style={{ paddingBottom: '60%' }}>
                <img src={imageSrc} alt={alt} className="absolute inset-0 w-full h-full object-cover rounded-md shadow-lg" />
            </div>
        </div>
    );
};

export default DesignCard;
