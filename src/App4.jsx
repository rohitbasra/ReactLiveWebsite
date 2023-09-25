import React, { useState } from 'react';

const App = () =>{
    const state = useState();

// useState(currentvalue , UpdatedValue) = useState(InitialValue)    

const [count,setCount] = useState(0);

const IncNum = () =>{
    setCount(count + 1);
    // console.log("clicked "+ count++);
}
    return(
        <>
            <h1>{count}</h1>
            <button className='button1' onClick={IncNum}>Click Me</button>
        </>
    );
};

export default App;