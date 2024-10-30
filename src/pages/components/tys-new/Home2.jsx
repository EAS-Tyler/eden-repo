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

                <Paper elevation={9} style={{ borderRadius: "20px", padding: '20px', marginBottom: '20px' }}
                    onClick={() => { navigate("/chalets") }}
                >
                    <Typography p={2} variant="h5" component="h1" style={theme.typography.junge}>
                        Our Chalets                    </Typography>
                    <img src={booknow} alt="Description" style={{ padding: 1, width: "100%", borderRadius: "20px" }} />

                </Paper>


                <Paper elevation={9} style={{ borderRadius: "20px", padding: '20px', marginBottom: '20px' }}
                    onClick={() => { navigate("/contact") }}
                >
                    <Typography p={2} variant="h5" component="h1" style={theme.typography.junge}>
                        Contact Us                    </Typography>
                    <img src={apple} alt="Description" style={{ padding: 1, width: "100%", borderRadius: "20px" }} />
                </Paper>
                <Paper elevation={9} style={{ borderRadius: "20px", padding: '20px', marginBottom: '20px' }}
                    onClick={() => { navigate("/localinfo") }}
                >
                    <Typography p={2} variant="h5" component="h1" style={theme.typography.junge}>
                        Local Info                    </Typography>

                        <img src={apple} alt="Description" style={{ padding: 1, width: "100%", borderRadius: "20px" }} />

                </Paper>


            </Box>
        </ThemeProvider >
    );
};

export default Home2;
