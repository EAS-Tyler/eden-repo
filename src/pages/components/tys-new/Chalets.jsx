import React from 'react';

import { Box, Typography, Paper } from "@mui/material";
import apple from "../../../images/apple.jpg";
import sky from "../../../images/0.jpg";
import images from "./Images"

import kitchdine from "../../../images/ty/honey/kitchdine.jpg";
import bed from "../../../images/ty/brae/bed.jpg";
// import sky from "../../../images/0.jpg";

import '../App.css'
import booknow from "../EDENEDEN.jpg"
import theme from '../../../theme';
import { ThemeProvider } from '@mui/material/styles'
// import BookNow from '../../BookNow';
import { useNavigate } from 'react-router-dom';

const Chalets = () => {
    const navigate = useNavigate();

    return (
        <ThemeProvider theme={theme}>
            <Box p={2} mt={1}>
                <img src={sky} alt="Background" className="background-image" />
                {/*  XXX  - cant i use image from background on app.jsx
                 */}


                <Paper elevation={9} style={{ borderRadius: "20px", padding: '20px', marginBottom: '20px' }}
                    onClick={() => { navigate("/gala") }}
                >

                    <Typography component="h1" p={2} variant="h4"
                        style={theme.typography.luxuryTitle}
                        textAlign={"center"} >
                        Gala                    </Typography>
                    {/* <img src={kitchdine} alt="Description" style={{ padding: 1, width: "100%", borderRadius: "20px" }} /> */}
                    <img 

// src={`/525af60f-606d-4248-ad9b-4f1628ee0c9f.jpg`} 

                        src={kitchdine} 
                        alt="Description" 
                        style={{ 
                            padding: 1, 
                            width: "100%", 
                            height: "250px", // Adjust this value to your needs
                            borderRadius: "20px",
                            objectFit: "cover",
                            objectPosition: "center" // You can use "top", "bottom", or "center 30%" etc.
                        }} 
                    />
                </Paper>

                <Paper elevation={9} style={{ borderRadius: "20px", padding: '20px', marginBottom: '20px' }}
                    onClick={() => { navigate("/braeburn") }}
                >
  <Typography component="h1" p={2} variant="h4"
                        style={theme.typography.luxuryTitle}
                        textAlign={"center"} >                        Braeburn                 </Typography>
                    {/* <img src={bed} alt="Description" style={{ padding: 1, width: "100%", borderRadius: "20px" }} /> */}
                    <img 
                        src={bed} 
                        alt="Description" 
                        style={{ 
                            padding: 1, 
                            width: "100%", 
                            height: "250px", // Adjust this value to your needs
                            borderRadius: "20px",
                            objectFit: "cover",
                            objectPosition: "center" // You can use "top", "bottom", or "center 30%" etc.
                        }} 
                    />
                </Paper>

                <Paper elevation={9} style={{ borderRadius: "20px", padding: '20px', marginBottom: '20px' }}
                    onClick={() => { navigate("/honeycrisp") }}
                >
  <Typography component="h1" p={2} variant="h4"
                        style={theme.typography.luxuryTitle}
                        textAlign={"center"} >                        Honeycrisp                    </Typography>
                    {/* <img src={sky} alt="Description" style={{ padding: 1, width: "100%", borderRadius: "20px" }} /> */}
                    <img 
                        src={images.bed2} 
                        alt="Description" 
                        style={{ 
                            padding: 1, 
                            width: "100%", 
                            height: "250px", // Adjust this value to your needs
                            borderRadius: "20px",
                            objectFit: "cover",
                            objectPosition: "center" // You can use "top", "bottom", or "center 30%" etc.
                        }} 
                    />
                </Paper>


            </Box>
        </ThemeProvider >
        // </ThemeProvider>     */}
    );
};

export default Chalets;
