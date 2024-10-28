import React from 'react';

import { Box, Typography, Paper } from "@mui/material";
import apple from "../../images/apple.jpg";
import sky from "../../images/0.jpg";
import './App.css'

const LocalInfo = () => {
    return (
        <Box p={4}>
                  <img src={sky} alt="Background" className="background-image" />

            <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
                <img src={apple} alt="Description" style={{ padding: 1, width: "100%" }} />
                <Typography>
                Llansteffan is a two mile drive from Eden Gardens and offers a lovely sandy beach and free public carpark with outlets to purchase chips and ice cream. A ferry crosses the River Tywi to the village of Ferryside and operates daily during school holidays and at weekends (F,Sa,Su) outside these times. Please refer to their website for move information: https://www.carmarthenbayferries.co.uk/ferry/.

</Typography>
            </Paper>
            <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
                <img src={apple} alt="Description" style={{ padding: 1, width: "100%" }} />
                <Typography>
                Llansteffan Castle crowning the top of a well-defined headland overlooks the beach and is open to the public. Entry to the Castle is free.

</Typography>
            </Paper>
            <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
                <img src={apple} alt="Description" style={{ padding: 1, width: "100%" }} />
                <Typography>
                Guests can walk with Wales Coastal Path that passes the rear of Elmrise Park. Further information and route map can be found on the Path website: https://www.walescoastpath.gov.uk/?lang=en

</Typography>
            </Paper>


            <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
                <img src={apple} alt="Description" style={{ padding: 1, width: "100%" }} />
                <Typography>
                Sited on the river Towy Carmarthen is a small town of around 15,000 inhabitants and lays claim to being one of, if not the oldest town, in Wales. It was in 1546 that the two settlements of old and new Carmarthen joined to form a single town. The origins of Carmarthen can be traced back to pre-Roman times when it was known as Moridumum (meaning ‘sea fort’). It has a Roman fort, which is believed to date back to AD75.


</Typography>
            </Paper>       <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
                <img src={apple} alt="Description" style={{ padding: 1, width: "100%" }} />
                <Typography>
                Within walking distance from the Lodges is the International Hostel with a Mexican themed bar offering pool, darts a jukebox and mexican food. Opening hours are subject to seasonal trends, Also within walking distance from the Lodges is the Mansion House restaurant and bar. A short drive into Llansteffan you will find The Inn at the Sticks and The Castle Inn. The Farmers Arms in Llanybri is a country pub serving authentic Thai and British cuisine and a Sunday carvery. Carmarthen offers a wide selection of cafe’s, bars and restaurants.


</Typography>
            </Paper>       <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
                <img src={apple} alt="Description" style={{ padding: 1, width: "100%" }} />
                <Typography>
                The closest shop is approximately 2.6 miles from Eden Gardens is The Village Stores in Llansteffan, This is a small convenience store and is open most days. There is a Spar enroute to Eden Gardens from Carmarthen in Johnstone with major supermarkets located in Carmarthen that include Tesco Extra, Aldi and Morrisons.


</Typography>
            </Paper>
            <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
                <img src={apple} alt="Description" style={{ padding: 1, width: "100%" }} />
                <Typography>
                Indian takeaway food delivery is available from the Cinnamon Indian Cuisine Restaurant through the Just Eat app. Chinese and chip shop food can delivered by Towy’s, please go to their website to book https://www.towyschineseandfish.co.uk/



</Typography>
            </Paper>





        </Box>
    );
};

export default LocalInfo;
