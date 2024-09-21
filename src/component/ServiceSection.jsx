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
    ];

    return (
        <>
            <section className="bg-[#60b4fc] flex flex-col items-center justify-center text-white p-6 sm:px-8 sm:py-12 md:p-8 min-h-screen w-full relative" id='services'>
                <div className="bg-[#97DAFF] rounded-full h-[400px] w-[400px] sm:h-[600px] sm:w-[600px] lg:h-[650px] lg:w-[650px] absolute top-[70px] sm:top-[-80px] lg:top-[-10px] left-[-180px] sm:left-[-240px] lg:left-[-200px] z-0"></div>
                
                <div className="flex flex-col justify-center items-center z-10 mt-10 mb-16 min-h-screen">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-center z-20">Our Services</h2>
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
                </div>
                
                <div className="bg-[#97DAFF] rounded-full h-[400px] w-[400px] sm:h-[600px] sm:w-[600px] lg:h-[600px] lg:w-[600px] absolute bottom-[50px] sm:bottom-[-80px] lg:bottom-[-300px] right-[-180px] sm:right-[-200px] lg:right-[-180px] z-0"></div>
            </section>

        </>
    );
}

export default ServiceSection;
