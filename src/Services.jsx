import React, { useEffect } from 'react';

const Services = (props) =>{

    useEffect(()=>{
        document.addEventListener("click",handleClick);

        return function cleanup(){
            document.removeEventListener("click",handleClick);
        }
    });

    function handleClick(){
        console.log("I called Service useEffect Again");
    }
    return(
    <div className='services'>
    <h1>Hello, I am {props.name} Page</h1>
    <p>Welcome to my World...</p>
    </div>
    );
};

export default Services;