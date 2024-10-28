import React, { useState } from 'react';
import { Box, Typography, Select, MenuItem, TextField } from "@mui/material";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

const BookNow = () => {
    const [selectedChalet, setSelectedChalet] = useState("");
    const [checkInDate, setCheckInDate] = useState(null);
    const [checkOutDate, setCheckOutDate] = useState(null);
    const [isCheckInDatePickerOpen, setIsCheckInDatePickerOpen] = useState(false);
    const [isCheckOutDatePickerOpen, setIsCheckOutDatePickerOpen] = useState(false);

    const handleChaletChange = (event) => {
        setSelectedChalet(event.target.value);
    };

    const handleCheckInBoxClick = () => {
        setIsCheckInDatePickerOpen(true);
    };

    const handleCheckOutBoxClick = () => {
        setIsCheckOutDatePickerOpen(true);
    };

    const handleCheckInDateChange = (newValue) => {
        setCheckInDate(newValue);
        setIsCheckInDatePickerOpen(false);
    };

    const handleCheckOutDateChange = (newValue) => {
        setCheckOutDate(newValue);
        setIsCheckOutDatePickerOpen(false);
    };
// sort colour scheme and logo throughout
// sans-serif BODY font, SERIF HEADING

// get good images, have a gallery
// GALLERY COMPONENT - pics and vr tour?!?!
// booking
// contact us
// use sticky navigation
// book now prominent and using our colours


//only have calendars, open calendar and select chaleet to view dates

// gay language - luxury awaits in west wales 
// blog - recent events, shidd like that
// Social Media Integration: Links to your social media profiles and an Instagram feed to showcase real-time updates and photos.
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Box p={0}>
                <Typography
                variant='h5'
                fontFamily={"serif"}
                p={1}>Luxury awaits in West Wales</Typography>
                <Box sx={{ mb: "8px", display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>
                    {/* check in and check out boxes */}
                    <Box sx={{ mt: 1,display: "flex", flexDirection: "row", alignItems: "center", cursor: 'pointer' }} onClick={handleCheckInBoxClick}>
                        <CalendarMonthIcon sx={{ fontSize: "35px", mr: 1 }} />
                        <Box>
                            <Typography sx={{ p: "2", mr: 3 }}>Check-in</Typography>
                            <Typography sx={{ fontSize: "small" }}>
                                {checkInDate ? checkInDate.toLocaleDateString() : 'Add dates'}
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{ width: "40%",display: "flex", flexDirection: "row", justifyContent: "space-evenly", alignItems: "center", cursor: 'pointer' }} onClick={handleCheckOutBoxClick}>
                        <CalendarMonthIcon sx={{ fontSize: "35px" }} />
                        <Box>
                            <Typography sx={{ p: "2" }}>Check-out</Typography>
                            <Typography sx={{ fontSize: "small" }}>
                                {checkOutDate ? checkOutDate.toLocaleDateString() : 'Add dates'}
                            </Typography>
                        </Box>
                    </Box>
                    {isCheckInDatePickerOpen && (
                        <DatePicker
                            open={isCheckInDatePickerOpen}
                            onClose={() => setIsCheckInDatePickerOpen(false)}
                            label="Add dates"
                            value={checkInDate}
                            onChange={handleCheckInDateChange}
                            renderInput={(params) => <TextField {...params} sx={{ display: 'none' }} />}
                        />
                    )}
                    {isCheckOutDatePickerOpen && (
                        <DatePicker
                            open={isCheckOutDatePickerOpen}
                            onClose={() => setIsCheckOutDatePickerOpen(false)}
                            label="Add dates"
                            value={checkOutDate}
                            onChange={handleCheckOutDateChange}
                            renderInput={(params) => <TextField {...params} sx={{ display: 'none' }} />}
                        />
                    )}
                </Box>

                <Box sx={{ mb: "8px", display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>
                    {/* chalet selector | member discount */}
                    <Box sx={{ width: "40%" }}>
                        <Select
                            value={selectedChalet}
                            onChange={handleChaletChange}
                            displayEmpty
                            sx={{ 
                                fontSize:"small",
                                minWidth: 120,
                                width: "100%",
                                borderRadius: 1,
                                border: '1px solid rgba(0, 0, 0, 0.23)',
                                // padding: '8.5px 14px',
                            }}
                        >
                            <MenuItem value="" disabled>
                                Choose Chalet
                            </MenuItem>
                            <MenuItem value={1}>Gala</MenuItem>
                            <MenuItem value={2}>Honeycrisp</MenuItem>
                            <MenuItem value={3}>Braeburn</MenuItem>
                        </Select>
                    </Box>
                    <Box sx={{ width: "35%", display: "flex", alignItems: "center", border: '1px solid rgba(0, 0, 0, 0.23)', borderRadius: 1, padding: '8.5px 14px' }}>
                        <Typography sx={{  flexGrow: 1, textAlign: 'center' }}
                        fontSize={"small"}>
                            Log in for Member discount
                        </Typography>
                    </Box>
                </Box>
                <Typography sx={{
                    // bgcolor:"violet"
                    
                    // bgcolor:"#ff0000"
                     
                     borderRadius: "10px", border: "1px solid #000000"
                    , display: "flex", flexDirection:"column",justifyContent: "center", textAlign: "center", 
                    height:"40px", mt:"15px"
                }}>Book now</Typography>
             
            </Box>
        </LocalizationProvider>
    );
};

export default BookNow;
// import React, { useState } from 'react';
// import { Box, Typography, Select, MenuItem, TextField } from "@mui/material";
// import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
// import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

// const BookNow = () => {
//     const [selectedChalet, setSelectedChalet] = useState("");
//     const [checkInDate, setCheckInDate] = useState(null);
//     const [checkOutDate, setCheckOutDate] = useState(null);
//     const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

//     const handleChaletChange = (event) => {
//         setSelectedChalet(event.target.value);
//     };

//     const handleBoxClick = () => {
//         setIsDatePickerOpen(true);
//     };

//     const handleDateChangeOut = (newValue) => {
//         console.log(newValue)

//         setCheckOutDate(newValue);
//         setIsDatePickerOpen(false);
//     };

//     const handleDateChangeIn = (newValue) => {
//         console.log(newValue)
//         setCheckInDate(newValue);
//         setIsDatePickerOpen(false);
//     };

//     return (
//         <LocalizationProvider dateAdapter={AdapterDateFns}>
//             <Box>
//                 <Typography>When?</Typography>
//                 <Box sx={{ mb: "8px", display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>
//                     {/* check in and check out boxes */}
                  
//                     <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", alignItems: "center" }}>
//                         <CalendarMonthIcon sx={{ fontSize: "35px" }} />
//                         <Box onClick={handleBoxClick} sx={{ cursor: 'pointer' }}>
//                             <Typography sx={{ p: "2" }}>Check-in</Typography>
//                             <Typography sx={{ fontSize: "small" }}>
//                                 {checkInDate ? checkInDate.toLocaleDateString() : 'Add dates'}
//                             </Typography>
//                         </Box>
//                         {isDatePickerOpen && (
//                             <DatePicker
//                                 open={isDatePickerOpen}
//                                 onClose={() => setIsDatePickerOpen(false)}
//                                 label="Add dates"
//                                 value={checkInDate}
//                                 onChange={handleDateChangeIn}
//                                 renderInput={(params) => <TextField {...params} sx={{ display: 'none' }} />}
//                             />
//                         )}
//                     </Box>

//                     <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", alignItems: "center" }}>
//                         <CalendarMonthIcon sx={{ fontSize: "35px" }} />
//                         <Box onClick={handleBoxClick} sx={{ cursor: 'pointer' }}>
//                             <Typography sx={{ p: "2" }}>Check-out</Typography>
//                             <Typography sx={{ fontSize: "small" }}>
//                                 {checkOutDate ? checkOutDate.toLocaleDateString() : 'Add dates'}
//                             </Typography>
//                         </Box>
//                         {isDatePickerOpen && (
//                             <DatePicker
//                                 open={isDatePickerOpen}
//                                 onClose={() => setIsDatePickerOpen(false)}
//                                 label="Add dates"
//                                 value={checkOutDate}
//                                 onChange={handleDateChangeOut}
//                                 renderInput={(params) => <TextField {...params} sx={{ display: 'none' }} />}
//                             />
//                         )}
//                     </Box>
//                 </Box>

//                 <Box sx={{ mb: "8px", display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>
//                     {/* chalet selector | member discount */}
//                     <Box>
//                         {/* <Typography>Select Chalet</Typography> */}
//                         <Select
//                             value={selectedChalet}
//                             onChange={handleChaletChange}
//                             displayEmpty
//                             sx={{ 
//                                 minWidth: 120,
//                                 width:"50%" 
                           
//                             }}
//                         >
//                             <MenuItem value="" disabled>
//                                 Choose Chalet
//                             </MenuItem>
//                             <MenuItem value={1}>Gala</MenuItem>
//                             <MenuItem value={2}>Honeycrisp</MenuItem>
//                             <MenuItem value={3}>Braeburn</MenuItem>
//                         </Select>
//                     </Box>
//                     <Typography
//                     sx={{ display:"flex", width:"50%", flexDirection:"column", justifyContent:"space-evenly", border:"black", borderBlockColor:"black"}}
//                     variant='body2'
//                     > Log in for Member discount</Typography>
//                 </Box>

//                 <Typography sx={{
//                     bgcolor: "green", borderRadius: "10px"
//                     , display: "flex", flexDirection:"column",justifyContent: "center", textAlign: "center",
//                     height:"40px", mt:"15px"
//                 }}>Book now</Typography>
//             </Box>
//         </LocalizationProvider>
//     );
// };

// export default BookNow;
