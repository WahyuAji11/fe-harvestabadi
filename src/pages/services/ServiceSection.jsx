import React, { useContext, useEffect, useState } from "react";
import Card from "../../component/CardServices";
import AOS from "aos";
import "aos/dist/aos.css";
import { DarkModeContext } from "../../component/DarkModeContext";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { fetchAllService } from "../../utils/servicesService";
import { STORAGE_URL } from "../../config/config";
import { FaRegSadCry } from 'react-icons/fa'; // Import the icon

const ServiceSection = () => {
    const { checked } = useContext(DarkModeContext);
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [slidesPerView, setSlidesPerView] = useState(1);

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const fetchedServices = await fetchAllService();
                setServices(fetchedServices);
                AOS.refresh();
            } catch (err) {
                console.error(err);
                setError("Failed to fetch services.");
            } finally {
                setLoading(false);
            }
        };

        fetchServices();
    }, []);

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    useEffect(() => {
        const updateSlidesPerView = () => {
            setSlidesPerView(window.innerWidth >= 768 ? 3 : 1);
        };

        updateSlidesPerView();

        window.addEventListener('resize', updateSlidesPerView);
        return () => {
            window.removeEventListener('resize', updateSlidesPerView);
        };
    }, [services]);

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
        return (
            <div style={{
                ...styles.errorContainer,
                backgroundColor: checked ? '#1F2938' : '#60b4fc'
            }}>
                <p style={{
                    color: checked ? '#FBBF24' : '#FFFFFF',
                    fontSize: '24px',
                }}>
                    {error}
                </p>
                <FaRegSadCry size={48} style={{ marginTop: '10px', color: checked ? '#FBBF24' : '#FFFFFF' }} />
            </div>
        );
    }

    return (
        <section
            className={`flex flex-col items-center justify-center p-6 sm:px-8 sm:py-12 md:p-8 min-h-screen w-full relative
                ${checked ? "bg-gray-800" : "bg-[#60b4fc]"} text-white`}
            id="services"
        >
            <div
                className={`rounded-full h-[400px] w-[400px] sm:h-[600px] sm:w-[600px] lg:h-[650px] lg:w-[650px] absolute top-[80px] sm:top-[-80px] md:top-[-100px] lg:top-[15px] left-[-180px] sm:left-[-240px] md:left-[-200px] lg:left-[-200px] z-0 min-h-[300px] min-w-[300px] sm:min-h-[400px] sm:min-w-[400px] md:min-h-[500px] md:min-w-[500px] lg:min-h-[650px] lg:min-w-[650px] ${
                    checked ? "bg-gray-600" : "bg-[#97DAFF]"}`
            }
            ></div>
            <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold mt-20 mb-8 text-center z-10"
                data-aos="fade-right"
                data-aos-duration="500"
            >
                Our Services
            </h1>

            <div className="mt-8 w-full">
                <Swiper spaceBetween={0} slidesPerView={slidesPerView} pagination={{ clickable: true }}>
                    {services.map((service, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex justify-center gap-5" data-aos="fade-up" data-aos-duration="500">
                                <div className="w-full max-w-[350px] mx-auto">
                                    <Card
                                        imageSrc={`${STORAGE_URL}${service.image}`}
                                        title={service.title}
                                        description={service.content}
                                        slug={service.slug}
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
        
    );
};

// Styles for the loader and error message
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
    errorContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        padding: '20px',
        color: 'white',
    },
}

export default ServiceSection;
