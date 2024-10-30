


import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import theme from '../../../../theme';
import { ThemeProvider } from '@mui/material/styles';
import SwipeableContent from '../SwipeableContent';
import { zero, one, three, two, five } from '../Images';

export default function Honeycrisp() {

    const images = [
        { type: 'image', src: zero, alt: 'Placeholder Image 1' },
        { type: 'image', src: one, alt: 'Placeholder Image 1' },
        { type: 'image', src: three, alt: 'Placeholder Image 1' },
        { type: 'image', src: zero, alt: 'Placeholder Image 1' },
    ];

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ p: 2, overflowX: 'auto', whiteSpace: 'nowrap', display: 'flex', gap: 2 }}>
                <Paper

                >
                    <SwipeableContent contentItems={images} />

                    {/* <img src={image.src} alt={image.description} style={{ width: '100%', borderRadius: '20px' }} />  */}
                </Paper>
            </Box>

        </ThemeProvider>
    );
}
