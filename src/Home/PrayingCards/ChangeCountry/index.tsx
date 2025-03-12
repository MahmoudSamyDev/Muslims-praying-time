import { useState, useMemo } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useTimings } from '../../../Functions/Hooks/UIhooks';
import { SelectionStyle, InputLabelStyle } from './styleOverriding';

import moment from 'moment-timezone';

// تحديد اللغة العربية
moment.locale('ar');

export default function BasicSelect() {
    const [country, setCountry] = useState('');
    const { changeCountryOnSelect } = useTimings();

    // استخدام useMemo() لتجنب إعادة الحساب المتكرر
    const timeData = useMemo(() => {
        const now = moment(); // تخزين اللحظة الحالية مرة واحدة

        return [
            {
                label: 'جمهورية مصر العربية',
                value: 'جمهورية مصر العربية',
                country: 'EG',
                city: 'Cairo',
                actualTime: now.tz('Africa/Cairo').format('DD-MM-YYYY'),
                displayedTime: now.tz('Africa/Cairo').format('a h:mm | DD MMMM'),
            },
            {
                label: 'المملكة العربية السعودية',
                value: 'المملكة العربية السعودية',
                country: 'SA',
                city: 'Makkah',
                actualTime: now.tz('Asia/Riyadh').format('DD-MM-YYYY'),
                displayedTime: now.tz('Asia/Riyadh').format('a h:mm | DD MMMM'),
            },
            {
                label: 'الأردن',
                value: 'الأردن',
                country: 'JO',
                city: 'Amman',
                actualTime: now.tz('Asia/Amman').format('DD-MM-YYYY'),
                displayedTime: now.tz('Asia/Amman').format('a h:mm | DD MMMM'),
            },
        ];
    }, []);


    function changeCountry(event: React.MouseEvent<HTMLLIElement>) {
        setCountry(event.currentTarget.textContent || '');
        const country = event.currentTarget.dataset.country || '';
        const city = event.currentTarget.dataset.city || '';
        const title = event.currentTarget.textContent || '';
        const actualTime = event.currentTarget.dataset.timezone || '';
        const displayedTime = event.currentTarget.dataset.timeDisplayed || '';

        const dateTime = { actualTime, displayedTime };

        changeCountryOnSelect({ country, city, title, dateTime });
    }

    return (
        <Box sx={{ width: '70%', margin: 'auto' }} dir="rtl">
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label" sx={InputLabelStyle}>
                    المدينة
                </InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={country}
                    label="country"
                    sx={SelectionStyle}
                    dir="rtl"
                >
                    {timeData.map((item) => (
                        <MenuItem
                            key={item.country}
                            value={item.value}
                            dir="rtl"
                            data-country={item.country}
                            data-city={item.city}
                            data-timezone={item.actualTime}
                            data-time-displayed={item.displayedTime}
                            onClick={changeCountry}
                        >
                            {item.label}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
}
