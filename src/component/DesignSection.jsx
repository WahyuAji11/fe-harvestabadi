import React, { useContext, useEffect, useRef } from 'react';
import DesignCard from './DesignCard';
import { Link } from 'react-router-dom';
import { DarkModeContext } from './DarkModeContext';

const DesignInspiration = () => {
    const { checked } = useContext(DarkModeContext);
    const cardRefs = useRef([]);
    const titleRef = useRef(null);

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

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {

                    if (entry.target === titleRef.current) {
                        entry.target.classList.remove('translate-y-10', 'opacity-0');
                        entry.target.classList.add('translate-y-0', 'opacity-100');
                    }

                    const index = cardRefs.current.indexOf(entry.target);
                    if (index !== -1) {
                        setTimeout(() => {
                            entry.target.classList.remove('translate-y-10', 'opacity-0');
                            entry.target.classList.add('translate-y-0', 'opacity-100');
                        }, index * 200);
                    }
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        if (titleRef.current) {
            observer.observe(titleRef.current);
        }

        cardRefs.current.forEach(card => {
            if (card) {
                observer.observe(card);
            }
        });

        return () => {
            // Cleanup observer
            if (titleRef.current) {
                observer.unobserve(titleRef.current);
            }
            cardRefs.current.forEach(card => {
                if (card) {
                    observer.unobserve(card);
                }
            });
        };
    }, []);

    return (
        <section className={`flex flex-col p-6 sm:px-8 sm:py-12 md:p-2 min-h-screen w-full
            ${checked ? 'bg-gray-800 text-white' : 'bg-[#b8e4fc] text-black'}`}>
            <h2 
                ref={titleRef}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mt-10 pt-4 text-center transform translate-y-10 opacity-0 transition-all duration-500"
            >
                Design Inspiration
            </h2>
            <div className="flex justify-center items-start overflow-x-auto gap-4 sm:gap-6 md:gap-8 lg:gap-10 pb-4 scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-600 mt-32">
                {projects.map((project, index) => (
                    <div 
                        key={index} 
                        ref={el => cardRefs.current[index] = el} 
                        className={`flex-shrink-0 w-[320px] sm:w-[360px] md:w-[400px] lg:w-[500px] transform translate-y-10 opacity-0 transition-all duration-500`}>
                        <DesignCard
                            imageSrc={project.imageSrc}
                            alt={project.alt}
                        />
                    </div>
                ))}
            </div>
            <Link className={`text-xl md:text-2xl lg:text-3xl font-bold mt-8 mb-6 text-center hover:text-yellow-400 
                ${checked ? 'text-white' : 'text-black'}`} to='DesignInspiration'>
                Read More
            </Link>
        </section>
    );
}

export default DesignInspiration;
