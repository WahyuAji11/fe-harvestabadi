import axios from 'axios';
import { API_URL } from '../config/config';

export const fetchPostBySlug = async (slug) => {
    try {
        const response = await axios.get(`${API_URL}public/artikels/${slug}`);
        return response.data.data;
    } catch (error) {
        const errorMessage = error.response ? error.response.data.message : error.message;
        console.error("Error fetching post by slug:", errorMessage);
        throw new Error(errorMessage);
    }
};

export const fetchAllPost = async () => {
    try {
        const response = await axios.get(`${API_URL}public/artikels/all`);
        return response.data.data;
    } catch (error) {
        const errorMessage = error.response ? error.response.data.message : error.message;
        console.error("Error fetching all v1/public/artikels:", errorMessage);
        throw new Error(errorMessage);
    }
};