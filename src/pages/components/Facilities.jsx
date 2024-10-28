import { Box, Typography, Paper } from "@mui/material";
import apple from "../../images/apple.jpg";

// CHANGE TI AMENITIES??? 

const Facilities = () => {
    return (
        <Box p={4}>
            <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
                <img src={apple} alt="Description" style={{ padding: 1, width: "100%" }} />
                <Typography>
                    There is a private car park located at the entrance to Eden Garden with one parking spot offered for each Lodge. Please contact us should you require additional parking.

                </Typography>
            </Paper>
            <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
                <img src={apple} alt="Description" style={{ padding: 1, width: "100%" }} />
                <Typography>
                    Outside of the Games Room you will find a dog and boot wash station. The facility is provided so that guests that have visited the beach or have been hiking can rinse away any sand or mud from your dog, clothes and footwear to help keep your Lodge clean. A cold water spray wash is supplied by the tap near the wash station.

                </Typography>
            </Paper>
            <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
                <img src={apple} alt="Description" style={{ padding: 1, width: "100%" }} />
                <Typography>
                    Located adjacent to Gala Lodge is our games room. A great little area to spend leisure time outside of your Lodge, it is equipped with an air hockey table, table football, board games and a small library, please note that the air hockey table is coin operated (accepting 50p and £1 coins) whilst all other facilities are complimentary. A key to gain access to the Games room will be found on the coat hooks as you enter your lodge. We request that guests vacate the games room by 10.30pm and lock the door on leaving.

                </Typography>
            </Paper>
            <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
                <img src={apple} alt="Description" style={{ padding: 1, width: "100%" }} />
                <Typography>
                Inside the games room you will find a washing machine and tumble dryer, both are coin operated and accept 50p and £1 coins. Two complimentary laundry wash tablets are provided and can be found in the under sink cupboard in your lodge. Please carefully follow the instruction card in the laundry area before starting your laundry. A washing line is provided at the rear of each lodge and a bag of clothes pegs can be found in the boiler room.


                </Typography>
            </Paper>
        </Box>
    );
};

export default Facilities;
