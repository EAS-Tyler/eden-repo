import React from 'react';
import { IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import chalets from "../../../images/ty/misc/chalets.jpg"
import { Box, Typography, Paper } from "@mui/material";
import sky from "../../../images/0.jpg";
import '../App.css'
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

                >
                    <Typography p={2} 
                    variant="h5" component="h1"
                    style={theme.typography.luxuryTitle}
                     >
                        Contact Us                    </Typography>
                    <img src={chalets} alt="Description" 
                    style={{ padding: 1, width: "100%", borderRadius: "20px" }}
                    
                    />
                    <Typography p={2} variant="body1" component="h1" 
                    // style={theme.typography.junge} textAlign={"center"}
                    style={theme.typography.edenbody}
                    >
                        Email: eve@edengardens.com <br /> <br />
                        Phone: 07484 444444

                    </Typography>


                    <Box sx={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>
                        <IconButton

                            href="https://www.facebook.com/profile.php?id=100083608607483"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ color: 'inherit' }}
                        >
                            <FacebookIcon sx={{ fontSize: 50, color: 'blue' }} />
                        </IconButton>

                        <IconButton
                            href="https://www.instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ color: 'inherit' }}
                        >
                            <InstagramIcon sx={{ fontSize: 50, color: 'red' }} />
                        </IconButton>

                        <IconButton
                            href="https://wa.me/+1234567890"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ color: 'inherit' }}
                        >
                            <WhatsAppIcon sx={{ fontSize: 50, color: 'green' }} />
                        </IconButton>
                    </Box>






                </Paper>



            </Box>
        </ThemeProvider >
    );
};

export default ContactUs;
