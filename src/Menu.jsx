import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
    return(
        <>
        <div className='menu_style'>
            <NavLink exact className={({ isActive }) => {
		return isActive ? 'active_class' : '';
		}}
		 to = "/">About Us</NavLink>

            <NavLink exact className={({ isActive }) => {
		return isActive ? 'active_class' : '';
		}}
		 to = "/services"> Services</NavLink>

            <NavLink exact className={({ isActive }) => {
		return isActive ? 'active_class' : '';
		}}
		 to = "/search"> Search</NavLink>

            <NavLink exact className={({ isActive }) => {
		return isActive ? 'active_class' : '';
		}}
		 to = "/user/rohit/basra"> User</NavLink>

            <NavLink exact className={({ isActive }) => {
		return isActive ? 'active_class' : '';
		}}
		 to = "/contact">Contact Us</NavLink>

            </div>
        </>
    );
}

export default Menu;