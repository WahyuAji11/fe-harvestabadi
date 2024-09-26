import React, { useContext, useEffect, useRef, useState } from 'react';
import DesignCard from './DesignCard';
import { Link } from 'react-router-dom';
import { DarkModeContext } from './DarkModeContext';
import { fetchAllDesigns } from '../utils/designServices';

const DesignInspiration = () => {
    const { checked } = useContext(DarkModeContext);
    const cardRefs = useRef([]); // Array of refs for the design cards
    const titleRef = useRef(null); // Ref for the title element
    const [designs, setDesigns] = useState([]); // Store fetched designs
    const [loading, setLoading] = useState(true); // Loading state
    const [error, setError] = useState(''); // Error state

    // Fetch all designs when the component mounts
    useEffect(() => {
        const fetchDesigns = async () => {
            setLoading(true);
            try {
                const fetchedDesigns = await fetchAllDesigns();
                setDesigns(fetchedDesigns);  // Set the fetched designs
            } catch (error) {
                setError("Failed to fetch designs. Please try again later.");
                console.error("Error fetching designs:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchDesigns();
    }, []);
    console.log(designs)

    // Handle animations on scroll
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
                        }, index * 200); // Staggered animation
                    }
                    observer.unobserve(entry.target); // Stop observing once animation triggers
                }
            });
        }, { threshold: 0.1 });

        // Observe title and cards
        if (titleRef.current) {
            observer.observe(titleRef.current);
        }
        cardRefs.current.forEach(card => {
            if (card) {
                observer.observe(card);
            }
        });

        return () => {
            // Cleanup the observer on component unmount
            if (titleRef.current) observer.unobserve(titleRef.current);
            cardRefs.current.forEach(card => {
                if (card) observer.unobserve(card);
            });
        };
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <section className={`flex flex-col p-6 sm:px-8 sm:py-12 md:p-2 min-h-screen w-full
            ${checked ? 'bg-gray-800 text-white' : 'bg-[#b8e4fc] text-black'}`}>
            <h2 
                ref={titleRef}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mt-10 pt-4 text-center transform translate-y-10 opacity-0 transition-all duration-500"
            >
                Design Inspiration
            </h2>
            <div className="flex justify-center items-start overflow-x-auto overflow-y-hidden gap-4 sm:gap-6 md:gap-8 lg:gap-10 pb-4 scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-600 mt-32">
                {designs.map((design, index) => (
                    <div 
                        key={design.id} 
                        ref={el => cardRefs.current[index] = el} 
                        className="flex-shrink-0 w-[320px] sm:w-[360px] md:w-[400px] lg:w-[500px] transform translate-y-10 opacity-0 transition-all duration-500"
                    >
                        <DesignCard
                            design={design}  // Pass the entire design object
                        />
                    </div>
                ))}
            </div>
            <Link className={`text-xl md:text-2xl lg:text-3xl font-bold mt-8 mb-6 text-center hover:text-yellow-400 
                ${checked ? 'text-white' : 'text-black'}`} to='/DesignInspiration'>
                Read More
            </Link>
        </section>
    );
};

export default DesignInspiration;
