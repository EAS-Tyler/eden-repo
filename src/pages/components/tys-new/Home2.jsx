import React from 'react';

import { Box, Typography, Paper } from "@mui/material";
import apple from "../../../images/apple.jpg";
import sky from "../../../images/0.jpg";
import '../App.css'
import theme from '../../../theme';
import { ThemeProvider } from '@mui/material/styles'
import { useNavigate } from 'react-router-dom';
import patio from "../../../images/ty/brae/patio.jpg"
import gnomes from "../../../images/ty/misc/gnomes.jpg"
import images from "./Images"

const Home2 = () => {
    const navigate = useNavigate();

    return (
        <ThemeProvider theme={theme}>
            <Box p={2} mt={1}>
                <img src={sky} alt="Background" className="background-image" />

                <Paper elevation={9}
                    style={theme.paper.item}
                    onClick={() => { navigate("/chalets") }}
                >
                    <Typography style={theme.typography.luxuryTitle} >
                        Our Lodges                    </Typography>
                    <img
                        src={patio}
                        alt="Description"
                        style={theme.img.boxitem}
                    />
                </Paper>
                <Paper elevation={9}

                    style={theme.paper.item}
                    onClick={() => { navigate("/contact") }}
                >
                    <Typography p={2}
                        style={theme.typography.luxuryTitle}
                    >
                        Contact Us                    </Typography>
                    <img
                        src={apple}
                        alt="Description"
                        style={theme.img.boxitem}

                    />
                </Paper>
                <Paper elevation={9}
                    style={theme.paper.item}
                    onClick={() => { navigate("/localinfo") }}
                >
                    <Typography p={2}
                        style={theme.typography.luxuryTitle}
                    >
                        Local Info                    </Typography>
                    <img
                        src={gnomes}
                        alt="Description"
                        style={theme.img.boxitem}
                    />
                </Paper>
            </Box>
        </ThemeProvider >
    );
};

export default Home2;
