// var React = require("react");
import React from "react";
// var ReactDom = require("react-dom");
import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter} from 'react-router-dom';
// import "./Website.css";
// import "./Router.css";
// import { createRoot } from 'react-dom/client';
// import "./ToDoLists.css";
// import Axios from "./Axios";
// import "./StateWiseData/Statewise.css";
// import Countdown from "./Countdown";
// import ToDoLists from "./ToDoLists";
// import App10 from "./App10";
// import Accordion from "./Components/Accordion/Accordion";
// import App11 from "./App11";
// import "./Keep.css";




// ReactDOM.render(<h1>Hello World!!</h1> , document.getElementById('root'));

// ReactDOM.render(React.createElement("h1", null, "Hello World1") , document.getElementById('root'));

// var h1 = document.createElement("h1");
// h1.innerHTML = "Hello World2";
// document.getElementById("root").appendChild(h1);


// How to return multiple elements using render()

// Using div
// ReactDOM.render(
//     <div>
//     <h1>Hello World</h1>
//     <p>Let's Start Coding</p>
//     </div>,
//     document.getElementById("root")
// );

// Using array of elements
// ReactDOM.render(
//     [
//     <h1>Hello World</h1>,
//     <p>Let's Start Coding</p>
//     ],
//     document.getElementById("root")
// );

// Using React.Fragment  
// ReactDOM.render(
//     <React.Fragment>
//     <h1>Hello World</h1>
//     <p>Let's Start Coding</p>
//     </React.Fragment>,
//     document.getElementById("root")
// );

// (In place of <React.Fragment> we can simply pass <> and </> in the end)
// ReactDOM.render(
//     <>
//     <h1>Hello World</h1>
//     <p>Let's Start Coding</p>
//     </>,
//     document.getElementById("root")
// );

// Challenge

// ReactDOM.render(
//     <>
//         <h1>Rohit's WebSeries Pick</h1>
//         <p>List of Top 5 WebSeries are:</p>
//         <ol>
//             <li>FRIENDS</li>
//             <li>How I Met Your Mother</li>
//             <li>Asur</li>
//             <li>The Night Manager</li>
//             <li>Mismatched</li>
//         </ol>
//     </>,
//     document.getElementById("root")
// );

// const flName = "Rohit Basra";

// ReactDOM.render(
// <>
//     <h1> My Name is {flName} </h1>
//     <p> My lucky Number is {3*3} </p>
//     </>,
//     document.getElementById("root")
// );

// Using Template literals (``)

// const fname ="Rohit";
// const lname ="Basra";

// ReactDOM.render(
//     <>
//         <h1> {`My Name is ${fname} ${lname}`} </h1>
//         <p> My lucky Number is {3*3} </p>
//         </>,
//         document.getElementById("root")
//     );


// Challenge 2

// const name = "Rohit";
// const currDate = new Date().toLocaleDateString();
// const currTime = new Date().toLocaleTimeString();

// ReactDOM.render(
//     <>
//         <h1>My name is {name} </h1>
//         <p>Today's Date is = {currDate}</p>
//         <p>Current Time is = {currTime} </p>
//     </>, 
//     document.getElementById("root")
// );

// const name ="Rohit";
// const img1 ="https://picsum.photos/200/300";
// const img2 ="https://picsum.photos/250/300";
// const img3 ="https://picsum.photos/300/300";
// const link ="https://www.thapatechnical.com/"

// ReactDOM.render(
//     <>
//         <h1 contentEditable = "true">My name is {name}</h1>
//         <img src = {img1}  />
//         <img src = {img2}  />
//         <a href= {link} target="_blank">
//         <img src = {img3}  />
//         </a>
//     </>,
//     document.getElementById('root')
// );

// .heading{
// color: #fa9191;
// text-align: center;
// font-weight: bold;
// text-transform: capitalize;
// margin: 50px 0px;
// text-shadow: 0px 2px 4px #ffe9c5;
// font-family: 'Josefin Sans';

// }

// const name ="Rohit";
// const img1 ="https://picsum.photos/200/300";
// const img2 ="https://picsum.photos/250/300";
// const img3 ="https://picsum.photos/300/300";
// const link ="https://www.thapatechnical.com/"

// //Inline CSS
// const heading = {

//     color: '#fa9191',
//     textAlign : 'center',
//     fontWeight: 'bold',
//     textTransform: 'capitalize',
//     margin: '50px 0px',
//     textShadow: '0px 2px 4px #ffe9c5',
//     fontFamily: 'Josefin Sans'
// };

// ReactDOM.render(
//     <>
//         <h1 style ={heading}>My name is {name}</h1>
//         <div className="img_div">
//         <img src = {img1}  />
//         <img src = {img2}  />
//         <a href= {link} target="_blank">
//         <img src = {img3}  />
//         </a>
//         </div>
//     </>,
//     document.getElementById('root')
// );

// Mini Project-1

// ReactDOM.render(
//     <App />,document.getElementById('root')
// );


// Introduction to Components

// ReactDOM.render(
//     <App />,
//     document.getElementById('root')
// );

// ES6 Import/Export Modules

// ReactDOM.render(
//     <>
//         <ol>
//             <li>Rohit</li>
//             <li>{youtuber}</li>
//             <li>{favprog}</li>
//             <li>{myName()}</li>
//         </ol>
//     </>,
//     document.getElementById('root')
// );

// Calculator in React JS

// ReactDOM.render(
//  <App /> ,document.getElementById('root')
// );

// Netflix Project


ReactDOM.render(
<BrowserRouter>
<App/>
</BrowserRouter>,
 document.getElementById('root'));    

// const container = document.getElementById('root');

// const root = createRoot(container)

// root.render(<App/>);


// Spread Operator

//1st case
// const fullname = ["Rohit" ,"Basra"];

// const biodata = [1,21,"male",...fullname];

// console.log(fullname);
// console.log(biodata);

//2nd case

// let racinggames = ["NFS","Asphalt","Burnout"];
// let shootinggames = ["COD","Freefire","BGMI"];

// let games = [...racinggames,...shootinggames];

// console.log(games);

//3rd case

// const[first,...remaining] = shootinggames;

// console.log(first);
// console.log(...remaining);

//4th case

// const fullname = {
//     fname: "Rohit",
//     lname:"Basra"
// };

// const biodata ={
//     id:1,
//     ...fullname,
//     age:21,
//     gender:"male"
// };

// console.log(biodata);