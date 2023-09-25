import React from 'react';
import Card from './Card';
import Sdata from './Sdata';
import Netflix from './Netflix';
import Amazon from './Amazon';

const favSeries = "Netflix";

//Using if-else 

// const FavS = () =>{
//     if(favSeries === "Netflix"){
//         return <Netflix/>
//     }else{
//         return <Amazon/>
//     }
// };

const App =() =>{
    return(
<>
    <h1 className="heading">List of Top 5 Netflix Series in 2020</h1>
     {/* { <FavS/>}    */}

     { favSeries === "Netflix" ? <Netflix/> : <Amazon/> }
       </> 
    )
    };

    export default App;