import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaArrowCircleLeft } from 'react-icons/fa';
import { DarkModeContext } from '../../component/DarkModeContext';

const SingleBlog = ({ blogPosts }) => {
    const { slug } = useParams(); // Get the slug from the URL
    const { checked } = useContext(DarkModeContext);

    // Find the blog post based on the slug
    const post = blogPosts.find(p => p.slug === slug);

    // If the post is not found, you can handle it here (optional)
    if (!post) {
        return <div>Post not found!</div>;
    }

    return ( 
        <>
            <div className={`h-[30vh] md:h-[60vh] max-w-[900px] w-[50%] sm:w-[30%] z-0 absolute right-0 top-0 ${checked ? 'bg-gray-700' : 'bg-[#97DAFF]'}`}></div>
            <section className={`z-10 flex flex-col items-center justify-center p-6 sm:px-8 sm:py-12 md:p-2 min-h-screen w-full ${checked ? 'bg-gray-900 text-white' : 'bg-[#60b4fc] text-white'}`} id='article'>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-20 mb-8 text-center z-10">{post.title}</h1>
                <div className="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-3xl mx-auto z-10">
                    <img src={post.image} alt={post.title} className="w-full h-64 object-cover" />
                    <div className="p-6">
                        <h3 className="text-black font-bold text-xl mb-2">{post.title}</h3>
                        <p className="text-gray-800 text-base mb-4">{post.content}</p>
                        <div className="flex items-center justify-between mt-4">
                            <div className="flex items-center">
                                <span className="text-sm text-gray-500">{post.author}</span>
                                <span className="text-sm text-gray-500 ml-4">{post.created_at}</span>
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

export default SingleBlog;
