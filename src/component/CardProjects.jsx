import React, { useContext } from 'react';
import { DarkModeContext } from './DarkModeContext';
import { API_BASE_URL } from '../utils/projectService';

const CardProjects = ({ project }) => {
    const { checked } = useContext(DarkModeContext);
    const imageUrl = `${API_BASE_URL}storage/images/${project.image}`;

    // Fungsi untuk menghapus tag HTML
    const stripHtmlTags = (html) => {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = html;
        return tempDiv.textContent || tempDiv.innerText || '';
    };

    const cleanedContent = stripHtmlTags(project.content);

    return (
        <div className="max-w-xs md:max-w-sm lg:max-w-md mx-auto mb-3">
            <a href={`/project/${project.slug}`} className="block">
                <div className="relative min-h-[600px] min-w-[350px]">
                    <img
                        src={imageUrl}
                        alt={project.slug}
                        className="absolute inset-0 w-full h-full object-cover rounded-md shadow-lg"
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
