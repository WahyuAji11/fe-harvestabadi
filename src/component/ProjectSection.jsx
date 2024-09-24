import React, { useContext, useEffect, useRef } from 'react';
import CardProject from './CardProjects';
import { Link } from 'react-router-dom';
import { DarkModeContext } from './DarkModeContext';

const ProjectSection = () => {
    const { checked } = useContext(DarkModeContext);
    const titleRef = useRef(null);
    const lineRef = useRef(null);
    const cardRefs = useRef([]);

    useEffect(() => {
        const observerTitle = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('translate-x-0', 'opacity-100');
                    }
                });
            },
            { threshold: 0.1 }
        );

        const observerLine = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('translate-x-0', 'opacity-100');
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (titleRef.current) {
            observerTitle.observe(titleRef.current);
        }

        if (lineRef.current) {
            observerLine.observe(lineRef.current);
        }

        const observerCards = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.classList.add('opacity-100', 'translate-y-0');
                        }, index * 200);
                    }
                });
            },
            { threshold: 0.1 }
        );

        cardRefs.current.forEach(card => {
            if (card) observerCards.observe(card);
        });

        return () => {
            if (titleRef.current) observerTitle.unobserve(titleRef.current);
            if (lineRef.current) observerLine.unobserve(lineRef.current);
            cardRefs.current.forEach(card => {
                if (card) observerCards.unobserve(card);
            });
        };
    }, []);

    const projects = [
    {
        slug: "project-1",
        image: "/img.jpg",
        link: "/ProjectDesription",
        content: "This is a brief description of Project 1."
    },
    {
        slug: "project-2",
        image: "/img.jpg",
        link: "/project-2",
        content: "This is a brief description of Project 2."
    },
    {
        slug: "project-3",
        image: "/img.jpg",
        link: "/project-3",
        content: "This is a brief description of Project 3."
    },
    {
        slug: "project-4",
        image: "/img.jpg",
        link: "/project-4",
        content: "This is a brief description of Project 4."
    },
];


    return (
        <section className={`flex flex-col text-white p-6 sm:px-8 sm:py-12 md:p-2 min-h-screen w-full h-full ${checked ? 'bg-gray-800' : 'bg-[#b8e4fc]'}`} id='project'>
            <div className='flex flex-col items-start justify-start absolute left-4 mt-16 md:left-16 lg:left-[300px]'>
                <h1 
                    ref={titleRef} 
                    className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-5 mb-2 transform -translate-x-5 opacity-0 transition-all duration-700 ease-in-out ${checked ? 'text-white' : 'text-black'}`}
                >
                    Our <br /> Projects
                </h1>
                <h1 
                    ref={lineRef} 
                    className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-[-1rem] sm:mt-[-2rem] md:mt-[-3rem] transform -translate-x-5 opacity-0 transition-all duration-700 ease-in-out ${checked ? 'text-white' : 'text-black'}`}
                >
                    __
                </h1>
            </div>
            <div className="flex justify-center items-center overflow-hidden gap-4 sm:gap-6 md:gap-8 lg:gap-10 pb-4 mt-[200px] sm:mt-[250px] md:mt-[300px]">
                {projects.map((project, index) => (
                    <div 
                        key={index} 
                        ref={el => cardRefs.current[index] = el}
                        className="flex-shrink-0 w-[180px] sm:w-[200px] md:w-[250px] lg:w-[300px] opacity-0 translate-y-10 transition-all duration-700 ease-in-out"
                    >
                        <CardProject
                            imageSrc={project.image}
                            alt={project.alt}
                            link={project.link}
                            content={project.content}
                        />
                    </div>
                ))}

            </div>
            <Link 
                className={`text-xl md:text-2xl lg:text-3xl font-bold mt-8 mb-6 text-center hover:text-yellow-400 ${checked ? 'text-white' : 'text-black'}`} 
                to='/OurProjects'
            >
                Read More
            </Link>
        </section>
    );
}

export default ProjectSection;
