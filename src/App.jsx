import React, { useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import { Link } from 'react-router-dom';
import Header from './pages/components/Header';
import Layout from './pages/components/Layout';
import { Box } from '@mui/material';
import Footer from './pages/components/tys-new/Footer';
import Home2 from './pages/components/tys-new/Home2';
import sky from "./images/0.jpg"


function App() {
 
  return (
    <ThemeProvider theme={theme}>
      <Box>
      <img src={sky} alt="Background" className="background-image" />
        <Home2 />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;