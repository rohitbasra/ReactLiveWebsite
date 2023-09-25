import React from 'react';

function App(){

let currTime = new Date(2023,6,23,19);
currTime = currTime.getHours();
let text = "";
const cssStyle ={};

if(currTime>=1 && currTime<=11){
    text = "Good Morning";
    cssStyle.color='green';
}else
 if(currTime>=12&& currTime<=19){
    text = "Good Evening";
    cssStyle.color='orange';
 }
else{
    text = "Good Night";
    cssStyle.color='black';
}

return(
    <>
    <div>
    <h1>Hello Sir, <span style={cssStyle}>{text}</span></h1>
    </div>
    </>
)
}

export default App;