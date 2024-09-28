import React, { useContext } from 'react';
import { DarkModeContext } from './DarkModeContext';
import { API_BASE_URL } from '../utils/projectService';

const CardProject = ({ project }) => {
    const { checked } = useContext(DarkModeContext);
    const imageUrl = `${API_BASE_URL}storage/images/${project.image}`;

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
                {project.content && (
                    <h3 className={`mt-4 text-lg font-semibold text-center ${checked ? 'text-white' : 'text-gray-800'}`}>
                        {project.content}
                    </h3>
                )}
            </a>
        </div>
    );
};

export default CardProject;
