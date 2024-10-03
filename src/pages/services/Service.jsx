import React, { useContext, useState, useEffect } from 'react';
import CardService from '../../component/CardServices';
import { Link } from 'react-router-dom';
import { FaArrowCircleLeft } from 'react-icons/fa';
import { DarkModeContext } from '../../component/DarkModeContext';
import { fetchAllService } from '../../utils/servicesService';

const Service = () => {
    const { checked } = useContext(DarkModeContext);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const fetchedData = await fetchAllService();
                console.log("Fetched Data:", fetchedData);
                setData(fetchedData);
            } catch (err) {
                setError("Failed to fetch data: " + err.message);
                console.error("Error fetching data:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return(
            <div style={{
                ...styles.loaderContainer,
                backgroundColor: checked ? '#1F2938' : '#60b4fc'
            }}>
                <div style={{
                    ...styles.spinner,
                    borderTopColor: checked ? '#FBBF24' : '#FBBF24'
                }}></div>
            </div>
        )
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
    <section className={`flex flex-col text-white p-6 sm:px-8 sm:py-12 md:p-2 min-h-screen w-full ${checked ? 'bg-gray-900' : 'bg-[#b8e4fc]'}`} id='service'>
        <div className={`rounded-full h-[400px] w-[400px] sm:h-[600px] sm:w-[600px] lg:h-[650px] lg:w-[650px] absolute top-[80px] sm:top-[-80px] md:top-[-100px] lg:top-[15px] left-[-180px] sm:left-[-240px] md:left-[-200px] lg:left-[-200px] z-0 ${checked ? 'bg-gray-700' : 'bg-[#97DAFF]'}`}></div>
        <div className='flex flex-col items-start justify-start absolute left-4 md:left-16 lg:left-[300px]'>
            <h1 className={`text-3xl mt-20 sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 ${checked ? 'text-white' : 'text-black'}`}>
                <br /> Service
            </h1>
            <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold ${checked ? 'text-white' : 'text-black'} mt-[-1rem] sm:mt-[-2rem] md:mt-[-3rem]`}>
                __
            </h1>
        </div>

        <div className="flex flex-col items-center mt-[200px] sm:mt-[250px] md:mt-[300px] z-10">
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 pb-4">
                {data.map((service, index) => (
                    <CardService
                        key={service.slug}
                        service={service}
                        data-aos="fade-up"
                        data-aos-delay={index * 200}
                    />
                ))}
            </div>
        </div>

        <div className={`rounded-full h-[400px] w-[400px] sm:h-[600px] sm:w-[600px] lg:h-[600px] lg:w-[600px] absolute bottom-[50px] sm:bottom-[-80px] lg:bottom-[-300px] right-[-180px] sm:right-[-200px] lg:right-[-180px] z-0 ${checked ? 'bg-gray-700' : 'bg-[#97DAFF]'}`}></div>
        <Link className={`hover:text-yellow-400 text-5xl mt-10 mx-auto mb-10 ${checked ? 'text-white' : 'text-black'}`} to='/'>
            <FaArrowCircleLeft />
        </Link>
    </section>
);

};

const styles = {
    loaderContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
    },
    spinner: {
        border: '8px solid #f3f3f3',
        borderTop: '8px solid #3498db',
        borderRadius: '50%',
        width: '60px',
        height: '60px',
        animation: 'spin 1s linear infinite',
    },
};

export default Service;
