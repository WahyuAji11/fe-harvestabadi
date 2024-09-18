import React from 'react';
import BlogCard from './BlogCard';

const BlogSection = () => {
    const blogPosts = [
        {
            id: 1,
            title: 'Lorem ipsum dolor amet',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla risus risus, mollis ac ligula vel, semper pretium est...',
            author: 'John Doe',
            date: 'Oct 26, 2024',
            imageUrl: '/img.jpg'
        },
    ];

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Our Blog</h1>
            <div className="space-y-6">
                {blogPosts.map(post => (
                    <BlogCard key={post.id} {...post} />
                ))}
            </div>
        </div>
    );
};

export default BlogSection;
