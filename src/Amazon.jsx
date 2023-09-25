import React from 'react';
import Card from './Card';
import Sdata from './Sdata';

const Amazon = () =>{
    return(
        <Card
        key={Sdata[3].id}
        imgsrc={Sdata[3].imgsrc}
        sname={Sdata[3].sname}
        category={Sdata[3].category}
        link={Sdata[3].link} />
        ); 
};

export default Amazon;