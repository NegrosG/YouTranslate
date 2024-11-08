import React from 'react';
import { BiRightArrow } from "react-icons/bi";
import './TranslateButton.css'


function TranslateButton({ onClick, disabled }) {
    return (
        <div className='translate-button'>
            <button onClick={onClick} disabled={disabled}
            ><BiRightArrow  className='button-icon'/>
                <span className='tool'>Translate</span>
            </button>
        </div>
    );
}

export default TranslateButton;