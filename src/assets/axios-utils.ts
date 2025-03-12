import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_URL;

const client = axios.create({
    baseURL: apiUrl,
    headers: {
        'Content-Type': 'application/json',
    },
});

/**
 * Makes an HTTP request using the provided options.
 *
 * @param {object} options - The options to configure the HTTP request.
 * @returns {Promise<any>} - A promise that resolves to the response of the HTTP request.
 * @throws {Error} - Throws an error if the HTTP request fails.
 */
export const req = async ({ ...options }) => {
    try {
        const response = await client({ ...options });
        return response;
    } catch (error) {
        // Handle error here if needed
        return Promise.reject(error);
    }
};
