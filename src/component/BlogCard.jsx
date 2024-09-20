import React from 'react';

const BlogCard = ({ title, content, author, date, imageUrl }) => {
    return (
        <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden max-w-7xl mx-auto">
            <div className="w-full md:w-2/5">
                <img src={imageUrl} alt={title} className="w-full h-48 md:h-full object-cover" />
            </div>
            <div className="w-full md:w-3/5 p-4 flex flex-col justify-between">
                <div>
                    <h2 className="text-black font-bold text-xl md:text-2xl mb-2">{title}</h2>
                    <p className="text-gray-800 text-base">{content}</p>
                </div>
                <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center">
                        <span className="text-sm text-gray-500">{author}</span>
                        <span className="text-sm text-gray-500 ml-4">{date}</span>
                    </div>
                    <button className="text-blue-500 hover:text-blue-600 text-sm md:text-base">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
