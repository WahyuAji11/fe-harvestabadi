import React, { useState } from 'react';
import BlogCard from './BlogCard';

const BlogSection = () => {
    const initialPostsToShow = 1;
    const additionalPosts = 2;

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

    const [visiblePosts, setVisiblePosts] = useState(initialPostsToShow);

    const handleReadMoreClick = () => {
        if (visiblePosts < blogPosts.length) {
            const newVisiblePosts = Math.min(visiblePosts + additionalPosts, blogPosts.length);
            setVisiblePosts(newVisiblePosts);
        } else {
            setVisiblePosts(initialPostsToShow);
        }
    };

    return (
        <div className="bg-[#60b4fc] flex flex-col items-center justify-center text-white p-6 sm:px-8 sm:py-12 md:p-8 min-h-screen w-full" id='blog'>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-center">Our Blog</h1>
            <div className="space-y-6 w-full">
                {blogPosts.slice(0, visiblePosts).map(post => (
                    <BlogCard key={post.id} {...post} />
                ))}
            </div>
            <button 
                onClick={handleReadMoreClick} 
                className="text-xl md:text-2xl lg:text-3xl font-bold mt-8 text-center hover:text-yellow-400"
            >
                {visiblePosts < blogPosts.length ? 'Read More' : 'Show Less'}
            </button>
        </div>
    );
};

export default BlogSection;
