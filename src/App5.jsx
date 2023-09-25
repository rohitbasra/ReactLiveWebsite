import React, { useState } from 'react';

const App = () =>{

    let currTime = new Date().toLocaleTimeString();

    const[cTime,setCtime] = useState(currTime)

    const UpdateTime = () =>{
        currTime = new Date().toLocaleTimeString();
        setCtime(currTime);
    }
    setInterval(UpdateTime,1000);

    return(
        <>
        <h1 className='heading_style'>{cTime}</h1>
        {/* <button className='button1' onClick={UpdateTime}>Get Time</button> */}
        </>
    );
};

export default App;