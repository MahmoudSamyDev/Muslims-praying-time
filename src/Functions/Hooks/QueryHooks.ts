import { useQuery } from "@tanstack/react-query";
import { getAllTimings } from "../../Functions/APICalls/apiCalls";
import { timeZoneDetails } from "../../Type";

/**
 * Custom hook to fetch all prayer timings for a selected country.
 *
 * @param {timeZoneDetails} selectedCountry - The details of the selected country's time zone.
 * @returns {object} - The response object from the `useQuery` hook containing the prayer timings.
 */
export function useGetAllTimings(selectedCountry: timeZoneDetails) {
    const response = useQuery({
        queryKey: ['timing', selectedCountry],
        queryFn: () => getAllTimings(selectedCountry),
        enabled: !!selectedCountry,
    });
    return response; 
}