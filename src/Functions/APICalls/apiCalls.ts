import { req } from '../../assets/axios-utils';
import { timeZoneDetails } from '../../Type';

export async function getAllTimings(selectedCountry: timeZoneDetails) {
    try {
        const response = await req({
            method: 'GET',
            url: `/${selectedCountry?.dateTime?.actualTime}`,
            params: {
                country: selectedCountry?.country,
                city: selectedCountry?.city,
            }
        });
        return response.data;
    }
    catch (error) {
        return Promise.reject(error);
    }
}