import { createTheme } from '@mui/material/styles';
import '@fontsource/great-vibes'; // Loads the "Great Vibes" font
import '@fontsource/charm'; // Loads the "Charm" font
import '@fontsource/montecarlo'; // Loads the "Norican" font
import '@fontsource/niconne'; // Loads the "Niconne" font
 
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  paper: {
    item: {
      borderRadius: "20px", padding: '20px', marginBottom: '20px'
    }
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif', // Default font
    menuText: {
      fontFamily: "'Great Vibes', cursive",
      // fontSize: '1.2rem', // Adjust to your liking
    },
    edenbody: {
      fontFamily: "'Charm', cursive",
      fontSize: '1.3rem', // Adjust to your liking
      textAlign: 'center',

    },
    luxuryTitle: {
      // fontFamily: "'Niconne', cursive",
      // fontFamily: 'Roboto, Arial, sans-serif', // Default font

      fontFamily: "'Great Vibes', cursive",
      fontSize: '2.5rem',  // Added fixed font size
      textAlign: 'center',
      padding: '0.3rem',

      // fontFamily: "'Norican', cursive",
      // fontWeight: '500  ',
    }
  },
  img: {
    boxitem: {
      padding: 1,
      width: "100%",
      height: "250px",
      borderRadius: "20px",
      objectFit: "cover",
      objectPosition: "center"
    }
  }


});

export default theme;
