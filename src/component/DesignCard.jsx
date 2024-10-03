import React from 'react';

const DesignCard = ({ design }) => {
    const getYouTubeEmbedUrl = (url) => {
        const regex = /(?:youtube\.com\/(?:[^\\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\\/\s]{11})/;
        const match = url.match(regex);
        return match ? `https://www.youtube.com/embed/${match[1]}` : null;
    };

    const embedUrl = design.link ? getYouTubeEmbedUrl(design.link) : null;

    return (
        <div className="max-w-lg mx-auto mb-3 p-4 shadow-lg">
            {embedUrl ? (
                <div className="mt-3 z-10">
                    <iframe
                        width="100%"
                        height="315"
                        src={embedUrl}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        className='rounded-md'
                        allowFullScreen
                    ></iframe>
                </div>
            ) : (
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
