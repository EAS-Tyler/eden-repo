import React, { useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import { Link } from 'react-router-dom';
import Header from './pages/components/Header';
import Layout from './pages/components/Layout';
import { Box } from '@mui/material';
import Home from './pages/components/Home';
import Home2 from './pages/components/tys-new/Home2';
import sky from "./images/0.jpg"


function App() {

  // manage background state here
  // const [background, setBackground] = useEffect("")

// when?
// check in calendar add dates | check out
// which chalet
// member discount

  return (
    <ThemeProvider theme={theme}>
      <Box>
      <img src={sky} alt="Background" className="background-image" />


        {/* <Header /> */}
        {/* <Home /> */}
        <Home2 />

        {/* have header and background here then navigater to other pages? */}

      </Box>
    </ThemeProvider>
  );
}

export default App;