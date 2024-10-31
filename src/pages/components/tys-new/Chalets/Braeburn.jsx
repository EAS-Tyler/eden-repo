import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import theme from '../../../../theme';
import { ThemeProvider } from '@mui/material/styles';
import SwipeableContent from '../SwipeableContent';
import { one, two, zero, three } from '../Images';
import sky from "../../../../images/0.jpg";


export default function Braeburn() {
   
    const images = [
        { type: 'image', src: zero , alt: 'Placeholder Image 1' },
        { type: 'image', src: one , alt: 'Placeholder Image 1' },
        { type: 'image', src: two , alt: 'Placeholder Image 1' },
        { type: 'image', src: three , alt: 'Placeholder Image 1' },
    ]; 

    return (
        <ThemeProvider theme={theme}>
            <img src={sky} alt="Background" className="background-image" />

            <Box sx={{ p: 2, overflowX: 'auto', whiteSpace: 'nowrap', display: 'flex', gap: 2 }}>
                     <Paper
                        // key={index}
                        elevation={9}
                        // sx={{
                        //     borderRadius: '20px',
                        //     overflow: 'hidden',
                        //     minWidth: 300, // Set a minimum width for each card
                        //     maxWidth: 400,
                        //     textAlign: 'center',
                        //     display: 'inline-block',
                        // }}
                    >
                            <SwipeableContent contentItems={images} />

                        {/* <Typography variant="h5" component="h2" style={theme.typography.junge} gutterBottom>
                            {image.description}
                        </Typography>
                        <img src={image.src} alt={image.description} style={{ width: '100%', borderRadius: '20px' }} /> */}
                    </Paper>
             </Box>
            {/* <Box p={2} mt={1}>
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
            </Box> */}
        </ThemeProvider>
    );
}
