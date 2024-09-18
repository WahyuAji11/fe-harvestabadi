"use client";
import Card from "../component/CardServices";

const ServiceSection = () => {
    const services = [
        {
            imageSrc: "/img.jpg",
            title: "Service 1",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem dolorum soluta alias et, nam aliquam ipsam quas ea, sunt at quisquam, suscipit quia reprehenderit? Doloribus sequi facere iste doloremque dolor.",
            link: "#"
        },
        {
            imageSrc: "/img.jpg",
            title: "Service 2",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem dolorum soluta alias et, nam aliquam ipsam quas ea, sunt at quisquam, suscipit quia reprehenderit? Doloribus sequi facere iste doloremque dolor.",
            link: "#"
        },
        {
            imageSrc: "/img.jpg",
            title: "Service 3",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem dolorum soluta alias et, nam aliquam ipsam quas ea, sunt at quisquam, suscipit quia reprehenderit? Doloribus sequi facere iste doloremque dolor.",
            link: "#"
        },
        {
            imageSrc: "/img.jpg",
            title: "Service 4",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem dolorum soluta alias et, nam aliquam ipsam quas ea, sunt at quisquam, suscipit quia reprehenderit? Doloribus sequi facere iste doloremque dolor.",
            link: "#"
        },
    ];

    return (
        <section className="bg-[#60b4fc] flex flex-col items-center justify-center text-white p-6 sm:px-8 sm:py-12 md:p-8 min-h-screen w-full">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-center">Our Services</h2>
                <div className="flex overflow-x-auto gap-4 sm:gap-6 md:gap-8 lg:gap-10 pb-4 scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-600">
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
            </div>
        </section>
    );
}

export default ServiceSection;
