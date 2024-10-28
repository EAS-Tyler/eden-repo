// about page
import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
        <h1>About</h1>
        <p>This is the about page</p>
        <Link to="/">Go back home</Link>
        </div>
    );
    }
    
    export default About;
    