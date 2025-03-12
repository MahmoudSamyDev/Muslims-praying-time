import { useQuery } from "@tanstack/react-query";
import { getAllTimings } from "../../Functions/APICalls/apiCalls";
import { timeZoneDetails } from "../../Type";

export function useGetAllTimings(selectedCountry: timeZoneDetails) {
    const response = useQuery({
        queryKey: ['timing', selectedCountry],
        queryFn: () => getAllTimings(selectedCountry),
        enabled: !!selectedCountry,
    });
    return response; 
}