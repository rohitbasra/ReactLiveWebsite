import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const User = () => {

    const {fname, lname} = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    console.log(navigate);

    return(
        <>
            <h1>User {fname} {lname} Page</h1>
            <p>My current location is {location.pathname} </p>
            
            {location.pathname === `/user/rohit/basra` ? 
            (
                <button onClick={ ()=> navigate('/')}> Go to Homepage </button>
            ) :null}
        </>
    );
 
};

export default User;