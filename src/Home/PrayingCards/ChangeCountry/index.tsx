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
const cairoTime = moment().tz('Africa/Cairo').format('a h:mm | DD MMMM');
const makkahTime = moment().tz('Asia/Riyadh').format('a h:mm | DD MMMM');
const ammanTime = moment().tz('Asia/Amman').format('a h:mm | DD MMMM');

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
        const dateTime = event.currentTarget.dataset.timezone || '';
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
                        data-city="Cairo"
                        data-timezone={cairoTime}
                        onClick={changeCountry}
                    >
                        مصر
                    </MenuItem>
                    <MenuItem
                        value="المملكة العربية السعودية"
                        dir="rtl"
                        data-country="SA"
                        data-city="Makkah al Mukarramah"
                        data-timezone={makkahTime}
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
                        onClick={changeCountry}
                    >
                        الأردن
                    </MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}
