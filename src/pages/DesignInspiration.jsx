import React from 'react';
import DesignCard from '../component/DesignCard';
import { FaArrowCircleLeft } from 'react-icons/fa';
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
        <section className="bg-[#b8e4fc] flex flex-col text-white p-6 sm:px-8 sm:py-12 md:p-2 min-h-screen w-full">
            <div className="bg-[#97DAFF] rounded-full h-[400px] w-[400px] sm:h-[600px] sm:w-[600px] lg:h-[650px] lg:w-[650px] absolute top-[80px] sm:top-[-80px] md:top-[-100px] lg:top-[15px] left-[-180px] sm:left-[-240px] md:left-[-200px] lg:left-[-200px] z-0 min-h-[300px] min-w-[300px] sm:min-h-[400px] sm:min-w-[400px] md:min-h-[500px] md:min-w-[500px] lg:min-h-[650px] lg:min-w-[650px]"></div>
            <h2 className="text-black text-4xl md:text-5xl lg:text-6xl font-bold mt-10 pt-4 text-center">Design Inspiration</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10 pb-4 mt-20 justify-items-center">
                {projects.map((project, index) => (
                    <div key={index} className="w-[320px] sm:w-[360px] md:w-[400px] lg:w-[500px]">
                        <DesignCard
                            imageSrc={project.imageSrc}
                            alt={project.alt}
                        />
                    </div>
                ))}
            </div>
            <Link className="hover:text-yellow-400 text-5xl mt-10 mx-auto mb-10" to='/'>
                <FaArrowCircleLeft />
            </Link>
        </section>
    );
}

export default DesignInspiration;
