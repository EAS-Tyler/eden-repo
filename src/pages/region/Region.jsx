// select region page

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { getLocations } from '../../services/location.service';
import { useParams } from 'react-router-dom';
import { Grid, Card, CardContent, Typography, CardActions, Button } from '@mui/material';

const Region = () => {
    const [locations, setLocations] = useState([{ id: 1, name: 'Location 1' }, { id: 2, name: 'Location 2'}]);
    // useParams
    const { region } = useParams();

    // useEffect(() => {
    //     getLocations(region).then((data) => {
    //         setLocations(data);
    //     });
    // }, []);

    return (
        // <div>
        //     <h1>Locations</h1>
        //     <ul>
        //         {locations.map((location) => (
        //             <li key={location.id}>
        //                 <Link to={`/location/${location.id}`}>
        //                     {location.name}
        //                 </Link>
        //             </li>
        //         ))}
        //     </ul>
        // </div>

<div>
<h1 style={{ textAlign: 'center', margin: '20px 0' }}>Locations</h1>
<Grid container spacing={2} justifyContent="center">
    {locations.map((location) => (
        <Grid xs={12} sm={6} md={4} key={location.id}>
            <Card style={{ height: '200px', width: '100%', margin: '10px', backgroundImage: 'linear-gradient(to bottom, rgba(255,255,255,1),rgba(255,255,255,.8), rgba(0,0,0,0)), url(https://l.icdbcdn.com/oh/60907f50-c4d6-4044-9422-b536a7fdabfa.jpg?w=2080)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <CardContent>
                    <Typography variant="h5" component="h2">
                        {location.name}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button component={Link} to={`/location/${location.id}`} size="small">
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

export default Region;
