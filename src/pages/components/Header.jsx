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
import ArrowBackIcon from '@mui/icons-material/ArrowBackIosNew';


import { useNavigate, useLocation } from 'react-router-dom';
import { Paper, Typography } from '@mui/material';

export default function TemporaryDrawer() {
    const [open, setOpen] = useState(false);
    const [chaletsOpen, setChaletsOpen] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();

    const handleBack = () => {
        navigate(-1); // This navigates to the last visited route
    };
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
            <Paper sx={{ mt: 4 }}>
                <Box display="flex" alignItems="center" sx={{ p: 2, mt: 2 }}>
                     <Box sx={{ width: 60, display: 'flex', justifyContent: 'flex-start' }}>
                        {location.pathname !== '/' && (
                            <Box onClick={handleBack} style={{ cursor: 'pointer' }} sx={{ pt: 1,pl: 2 }}>
                                <ArrowBackIcon />
                            </Box>
                        )}
                    </Box>

                     <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
                        <img src={logo} alt="Description" style={{ padding: 1, width: "100%" }} />
                    </Box>

                     <Box sx={{ width: 60 }} />
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
