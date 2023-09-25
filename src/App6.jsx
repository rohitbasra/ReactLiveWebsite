import React, { useState } from 'react';

const App = () =>{

    let purple = "#8e44ad";
    const[bg,setBg] = useState(purple)
    const[name,setName] = useState('Click Me')
    
    const bgChange = () =>{
        let newBg = "#34495e";
        setBg(newBg);
        setName('Ouch!!😜');
    };

    const bgUpdate = () =>{
        setBg(purple);
        setName('Ayyo😉');

    }
    return(
        <>
        <div style={{backgroundColor:bg}}>
            <button onClick={bgChange} onDoubleClick={bgUpdate}>{name}</button>
        </div>
        </>
    );
};

export default App;