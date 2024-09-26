import React, { useContext, useEffect, useState } from 'react';
import CardProject from './CardProjects';
import { Link } from 'react-router-dom';
import { DarkModeContext } from './DarkModeContext';
import { fetchAllProject } from '../utils/projectService';

const ProjectSection = () => {
    const { checked } = useContext(DarkModeContext);
    const [project, setProject] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const fetchedProjects = await fetchAllProject();
                setProject(fetchedProjects);
            } catch (error) {
                console.error(error);
            } finally {
            }
        };

        fetchProjects();
    }, []);

    return (
        <section className={`flex flex-col text-white p-6 sm:px-8 sm:py-12 md:p-2 min-h-screen w-full h-full ${checked ? 'bg-gray-800' : 'bg-[#b8e4fc]'}`} id='project'>
            <div className='flex flex-col items-start justify-start absolute left-4 mt-16 md:left-16 lg:left-[300px]'>
                <h1
                    className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-5 mb-2 transform -translate-x-5 transition-all duration-700 ease-in-out ${checked ? 'text-white' : 'text-black'}`}
                >
                    Our <br /> Projects
                </h1>
                <h1
                    className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-[-1rem] sm:mt-[-2rem] md:mt-[-3rem] transform -translate-x-5 transition-all duration-700 ease-in-out ${checked ? 'text-white' : 'text-black'}`}
                >
                    __
                </h1>
            </div>
            <div className="flex justify-center items-center overflow-hidden gap-4 sm:gap-6 md:gap-8 lg:gap-10 pb-4 mt-[200px] sm:mt-[250px] md:mt-[300px]">
                    {project.map((data => (
                        <div
                            key={data.slug}
                            className="oppacity-0 translate-x-[-20px] transition-all duration-700 ease-in-out"
                        >
                            <CardProject project={data} />
                        </div>
                    )))}
            </div>
            <Link
                className={`text-xl md:text-2xl lg:text-3xl font-bold mt-8 mb-6 text-center hover:text-yellow-400 ${checked ? 'text-white' : 'text-black'}`}
                to='/our-project'
            >
                Read More
            </Link>
        </section>
    );
}

export default ProjectSection;
