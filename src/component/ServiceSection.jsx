"use client";
import React, { useContext, useEffect, useRef } from 'react';
import Card from "../component/CardServices";
import { DarkModeContext } from './DarkModeContext';

const ServiceSection = () => {
    const { checked } = useContext(DarkModeContext);
    const cardRefs = useRef([]); 
    const titleRef = useRef(null);

    const services = [
        {
            imageSrc: "/img.jpg",
            title: "Service 1",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
            link: "/DetailService"
        },
        {
            imageSrc: "/img.jpg",
            title: "Service 2",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
            link: "/DetailService"
        },
        {
            imageSrc: "/img.jpg",
            title: "Service 3",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
            link: "/DetailService"
        },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = cardRefs.current.indexOf(entry.target);
                        if (index !== -1) {
                            setTimeout(() => {
                                entry.target.classList.remove('translate-y-10', 'opacity-0');
                                entry.target.classList.add('translate-y-0', 'opacity-100');
                            }, index * 200);
                        } else if (entry.target === titleRef.current) {
                            entry.target.classList.remove('-translate-x-10', 'opacity-0');
                            entry.target.classList.add('translate-x-0', 'opacity-100');
                        }
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (titleRef.current) {
            observer.observe(titleRef.current);
        }

        cardRefs.current.forEach(card => {
            if (card) {
                observer.observe(card);
            }
        });

        return () => {
            cardRefs.current.forEach(card => {
                if (card) {
                    observer.unobserve(card);
                }
            });
            if (titleRef.current) {
                observer.unobserve(titleRef.current);
            }
        };
    }, []);

    return (
        <section className={`flex flex-col items-center justify-center p-6 sm:px-8 sm:py-12 md:p-8 min-h-screen w-full relative 
            ${checked ? 'bg-gray-800' : 'bg-[#60b4fc]'} text-white`} id='services'>
            <div className={`rounded-full h-[400px] w-[400px] sm:h-[600px] sm:w-[600px] lg:h-[650px] lg:w-[650px] absolute top-[80px] sm:top-[-80px] md:top-[-100px] lg:top-[15px] left-[-180px] sm:left-[-240px] md:left-[-200px] lg:left-[-200px] z-0 min-h-[300px] min-w-[300px] sm:min-h-[400px] sm:min-w-[400px] md:min-h-[500px] md:min-w-[500px] lg:min-h-[650px] lg:min-w-[650px] ${checked ? 'bg-gray-600' : 'bg-[#97DAFF]'}`}></div>
            <h1 
                ref={titleRef} 
                className="text-4xl md:text-5xl lg:text-6xl font-bold mt-20 mb-8 text-center z-10 
                transform -translate-x-10 opacity-0 transition-all duration-500"
            >
                Our Services
            </h1>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 pb-4">
                {services.map((service, index) => (
                    <div 
                        key={index} 
                        ref={el => cardRefs.current[index] = el}
                        className={`flex-shrink-0 w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px] transform translate-y-10 opacity-0 transition-all duration-500`}
                    >
                        <Card
                            imageSrc={service.imageSrc}
                            title={service.title}
                            text={service.text}
                            link={service.link}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}

export default ServiceSection;
