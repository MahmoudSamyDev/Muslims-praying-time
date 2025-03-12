export type dateFormat = {
    actualTime: string;
    displayedTime: string;
}

export type timeZoneDetails = {
    country: string,
    city: string,
    title: string,
    dateTime: dateFormat,
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
        dateTime: dateFormat;
        title: string;
    };
    allTimings: allTimings_TP
}