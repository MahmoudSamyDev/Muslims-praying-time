import { useQuery } from "@tanstack/react-query";
import { getAllTimings } from "../../Functions/APICalls/apiCalls";

type SelctedCountry_TP = {country: string, city: string, title: string, dateTime: string}

export function useGetAllTimings(selectedCountry: SelctedCountry_TP) {
    const response = useQuery({ queryKey: ['timing'], queryFn: () => getAllTimings(selectedCountry) });
    return response; 
}