import axios from 'axios';
import { API_URL } from '../config/config';

export const fetchAllDesigns = async () => {
    try {
        const response = await axios.get(`${API_URL}public/designs/all`);
        return response.data.data;
    } catch (error) {
        const errorMessage = error.response ? error.response.data.message : error.message;
        console.error("Error fetching all v1/public/designs:", errorMessage);
        throw new Error(errorMessage);
    }
};