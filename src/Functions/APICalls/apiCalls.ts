import { req } from '../../assets/axios-utils';
import { timeZoneDetails } from '../../Type';

/**
 * Fetches all prayer timings for a given country and city.
 *
 * @param {timeZoneDetails} selectedCountry - The details of the selected country including country name, city, and actual time.
 * @returns {Promise<any>} - A promise that resolves to the response data containing prayer timings.
 * @throws {Promise<Error>} - A promise that rejects with an error if the API call fails.
 */
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