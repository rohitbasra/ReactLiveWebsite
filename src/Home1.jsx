import React from 'react';
import web from "../src/Images/home.jpeg";
import { NavLink } from 'react-router-dom';
import Common from './Common';

const Home1 = () => {
    return (
        <>
            <Common 
                name="Grow your business with"
                visit="/services1"
                btname="Get Started"
                imgsrc={web}
            />
            
        </>
    );
};
export default Home1;