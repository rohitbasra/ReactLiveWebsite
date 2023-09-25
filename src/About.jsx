import React from 'react';

const About = (props) =>{
    return(
    <div className='about'> 
    <h1>Hello, I am {props.name} Page</h1>
    <p>Welcome to my World...</p>
    </div>
    );
};

export default About;