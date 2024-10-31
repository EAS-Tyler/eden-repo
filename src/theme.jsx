import { createTheme } from '@mui/material/styles';
import '@fontsource/great-vibes'; // Loads the "Great Vibes" font


const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif', // Default font
    menuText: {
      fontFamily: "'Great Vibes', cursive",
      // fontSize: '1.2rem', // Adjust to your liking
    },
    luxuryTitle: {
      // fontFamily: "'Niconne', cursive",

      fontFamily: "'Great Vibes', cursive",

      // fontFamily: "'Norican', cursive",
      // fontWeight: '500  ',
    }
  },
});

export default theme;
