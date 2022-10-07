import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../../images/Logo.svg';

const Header = () => {
    return (
        <div className="navbar bg-gray-900 rounded-lg justify-between container mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <li><NavLink className="font-semibold" to='/'>Home</NavLink></li>
                <li><NavLink className="font-semibold" to='/shop'>Shop</NavLink></li>
                <li><NavLink className="font-semibold" to='/orders'>Orders</NavLink></li>
                <li><NavLink className="font-semibold" to='/about'>About</NavLink></li>
                </ul>
                </div>
                <Link to="/">
                    <img src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                <li><NavLink className="font-semibold" to='/'>Home</NavLink></li>
                <li><NavLink className="font-semibold" to='/shop'>Shop</NavLink></li>
                <li><NavLink className="font-semibold" to='/orders'>Orders</NavLink></li>
                <li><NavLink className="font-semibold" to='/about'>About</NavLink></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;