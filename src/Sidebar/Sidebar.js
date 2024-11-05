import React from 'react';
import { FaHome, FaInfoCircle } from "react-icons/fa";
import { IoBookmarks } from "react-icons/io5";
import { MdContactPhone, MdHistory } from "react-icons/md";
import { Link } from 'react-router-dom';
import logo from './YT-logo.png';
import './Sidebar.css'

const Sidebar =() => {
    return (
        <div className='sidebar'>
            <img src={logo} alt='logo' className='sidebar-logo'/>
            <ul>
                <li>
                    <Link to="/">
                        <FaHome className='icon'/>
                        <span className='tool'>Translate</span>
                    </Link>
                </li>
                <li>
                    <Link to="/bookmarks">
                        <IoBookmarks className='icon'/>
                        <span className='tool'>Bookmarks</span>
                    </Link>
                </li>
                <li>
                    <Link to="/history">
                        <MdHistory className='icon'/>
                        <span className='tool'>History</span>
                    </Link>
                </li>
                <li>
                    <Link to="/about">
                        <FaInfoCircle className='icon'/>
                        <span className='tool'>About</span>
                    </Link>
                </li>
                <li>
                    <Link to="contact">
                        <MdContactPhone className='icon'/>
                        <span className='tool'>Contact</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;