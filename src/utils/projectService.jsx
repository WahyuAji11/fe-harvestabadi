import axios from 'axios';
import { API_URL } from '../config/config';

export const fetchProjectBySlug = async (slug) => {
    try {
        const response = await axios.get(`${API_URL}public/projects/${slug}`);
        return response.data.data;
    } catch (error) {
        const errorMessage = error.response ? error.response.data.message : error.message;
        console.error("Error fetching project by slug:", errorMessage);
        throw new Error(errorMessage);
    }
};

export const fetchAllProject = async () => {
    try {
        const response = await axios.get(`${API_URL}public/projects/all`);
        return response.data.data;
    } catch (error) {
        const errorMessage = error.response ? error.response.data.message : error.message;
        console.error("Error fetching all v1/public/projects:", errorMessage);
        throw new Error(errorMessage);
    }
};