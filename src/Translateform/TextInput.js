import React from 'react';
import CopyText from '../CopyText/CopyText';
import './TextInput.css';
import { PiCopySimpleLight } from "react-icons/pi";
import TextToSpeech from '../TTS & STT/TextToSpeech';

function TextInput({Input, setInput}) {
    return (
        <div>
            <textarea className='text-input' 
            value={Input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter text here"
            rows="15"
            cols="55"
            />
            <TextToSpeech text={Input}/>
            <button onClick={() => CopyText(Input)}><PiCopySimpleLight size={23} /></button>
        </div>
    );
}
export default TextInput;