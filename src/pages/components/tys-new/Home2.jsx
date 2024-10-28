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

const Home2 = () => {
    const navigate = useNavigate();

    return (
        <ThemeProvider theme={theme}>
            <Box p={2} mt={1}>
                <img src={sky} alt="Background" className="background-image" />
                {/* <Paper elevation={9} style={{ borderRadius: "20px", padding: '20px', marginBottom: '20px' }}>

<Typography> Our Chalets</Typography>
</Paper> */}
                {/* <img src={sky} alt="Background" className="background-image" /> */}
                {/* <Paper elevation={9} style={{ borderRadius: "20px", padding: '20px', marginBottom: '20px' }}> */}

                {/* <BookNow></BookNow> */}
                {/* </Paper> */}

                {/* THIS PAPER ON CLICK GOES TO RESPECTVE COMPONENT */}






                <Paper elevation={9} style={{ borderRadius: "20px", padding: '20px', marginBottom: '20px' }}
                onClick={() => { navigate("/chalets") }}
                >
                    <Typography p={2} variant="h5" component="h1" style={theme.typography.junge}>
                        Our Chalets                    </Typography>
                    <img src={booknow} alt="Description" style={{ padding: 1, width: "100%", borderRadius: "20px" }} />

                </Paper>

                {/* 
                <Paper elevation={9} style={{ borderRadius: "20px", padding: '20px', marginBottom: '20px' }}>
                    <img src={booknow} alt="Description" style={{ padding: 1, width: "100%", borderRadius: "20px" }} />
                    <Typography p={2} variant="h5" component="h1" style={theme.typography.junge}>
                        Relax in Luxury Looking for a luxurious and relaxing holiday? Look no further than Eden Gardens. Our beautiful holiday homes...
                    </Typography>
                    <Typography style={theme.typography.cinzel}> */}
                {/* Relax in Luxury Looking for a luxurious and relaxing holiday? Look no further than Eden Gardens. Our beautiful holiday homes...              </Typography> */}
                {/* </Paper> */}
                <Paper elevation={9} style={{ borderRadius: "20px", padding: '20px', marginBottom: '20px' }}>
                    <Typography p={2} variant="h5" component="h1" style={theme.typography.junge}>
                        Contact Us                    </Typography>
                    <img src={apple} alt="Description" style={{ padding: 1, width: "100%", borderRadius: "20px" }} />

                    {/* <Typography style={theme.typography.cinzel}> */}
                    {/* Relax in Luxury Looking for a luxurious and relaxing holiday? Look no further than Eden Gardens. Our beautiful holiday homes...              </Typography> */}
                </Paper>

                {/* <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
                    <img src={apple} alt="Description" style={{ padding: 1, width: "100%" }} />
                    <Typography>
                        Eden Garden was purchased by Mark and Eve in 2022 and the lodges have been fully refurbished into an open plan contemporary style. With guest comfort being a priority, the lodges are provided with a fully equipped kitchen, comfortable lounge area, flat screen smart television as well as high quality bedding to ensure a good night’s rest. Please refer to the specific lodge information page for further information.
                    </Typography>
                </Paper> */}
                <Paper elevation={9} style={{ borderRadius: "20px", padding: '20px', marginBottom: '20px' }}>
                    <div className="container">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3113.3963665895963!2d-4.37205062296596!3d51.79549808961562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486eddfe5ca70317%3A0x56c54bed3269a2e1!2sEden%20Gardens%20Luxury%20Lodges!5e1!3m2!1sen!2suk!4v1687445463021!5m2!1sen!2suk"
                            width="flex"
                            height="300px"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            style={{ borderRadius: '5px' }}
                        ></iframe>
                    </div>
                </Paper>

            </Box>
        </ThemeProvider >
        // </ThemeProvider>     */}
    );
};

export default Home2;
