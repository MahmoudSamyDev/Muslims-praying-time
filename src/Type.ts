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

/**
 * Interface representing the properties for the Header component.
 */
export interface HeaderProps {
    /**
     * Object containing details for the header.
     */
    details: {
        /**
         * The date and time formatted as a dateFormat.
         */
        dateTime: dateFormat;
        /**
         * The title to be displayed in the header.
         */
        title: string;
    };
    /**
     * Object containing all prayer timings.
     */
    allTimings: allTimings_TP;
}