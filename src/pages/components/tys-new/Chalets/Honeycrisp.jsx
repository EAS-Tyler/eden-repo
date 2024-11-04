


import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import theme from '../../../../theme';
import { ThemeProvider } from '@mui/material/styles';
import SwipeableContent from '../SwipeableContent';
import images from '../Images';

export default function Honeycrisp() {

    const images = [
        { type: 'image', src: images.zero, alt: 'Placeholder Image 1' },
        { type: 'image', src: images.one, alt: 'Placeholder Image 1' },
        { type: 'image', src: images.three, alt: 'Placeholder Image 1' },
        { type: 'image', src: images.zero, alt: 'Placeholder Image 1' },
    ];

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ p: 2, overflowX: 'auto', whiteSpace: 'nowrap', display: 'flex', gap: 2 }}>
                <Paper
                >
                    <SwipeableContent contentItems={images} />
                </Paper>
            </Box>

        </ThemeProvider>
    );
}
