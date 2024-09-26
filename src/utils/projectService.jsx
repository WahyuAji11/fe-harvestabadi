import axios from 'axios';

//const API_BASE_URL = 'https://api.harvestabadi.com/';
const API_BASE_URL = 'http://localhost:8000/';

export { API_BASE_URL };

export const fetchProjectBySlug = async (slug) => {
    try {
        const response = await axios.get(`${API_BASE_URL}api/v1/public/projects/${slug}`);
        return response.data.data;
    } catch (error) {
        const errorMessage = error.response ? error.response.data.message : error.message;
        console.error("Error fetching project by slug:", errorMessage);
        throw new Error(errorMessage);
    }
};

export const fetchAllProject = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}api/v1/public/projects/all`);
        return response.data.data;
    } catch (error) {
        const errorMessage = error.response ? error.response.data.message : error.message;
        console.error("Error fetching all v1/public/projects:", errorMessage);
        throw new Error(errorMessage);
    }
};