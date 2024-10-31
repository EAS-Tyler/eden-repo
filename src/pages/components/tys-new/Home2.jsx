import React from 'react';

import { Box, Typography, Paper } from "@mui/material";
import apple from "../../../images/apple.jpg";
import sky from "../../../images/0.jpg";
import './../App.css'
import booknow from "../EDENEDEN.jpg"
import theme from '../../../theme';
import { ThemeProvider } from '@mui/material/styles'
// import BookNow from '../../BookNow';
import { useNavigate } from 'react-router-dom';
import chaletss from "../../../images/ty/misc/chalets.jpg"
import beach from "../../../images/ty/misc/beach.jpg"
import patio from "../../../images/ty/brae/patio.jpg"
import gnomes from "../../../images/ty/misc/gnomes.jpg"




const Home2 = () => {
    const navigate = useNavigate();

    return (
        <ThemeProvider theme={theme}>
            <Box p={2} mt={1}>
                <img src={sky} alt="Background" className="background-image" />

                <Paper elevation={9} style={{ borderRadius: "20px", padding: '20px', marginBottom: '20px' }}
                    onClick={() => { navigate("/chalets") }}
                >
                    <Typography p={2} variant="h4"
                        style={theme.typography.luxuryTitle}
                        component="h1"
                        textAlign={"center"}
                    >
                        Our Chalets                    </Typography>
                    {/* <img src={patio} alt="Description" style={{ padding: 1, width: "100%", borderRadius: "20px" }} /> */}
                    <img 
                        src={patio} 
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
                    onClick={() => { navigate("/contact") }}
                >
                    <Typography p={2}
                        style={theme.typography.luxuryTitle}
                        variant="h4"
                        component="h1"
                        textAlign={"center"}
                    >
                        Contact Us                    </Typography>
                    {/* <img src={apple} alt="Description" style={{ padding: 1, width: "100%", borderRadius: "20px" }} /> */}
             
                    <img 
                        src={apple} 
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
                    onClick={() => { navigate("/localinfo") }}
                >
                    <Typography p={2}
                        style={theme.typography.luxuryTitle}
                        variant="h4"
                        component="h1"
                        textAlign={"center"}
                    >
                        Local Info                    </Typography>

                    {/* <img src={gnomes} alt="Description" style={{ padding: 1, width: "100%", borderRadius: "20px" }} /> */}
                    <img 
                        src={gnomes} 
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
    );
};

export default Home2;
