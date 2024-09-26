import React, { useContext, useEffect, useState } from 'react';
import BlogCard from '../../component/BlogCard';
import { Link } from 'react-router-dom';
import { FaArrowCircleLeft } from 'react-icons/fa';
import { DarkModeContext } from '../../component/DarkModeContext';
import { fetchAllPost } from '../../utils/postServices';

const Blog = () => {
    const { checked } = useContext(DarkModeContext);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            try {
                const fetchedPosts = await fetchAllPost();
                setPosts(fetchedPosts);
            } catch (error) {
                setError("Failed to fetch posts.");
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    const truncateContent = (content, length) => {
        if (content.length > length) {
            return content.substring(0, length) + '...';
        }
        return content;
    };

    if (loading) {
        return <div className="text-center">Loading...</div>;
    }

    if (error) {
        return <div className="text-center">Error: {error}</div>;
    }

    return (
        <section className={`relative flex flex-col items-center justify-center p-6 sm:px-8 sm:py-12 md:p-8 min-h-screen w-full overflow-hidden ${checked ? 'bg-gray-900 text-white' : 'bg-[#60b4fc] text-white'}`} id='blog'>
            <div className={`rounded-full h-[400px] w-[400px] sm:h-[600px] sm:w-[600px] lg:h-[650px] lg:w-[650px] absolute top-[80px] sm:top-[-80px] md:top-[-100px] lg:top-[15px] left-[-180px] sm:left-[-240px] md:left-[-200px] lg:left-[-200px] z-0 ${checked ? 'bg-gray-700' : 'bg-[#97DAFF]'}`}></div>
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mt-20 mb-8 text-center z-10`}>Our Blog</h1>
            <div className="space-y-6 w-full z-10">
                {posts.length > 0 ? (
                    posts.map((post) => (
                        <div
                            key={post.slug}
                            className="opacity-100 translate-x-0 transition-all duration-700 ease-in-out"
                        >
                            <BlogCard post={{ ...post, content: truncateContent(post.content, 500) }} />
                        </div>
                    ))
                ) : (
                    <div className="text-center text-xl font-semibold mt-8">No data available</div>
                )}
            </div>
            <div className={`rounded-full h-[400px] w-[400px] sm:h-[600px] sm:w-[600px] lg:h-[600px] lg:w-[600px] absolute bottom-[50px] sm:bottom-[-80px] lg:bottom-[-300px] right-[-180px] sm:right-[-200px] lg:right-[-180px] z-0 ${checked ? 'bg-gray-700' : 'bg-[#97DAFF]'}`}></div>
            <Link className={`hover:text-yellow-400 mt-10 text-5xl`} to='/'>
                <FaArrowCircleLeft className={`${checked ? 'text-white' : 'text-white'} hover:text-yellow-400`} />
            </Link>
        </section>
    );
};

export default Blog;
