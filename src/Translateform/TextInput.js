import React from 'react';
import CopyText from '../CopyText/CopyText';
import './TextInput.css';
import { PiCopySimpleLight } from "react-icons/pi";
import { MdOutlineClear } from "react-icons/md";
import TextToSpeech from '../TTS & STT/TextToSpeech';


function TextInput({Input, setInput}) {
    const maxLength = 1000;


    return (
        <div className='text-form'>
            <textarea className='text-input'
                value={Input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Start typing"
                maxLength={maxLength}
            />
            {Input && (
                <button 
                    className='clear-button'
                    onClick={() => setInput('')}
                ><MdOutlineClear/>
                </button>
            )}
            <div className='feature-box'>
                <TextToSpeech className="text-speech" text={Input} />
                <button  onClick={() => CopyText(Input)}>
                    <PiCopySimpleLight size={26} className='copy'/>
                </button>
            <div className='character-counter'>
                {Input.length} / {maxLength}
            </div>
            </div>
        </div>
    );
}
export default TextInput;