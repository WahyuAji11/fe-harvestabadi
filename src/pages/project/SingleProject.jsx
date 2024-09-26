import React, { useContext } from 'react';
import BlogCard from '../../component/BlogCard';
import { Link } from 'react-router-dom';
import { FaArrowCircleLeft } from 'react-icons/fa';
import { DarkModeContext } from '../../component/DarkModeContext';

const SingleProject = () => {
    const {checked} = useContext(DarkModeContext)
    const blogPosts = [
        {
            id: 1,
            title: 'Lorem ipsum dolor amet',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla risus risus, mollis ac ligula vel, semper pretium est. Suspendisse potenti. Donec scelerisque blandit nibh, sed interdum dolor suscipit vitae. Quisque posuere risus nisl, id laoreet odio placerat non. Nam a sapien imperdiet ex ullamcorper pretium Maecenas congue cursus sapien, id iaculis nisi. Nulla malesuada tellus ac nibh porttitor, quis suscipit odio ullamcorper..',
            author: 'John Doe',
            date: 'Oct 26, 2024',
            imageUrl: '/img.jpg'
        },
        {
            id: 2,
            title: 'Lorem ipsum dolor amet',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla risus risus, mollis ac ligula vel, semper pretium est. Suspendisse potenti. Donec scelerisque blandit nibh, sed interdum dolor suscipit vitae. Quisque posuere risus nisl, id laoreet odio placerat non. Nam a sapien imperdiet ex ullamcorper pretium Maecenas congue cursus sapien, id iaculis nisi. Nulla malesuada tellus ac nibh porttitor, quis suscipit odio ullamcorper..',
            author: 'Jane Doe',
            date: 'Nov 10, 2024',
            imageUrl: '/img.jpg'
        },
        {
            id: 3,
            title: 'Lorem ipsum dolor amet',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla risus risus, mollis ac ligula vel, semper pretium est. Suspendisse potenti. Donec scelerisque blandit nibh, sed interdum dolor suscipit vitae. Quisque posuere risus nisl, id laoreet odio placerat non. Nam a sapien imperdiet ex ullamcorper pretium Maecenas congue cursus sapien, id iaculis nisi. Nulla malesuada tellus ac nibh porttitor, quis suscipit odio ullamcorper..',
            author: 'Alex Smith',
            date: 'Dec 05, 2024',
            imageUrl: '/img.jpg'
        },
        {
            id: 4,
            title: 'Lorem ipsum dolor amet',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla risus risus, mollis ac ligula vel, semper pretium est. Suspendisse potenti. Donec scelerisque blandit nibh, sed interdum dolor suscipit vitae. Quisque posuere risus nisl, id laoreet odio placerat non. Nam a sapien imperdiet ex ullamcorper pretium Maecenas congue cursus sapien, id iaculis nisi. Nulla malesuada tellus ac nibh porttitor, quis suscipit odio ullamcorper..',
            author: 'Alex Smith',
            date: 'Dec 05, 2024',
            imageUrl: '/img.jpg'
        },
        {
            id: 5,
            title: 'Lorem ipsum dolor amet',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla risus risus, mollis ac ligula vel, semper pretium est. Suspendisse potenti. Donec scelerisque blandit nibh, sed interdum dolor suscipit vitae. Quisque posuere risus nisl, id laoreet odio placerat non. Nam a sapien imperdiet ex ullamcorper pretium Maecenas congue cursus sapien, id iaculis nisi. Nulla malesuada tellus ac nibh porttitor, quis suscipit odio ullamcorper..',
            author: 'Alex Smith',
            date: 'Dec 05, 2024',
            imageUrl: '/img.jpg'
        },
        {
            id: 6,
            title: 'Lorem ipsum dolor amet',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla risus risus, mollis ac ligula vel, semper pretium est. Suspendisse potenti. Donec scelerisque blandit nibh, sed interdum dolor suscipit vitae. Quisque posuere risus nisl, id laoreet odio placerat non. Nam a sapien imperdiet ex ullamcorper pretium Maecenas congue cursus sapien, id iaculis nisi. Nulla malesuada tellus ac nibh porttitor, quis suscipit odio ullamcorper..',
            author: 'Alex Smith',
            date: 'Dec 05, 2024',
            imageUrl: '/img.jpg'
        },
        {
            id: 7,
            title: 'Lorem ipsum dolor amet',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla risus risus, mollis ac ligula vel, semper pretium est. Suspendisse potenti. Donec scelerisque blandit nibh, sed interdum dolor suscipit vitae. Quisque posuere risus nisl, id laoreet odio placerat non. Nam a sapien imperdiet ex ullamcorper pretium Maecenas congue cursus sapien, id iaculis nisi. Nulla malesuada tellus ac nibh porttitor, quis suscipit odio ullamcorper..',
            author: 'Alex Smith',
            date: 'Dec 05, 2024',
            imageUrl: '/img.jpg'
        },
        {
            id: 8,
            title: 'Lorem ipsum dolor amet',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla risus risus, mollis ac ligula vel, semper pretium est. Suspendisse potenti. Donec scelerisque blandit nibh, sed interdum dolor suscipit vitae. Quisque posuere risus nisl, id laoreet odio placerat non. Nam a sapien imperdiet ex ullamcorper pretium Maecenas congue cursus sapien, id iaculis nisi. Nulla malesuada tellus ac nibh porttitor, quis suscipit odio ullamcorper..',
            author: 'Alex Smith',
            date: 'Dec 05, 2024',
            imageUrl: '/img.jpg'
        },
    ];

    return (
        <>
        <section className={`relative flex flex-col items-center justify-center p-6 sm:px-8 sm:py-12 md:p-8 min-h-screen w-full overflow-hidden ${checked ? 'bg-gray-900 text-white' : 'bg-[#60b4fc] text-black'}`} id='blog'>
            <div className={`rounded-full h-[400px] w-[400px] sm:h-[600px] sm:w-[600px] lg:h-[650px] lg:w-[650px] absolute top-[80px] sm:top-[-80px] md:top-[-100px] lg:top-[15px] left-[-180px] sm:left-[-240px] md:left-[-200px] lg:left-[-200px] z-0 ${checked ? 'bg-gray-700' : 'bg-[#97DAFF]'}`}></div>
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mt-20 mb-8 text-center z-10 ${checked ? 'text-white' : 'text-black'}`}>Our Blog</h1>
            <div className="space-y-6 w-full z-10">
                {blogPosts.map(post => (
                    <BlogCard key={post.id} {...post} />
                ))}
            </div>
            <div className={`rounded-full h-[400px] w-[400px] sm:h-[600px] sm:w-[600px] lg:h-[600px] lg:w-[600px] absolute bottom-[50px] sm:bottom-[-80px] lg:bottom-[-300px] right-[-180px] sm:right-[-200px] lg:right-[-180px] z-0 ${checked ? 'bg-gray-700' : 'bg-[#97DAFF]'}`}></div>
            <Link className={`hover:text-yellow-400 mt-10 text-5xl ${checked ? 'bg-white' : 'bg-white'}`} to='/'>
                <FaArrowCircleLeft className={`${checked ? 'text-white' : 'text-white'}`} />
            </Link>
        </section>
        </>
        
        
    );
};

export default SingleProject;
