"use client";
import Card from "../component/CardServices";

const ServiceSection = () => {
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

    return (
        <section className="bg-[#60b4fc] flex flex-col items-center justify-center text-white p-6 sm:px-8 sm:py-12 md:p-8 min-h-screen w-full relative" id='services'>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-20 mb-8 text-center z-10">Our Services</h1>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 pb-4">
                {services.map((service, index) => (
                    <div key={index} className="flex-shrink-0 w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px]">
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
