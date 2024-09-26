import React, { useContext, useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaArrowCircleLeft } from 'react-icons/fa';
import { DarkModeContext } from '../../component/DarkModeContext';
import { API_BASE_URL, fetchProjectBySlug } from '../../utils/projectService';

const SingleProject = () => {
    const { slug } = useParams();
    const {checked} = useContext(DarkModeContext)
    const [data, setData] = useState([]);
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
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [slug]);

    if (loading) {
        return <div>Loading..</div>
    }

    return (
        <>
            <section className={`z-10 flex flex-col items-center justify-center p-6 sm:px-8 sm:py-12 md:p-2 min-h-screen w-full ${checked ? 'bg-gray-900 text-white' : 'bg-[#60b4fc] text-white'}`} id='article'>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-20 mb-8 text-center z-10">{data.title}</h1>
                <div className="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-3xl mx-auto z-10">
                    <img src={`${API_BASE_URL}storage/images/${data.image}`} alt={data.slug} className="w-full h-64 object-cover" />
                    <div className="p-6">
                        <p className="text-gray-800 text-base mb-4">{data.content}</p>
                        <div className="flex items-center justify-between mt-4">
                            <div className="flex items-center">
                                <span className="text-sm text-gray-500">{data.author}</span>
                                <span className="text-sm text-gray-500 ml-4">{data.created_at}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <Link className={`hover:text-yellow-400 text-5xl mt-10 mx-auto mb-10 ${checked ? 'text-white' : 'text-black'}`} to='/'>
                    <FaArrowCircleLeft />
                </Link>
            </section>
        </>


    );
};

export default SingleProject;
