// location page

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { getAccommodation } from '../../services/location.service';
import { useParams } from 'react-router-dom';
import { Grid, Card, CardContent, Typography, CardActions, Button } from '@mui/material';

const Location = () => {
    const [accommodations, setAccommodations] = useState([{ id: 1, name: 'Accommodation 1' }, { id: 2, name: 'Accommodation 2'}]);
    // useParams
    const { location: locationId } = useParams();

    // useEffect(() => {
    //     getLocations(region).then((data) => {
    //         setLocations(data);
    //     });
    // }, []);

    return (
<div>
<h1 style={{ textAlign: 'center', margin: '20px 0' }}>Accommodation</h1>
<Grid container spacing={2} justifyContent="center">
    {accommodations.map((accommodation) => (
        <Grid xs={12} sm={6} md={4} key={accommodation.id}>
            <Card style={{ height: '200px', width: '100%', margin: '10px', backgroundImage: 'linear-gradient(to bottom, rgba(255,255,255,1),rgba(255,255,255,.8), rgba(0,0,0,0)), url(https://l.icdbcdn.com/oh/60907f50-c4d6-4044-9422-b536a7fdabfa.jpg?w=2080)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <CardContent>
                    <Typography variant="h5" component="h2">
                        {accommodation.name}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button component={Link} to={`/location/${accommodation.id}`} size="small">
                        Learn More
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    ))}
</Grid>
</div>
    );
}



export default Location;
