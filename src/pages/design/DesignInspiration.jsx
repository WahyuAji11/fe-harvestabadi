import React, { useContext, useState, useEffect } from 'react';
import DesignCard from '../../component/DesignCard';
import { FaArrowCircleLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../component/DarkModeContext';
import { fetchAllDesigns } from '../../utils/designServices';

const DesignInspiration = () => {
    const { checked } = useContext(DarkModeContext);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const fetchedData = await fetchAllDesigns();
                setData(fetchedData);
            } catch (error) {
                setError("Failed to fetch data.");
                console.error(error);
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
        return (
            <section className={`z-10 flex flex-col items-center justify-center p-6 sm:px-8 sm:py-12 md:p-2 min-h-screen w-full ${checked ? 'bg-gray-900 text-white' : 'bg-[#60b4fc] text-white'}`} id='article'>
                <h1 className='z-10 lg:text-8xl text-3xl'>Post not found !</h1>
                <Link className={`hover:text-yellow-400 text-5xl mt-10 mx-auto mb-10`} to='/'>
                    <FaArrowCircleLeft />
                </Link>
            </section>
        )
    }

    return (
        <section className={`flex flex-col p-6 sm:px-8 sm:py-12 md:p-2 min-h-screen w-full ${checked ? 'bg-gray-900 text-white' : 'bg-[#b8e4fc] text-black'}`}>
            <div className={`rounded-full h-[400px] w-[400px] sm:h-[600px] sm:w-[600px] lg:h-[650px] lg:w-[650px] absolute top-[80px] sm:top-[-80px] md:top-[-100px] lg:top-[15px] left-[-180px] sm:left-[-240px] md:left-[-200px] lg:left-[-200px] z-0 ${checked ? 'bg-gray-700' : 'bg-[#97DAFF]'}`}></div>
            <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold mt-10 pt-4 text-center ${checked ? 'text-white' : 'text-black'} z-10`}>Design Inspiration</h2>
            
            <div className="flex justify-center items-center w-full min-h-[70vh]">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10 pb-4 mt-20 justify-center items-center">
                    {data.map((design, index) => (
                        <div key={index} className="w-[320px] sm:w-[360px] md:w-[400px] lg:w-[500px] z-10">
                            <DesignCard
                                design={design}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <Link className={`hover:text-yellow-400 text-5xl mt-10 mx-auto mb-10 ${checked ? 'text-white' : 'text-black'}`} to='/'>
                <FaArrowCircleLeft />
            </Link>
        </section>
    );
}

// Styles for the loader
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
};

export default DesignInspiration;
