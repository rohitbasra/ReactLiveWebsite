import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar1 = () => {
    return (
        <>
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">

                        <nav class="navbar navbar-expand-lg bg-body-tertiary">
                            <div class="container-fluid">
                                {/* <NavLink exact class='navbar-brand' to="/"> RohitParadise </NavLink> */}
                                <NavLink
                                 exact className={({ isActive }) => {
                                    return isActive ? 'navbar-title' : 'navbar-title';
                                }}
                                    to="/"> Rohit's Empire</NavLink>

                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>

                                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                                        <li class="nav-item">
                                            {/* <NavLink class="nav-link active" aria-current="page" to="/">Home</NavLink> */}
                                            <NavLink
                                             exact className={({ isActive }) => {
                                                return isActive ? 'menu_active' : '';
                                            }}

                                                to="/"> Home</NavLink>
                                        </li>
                                        <li class="nav-item">
                                            {/* <NavLink class="nav-link" to="/about1">About</NavLink> */}
                                            <NavLink
                                             exact className={({ isActive }) => {
                                                return isActive ? 'menu_active' : '';
                                            }}

                                                to="/about1"> About</NavLink>
                                        </li>
                                        <li class="nav-item">
                                            {/* <NavLink class="nav-link" to="/services1">Services</NavLink> */}

                                            <NavLink 
                                            exact className={({ isActive }) => {
                                                return isActive ? 'menu_active' : '';
                                            }}
                                                
                                                to="/services1"> Services</NavLink>
                                        </li>
                                        <li class="nav-item">
                                            {/* <NavLink class="nav-link" to="/contact1">Contact</NavLink> */}
                                            <NavLink 
                                            exact className={({ isActive }) => {
                                                return isActive ? 'menu_active' : '';
                                            }}
                                            
                                                to="/contact1"> Contact</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar1;