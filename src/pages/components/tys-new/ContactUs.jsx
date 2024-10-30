import React from 'react';

import { Box, Typography, Paper } from "@mui/material";

import sky from "../../../images/0.jpg";
import './../App.css'

import theme from '../../../theme';
import { ThemeProvider } from '@mui/material/styles'

import { useNavigate } from 'react-router-dom';

const ContactUs = () => {
    const navigate = useNavigate();

    return (
        <ThemeProvider theme={theme}>
            <Box p={2} mt={1}>
                <img src={sky} alt="Background" className="background-image" />
           

                <Paper elevation={9} style={{ borderRadius: "20px", padding: '20px', marginBottom: '20px' }}
                    onClick={() => { navigate("/gala") }}
                >
                    <Typography p={2} variant="h5" component="h1" style={theme.typography.junge} textAlign={"center"}>
                        Contact Us                    </Typography>
                    <img src={sky} alt="Description" style={{ padding: 1, width: "100%", borderRadius: "20px" }} />
                    <Typography p={2} variant="body1" component="h1" style={theme.typography.junge} textAlign={"center"}>
                    Contact Us   Contact Us Contact Us Contact Us Contact Us Contact Us Contact Us Contact Us Contact Us Contact Us Contact Us Contact Us Contact Us Contact Us Contact Us Contact Us Contact Us Contact Us Contact Us Contact Us                  </Typography>
                </Paper>
 
            </Box>
        </ThemeProvider >
    );
};

export default ContactUs;
