import React from 'react';
import CopyText from '../CopyText/CopyText';
import './TextInput.css';
import { PiCopySimpleLight } from "react-icons/pi";
import TextToSpeech from '../TTS & STT/TextToSpeech';

function TextInput({Input, setInput}) {
    return (
        <div className='text-form'>
            <textarea className='text-input'
            value={Input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter text here"
            rows="10"
            cols="45"
            />
            <div className='feature-box'>
                <TextToSpeech className="text-speech" text={Input} />
                <button  onClick={() => CopyText(Input)}><PiCopySimpleLight size={26} className='copy'/></button>
            </div>
        </div>
    );
}
export default TextInput;