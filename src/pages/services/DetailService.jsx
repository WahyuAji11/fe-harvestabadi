"use client";
import { Link } from "react-router-dom";
import { FaArrowCircleLeft } from "react-icons/fa";
import { useContext } from "react";
import { DarkModeContext } from "../../component/DarkModeContext";
import ServicesDetailCard from "../../component/ServiceDetailCard";

const DetailServices = () => {
    const { checked } = useContext(DarkModeContext);

    const service = [
        {
            header: "Web Development",
            name: "Responsive Website Design",
            text: "We create stunning responsive websites that adapt to any device. Our designs are user-friendly and tailored to your needs.",
        },
        {
            header: "Mobile Applications",
            name: "Cross-Platform Apps",
            text: "Develop high-quality mobile applications that work seamlessly across all devices, ensuring a great user experience.",
        },
        {
            header: "Digital Marketing",
            name: "SEO Services",
            text: "Optimize your website with our comprehensive SEO services to improve visibility and drive more traffic to your site.",
        },
        {
            header: "Graphic Design",
            name: "Brand Identity",
            text: "Build a strong brand identity with our graphic design services, including logos, brochures, and social media graphics.",
        },
        {
            header: "Content Writing",
            name: "Engaging Content",
            text: "Our team of professional writers creates engaging and informative content tailored to your audience and industry.",
        },
        {
            header: "E-Commerce Solutions",
            name: "Online Store Setup",
            text: "Launch your online store with our complete e-commerce solutions, including payment integration and inventory management.",
        },
    ];

    return (
        <>
            <div className={`bg-[#97DAFF] h-[30vh] md:h-[60vh] max-w-[900px] w-[50%] sm:w-[30%] z-0 absolute right-0 top-0 ${checked ? 'bg-gray-700' : ''}`}></div>
            <section className={`flex flex-col items-center justify-center text-white p-6 sm:px-8 sm:py-12 mt-12 md:p-2 min-h-screen w-full ${checked ? 'bg-gray-800' : 'bg-[#60b4fc]'}`} id='home'>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-center z-10 order-first">Our Services</h1>
                <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 pb-4 z-10" style={{ marginTop: '20px', marginBottom: '20px' }}>
                    {service.map((service, index) => (
                        <div key={index} className="flex-shrink-0 w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px]">
                            <ServicesDetailCard
                                header={service.header}
                                name={service.name}
                                text={service.text}
                            />
                        </div>
                    ))}
                </div>
                <Link className={`hover:text-yellow-400 text-5xl ${checked ? 'text-white' : 'text-white'}`} to='/' style={{ marginTop: '20px' }}>
                    <FaArrowCircleLeft />
                </Link>
            </section>
        </>
    );
};

export default DetailServices;
