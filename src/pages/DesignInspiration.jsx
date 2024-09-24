import React, { useContext } from 'react';
import DesignCard from '../component/DesignCard';
import { FaArrowCircleLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../component/DarkModeContext';

const DesignInspiration = () => {
    const { checked } = useContext(DarkModeContext);

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
        <section className={`flex flex-col p-6 sm:px-8 sm:py-12 md:p-2 min-h-screen w-full ${checked ? 'bg-gray-900 text-white' : 'bg-[#b8e4fc] text-black'}`}>
            <div className={`rounded-full h-[400px] w-[400px] sm:h-[600px] sm:w-[600px] lg:h-[650px] lg:w-[650px] absolute top-[80px] sm:top-[-80px] md:top-[-100px] lg:top-[15px] left-[-180px] sm:left-[-240px] md:left-[-200px] lg:left-[-200px] z-0 ${checked ? 'bg-gray-700' : 'bg-[#97DAFF]'}`}></div>
            <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold mt-10 pt-4 text-center ${checked ? 'text-white' : 'text-black'}`}>Design Inspiration</h2>
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
            <Link className={`hover:text-yellow-400 text-5xl mt-10 mx-auto mb-10 ${checked ? 'text-white' : 'text-black'}`} to='/'>
                <FaArrowCircleLeft />
            </Link>
        </section>
    );
}

export default DesignInspiration;
