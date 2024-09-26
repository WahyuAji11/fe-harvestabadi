import React, { useContext } from 'react';
import { DarkModeContext } from './DarkModeContext';
import { API_BASE_URL } from '../utils/projectService';

const CardProject = ({ project }) => {
    const { checked } = useContext(DarkModeContext);
    const imageUrl = `${API_BASE_URL}storage/images/${project.image}`;

    return (
        <div className="max-w-xs md:max-w-sm lg:max-w-md mx-auto mb-3">
            <a href={project.link} className="block">
                <div className="relative" style={{ paddingBottom: '177.78%' }}>
                    <img src={imageUrl} alt={project.alt} className="absolute inset-0 w-full h-full object-cover rounded-md shadow-lg" />
                </div>
                <h3 className={`mt-6 mb-4 text-lg font-semibold text-center ${checked ? 'text-white' : 'text-gray-800'}`}>
                    {project.content}
                </h3>
            </a>
        </div>
    );
};

export default CardProject;
