import Header from "./header";
import PrayingCards from "./PrayingCards/page";
import { getAllTimings } from "../Functions/APICalls/apiCalls";
import { useQuery } from "@tanstack/react-query";
import { createContext } from "react";
import { TimingContextType, timeZoneDetails } from "../Type";
import { useState } from "react";
import moment from 'moment';
import 'moment/dist/locale/ar';
import 'moment-timezone';

moment.locale('ar');
const cairoTime = moment().tz('Africa/Cairo').format('a h:mm | DD MMMM');

export const TimingContext = createContext<TimingContextType | null>(null);

function Home() {
    const [selectedCountry, setSelectedCountry] = useState({country: 'EG', city: 'cairo', title: 'جمهورية مصر العربية', dateTime: cairoTime});
    const { data: timingData, isLoading, isError, refetch } = useQuery({ queryKey: ['timing'], queryFn: () => getAllTimings(selectedCountry) });
    const allTimings = timingData?.data?.timings;

    function changeCountryOnSelect(details: timeZoneDetails) {
        setSelectedCountry(details);
        refetch();
    }
    return (
        <div className="w-[80%] h-[90%] flex flex-col items-center gap-[35px]">
            {isLoading && <p>Loading...</p>}
            {isError && <p>Error</p>}
            <TimingContext.Provider value={{allTimings, changeCountryOnSelect}}>
                <Header details={selectedCountry} allTimings={allTimings}/>
                <PrayingCards />
            </TimingContext.Provider>
        </div>
    )
}

export default Home