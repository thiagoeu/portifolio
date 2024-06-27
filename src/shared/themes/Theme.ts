import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { green} from '@mui/material/colors';

export let theme = createTheme({
  palette: {
    primary: {
      main: '#968c8c',
    },
    secondary: {
      main: green[500],
    },
  },
  typography : {
    fontFamily: "Poppins"
  }
});


theme = responsiveFontSizes(theme)