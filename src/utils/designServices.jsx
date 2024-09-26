import axios from 'axios';

//const API_BASE_URL = 'https://api.harvestabadi.com/';
const API_BASE_URL = 'http://localhost:8000/';

export { API_BASE_URL };

export const fetchAllDesigns = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}api/v1/public/designs/all`);
        return response.data.data;
    } catch (error) {
        const errorMessage = error.response ? error.response.data.message : error.message;
        console.error("Error fetching all v1/public/designs:", errorMessage);
        throw new Error(errorMessage);
    }
};