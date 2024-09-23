import React from 'react';
import DesignCard from './DesignCard';
import { Link } from 'react-router-dom';

const DesignInspiration = () => {
    const projects = [
        {
            imageSrc: "/videos.jpg",
            alt: "videos"
        },
        {
            imageSrc: "/videos.jpg",
            alt: "videos"
        },
        {
            imageSrc: "/videos.jpg",
            alt: "videos"
        },
    ];

    return (
        <section className="bg-[#b8e4fc] flex flex-col text-white p-6 sm:px-8 sm:py-12 md:p-2 min-h-screen w-full mt-16">
            <h2 className="text-black text-4xl md:text-5xl lg:text-6xl font-bold mt-10 pt-4 text-center">Design Inspiration</h2>
            <div className="flex justify-center items-start overflow-x-auto gap-4 sm:gap-6 md:gap-8 lg:gap-10 pb-4 scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-600 mt-32">
                {projects.map((project, index) => (
                    <div key={index} className="flex-shrink-0 w-[320px] sm:w-[360px] md:w-[400px] lg:w-[500px]">
                        <DesignCard
                            imageSrc={project.imageSrc}
                            alt={project.alt}
                        />
                    </div>
                ))}
            </div>
            <Link className="text-black text-xl md:text-2xl lg:text-3xl font-bold mt-8 mb-6 text-center hover:text-yellow-400" to='DesignInspiration'>
                Read More
            </Link>
        </section>
    );
}

export default DesignInspiration;