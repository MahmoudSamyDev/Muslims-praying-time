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
        if (!allTimings) return; // Ensure data is available
    
        const updateTime = () => {
            const currentTime = moment().locale('en');
    
            const prayerIntervals = [
                { check: currentTime.isAfter(moment(allTimings?.Fajr, 'HH:mm')) && currentTime.isBefore(moment(allTimings?.Dhuhr, 'HH:mm')), nextIndex: 1 },
                { check: currentTime.isAfter(moment(allTimings?.Dhuhr, 'HH:mm')) && currentTime.isBefore(moment(allTimings?.Asr, 'HH:mm')), nextIndex: 2 },
                { check: currentTime.isAfter(moment(allTimings?.Asr, 'HH:mm')) && currentTime.isBefore(moment(allTimings?.Maghrib, 'HH:mm')), nextIndex: 3 },
                { check: currentTime.isAfter(moment(allTimings?.Maghrib, 'HH:mm')) && currentTime.isBefore(moment(allTimings?.Isha, 'HH:mm')), nextIndex: 4 },
                { check: currentTime.isAfter(moment(allTimings?.Isha, 'HH:mm')) || currentTime.isBefore(moment(allTimings?.Fajr, 'HH:mm')), nextIndex: 0 },
            ];
    
            for (const interval of prayerIntervals) {
                if (interval.check) {
                    const nextPrayerIndex = interval.nextIndex; 
                    const nextPrayer = PrayingDispay[nextPrayerIndex];
    
                    setNextPray(nextPrayer?.title || '');
    
                    const nextTime = allTimings[nextPrayer?.key as keyof typeof allTimings];
                    if (!nextTime) return; 
    
                    const difference = moment(nextTime, 'HH:mm').diff(currentTime);
                    const differenceDuration = moment.duration(difference);
    
                    setDuration(`${differenceDuration.hours()} : ${differenceDuration.minutes()} : ${differenceDuration.seconds()}`);
                    break;
                }
            }
        };
    
        updateTime();
        const intervalId = setInterval(updateTime, 1000);
        return () => clearInterval(intervalId);
    }, [allTimings]);
    

    return (
        <header className='w-full flex flex-col lg:flex-row gap-[50px] lg:gap-0 justify-between items-center p-8 text-white' style={{ backgroundColor: theme.palette.primary.main }}>
            <div className="font-bold flex flex-col gap-[10px] text-center text-[35px]" style={{ color: theme.palette.primary.contrastText }}>
                <h1 className='text-center md:text-right'>متبقي حتي صلاة {nextPray}</h1>
                <h1 className='text-center' dir='ltr'>{duration}</h1>
            </div>
            <div className="font-bold flex flex-col gap-[10px] text-center text-[35px]" style={{ color: theme.palette.primary.contrastText }}>
                <h1 className='text-center md:text-left' dir='rtl'>{details?.dateTime?.displayedTime}</h1>
                <h1 className='text-center'>{details?.title}</h1>
            </div>
        </header>
    );
}

export default Header;
