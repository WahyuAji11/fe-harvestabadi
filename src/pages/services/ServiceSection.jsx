"use client";
import React, { useContext, useEffect, useRef } from "react";
import Card from "../../component/CardServices";
import AOS from "aos";
import "aos/dist/aos.css";
import { DarkModeContext } from "../../component/DarkModeContext";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const ServiceSection = () => {
    const { checked } = useContext(DarkModeContext);
    const cardRefs = useRef([]);
    const titleRef = useRef(null);

    const services = [
        {
        image: "/img.jpg",
        title: "Web Development",
        description: "Build modern and responsive websites that cater to your business needs. Our expert team ensures top-notch performance and security.",
        slug: "/DetailService",
        },
        {
        image: "/img.jpg",
        title: "Mobile App Development",
        description: "Create powerful mobile applications for both Android and iOS platforms. We focus on user experience and functionality to engage your audience.",
        slug: "/DetailService2",
        },
        {
        image: "/img.jpg",
        title: "Digital Marketing",
        description:"Boost your online presence with our digital marketing services, including SEO, PPC, and social media marketing strategies tailored to your business.",
        slug: "/DetailService3",
        },
    ];

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <section
        className={`flex flex-col items-center justify-center p-6 sm:px-8 sm:py-12 md:p-8 min-h-screen w-full relative 
                ${checked ? "bg-gray-800" : "bg-[#60b4fc]"} text-white`}
        id="services"
        >
        <div
            className={`rounded-full h-[400px] w-[400px] sm:h-[600px] sm:w-[600px] lg:h-[650px] lg:w-[650px] absolute top-[80px] sm:top-[-80px] md:top-[-100px] lg:top-[15px] left-[-180px] sm:left-[-240px] md:left-[-200px] lg:left-[-200px] z-0 min-h-[300px] min-w-[300px] sm:min-h-[400px] sm:min-w-[400px] md:min-h-[500px] md:min-w-[500px] lg:min-h-[650px] lg:min-w-[650px] ${
            checked ? "bg-gray-600" : "bg-[#97DAFF]"
            }`}
        ></div>
        <h1
            ref={titleRef}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mt-20 mb-8 text-center z-10 
                    opacity-0"
            data-aos="fade-right"
            data-aos-duration="500"
        >
            Our Services
        </h1>

        {/* Mobile View - Swiper Slider */}
        <div className="md:hidden mt-8 w-full">
            <Swiper spaceBetween={0} slidesPerView={1} pagination={{ clickable: true }}>
            {services.map((service, index) => (
                <SwiperSlide key={index}>
                <div className="flex justify-center">
                    <div className="w-full max-w-[300px] mx-auto">
                    <Card
                        imageSrc={service.image}
                        title={service.title}
                        description={service.description}
                        link={service.slug}
                    />
                    </div>
                </div>
                </SwiperSlide>
            ))}
            </Swiper>
        </div>

        {/* Desktop View - Normal Layout */}
        <div className="hidden md:flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 pb-4">
            {services.map((service, index) => (
            <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                className={`flex-shrink-0 w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px] opacity-0`}
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay={index * 200}
            >
                <Card
                imageSrc={service.image}
                title={service.title}
                description={service.description}
                link={service.slug}
                />
            </div>
            ))}
        </div>
        </section>
    );
};

export default ServiceSection;
