import { req } from '../../assets/axios-utils';

export async function getAllTimings(selectedCountry: {country: string, city: string}) {
    try {
        const response = await req({
            method: 'GET',
            url: `/10-03-2025`,
            params: {
                country: selectedCountry.country,
                city: selectedCountry.city,
            }
        });
        return response.data;
    }
    catch (error) {
        return Promise.reject(error);
    }
}