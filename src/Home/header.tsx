import { useTheme } from '@mui/material';
import { HeaderProps } from '../Type';
import moment from 'moment';
import { useState, useEffect } from 'react';
import { PrayingDispay } from '../utilities/StaticData';

function Header(props: HeaderProps) {
    const theme = useTheme();
    const [nextPray, setNextPray] = useState('');
    const [duration, setDuration] = useState('');
    const { details, allTimings } = props;

    useEffect(() => {
        const updateTime = () => {
            const currentTime = moment().locale('en');

            const afterFajrBeforeDuhr = currentTime.isAfter(moment(allTimings?.Fajr, 'hh:mm')) && currentTime.isBefore(moment(allTimings?.Dhuhr, 'hh:mm'));
            const afterDuhrBeforeAsr = currentTime.isAfter(moment(allTimings?.Dhuhr, 'hh:mm')) && currentTime.isBefore(moment(allTimings?.Asr, 'hh:mm'));
            const afterAsrBeforeMaghrib = currentTime.isAfter(moment(allTimings?.Asr, 'hh:mm')) && currentTime.isBefore(moment(allTimings?.Maghrib, 'hh:mm'));
            const afterMaghribBeforeIsha = currentTime.isAfter(moment(allTimings?.Maghrib, 'HH:mm')) && currentTime.isBefore(moment(allTimings?.Isha, 'hh:mm'));
            const afterIshaBeforeFajr = currentTime.isAfter(moment(allTimings?.Isha, 'hh:mm')) || currentTime.isBefore(moment(allTimings?.Fajr, 'hh:mm'));

            const allIntervals = [afterFajrBeforeDuhr, afterDuhrBeforeAsr, afterAsrBeforeMaghrib, afterMaghribBeforeIsha, afterIshaBeforeFajr];

            for (let index = 0; index < allIntervals.length; index++) {
                if (allIntervals[index]) {
                    setNextPray(PrayingDispay[index + 1]?.title || '');

                    const nextTime = allTimings[PrayingDispay[index + 1]?.key as keyof typeof allTimings];
                    const difference = moment(nextTime, 'hh:mm').diff(currentTime);
                    const differenceDuration = moment.duration(difference);

                    setDuration(`${differenceDuration.hours()} : ${differenceDuration.minutes()} : ${differenceDuration.seconds()}`);
                    break;
                }
            }
        };

        // Run immediately
        updateTime();

        // Update every second
        const intervalId = setInterval(updateTime, 1000);

        // Cleanup function
        return () => clearInterval(intervalId);
    }, [allTimings]);

    return (
        <header className='w-full flex flex-col lg:flex-row gap-[50px] lg:gap-0 justify-between items-center p-8 text-white' style={{ backgroundColor: theme.palette.primary.main }}>
            <div className="font-bold flex flex-col gap-[10px] text-center text-[35px]" style={{ color: theme.palette.primary.contrastText }}>
                <h1 className='text-right'>متبقي حتي صلاة {nextPray}</h1>
                <h1 className='text-center' dir='ltr'>{duration}</h1>
            </div>
            <div className="font-bold flex flex-col gap-[10px] text-center text-[35px]" style={{ color: theme.palette.primary.contrastText }}>
                <h1 className='text-left' dir='rtl'>{details?.dateTime}</h1>
                <h1 className='text-center'>{details?.title}</h1>
            </div>
        </header>
    );
}

export default Header;
