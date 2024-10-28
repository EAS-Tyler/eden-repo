import { Box, Typography, Paper } from "@mui/material";

const Reviews = () => {
    return (
        <Box p={4}>
                        <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
                     <Typography>stars weve got</Typography>
                        </Paper>

            <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
                <Typography variant="h3" mb={1}>
                    Exeptional                </Typography>
                    <Typography mb={1} variant="body1">
                    date here  - add these reviews from admin page of eden website. admin pages uses apis for google, fb, booking.com to retreive the reviews              </Typography>
                    <Typography  mb={1} variant="h6">
                    big ol desription    - make a review a class, retreive reviews via api to where they can be found (e.g. facebook,booking.com, google maps) to an admin page, where you can update the reviews here            </Typography>
            </Paper>
            <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
                <Typography variant="h3" mb={1}>
                    Exeptional                </Typography>
                    <Typography mb={1} variant="body1">
                    date here                </Typography>
                    <Typography  mb={1} variant="h6">
                    big ol desription    - make a review a class, retreive reviews via api to where they can be found (e.g. facebook,booking.com, google maps) to an admin page, where you can update the reviews here            </Typography>
            </Paper>
            <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
                <Typography variant="h3" mb={1}>
                    Exeptional                </Typography>
                    <Typography mb={1} variant="body1">
                    date here                </Typography>
                    <Typography  mb={1} variant="h6">
                    big ol desription    - make a review a class, retreive reviews via api to where they can be found (e.g. facebook,booking.com, google maps) to an admin page, where you can update the reviews here            </Typography>
            </Paper>
        </Box>
    );
};

export default Reviews;
