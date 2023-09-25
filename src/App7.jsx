import React, { useState } from 'react';

const App = ()=>{

    const[name,setName] = useState()
    const[fullName,setFullName] = useState()
    
    const[pass,setPass] = useState()
    const[fullPass,setFullPass] = useState()

    const inputEvent = (event) =>{
        setName(event.target.value);
    }

    const onSubmits = (event) =>{
        event.preventDefault();   // To Prevent from Page refresh
        setFullName(name);
        setFullPass(pass);
    }

    const inputPass = (event) =>{
        setPass(event.target.value);
    }

    return(
        <>
        <div className='main_div'>
        <form onSubmit={onSubmits}>
        <div>
            <h1> Hello {fullName} {fullPass} </h1>
            <input type='text'
             placeholder='Enter Your Name' 
             onChange={inputEvent}
             value={name}/>

            <input type='text'
             placeholder='Enter Your Password' 
             onChange={inputPass}
             value={pass}/>
            <button type='onSubmit'>Submit Me 😉</button>
        </div>
        </form>
        </div>
        </>
    );
};

export default App;