export type timeZoneDetails = {
    country: string,
    city: string,
    title: string,
    dateTime: string
}

export type allTimings_TP = {
    Fajr: string;
    Dhuhr: string;
    Asr: string;
    Maghrib: string;
    Isha: string;
}

export type TimingContextType  = {
    allTimings: allTimings_TP;
    changeCountryOnSelect: (details: timeZoneDetails) => void;
}

export interface HeaderProps {
    details: {
        dateTime: string;
        title: string;
    };
    allTimings: allTimings_TP
}