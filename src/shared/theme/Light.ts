import { createTheme } from '@mui/material'
import { blueGrey, cyan } from '@mui/material/colors';

export const LightTheme = createTheme({
    palette: {
        primary: {
            main: blueGrey[700],
            dark: blueGrey[800],
            light: blueGrey[500],
            contrastText: '#ffffff',

        },
        secondary: {
            main: cyan[700],
            dark: cyan[800],
            light: cyan[500],
            contrastText: '#ffffff',
        },

        background: {
            default: '#f7f6f3',
            paper: '#ffffff',
        },
    },
    typography: {
        fontFamily: 'Poppins',
    },
});
