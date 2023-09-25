import React from 'react';

const Sresult = (props)=>{

    const img= `https://source.unsplash.com/500*400/?${props.name}`;
    
    return(
        <>
            <div>
            <img src={img} alt='Nothing Available'/>
            </div>
        </>
    );

};

export default Sresult;