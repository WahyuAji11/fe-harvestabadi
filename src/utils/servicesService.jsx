import axios from 'axios';
import { API_URL } from '../config/config';

export const fetchServiceBySlug = async (slug) => {
    try {
        const response = await axios.get(`${API_URL}public/services/${slug}`);
        return response.data.data;
    } catch (error) {
        const errorMessage = error.response ? error.response.data.message : error.message;
        console.error("Error fetching service by slug:", errorMessage);
        throw new Error(errorMessage);
    }
};

export const fetchAllService = async () => {
    try {
        const response = await axios.get(`${API_URL}public/services/all`);
        return response.data.data;
    } catch (error) {
        const errorMessage = error.response ? error.response.data.message : error.message;
        console.error("Error fetching all v1/public/services:", errorMessage);
        throw new Error(errorMessage);
    }
};