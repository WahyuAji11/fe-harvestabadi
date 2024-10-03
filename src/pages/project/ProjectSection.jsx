import React, { useContext, useEffect, useState } from 'react';
import CardProjects from '../../component/CardProjects';
import { Link } from 'react-router-dom';
import { fetchAllProject } from '../../utils/projectService';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { DarkModeContext } from '../../component/DarkModeContext';

const ProjectSection = () => {
    const { checked } = useContext(DarkModeContext);
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const [startX, setStartX] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const fetchedProjects = await fetchAllProject();
                setProjects(fetchedProjects);
            } catch (error) {
                console.error(error);
                setError('Failed to fetch projects');
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const handleTouchStart = (e) => {
        setStartX(e.touches[0].clientX);
    };

    const handleTouchMove = (e) => {
        if (startX === null) return;

        const touchEnd = e.touches[0].clientX;
        const touchDiff = startX - touchEnd;

        if (touchDiff > 50) {
            setCurrentCardIndex((prevIndex) =>
                prevIndex === projects.length - 1 ? 0 : prevIndex + 1
            );
            setStartX(null);
        } else if (touchDiff < -50) {
            setCurrentCardIndex((prevIndex) =>
                prevIndex === 0 ? projects.length - 1 : prevIndex - 1
            );
            setStartX(null);
        }
    };

    if (loading) {
        return (
            <div style={{
                ...styles.loaderContainer,
                backgroundColor: checked ? '#1F2938' : '#60b4fc'
            }}>
                <div style={{
                    ...styles.spinner,
                    borderTopColor: checked ? '#FBBF24' : '#FBBF24'
                }}></div>
            </div>
        );
    }

    if (error) {
        return <div className="text-center text-red-500">{error}</div>;
    }

    return (
        <section className={`md:px-12 px-5 flex flex-col text-white sm:px-8 sm:py-12 min-h-screen w-full ${checked ? 'bg-gray-800' : 'bg-[#b8e4fc]'}`} id='project'>
            <div className='flex flex-col items-start justify-start left-4 mt-12 md:left-16' data-aos="fade-right">
                <h1 className={`text-3xl mt-9 sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 ${checked ? 'text-white' : 'text-black'}`}>
                    Our <br /> Projects
                </h1>
                <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold ${checked ? 'text-white' : 'text-black'} mt-[-1rem] sm:mt-[-2rem] md:mt-[-3rem]`}>
                    __
                </h1>
            </div>

            {/* Mobile Slider */}
            <div className="flex md:hidden justify-center items-center relative mt-10"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
            >
                {projects.length > 0 && (
                    <div className="flex transition-transform duration-500 ease-in-out"
                        style={{
                            transform: `translateX(-${currentCardIndex * 100}%)`,
                            width: `${projects.length * 100}%`,
                        }}
                    >
                        {projects.map((data, index) => (
                            <div key={data.slug} className="min-w-full flex items-center justify-center">
                                <CardProjects project={data} />
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Desktop Projects */}
            <div className="hidden md:flex md:mt-24 justify-center items-center overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-gray-100">
                <div className="flex items-center justify-between gap-6 md:gap-10">
                    {projects.map((data, index) => (
                        <div
                            key={data.slug}
                            className="flex justify-center items-center min-w-[250px] sm:min-w-[300px] md:min-w-[350px] opacity-0 translate-x-[-20px] transition-all duration-700 ease-in-out"
                            data-aos="fade-up"
                            data-aos-delay={index * 200}
                        >
                            <CardProjects project={data} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Read More Link */}
            <Link
                className={`text-xl md:text-2xl lg:text-3xl font-bold mt-8 mb-6 text-center hover:text-yellow-400 ${checked ? 'text-white' : 'text-black'}`}
                to='/our-project'
                data-aos="fade-up"
            >
                Read More
            </Link>
        </section>
    );
}

// Styles for the loader
const styles = {
    loaderContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
    },
    spinner: {
        border: '8px solid #f3f3f3',
        borderTop: '8px solid transparent',
        borderRadius: '50%',
        width: '60px',
        height: '60px',
        animation: 'spin 1s linear infinite',
    },
};

export default ProjectSection;
