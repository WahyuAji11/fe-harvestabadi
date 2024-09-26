import React, { useContext, useEffect, useState } from 'react';
import DesignCard from './DesignCard';
import { Link } from 'react-router-dom';
import { DarkModeContext } from './DarkModeContext';
import { fetchAllDesigns } from '../utils/designServices';

const DesignInspiration = () => {
    const { checked } = useContext(DarkModeContext);
    const [designs, setDesigns] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchDesigns = async () => {
            setLoading(true);
            try {
                const fetchedDesigns = await fetchAllDesigns();
                setDesigns(fetchedDesigns);
            } catch (error) {
                setError("Failed to fetch designs. Please try again later.");
                console.error("Error fetching designs:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchDesigns();
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
                className="text-4xl md:text-5xl lg:text-6xl font-bold mt-10 pt-4 text-center transform translate-y-10 transition-all duration-500"
                data-aos="zoom-in-right"
            >
                Design Inspiration
            </h2>
            <div className="flex justify-center items-start overflow-x-auto overflow-y-hidden gap-4 sm:gap-6 md:gap-8 lg:gap-10 pb-4 scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-600 mt-32">
                {designs.map((design) => (
                    <div
                        key={design.id}
                        className="flex-shrink-0 w-[320px] sm:w-[360px] md:w-[400px] lg:w-[500px] transform translate-y-10 transition-all duration-500"
                        data-aos="flip-left"
                    >
                        <DesignCard
                            design={design}
                        />
                    </div>
                ))}
            </div>
            <Link className={`text-xl md:text-2xl lg:text-3xl font-bold mt-8 mb-6 text-center hover:text-yellow-400
                ${checked ? 'text-white' : 'text-black'}`} to='/design-inspiration' data-aos="fade-up">
                Read More
            </Link>
        </section>
    );
};

export default DesignInspiration;
