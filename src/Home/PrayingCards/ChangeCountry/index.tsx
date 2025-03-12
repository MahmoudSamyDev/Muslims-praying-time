import { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useTimings } from '../../../Functions/Hooks/UIhooks';
import { SelectionStyle, InputLabelStyle } from './styleOverriding';

import moment from 'moment';
import 'moment/dist/locale/ar';
import 'moment-timezone';

moment.locale('ar');
const cairoTime = moment().tz('Africa/Cairo').format('DD-MM-YYYY');
const makkahTime = moment().tz('Asia/Riyadh').format('DD-MM-YYYY');
const ammanTime = moment().tz('Asia/Amman').format('DD-MM-YYYY');

const cairoTimeDisplayed = moment().tz('Africa/Cairo').format('a h:mm | DD MMMM');
const makkahTimeDisplayed = moment().tz('Asia/Riyadh').format('a h:mm | DD MMMM');
const ammanTimeDisplayed = moment().tz('Asia/Amman').format('a h:mm | DD MMMM');

export default function BasicSelect() {
    const [country, setCountry] = useState('');
    const { changeCountryOnSelect } = useTimings();

    const handleChange = (event: SelectChangeEvent) => {
        setCountry(event.target.value as string);
    };

    function changeCountry(event: React.MouseEvent<HTMLLIElement>) {
        const country = event.currentTarget.dataset.country || '';
        const city = event.currentTarget.dataset.city || '';
        const title = event.currentTarget.textContent || '';
        const actualTime = event.currentTarget.dataset.timezone || '';
        const displayedTime = event.currentTarget.dataset.timeDisplayed || '';
        const dateTime = {actualTime, displayedTime}
        console.log(`Country: ${country}, City: ${city}, Title: ${title}, Date: ${actualTime}, Displayed: ${displayedTime}`);
        changeCountryOnSelect({ country, city, title, dateTime });
    }

    return (
        <Box sx={{ width: '50%', margin: 'auto' }} dir="rtl">
            <FormControl fullWidth>
                <InputLabel
                    id="demo-simple-select-label"
                    sx={InputLabelStyle}
                >
                    المدينة
                </InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={country}
                    label="country"
                    onChange={handleChange}
                    sx={SelectionStyle}
                    dir="rtl"
                >
                    <MenuItem
                        value="مصر"
                        dir="rtl"
                        data-country="EG"
                        data-city="cairo"
                        data-timezone={cairoTime}
                        data-time-displayed={cairoTimeDisplayed}
                        onClick={changeCountry}
                    >
                        جمهورية مصر العربية
                    </MenuItem>
                    <MenuItem
                        value="المملكة العربية السعودية"
                        dir="rtl"
                        data-country="SA"
                        data-city="Makkah al Mukarramah"
                        data-timezone={makkahTime}
                        data-time-displayed={makkahTimeDisplayed}
                        onClick={changeCountry}
                    >
                        المملكة العربية السعودية
                    </MenuItem>
                    <MenuItem
                        value="الأردن"
                        dir="rtl"
                        data-country="Jordan"
                        data-city="Amman"
                        data-timezone={ammanTime}
                        data-time-displayed={ammanTimeDisplayed}
                        onClick={changeCountry}
                    >
                        الأردن
                    </MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}
