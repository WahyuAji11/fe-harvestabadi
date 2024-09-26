import React from 'react';

const DesignCard = ({ design }) => {
    return (
        <div className="max-w-lg mx-auto mb-3 p-4 border rounded-md shadow-lg">
            (design.link)
            {/* Conditionally render the YouTube link if design.link exists */}
            {design.link && (
                <div className="mt-3">
                    <a 
                        href={design.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-blue-500 hover:underline"
                    >
                        Watch on YouTube
                    </a>
                </div>
            )}
        </div>
    );
};

export default DesignCard;
