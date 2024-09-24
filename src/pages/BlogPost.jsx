import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowCircleLeft } from 'react-icons/fa';
import { DarkModeContext } from '../component/DarkModeContext';

const BlogPost = () => {
    const { checked } = useContext(DarkModeContext);

    return ( 
        <>
        <div className={`h-[30vh] md:h-[60vh] max-w-[900px] w-[50%] sm:w-[30%] z-0 absolute right-0 top-0 ${checked ? 'bg-gray-700' : 'bg-[#97DAFF]'}`}></div>
        <section className={`z-10 flex flex-col items-center justify-center p-6 sm:px-8 sm:py-12 md:p-2 min-h-screen w-full ${checked ? 'bg-gray-900 text-white' : 'bg-[#60b4fc] text-white'}`} id='article'>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-20 mb-8 text-center z-10">Our Blog</h1>
            <div className="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-3xl mx-auto z-10">
                <img src='/img.jpg' alt='img' className="w-full h-64 object-cover" />
                <div className="p-6">
                    <h3 className="text-black font-bold text-xl mb-2">Lorem ipsum dolor amet</h3>
                    <p className="text-gray-800 text-base mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus nisi officia repudiandae minima eos laudantium iure voluptate. Numquam perferendis expedita ad nihil qui voluptate mollitia quos, fugit corrupti ab fuga.</p>
                    <p className="text-gray-800 text-base mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nam dolores culpa facilis exercitationem rem molestias. Velit architecto sunt, labore odit quibusdam, dolorum voluptatibus eaque, eum doloribus fugiat sit ipsam?.</p>
                    <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center">
                            <span className="text-sm text-gray-500">Jane Doe</span>
                            <span className="text-sm text-gray-500 ml-4">Nov 10, 2024</span>
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
}

export default BlogPost;
