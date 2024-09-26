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
              img.src = `${API_BASE_URL}storage/images/${postResponse.image}`;
            }
          } catch (err) {
            console.log(err);
          } finally {
            setLoading(false);
          }
        };

        fetchData();
    }, [slug]);

    if (!post) {
        return <div>Post not found!</div>;
    }

    if (loading) {
        return <div>Loading..</div>
    }

    return (
        <>
            <div className={`h-[30vh] md:h-[60vh] max-w-[900px] w-[50%] sm:w-[30%] z-0 absolute right-0 top-0 ${checked ? 'bg-gray-700' : 'bg-[#97DAFF]'}`}></div>
            <section className={`z-10 flex flex-col items-center justify-center p-6 sm:px-8 sm:py-12 md:p-2 min-h-screen w-full ${checked ? 'bg-gray-900 text-white' : 'bg-[#60b4fc] text-white'}`} id='article'>
                <div className={`flex flex-col bg-white shadow-md rounded-lg overflow-hidden w-full max-w-5xl mx-auto p-6 z-10 mt-20`}>
                    <img 
                        src={`${API_BASE_URL}storage/images/${post.image}`} 
                        alt={post.title} 
                        className="w-full h-auto object-cover mb-6" 
                    />
                    <h1 className="text-black font-bold text-4xl mb-4">{post.title}</h1>
                    <div className="flex items-center mb-4">
                        <span className="text-sm text-gray-500 font-medium">{post.author}</span>
                        <span className="text-sm text-gray-500 ml-4">{new Date(post.created_at).toLocaleDateString()}</span>
                    </div>
                    <p className="text-gray-800 text-base leading-relaxed mb-6">{post.content}</p>
                </div>
                <Link className={`hover:text-yellow-400 text-5xl mt-10 mx-auto mb-10`} to='/'>
                    <FaArrowCircleLeft />
                </Link>
            </section>
        </>
    );
};

export default SingleBlog;

