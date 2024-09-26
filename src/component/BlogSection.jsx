import React, { useContext, useEffect, useState } from 'react';
import BlogCard from './BlogCard';
import { Link } from 'react-router-dom';
import { DarkModeContext } from './DarkModeContext';
import { fetchAllPost } from '../utils/postServices';

const BlogSection = () => {
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

    // Function to truncate content
    const truncateContent = (content, length) => {
        if (content.length > length) {
            return content.substring(0, length) + '...';
        }
        return content;
    };

    if (loading) {
        return <div>Loading Ngab</div>;
    }

    if (error) {
        return <div>Error Ngab</div>;
    }

    return (
        <section className={`relative flex flex-col items-center justify-center p-6 sm:px-8 sm:py-12 md:p-8 min-h-screen w-full ${checked ? 'bg-gray-800 text-white' : 'bg-[#60b4fc] text-white'}`} id='blog'>
            <div className={`bg-[#97DAFF] rounded-full h-[400px] w-[400px] sm:h-[600px] sm:w-[600px] lg:h-[650px] lg:w-[650px] absolute top-[80px] sm:top-[-80px] md:top-[-100px] lg:top-[15px] left-[-180px] sm:left-[-240px] md:left-[-200px] lg:left-[-200px] z-0 min-h-[300px] min-w-[300px] sm:min-h-[400px] sm:min-w-[400px] md:min-h-[500px] md:min-w-[500px] lg:min-h-[650px] lg:min-w-[650px] ${checked ? 'bg-gray-700' : ''}`}></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-20 mb-8 text-center z-10" data-aos="zoom-in-up">Our Blog</h1>
            <div className="space-y-6 w-full z-10">
                {posts.length > 0 ? (
                    posts.map((post, index) => (
                        <div
                            key={post.slug}
                            className="opacity-100 translate-x-0 transition-all duration-700 ease-in-out"
                            data-aos="fade-up"
                            data-aos-duration="500"
                            data-aos-delay={index * 200} 
                        >
                            <BlogCard post={{ ...post, content: truncateContent(post.content, 500) }} />
                        </div>
                    ))
                ) : (
                    <div className="text-center text-xl font-semibold mt-8">No data available</div>
                )}
            </div>
            <Link className="text-xl md:text-2xl lg:text-3xl font-bold mt-8 text-center hover:text-yellow-400 z-10" to='/our-blog' data-aos="fade-down">
                Read More
            </Link>
            <div className={`bg-[#97DAFF] rounded-full h-[400px] w-[400px] sm:h-[600px] sm:w-[600px] lg:h-[600px] lg:w-[600px] absolute bottom-[50px] sm:bottom-[-80px] lg:bottom-[-300px] right-[-180px] sm:right-[-200px] lg:right-[-180px] z-0 ${checked ? 'bg-gray-700' : ''}`}></div>
        </section>
    );
};

export default BlogSection;
