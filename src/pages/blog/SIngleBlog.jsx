import React, { useContext, useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaArrowCircleLeft } from 'react-icons/fa';
import { DarkModeContext } from '../../component/DarkModeContext';
import { fetchPostBySlug, API_BASE_URL } from '../../utils/postServices';

const SingleBlog = () => {
    const { slug } = useParams();
    const { checked } = useContext(DarkModeContext);
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            if (!slug) {
                setLoading(false);
                return;
            }

            try {
                const postResponse = await fetchPostBySlug(slug);
                setPost(postResponse);

                if (postResponse.data.image) {
                    const img = new Image();
                    img.src = `${API_BASE_URL}storage/images/${postResponse.data.image}`;
                }
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [slug]);

    const stripHtmlTags = (html) => {
        const doc = new DOMParser().parseFromString(html, 'text/html');
        return doc.body.textContent || "";
    };

    if (!post) {
        return (
            <section className={`z-10 flex flex-col items-center justify-center p-6 sm:px-8 sm:py-12 md:p-2 min-h-screen w-full ${checked ? 'bg-gray-900 text-white' : 'bg-[#60b4fc] text-white'}`} id='article'>
                <h1 className='z-10 lg:text-8xl text-3xl'>Post not found!</h1>
                <Link className={`hover:text-yellow-400 text-5xl mt-10 mx-auto mb-10`} to='/'>
                    <FaArrowCircleLeft />
                </Link>
            </section>
        );
    }

    if (loading) {
        return (
            <div style={{
                ...styles.loaderContainer,
                backgroundColor: checked ? '#1F2937' : '#97DAFF',
            }}>
                <div style={{
                    ...styles.spinner,
                    borderColor: checked ? '#FBBF24' : '#60B4FC'
                }}></div>
            </div>
        );
    }

    return (
        <>
            <div className={`h-[30vh] md:h-[60vh] max-w-[900px] w-[50%] sm:w-[30%] z-0 absolute right-0 top-0 ${checked ? 'bg-gray-700' : 'bg-[#97DAFF]'}`}></div>
            <section className={`z-10 flex flex-col items-center justify-center p-6 sm:px-8 sm:py-12 md:p-2 min-h-screen w-full ${checked ? 'bg-gray-900 text-white' : 'bg-[#60b4fc] text-white'}`} id='article'>
                <div className={`flex flex-col bg-white shadow-md rounded-lg overflow-hidden w-full max-w-5xl mx-auto p-6 z-10 mt-20`}>
                    <img
                        src={`${API_BASE_URL}storage/images/${post.image}`}
                        alt={post.title}
                        className="w-full h-[calc(100vw*9/16)] object-cover mb-6" // Maintain fixed landscape size
                        style={{ height: 'calc(100vw * 9 / 16)', maxHeight: '500px' }} // Set max height for landscape
                    />
                    <h1 className="text-black font-bold text-4xl mb-4">{post.title}</h1>
                    <div className="flex items-center mb-4">
                        <span className="text-sm text-gray-500 font-medium">{post.author.name}</span>
                        <span className="text-sm text-gray-500 ml-4">{new Date(post.created_at).toLocaleDateString()}</span>
                    </div>
                    <p className="text-gray-800 text-base leading-relaxed mb-6">{stripHtmlTags(post.content)}</p>
                </div>
                <Link className={`hover:text-yellow-400 text-5xl mt-10 mx-auto mb-10`} to='/'>
                    <FaArrowCircleLeft />
                </Link>
            </section>
        </>
    );
};

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

export default SingleBlog;
