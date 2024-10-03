import React, { useContext, useEffect, useState } from 'react';
import DesignCard from '../../component/DesignCard';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../component/DarkModeContext';
import { fetchAllDesigns } from '../../utils/designServices';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

const DesignSection = () => {
    const { checked } = useContext(DarkModeContext);
    const [designs, setDesigns] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

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
        <section className={`flex flex-col p-6 sm:px-8 sm:py-12 md:p-2 min-h-screen w-full
            ${checked ? 'bg-gray-800 text-white' : 'bg-[#b8e4fc] text-black'}`}>
            <h2
                className="text-4xl md:text-5xl lg:text-6xl font-bold mt-10 pt-4 text-center"
                data-aos="zoom-in-right"
            >
                Design Inspiration
            </h2>

            <div className="md:hidden mt-[200px]">
                <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    style={{ width: '100%', height: 'auto' }}
                    allowTouchMove={true}
                    centeredSlides={false}
                    noSwiping={false}
                    onSlideChange={(swiper) => console.log('Slide index changed to: ', swiper.activeIndex)}
                >
                    {designs.map((design) => (
                        <SwiperSlide key={design.id} style={{ display: 'flex', justifyContent: 'center', height: 'auto' }}>
                            <DesignCard design={design} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className="hidden md:flex justify-start md:justify-center items-center overflow-x-auto pb-4 mt-[200px] scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-gray-100">
                <div className="flex space-x-6">
                    {designs.map((design, index) => (
                        <div
                            key={design.id}
                            className="min-w-[250px] sm:min-w-[300px] md:min-w-[350px] opacity-0 translate-x-[-20px] transition-all duration-700 ease-in-out"
                            data-aos="fade-up"
                            data-aos-delay={index * 200}
                        >
                            <DesignCard design={design} />
                        </div>
                    ))}
                </div>
            </div>

            <Link className={`text-xl md:text-2xl lg:text-3xl font-bold mt-8 mb-6 text-center hover:text-yellow-400
                ${checked ? 'text-white' : 'text-black'}`} to='/design-inspiration' data-aos="fade-up">
                Read More
            </Link>
        </section>
    );
};

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

export default DesignSection;
