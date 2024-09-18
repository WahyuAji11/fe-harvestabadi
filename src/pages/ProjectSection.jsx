import React from 'react';
import CardProject from '../component/CardProjects';

const ProjectSection = () => {
    const projects = [
        {
            imageSrc: "/img.jpg",
            alt: "Image description 1"
        },
        {
            imageSrc: "/img.jpg",
            alt: "Image description 2"
        },
        {
            imageSrc: "/img.jpg",
            alt: "Image description 3"
        },
        {
            imageSrc: "/img.jpg",
            alt: "Image description 4"
        },
    ];

    return (
        <section className="bg-[#b8e4fc] flex flex-col text-white p-6 sm:px-8 sm:py-12 md:p-2 min-h-screen w-full">
            <div className='flex flex-col items-start justify-start absolute top-24 left-4 md:left-16 lg:left-[300px]'>
                <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 text-black'>
                    Our <br /> Projects
                </h1>
                <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mt-[-1rem] sm:mt-[-2rem] md:mt-[-3rem]'>
                    __
                </h1>
            </div>

            {/* Container for cards */}
            <div className="flex justify-center items-center overflow-x-auto gap-4 sm:gap-6 md:gap-8 lg:gap-10 pb-4 scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-600 mt-[200px] sm:mt-[250px] md:mt-[300px]">
                {projects.map((project, index) => (
                    <div key={index} className="flex-shrink-0 w-[180px] sm:w-[200px] md:w-[250px] lg:w-[300px]">
                        <CardProject
                            imageSrc={project.imageSrc}
                            alt={project.alt}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}

export default ProjectSection;
