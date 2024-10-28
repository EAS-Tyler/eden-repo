import React from 'react';
import { Box, Typography, Paper } from "@mui/material";
import apple from "../../images/apple.jpg";
import sky from "../../images/0.jpg";
import './App.css';

const Background = () => {
    return (
        <div className="parallax">
            <div className="parallax__layer parallax__layer--back">
                <img src={sky} alt="Background" className="background-image" />
            </div>
            <div className="parallax__layer parallax__layer--base">
                <Box p={4}>
                    <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
                        <img src={apple} alt="Description" style={{ padding: 1, width: "100%" }} />
                        <Typography p={1}>
                            Set on the outskirts of the quiet seaside village of Llansteffan, Eden Garden Luxury Lodges offer our guests an excellent opportunity to base themselves for a relaxing stay in a rural area or to explore the attractions and unspoilt countryside areas of Carmarthenshire and Pembrokeshire. The location provides an ideal opportunity to explore nearby activities that include the National Coastal Path, Llansteffan Beach and Llansteffan Castle.
                        </Typography>
                    </Paper>
                    <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
                        <img src={apple} alt="Description" style={{ padding: 1, width: "100%" }} />
                        <Typography>
                            The location of the lodges historically formed part of the Mansion House Estate and was originally a vegetable and herb walled garden supplying produce to the Estate. In 1972 the land was repurposed as a cooperative site consisting of 105 lodges that are all still present today. Eden Garden forms a private three lodge annex from the other 102 lodges.
                        </Typography>
                    </Paper>
                    <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
                        <img src={apple} alt="Description" style={{ padding: 1, width: "100%" }} />
                        <Typography>
                            Eden Garden was purchased by Mark and Eve in 2022 and the lodges have been fully refurbished into an open plan contemporary style. With guest comfort being a priority, the lodges are provided with a fully equipped kitchen, comfortable lounge area, flat screen smart television as well as high quality bedding to ensure a good night’s rest. Please refer to the specific lodge information page for further information.
                        </Typography>
                    </Paper>
                </Box>
            </div>
        </div>
    );
};

export default Background;

// import React from 'react';

// import { Box, Typography, Paper } from "@mui/material";
// import apple from "../../images/apple.jpg";
// import sky from "../../images/0.jpg";
// import './App.css'

// const Background = () => {
//     return (
//         <Box p={4}>
//                   <img src={sky} alt="Background" className="background-image" />

//             <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px', }}>
//                 <img src={apple} alt="Description" style={{ padding: 1, width: "100%" }} />
//                 <Typography p={1}>
//                     Set on the outskirts of the quiet seaside village of Llansteffan, Eden Garden Luxury Lodges offer our guests an excellent opportunity to base themselves for a relaxing stay in a rural area or to explore the attractions and unspoilt countryside areas of Carmarthenshire and Pembrokeshire. The location provides an ideal opportunity to explore nearby activities that include the National Coastal Path, Llansteffan Beach and Llansteffan Castle.
//                 </Typography>
//             </Paper>
//             <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
//                 <img src={apple} alt="Description" style={{ padding: 1, width: "100%" }} />
//                 <Typography>
//                     The location of the lodges historically formed part of the Mansion House Estate and was originally a vegetable and herb walled garden supplying produce to the Estate. In 1972 the land was repurposed as a cooperative site consisting of 105 lodges that are all still present today. Eden Garden forms a private three lodge annex from the other 102 lodges.
//                 </Typography>
//             </Paper>
//             <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
//                 <img src={apple} alt="Description" style={{ padding: 1, width: "100%" }} />
//                 <Typography>
//                     Eden Garden was purchased by Mark and Eve in 2022 and the lodges have been fully refurbished into an open plan contemporary style. With guest comfort being a priority, the lodges are provided with a fully equipped kitchen, comfortable lounge area, flat screen smart television as well as high quality bedding to ensure a good night’s rest. Please refer to the specific lodge information page for further information.
//                 </Typography>
//             </Paper>
//         </Box>
//     );
// };

// export default Background;
