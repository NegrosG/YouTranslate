import React from 'react';
import { FaHome, FaInfoCircle } from "react-icons/fa";
import { IoBookmarks } from "react-icons/io5";
import { MdContactPhone, MdHistory } from "react-icons/md";
import './Sidebar.css'

const Sidebar =() => {
    return (
        <div className='sidebar'>
            <ul>
                <li>
                    <FaHome className='icon'/>
                    <span className='tool'>Translate</span>
                </li>
                <li>
                    <IoBookmarks className='icon'/>
                    <span className='tool'>Bookmarks</span>
                </li>
                <li>
                    <MdHistory className='icon'/>
                    <span className='tool'>History</span>
                </li>
                <li>
                    <FaInfoCircle className='icon'/>
                    <span className='tool'>About</span>
                </li>
                <li>
                    <MdContactPhone className='icon'/>
                    <span className='tool'>Contact</span>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;