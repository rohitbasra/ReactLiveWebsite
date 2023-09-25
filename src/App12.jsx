import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

const App = () =>{

const[value,setValue] = useState(0);

const Increment = () =>{
setValue(value+1);
}
 
const Decrement = () =>{
    if(value>0){
        setValue(value-1);
    }else{
        alert("It has reached its minimum Value...")
        setValue(0);
    }
}

    return(
        <>
            <div className='main_div'>
            <div className='center_div'>
                <h1>{value}</h1>
                <div className='btn_div'>
                <Tooltip title="Add">
                <IconButton onClick={Increment}>
                    <AddIcon/>
                </IconButton>
                </Tooltip>

                <Tooltip title="Delete">
                <IconButton onClick={Decrement}>
                    <RemoveIcon/>
                </IconButton>
                </Tooltip>
            </div>
            </div>
            </div>
        </>
    );
}

export default App;