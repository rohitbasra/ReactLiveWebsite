import React from 'react';
import Card from './Card';
import Sdata from './Sdata';

const Netflix = () =>{
    return(
        <Card
        key={Sdata[1].id}
        imgsrc={Sdata[1].imgsrc}
        sname={Sdata[1].sname}
        category={Sdata[1].category}
        link={Sdata[1].link} />
        ); 
};

export default Netflix;