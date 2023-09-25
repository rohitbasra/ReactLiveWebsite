import React from 'react';
import Common from './Common';
import web from "./Images/tools.jpeg";

const About1 = () =>{
    return(
        <>
            <Common 
                name="Welcome to About Page"
                visit="/contact1"
                btname="Contact Now"
                imgsrc={web}
            />
        </>
    );
};
export default About1;