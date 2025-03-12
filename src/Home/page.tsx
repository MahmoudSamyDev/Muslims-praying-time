import Header from "./header";
import PrayingCards from "./PrayingCards/page";
import { useGetAllTimings } from "../Functions/Hooks/QueryHooks";
import { createContext } from "react";
import { TimingContextType, timeZoneDetails } from "../Type";
import { useState } from "react";
import moment from 'moment';
import 'moment/dist/locale/ar';
import 'moment-timezone';

moment.locale('ar');

export const TimingContext = createContext<TimingContextType | null>(null);

const cairoTime = moment().tz('Africa/Cairo').format('DD-MM-YYYY');
const cairoTimeDisplayed =moment().tz('Africa/Cairo').format('a h:mm | DD MMMM');
const initialCountry = {country: 'EG', city: 'cairo', title: 'جمهورية مصر العربية', dateTime: {actualTime: cairoTime, displayedTime: cairoTimeDisplayed}}

function Home() {
    const [selectedCountry, setSelectedCountry] = useState(initialCountry);
    const { data, isLoading, isError, refetch } = useGetAllTimings(selectedCountry);
    const allTimings = data?.data?.timings;

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