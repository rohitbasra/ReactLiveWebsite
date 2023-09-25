import React from 'react';
import { NavLink } from 'react-router-dom';

const Error = () =>{
    return(
        <div className='error'>
        <h1>404 Error Page!!</h1>
        <p>Sorry, This page doesn't exist😪😪</p>

        <NavLink exact className={({ isActive }) => {
		return isActive ? 'active_class' : '';
		}}
		 to = "/">Go to Homepage</NavLink>
        </div>
    );
};

export default Error;