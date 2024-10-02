import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DarkModeContext } from './DarkModeContext';
import { API_BASE_URL } from '../utils/postServices';
import moment from 'moment';

const BlogCard = ({ post }) => {
    const { checked } = useContext(DarkModeContext);
    const imageUrl = `${API_BASE_URL}storage/images/${post.image}`;
    const formattedDate = moment(post.created_at).format('MMM, DD YYYY');

    // Function to remove HTML tags
    const stripHtmlTags = (html) => {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = html;
        return tempDiv.textContent || tempDiv.innerText || '';
    };

    const cleanedContent = stripHtmlTags(post.content);

    return (
        <div className={`flex flex-col md:flex-row ${checked ? 'bg-gray-100' : 'bg-white'} shadow-lg rounded-lg overflow-hidden max-w-7xl mx-auto`}>
            <div className="w-full md:w-2/5">
                <img src={imageUrl} alt={post.title} className="w-full h-auto object-cover aspect-[16/9]" />
            </div>
            <div className="w-full md:w-3/5 p-4 flex flex-col justify-between">
                <div>
                    <h2 className="text-black font-bold text-xl md:text-2xl mb-2">{post.title}</h2>
                    <p className="text-gray-800 text-base">{cleanedContent}</p>
                </div>
                <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center">
                        <span className="text-sm text-gray-500">{post.author.name}</span>
                        <span className="text-sm text-gray-500 ml-4">{formattedDate}</span>
                    </div>
                    <Link
                        to={`/blog/${post.slug}`}
                        className={`text-sm md:text-base ${checked ? 'text-black' : 'text-blue-500'}`}
                    >
                        Read More
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
