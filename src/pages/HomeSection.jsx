"use client";

const HomeSection = () => {
    return (
        <section className="bg-[#60b4fc] flex flex-col md:flex-row items-center justify-center text-white p-6 sm:px-8 sm:py-12 md:p-2 min-h-screen w-full">
            <div className="flex flex-col items-center text-center md:items-start md:text-left md:w-1/2 w-full max-w-screen-sm px-4 py-6">
                <h1 className="text-5xl md:text-5xl xl:text-7xl font-bold leading-tight mb-2 md:mb-7">
                    HARVEST<br />ABADI
                </h1>
                <p className="text-base md:text-lg xl:text-2xl mb-2 md:mb-7 mr-9">
                    Interior & Furniture Solutions for Hotels, Offices, Stores & Public Spaces
                </p>
                <button className="bg-white text-[#60b4fc] sm:w-fit px-4 py-2 md:px-6 md:py-2 rounded-lg font-bold hover:bg-yellow-400 transition-colors duration-300">
                    EXPLORE NOW
                </button>
            </div>
            <div className="w-full md:w-1/2 xl:w-5/12 flex items-center justify-center mt-4 md:mt-0">
                <img
                    src="/img.jpg"
                    alt="img"
                    width={700}
                    height={466}
                    className="rounded-lg object-cover w-full h-auto"
                />
            </div>
        </section>
    );
};

export default HomeSection;
