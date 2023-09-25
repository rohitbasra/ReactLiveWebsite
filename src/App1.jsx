import React from 'react';
import {add,sub,mul,div} from "./Calc";

function App(){
    return(
        <>
        <ol>
            <li>Sum of two no is {add(40,4)}</li>
            <li>Sub of two no is {sub(30,3)}</li>
            <li>Mul of two no is {mul(10,3)}</li>
            <li>Div of two no is {div(10,3)}</li>
        </ol>
    </>
    );
}

export default App;