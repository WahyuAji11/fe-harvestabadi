"use client";
import React, { useContext } from 'react';
import { DarkModeContext } from '../component/DarkModeContext';

const HomeSection = () => {
    const { checked } = useContext(DarkModeContext);

    return (
        <>
        <div className={`h-[30vh] md:h-[60vh] max-w-[900px] w-[50%] sm:w-[30%] z-0 absolute right-0 top-0 ${checked ? 'bg-gray-700' : 'bg-[#97DAFF]'}`}></div>

        <section className={`z-10 flex flex-col md:flex-row items-center justify-center text-white p-6 sm:px-8 sm:py-12 md:p-2 min-h-screen w-full ${checked ? 'bg-gray-800' : 'bg-[#60b4fc]'}`} id='home'>
            <div 
                className="z-10 flex flex-col items-center text-center md:items-start md:text-left md:w-1/2 w-full max-w-screen-sm px-4 py-6 z-2"
                data-aos="zoom-in-right">

                <h1 className="text-5xl md:text-5xl xl:text-7xl font-bold leading-tight mb-2 md:mb-7">
                    HARVEST<br />ABADI
                </h1>
                <p className="text-base md:text-lg xl:text-2xl mb-2 md:mb-7 mr-9">
                    Interior & Furniture Solutions for Hotels, Offices, Stores & Public Spaces
                </p>
                <a href='#services' className={`bg-white ${checked ? 'text-gray-700' : 'text-[#60b4fc]'} sm:w-fit px-4 py-2 md:px-6 md:py-2 rounded-lg font-bold hover:bg-yellow-400 transition-colors duration-300`}>
                    EXPLORE NOW
                </a>

            </div>
            <div className="w-full z-10 md:w-1/2 xl:w-5/12 flex items-center justify-center mt-4 md:mt-0">
                <img
                    src="/img.jpg"
                    alt="img"
                    width={700}
                    height={466}
                    className="rounded-lg object-cover w-full h-auto"
                    data-aos="zoom-in-left"
                />
            </div>
        </section>
        </>
    );
};

export default HomeSection;
