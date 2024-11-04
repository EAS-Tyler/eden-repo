import React, { useState } from 'react';
import { Box, Typography, Paper } from '@mui/material';
import theme from '../../../../theme';
import { ThemeProvider } from '@mui/material/styles';
import SwipeableContent from '../SwipeableContent';
// import { one, two, zero, three } from '../Images';
import images from '../Images';

import sky from "../../../../images/0.jpg";
import ImageCarousel from '../ImageCarousel';

export default function Gala() {

    const [selectedImageIndex, setSelectedImageIndex] = useState(null); // Add state


    const images = [
        { type: 'image', src: images.zero, alt: 'Placeholder Image 1' },
        { type: 'image', src: images.one, alt: 'Placeholder Image 1' },
        { type: 'image', src: images.two, alt: 'Placeholder Image 1' },
        { type: 'image', src: images.three, alt: 'Placeholder Image 1' },
    ];
    const handleImageClick = (index) => {
        setSelectedImageIndex(index);
    };


    // const ImageCarousel = () => {
    //     const images = [
    //         zero,  // replace these with actual image URLs or imports
    //         one,
    //         two,
    //         three,
    //     ];
    // }

    return (
        <ThemeProvider theme={theme}>
            <img src={sky} alt="Background" className="background-image" />
            {/* <Paper elevation={9} style={{ borderRadius: "20px", padding: '20px', marginBottom: '20px' }}>   */}

            <Paper elevation={9} style={{ borderRadius: "20px", padding: '20px', margin: '20px', textAlign: 'center', fontSize: 30, fontWeight: 'bold' }}>

                <Typography component="h1" p={2} variant="h3"
                    style={theme.typography.luxuryTitle}
                    textAlign={"center"} >
                    Gala
                </Typography>
            </Paper>
            <Box sx={{ p: 2, overflowX: 'auto', whiteSpace: 'nowrap', display: 'flex', gap: 2, height: '300px' }}>
                <Paper style={{ borderRadius: "20px" }}>
                    <ImageCarousel />
                    {/* <SwipeableViews enableMouseEvents>
                        {images.map((image, index) => (
                            <div key={index} style={{ width: "100%", textAlign: "center" }}>
                                <img src={image} alt={`slide-${index}`} style={{ maxWidth: "100%", height: "auto" }} />
                            </div>
                        ))}
                    </SwipeableViews> */}

                    {/* <SwipeableContent contentItems={images} /> */}

                </Paper>
            </Box>

            <Paper elevation={9} style={{ borderRadius: "20px", padding: '20px', margin: '20px' }}
                onClick={() => { navigate("/gala") }}
            >
                <Typography p={2} variant="h5" component="h1" style={theme.typography.junge} textAlign={"center"}>
                    About Gala                    </Typography>
                <Typography p={2} variant="body1" component="h1" style={theme.typography.junge} textAlign={"center"}>
                    Gala Lodge is a charming chalet nestled in the heart of Wales. Surrounded by lush greenery and rolling hills, this cozy retreat offers the perfect blend of tranquility and adventure. With its rustic charm and modern amenities, Gala Lodge is the ideal getaway for those seeking a relaxing escape from the hustle and bustle of city life.
                </Typography>
            </Paper>

            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2, p: 2 }}>
                {images.map((image, index) => (
                    <Paper key={index} elevation={9} sx={{ borderRadius: '20px', overflow: 'hidden', cursor: 'pointer' }}>
                        <img src={image.src} alt={image.alt} style={{ width: '100%', borderRadius: '20px' }} onClick={() => handleImageClick(index)} />
                    </Paper>
                ))}
            </Box>

            {selectedImageIndex !== null && (
                <Box sx={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 }}>
                    <img src={images[selectedImageIndex].src} alt={images[selectedImageIndex].alt} style={{ maxWidth: '90%', maxHeight: '90%', borderRadius: '20px' }} />
                    <Box sx={{ position: 'absolute', top: 50, right: 50, cursor: 'pointer' }} onClick={() => setSelectedImageIndex(null)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M19 13H5v-2h14v2z" />
                            <path fill="currentColor" d="M19 13h-4v-2h4v2z" />
                            <path fill="currentColor" d="M19 13h-4v-2h4v2z" />
                        </svg>
                    </Box>
                    <Box sx={{ position: 'absolute', bottom: 50, left: 50, cursor: 'pointer' }} onClick={() => setSelectedImageIndex(selectedImageIndex - 1)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M15.41 16.59L10.83 12l4.58-4.59L14 10l-6 6l6 6l0.59-0.59L10.83 12z" />
                        </svg>
                    </Box>
                    <Box sx={{ position: 'absolute', bottom: 50, right: 50, cursor: 'pointer' }} onClick={() => setSelectedImageIndex(selectedImageIndex + 1)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M8.59 16.59L13.17 12l-4.58-4.59L10 10l6 6l-6 6l0.59-0.59L13.17 12z" />
                        </svg>
                    </Box>
                </Box>
            )}

        </ThemeProvider>
    );
}
