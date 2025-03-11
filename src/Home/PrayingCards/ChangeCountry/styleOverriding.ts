export const SelectionStyle = {
    textAlign: 'right',
    direction: 'rtl',
    '&.MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'white'
        },
        '&:hover fieldset': {
            borderColor: 'gray',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'white !important',
        },
    },
}

export const InputLabelStyle = {
    color: 'white',
    '&.Mui-focused': {
        color: 'gray !important',
    },
}