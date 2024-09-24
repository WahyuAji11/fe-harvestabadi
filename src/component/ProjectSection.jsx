import React, { useContext } from 'react';
import CardProject from './CardProjects';
import { Link } from 'react-router-dom';
import { DarkModeContext } from './DarkModeContext';

const ProjectSection = () => {
    const { checked } = useContext(DarkModeContext);

    const projects = [
        {
            imageSrc: "/img.jpg",
            alt: "Image"
        },
        {
            imageSrc: "/img.jpg",
            alt: "Image"
        },
        {
            imageSrc: "/img.jpg",
            alt: "Image"
        },
        {
            imageSrc: "/img.jpg",
            alt: "Image"
        },
    ];

    return (
        <section className={`flex flex-col text-white p-6 sm:px-8 sm:py-12 md:p-2 min-h-screen w-full h-full ${checked ? 'bg-gray-800' : 'bg-[#b8e4fc]'}`} id='project'>
            <div className='flex flex-col items-start justify-start absolute left-4 mt-16 md:left-16 lg:left-[300px]'>
                <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-5 mb-2 ${checked ? 'text-white' : 'text-black'}`}>
                    Our <br /> Projects
                </h1>
                <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold ${checked ? 'text-white' : 'text-black'} mt-[-1rem] sm:mt-[-2rem] md:mt-[-3rem]`}>
                    __
                </h1>
            </div>
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
            <Link className={`text-xl md:text-2xl lg:text-3xl font-bold mt-8 mb-6 text-center hover:text-yellow-400 ${checked ? 'text-white' : 'text-black'}`} to='OurProjects'>
                Read More
            </Link>
        </section>
    );
}

export default ProjectSection;
