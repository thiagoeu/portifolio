import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { green } from '@mui/material/colors';

export let theme = createTheme({
  palette: {
    primary: {
      main: '#000000'
    },
    secondary: {
      main: green[300],
    },
  },
  typography : {
    fontFamily: "Roboto",
  }
});


theme = responsiveFontSizes(theme)