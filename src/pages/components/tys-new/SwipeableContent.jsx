import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { Typography, Box, useTheme } from '@mui/material';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const SwipeableContent = ({ contentItems }) => {
  const theme = useTheme();
  const [index, setIndex] = React.useState(0);

  const handleChangeIndex = (newIndex) => {
    setIndex(newIndex);
  };

  return (
    <Box sx={{ maxWidth: 600, margin: 'auto', mt: 4 }}>
      <AutoPlaySwipeableViews
        index={index}
        onChangeIndex={handleChangeIndex}
        enableMouseEvents
        style={{ borderRadius: '8px', overflow: 'hidden' }}
      >
        {contentItems.map((item, idx) => (
          <Box
            key={idx}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: 300,
              bgcolor: theme.palette.background.default,
              px: 2,
              py: 4,
              color: theme.palette.text.primary,
            }}
          >
            {item.type === 'image' ? (
              <img
                src={item.src}
                alt={item.alt || 'Content Image'}
                style={{ maxHeight: '100%', maxWidth: '100%', borderRadius: '8px' }}
              />
            ) : (
              <Typography variant="h6" align="center">
                {item.text}
              </Typography>
            )}
          </Box>
        ))}
      </AutoPlaySwipeableViews>
    </Box>
  );
};

export default SwipeableContent;
