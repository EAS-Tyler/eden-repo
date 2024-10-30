 
import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import theme from '../../../../theme';
import { ThemeProvider } from '@mui/material/styles';
import SwipeableContent from '../SwipeableContent';
import { zero } from '../Images';

export default function Braeburn() {
   
    const images = [
        { type: 'image', src: zero , alt: 'Placeholder Image 1' },
        { type: 'image', src: zero , alt: 'Placeholder Image 1' },
        { type: 'image', src: zero , alt: 'Placeholder Image 1' },
        { type: 'image', src: zero , alt: 'Placeholder Image 1' },
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
