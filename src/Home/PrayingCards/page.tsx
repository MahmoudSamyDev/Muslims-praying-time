import Card from './SinglePrayingTimeCard/index.tsx';
import ChangeCountry from './ChangeCountry/index.tsx';
import { useTheme } from '@mui/material';
import { useTimings } from '../../Functions/Hooks/UIhooks.ts';

function PrayingCards() {
    const theme = useTheme();
    const { allTimings } = useTimings();
    // console.log(allTimings);

    const PrayingCardsObj = [
        { id: 5, title: 'الفجر', time: allTimings?.Fajr, img: '/PrayerBG/fajr.jpg' },
        { id: 4, title: 'الظهر', time: allTimings?.Dhuhr, img: '/PrayerBG/Duhr.jpg' },
        { id: 3, title: 'العصر', time: allTimings?.Asr, img: '/PrayerBG/Asr.jpg' },
        { id: 2, title: 'المغرب', time: allTimings?.Maghrib, img: '/PrayerBG/Majreb.jpg' },
        { id: 1, title: 'العشاء', time: allTimings?.Isha, img: '/PrayerBG/Ishaa.jpg' },
    ];

    return (
        <div className='w-full p-[30px] flex-1 flex flex-col gap-[40px] text-white' style={{ backgroundColor: theme.palette.primary.main }}>
            <div className='grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-[40px]'>
            {
                PrayingCardsObj?.map((card) => (
                    <Card key={card.id} details={card} />
                ))
            }
            </div>
            <ChangeCountry />
        </div>
    );
}

export default PrayingCards;