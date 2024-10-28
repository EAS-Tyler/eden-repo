import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Tool from './Toolbar';
import { Switch } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { Outlet } from 'react-router-dom';


export default function Layout() {

    return (
        <DndProvider backend={HTML5Backend}>

        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Tool></Tool>
            <Box
                component="main"
                sx={{
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'light'
                            ? theme.palette.background.default
                            : theme.palette.background.default,
                    flexGrow: 1,
                    height: '100vh',
                    overflow: 'auto',
                    margin: '10px',
                }}
            >
                <Toolbar />
                <FormGroup>
                    <FormControlLabel control={<Switch defaultChecked />} label="Admin View" />
                </FormGroup>
                <Outlet/>
            </Box>
        </Box>
        </DndProvider>

    );
}