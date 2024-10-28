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

const Chalets = () => {
    const navigate = useNavigate();

    return (
        <ThemeProvider theme={theme}>
            <Box p={2} mt={1}>
                <img src={sky} alt="Background" className="background-image" />
           

                <Paper elevation={9} style={{ borderRadius: "20px", padding: '20px', marginBottom: '20px' }}
                    onClick={() => { navigate("/gala") }}
                >
                    <Typography p={2} variant="h5" component="h1" style={theme.typography.junge} textAlign={"center"}>
                        Gala                    </Typography>
                    <img src={booknow} alt="Description" style={{ padding: 1, width: "100%", borderRadius: "20px" }} />

                </Paper>

                <Paper elevation={9} style={{ borderRadius: "20px", padding: '20px', marginBottom: '20px' }}
                    onClick={() => { navigate("/braeburn") }}
                >
                    <Typography textAlign={"center"} p={2} variant="h5" component="h1" style={theme.typography.junge}>
                        Braeburn                 </Typography>
                    <img src={booknow} alt="Description" style={{ padding: 1, width: "100%", borderRadius: "20px" }} />

                </Paper>

                <Paper elevation={9} style={{ borderRadius: "20px", padding: '20px', marginBottom: '20px' }}
                    onClick={() => { navigate("/honeycrisp") }}
                >
                    <Typography p={2} textAlign={"center"} variant="h5" component="h1" style={theme.typography.junge}>
                        Honeycrisp                    </Typography>
                    <img src={booknow} alt="Description" style={{ padding: 1, width: "100%", borderRadius: "20px" }} />

                </Paper>

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

export default Chalets;
