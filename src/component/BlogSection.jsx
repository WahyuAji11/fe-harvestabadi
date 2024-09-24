import React, { useContext, useEffect, useRef } from 'react';
import BlogCard from './BlogCard';
import { Link } from 'react-router-dom';
import { DarkModeContext } from './DarkModeContext';

const BlogSection = () => {
    const { checked } = useContext(DarkModeContext);
    const cardRefs = useRef([]);

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
    ];

    useEffect(() => {
        const observerCards = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('translate-x-0', 'opacity-100');
                } else {
                    entry.target.classList.remove('translate-x-0', 'opacity-100');
                }
            });
        }, { threshold: 0.1 });

        cardRefs.current.forEach(card => {
            if (card) observerCards.observe(card);
        });

        return () => {
            cardRefs.current.forEach(card => {
                if (card) observerCards.unobserve(card);
            });
        };
    }, []);

    return (
        <section className={`relative flex flex-col items-center justify-center p-6 sm:px-8 sm:py-12 md:p-8 min-h-screen w-full ${checked ? 'bg-gray-800 text-white' : 'bg-[#60b4fc] text-white'}`} id='blog'>
            <div className={`bg-[#97DAFF] rounded-full h-[400px] w-[400px] sm:h-[600px] sm:w-[600px] lg:h-[650px] lg:w-[650px] absolute top-[80px] sm:top-[-80px] md:top-[-100px] lg:top-[15px] left-[-180px] sm:left-[-240px] md:left-[-200px] lg:left-[-200px] z-0 min-h-[300px] min-w-[300px] sm:min-h-[400px] sm:min-w-[400px] md:min-h-[500px] md:min-w-[500px] lg:min-h-[650px] lg:min-w-[650px] ${checked ? 'bg-gray-700' : ''}`}></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-20 mb-8 text-center z-10">Our Blog</h1>
            <div className="space-y-6 w-full z-10">
                {blogPosts.map((post, index) => (
                    <div 
                        key={post.id} 
                        ref={el => cardRefs.current[index] = el}
                        className="opacity-0 translate-x-[-20px] transition-all duration-700 ease-in-out"
                    >
                        <BlogCard {...post} />
                    </div>
                ))}
            </div>
            <Link className="text-xl md:text-2xl lg:text-3xl font-bold mt-8 text-center hover:text-yellow-400" to='/OurBlog'>
                Read More
            </Link>
            <div className={`bg-[#97DAFF] rounded-full h-[400px] w-[400px] sm:h-[600px] sm:w-[600px] lg:h-[600px] lg:w-[600px] absolute bottom-[50px] sm:bottom-[-80px] lg:bottom-[-300px] right-[-180px] sm:right-[-200px] lg:right-[-180px] z-0 ${checked ? 'bg-gray-700' : ''}`}></div>
        </section>
    );
};

export default BlogSection;
