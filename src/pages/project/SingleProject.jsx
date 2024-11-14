import React, { useContext, useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaArrowCircleLeft } from 'react-icons/fa';
import { DarkModeContext } from '../../component/DarkModeContext';
import { fetchProjectBySlug } from '../../utils/projectService';
import { STORAGE_URL } from '../../config/config';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const SingleProject = () => {
    const { slug } = useParams();
    const { checked } = useContext(DarkModeContext);
    const [data, setData] = useState([]);
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            if (!slug) {
                setLoading(false);
                return;
            }

            try {
                const fetchedData = await fetchProjectBySlug(slug);
                setData(fetchedData);
                setImages(fetchedData.images || []);
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [slug]);

    if (loading) {
        return (
            <div style={{
                ...styles.loaderContainer,
                backgroundColor: checked ? '#1F2938' : '#60b4fc'
            }}>
                <div style={{
                    ...styles.spinner,
                    borderTopColor: checked ? '#FBBF24' : '#FBBF24'
                }}></div>
            </div>
        );
    }

    return (
        <section className={`z-10 flex flex-col items-center justify-center p-6 sm:px-8 sm:py-12 md:p-2 min-h-screen w-full ${checked ? 'bg-gray-900 text-white' : 'bg-[#60b4fc] text-white'}`} id='article'>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-20 mb-8 text-center z-10">{data.title}</h1>
            <div className="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-3xl mx-auto z-10">
                <img src={`${STORAGE_URL}${data.image}`} alt={data.slug} className="w-full h-[calc(100vw/19*6)] object-cover" />
                <div className="p-6">
                    <Swiper
                        spaceBetween={10}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{ delay: 3000 }}
                    >
                        {images.map((image, index) => (
                            <SwiperSlide key={index}>
                                <img
                                    src={`${STORAGE_URL}${image.image}`}
                                    alt={`Slide ${index}`}
                                    className="w-full object-cover rounded-md"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="flex justify-center mt-4">
                        <span className="text-sm text-gray-500 italic">
                            Swipe or scroll to explore more details.
                        </span>
                    </div>
                    <p className="text-gray-800 text-base mb-4">Project Link: {data.link}</p>
                </div>
            </div>

            <Link className={`hover:text-yellow-400 text-5xl mt-10 mx-auto mb-10 ${checked ? 'text-white' : 'text-black'}`} to='/'>
                <FaArrowCircleLeft />
            </Link>
        </section>
    );
};

// Styles for the loader
const styles = {
    loaderContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh'
    },
    spinner: {
        border: '8px solid #f3f3f3',
        borderTop: '8px solid #3498db',
        borderRadius: '50%',
        width: '60px',
        height: '60px',
        animation: 'spin 1s linear infinite'
    }
}

export default SingleProject;
