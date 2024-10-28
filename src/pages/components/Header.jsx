import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

import logo from './logo.svg';
import logoblack from './logo-black.svg'

import CottageIcon from '@mui/icons-material/Cottage'; // Home
import ForestIcon from '@mui/icons-material/Forest'; // Background
import HolidayVillageIcon from '@mui/icons-material/HolidayVillage'; // Chalets
import PoolIcon from '@mui/icons-material/Pool'; // Facilities
import InfoIcon from '@mui/icons-material/Info'; // Local information
import ReviewsIcon from '@mui/icons-material/Reviews'; // Reviews
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'; // Checkout

import { useNavigate } from 'react-router-dom';
import { Paper, Typography } from '@mui/material';

export default function TemporaryDrawer() {
    const [open, setOpen] = useState(false);
    const [chaletsOpen, setChaletsOpen] = useState(false);

    const navigate = useNavigate();

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const handleChaletsClick = () => {
        setChaletsOpen(!chaletsOpen);
    };

    const handleNavigation = (path) => {
        navigate(path);
        setOpen(false); 
    };

    const iconMap = {
        'Home': <CottageIcon />,
        // 'Background': <ForestIcon />,  
        'Chalets': <HolidayVillageIcon />,
        // 'Facilities': <PoolIcon />,
        'Local information': <InfoIcon />,
        'Reviews': <ReviewsIcon />,
    };

    // useEffect(() => {
    //     setChaletsOpen(false)
    //     // getLocations(region).then((data) => {
    //     //     setLocations(data);
    //     // });
    // }, []);



    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation">
            <List>
                {Object.entries(iconMap).map(([text, IconComponent]) => (
                    <div key={text}>
                        {text === 'Chalets' ? (
                            <>
                                <ListItem disablePadding onClick={handleChaletsClick}>
                                    <ListItemButton>
                                        <ListItemIcon>{IconComponent}</ListItemIcon>
                                        <ListItemText primary={text} />
                                        {chaletsOpen ? <ExpandLess /> : <ExpandMore />}
                                    </ListItemButton>
                                </ListItem>
                                <Collapse in={chaletsOpen} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                        <ListItem disablePadding onClick={() => handleNavigation('/chalets/information')}>
                                            <ListItemButton sx={{ pl: 4 }}>
                                                <ListItemText primary="Information" />
                                            </ListItemButton>
                                        </ListItem>
                                        <ListItem disablePadding onClick={() => handleNavigation('/chalets/photos')}>
                                            <ListItemButton sx={{ pl: 4 }}>
                                                <ListItemText primary="Photos" />
                                            </ListItemButton>
                                        </ListItem>
                                    </List>
                                </Collapse>
                            </>
                        ) : (
                            <ListItem key={text} disablePadding onClick={() => handleNavigation(`/${text.toLowerCase()}`)}>
                                <ListItemButton>
                                    <ListItemIcon>{IconComponent}</ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        )}
                    </div>
                ))}
            </List>
            <Divider />
            <List>
                <ListItem disablePadding onClick={() => handleNavigation('/checkout')}>
                    <ListItemButton>
                        <ListItemIcon><ShoppingBasketIcon /></ListItemIcon>
                        <ListItemText primary={'Checkout'} />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <div>
            <Paper sx={{ mt: 4}}>
                <Box display="flex" alignItems="center" justifyContent="space-evenly" sx={{ p: 2, mt: 2 }}>
                    <img src={logo} alt="Description" style={{ padding: 1, width: "80%" }} />
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>

                        <MenuIcon onClick={toggleDrawer(true)} 
                        // style={{pt: 10}}
                         sx={{pt:1}} />
                       
                        <Typography variant='menuText' fontWeight={500}
// sx={{font: A}}
                        >Menu</Typography>
                    </Box>
                </Box>
            </Paper>
            <Drawer
                anchor="left"
                open={open}
                onClose={toggleDrawer(false)}
            >
                {DrawerList}
            </Drawer>
        </div>
    );
}


// import React, { useState } from 'react';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import List from '@mui/material/List';
// import MenuIcon from '@mui/icons-material/Menu';
// import Divider from '@mui/material/Divider';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';

// import logo from './logo.svg';
// import logoblack from './logo-black.svg'


// import CottageIcon from '@mui/icons-material/Cottage';// need background
// import ForestIcon from '@mui/icons-material/Forest';
// import HolidayVillageIcon from '@mui/icons-material/HolidayVillage'; // chalets
// import PoolIcon from '@mui/icons-material/Pool'; // facilities
// import InfoIcon from '@mui/icons-material/Info'; // local info
// import ReviewsIcon from '@mui/icons-material/Reviews'; // reviews
// import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'; // checkout

// import { useNavigate } from 'react-router-dom/dist';
// import { Paper, Typography } from '@mui/material';

// export default function TemporaryDrawer() {
//     const [open, setOpen] = useState(false);

//     const navigate = useNavigate()

//     const toggleDrawer = (newOpen) => () => {
//         setOpen(newOpen);
//     };

//     const iconMap = {
//         'Home': <CottageIcon />,
//         'Background': <ForestIcon />,  // You may need to adjust this icon
//         'Chalets': <HolidayVillageIcon />,
//         'Facilities': <PoolIcon />,
//         'Local information': <InfoIcon />,
//         'Reviews': <ReviewsIcon />,
//     };

//     const DrawerList = (
//         <Box sx={{ width: 250, }} role="presentation" onClick={toggleDrawer(false)}>
//             <List>
//                 {Object.entries(iconMap).map(([text, IconComponent]) => (

                    
//                     <ListItem key={text} disablePadding
//                     onClick={() => {
//                         // if (  ){


//                         // } else { 

//                         const page = text.toLowerCase();
//                         navigate(`${page}`)
                    
//                                                 }}
                    
//                     >
//                         <ListItemButton>
//                             <ListItemIcon
                    
//                             >{IconComponent}</ListItemIcon>
//                             <ListItemText primary={text} />
//                         </ListItemButton>
//                     </ListItem>
//                 ))}
//             </List>
//             <Divider />

//             <List>
//                 <ListItem
//                     // key={text} 
//                     disablePadding>
//                     <ListItemButton>
//                         <ListItemIcon>
//                             <ShoppingBasketIcon />
//                         </ListItemIcon>
//                         <ListItemText
//                             primary={'Checkout'}
//                         />
//                     </ListItemButton>
//                 </ListItem>
//             </List>

//         </Box>
//     );

//     return (
//         <div>
//             <Paper>z
//             <Box display="flex" alignItems="center" justifyContent="space-evenly" sx={{ p: 2, mt: 2 }}>
//                 <img src={logo} alt="Description" style={{ padding: 1, width: "80%" }} />
//                 <Box sx={{ display:"flex", flexDirection:"column", alignItems:"center" }} > 
//                 <MenuIcon onClick={toggleDrawer(true)} />
                
//                 <Typography variant='body2'> Menu</Typography>
//                 </Box>
//             </Box>
//             </Paper>
//             <Drawer
//                 anchor="right" 
//                 open={open}
//                 onClose={toggleDrawer(false)}
//             >
//                 {DrawerList}
//             </Drawer>
//         </div>
//     );
// }

