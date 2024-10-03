import React, { useContext } from 'react';
import { DarkModeContext } from './DarkModeContext';
import { STORAGE_URL } from '../config/config';

const CardProjects = ({ project }) => {
    const { checked } = useContext(DarkModeContext);
    const imageUrl = `${STORAGE_URL}${project.image}`;

    const stripHtmlTags = (html) => {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = html;
        return tempDiv.textContent || tempDiv.innerText || '';
    };

    const cleanedContent = stripHtmlTags(project.content);

    return (
        <div className="max-w-xs md:max-w-sm lg:max-w-md">
            <a href={`/project/${project.slug}`} className="block">
                <div className="relative h-[600px] min-w-full md:min-w-[350px]">
                    <img
                        src={imageUrl}
                        alt={project.slug}
                        className="inset-0 w-full h-full object-cover rounded-md shadow-lg"
                    />
                </div>
                {cleanedContent && (
                    <h3 className={`mt-4 text-lg font-semibold text-center ${checked ? 'text-white' : 'text-gray-800'}`}>
                        {cleanedContent}
                    </h3>
                )}
            </a>
        </div>
    );
};

export default CardProjects;
