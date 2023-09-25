import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home1 from './Home1';
import About1 from './About1';
import Contact1 from './Contact1';
import Services1 from './Services1';
import { Routes, Route } from 'react-router-dom';
import Navbar1 from './Navbar1';
import "./Website.css";
import Footer1 from './Footer1';

const App = () =>{
    return(
        <>
        <Navbar1/>
        <Routes>
            <Route path='/' Component={Home1}/>
            <Route exact path='/about1' Component={About1}/>
            <Route exact path='/services1' Component={Services1}/>
            <Route exact path='/contact1' Component={Contact1}/>
            <Route path='/*' Navigate to="/"/>  
        </Routes>
        <Footer1/>
            
        </>
    );
};
export default App;