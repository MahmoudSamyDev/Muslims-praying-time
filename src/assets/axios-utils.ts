import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_URL;

const client = axios.create({
    baseURL: apiUrl,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const req = async ({ ...options }) => {
    try {
        const response = await client({ ...options });
        return response;
    } catch (error) {
        // Handle error here if needed
        return Promise.reject(error);
    }
};
