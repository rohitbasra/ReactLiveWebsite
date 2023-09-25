import React from 'react';
import { Route, Routes } from "react-router-dom";
import About from './About';
import Contact from './Contact';
import Error from './Error';
import Services from './Services';
import Menu from './Menu';
import User from './User';
import Search from './Search';

const App = () =>{

    const Name = () =>{
        return <h1>Hello, I am Name Page</h1>;
    };

    return(
        <>
        <Menu/>
            <Routes>
                <Route exact path='/' element={<About name= "About"/>}/>
                <Route exact path='/services' element={<Services name="Services"/>}/>
                <Route exact path='/search' element={<Search/>}/>
                <Route exact path='/contact' element={<Contact/>}/>
                <Route path='/contact/Name' element={Name}/>
                <Route path='/user/:fname/:lname' element={<User/>}/>
                   // Used in Case of Invalid Path
                <Route path= '/*' element={<Error/>}/>
            </Routes>
        </>
    );
};

export default App;

// Use component if calling a component directly else use render if passing a props